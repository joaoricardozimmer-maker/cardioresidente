// Aba "Scores" — calculadoras cardiológicas com interpretação e conduta.
// Cada score: { id, grupo, nome, desc, campos[], calc(v) -> {valor, nivel, conduta(HTML)} }
// nivel: 'ok' (verde) | 'warn' (amarelo) | 'bad' (vermelho) | 'info' (azul)
(function () {
  const menu = document.getElementById('scores-menu');
  const panel = document.getElementById('scores-panel');
  if (!menu || !panel) return;

  // ---------- helpers ----------
  const n = v => { const x = parseFloat(String(v).replace(',', '.')); return isFinite(x) ? x : null; };
  function somaChk(v, campos){ let s=0; campos.forEach(c=>{ if(c.tipo==='chk' && v[c.id]) s += (c.p||1); }); return s; }

  // ---------- registro de scores ----------
  const SCORES = [
    {
      id:'chadsvasc', grupo:'Fibrilação atrial', nome:'CHA₂DS₂-VA',
      desc:'Risco tromboembólico na FA e indicação de anticoagulação (ESC 2024 — sem o componente de sexo do antigo CHA₂DS₂-VASc).',
      campos:[
        {id:'idade', tipo:'num', label:'Idade', un:'anos'},
        {id:'icc', tipo:'chk', label:'IC / disfunção de VE', p:1},
        {id:'has', tipo:'chk', label:'Hipertensão', p:1},
        {id:'dm', tipo:'chk', label:'Diabetes', p:1},
        {id:'avc', tipo:'chk', label:'AVC / AIT / tromboembolismo prévio', p:2},
        {id:'vasc', tipo:'chk', label:'Doença vascular (IAM, DAP, placa aórtica)', p:1}
      ],
      calc(v){
        const id=n(v.idade)||0; let pts=0;
        pts += somaChk(v, this.campos);
        if(id>=75) pts+=2; else if(id>=65) pts+=1;
        let nivel, cond;
        if(pts>=2){ nivel='bad'; cond='<b>Anticoagulação oral recomendada</b> (preferir DOAC à varfarina, salvo prótese mecânica ou estenose mitral reumática moderada/grave). Avalie o risco de sangramento (HAS-BLED).'; }
        else if(pts===1){ nivel='warn'; cond='<b>Considerar anticoagulação</b> (1 fator de risco), individualizando risco/benefício.'; }
        else { nivel='ok'; cond='Sem indicação de anticoagulação pelo escore (0 fatores de risco).'; }
        return { valor: pts+' ponto'+(pts===1?'':'s'), nivel, conduta: cond };
      }
    },
    {
      id:'hasbled', grupo:'Fibrilação atrial', nome:'HAS-BLED',
      desc:'Risco de sangramento maior em pacientes anticoagulados.',
      campos:[
        {id:'has', tipo:'chk', label:'Hipertensão (PAS > 160 mmHg)', p:1},
        {id:'renal', tipo:'chk', label:'Função renal alterada (diálise, transplante ou Cr > 2,26 mg/dL)', p:1},
        {id:'hep', tipo:'chk', label:'Função hepática alterada (cirrose, bilirrubina/TGO elevadas)', p:1},
        {id:'avc', tipo:'chk', label:'AVC prévio', p:1},
        {id:'sang', tipo:'chk', label:'Sangramento prévio ou predisposição', p:1},
        {id:'inr', tipo:'chk', label:'INR lábil (se em varfarina)', p:1},
        {id:'idoso', tipo:'chk', label:'Idade > 65 anos', p:1},
        {id:'drogas', tipo:'chk', label:'Fármacos (AINE/antiplaquetário)', p:1},
        {id:'alcool', tipo:'chk', label:'Álcool (≥ 8 doses/semana)', p:1}
      ],
      calc(v){
        const pts=somaChk(v,this.campos);
        let nivel, cond;
        if(pts>=3){ nivel='bad'; cond='<b>Alto risco de sangramento.</b> Não contraindica a anticoagulação, mas exige cautela, corrigir fatores modificáveis (PA, INR lábil, AINE, álcool) e reavaliação frequente.'; }
        else { nivel='ok'; cond='Risco de sangramento baixo/moderado. Mantenha vigilância e corrija fatores modificáveis.'; }
        return { valor: pts+' ponto'+(pts===1?'':'s'), nivel, conduta: cond };
      }
    },
    {
      id:'heart', grupo:'Síndrome coronariana / dor torácica', nome:'HEART score',
      desc:'Risco de evento cardíaco maior (MACE) em 6 semanas na dor torácica na emergência.',
      campos:[
        {id:'hist', tipo:'sel', label:'História', opts:[{v:'0',t:'Pouco suspeita (0)'},{v:'1',t:'Moderadamente suspeita (1)'},{v:'2',t:'Muito suspeita (2)'}]},
        {id:'ecg', tipo:'sel', label:'ECG', opts:[{v:'0',t:'Normal (0)'},{v:'1',t:'Alteração inespecífica da repolarização (1)'},{v:'2',t:'Infradesnível de ST significativo (2)'}]},
        {id:'idade', tipo:'sel', label:'Idade', opts:[{v:'0',t:'< 45 anos (0)'},{v:'1',t:'45–64 anos (1)'},{v:'2',t:'≥ 65 anos (2)'}]},
        {id:'fr', tipo:'sel', label:'Fatores de risco (HAS, DM, dislipidemia, tabagismo, história familiar, obesidade)', opts:[{v:'0',t:'Nenhum (0)'},{v:'1',t:'1–2 fatores (1)'},{v:'2',t:'≥3 fatores ou DAC conhecida — estenose ≥50%, IAM/ICP/CRM prévios, AVC/DAP (2)'}]},
        {id:'tropo', tipo:'sel', label:'Troponina', opts:[{v:'0',t:'≤ limite normal (0)'},{v:'1',t:'1–3× o limite (1)'},{v:'2',t:'> 3× o limite (2)'}]}
      ],
      calc(v){
        const pts=(n(v.hist)||0)+(n(v.ecg)||0)+(n(v.idade)||0)+(n(v.fr)||0)+(n(v.tropo)||0);
        let nivel,cond;
        if(pts<=3){ nivel='ok'; cond='<b>Baixo risco</b> (MACE ~0,9–1,7%). Geralmente permite alta precoce com seguimento, conforme protocolo institucional.'; }
        else if(pts<=6){ nivel='warn'; cond='<b>Risco moderado</b> (MACE ~12–17%). Internar/observar, seriar troponina e considerar investigação isquêmica.'; }
        else { nivel='bad'; cond='<b>Alto risco</b> (MACE ~50–65%). Conduta agressiva: internação e estratégia invasiva precoce.'; }
        return { valor: pts+'/10', nivel, conduta: cond };
      }
    },
    {
      id:'edacs', grupo:'Síndrome coronariana / dor torácica', nome:'EDACS (dor torácica)',
      desc:'Emergency Department Assessment of Chest pain Score. Com ECG sem isquemia + troponina 0/2h negativa (EDACS-ADP), EDACS < 16 identifica candidatos à alta precoce.',
      campos:[
        {id:'idade', tipo:'sel', label:'Idade', opts:[
          {v:'2',t:'18–45 (2)'},{v:'4',t:'46–50 (4)'},{v:'6',t:'51–55 (6)'},{v:'8',t:'56–60 (8)'},{v:'10',t:'61–65 (10)'},
          {v:'12',t:'66–70 (12)'},{v:'14',t:'71–75 (14)'},{v:'16',t:'76–80 (16)'},{v:'18',t:'81–85 (18)'},{v:'20',t:'≥ 86 (20)'}
        ]},
        {id:'sexo', tipo:'sel', label:'Sexo', opts:[{v:'6',t:'Masculino (6)'},{v:'0',t:'Feminino (0)'}]},
        {id:'cad', tipo:'chk', label:'DAC conhecida OU ≥ 3 fatores de risco (idade 18–50)', p:4},
        {id:'diaf', tipo:'chk', label:'Diaforese (sudorese)', p:3},
        {id:'irrad', tipo:'chk', label:'Dor irradiada para braço/ombro/pescoço/mandíbula', p:5},
        {id:'inspir', tipo:'chk', label:'Dor ocorre/piora com a inspiração', p:-4},
        {id:'palp', tipo:'chk', label:'Dor reproduzível à palpação', p:-6}
      ],
      calc(v){
        const pts=(n(v.idade)||0)+(n(v.sexo)||0)+somaChk(v,this.campos);
        let nivel,cond;
        if(pts<16){ nivel='ok'; cond='<b>EDACS &lt; 16.</b> Se o ECG não mostrar isquemia e a troponina 0/2h for negativa (EDACS-ADP), é candidato a <b>alta precoce</b> (risco de MACE muito baixo).'; }
        else { nivel='warn'; cond='<b>EDACS ≥ 16 — não é baixo risco.</b> Observar, seriar troponina e considerar investigação isquêmica.'; }
        return { valor: pts+' pontos', nivel, conduta: cond };
      }
    },
    {
      id:'csrs', grupo:'Síncope', nome:'Canadian Syncope Risk Score (CSRS)',
      desc:'Risco de evento adverso grave em 30 dias após síncope avaliada na emergência.',
      campos:[
        {id:'vaso', tipo:'chk', label:'Predisposição a síncope vasovagal (ambiente quente/lotado, medo/dor/emoção, ortostase prolongada)', p:-1},
        {id:'cardio', tipo:'chk', label:'História de doença cardíaca', p:1},
        {id:'pa', tipo:'chk', label:'Qualquer PAS < 90 ou > 180 mmHg na emergência', p:2},
        {id:'tropo', tipo:'chk', label:'Troponina > percentil 99', p:2},
        {id:'axis', tipo:'chk', label:'Eixo do QRS anormal (< −30° ou > 100°)', p:1},
        {id:'qrs', tipo:'chk', label:'QRS > 130 ms', p:1},
        {id:'qtc', tipo:'chk', label:'QTc > 480 ms', p:2},
        {id:'dxvaso', tipo:'chk', label:'Diagnóstico de síncope vasovagal na emergência', p:-2},
        {id:'dxcard', tipo:'chk', label:'Diagnóstico de síncope cardíaca na emergência', p:2}
      ],
      calc(v){
        const pts=somaChk(v,this.campos);
        let nivel,cat,risco;
        if(pts<=-2){ nivel='ok'; cat='muito baixo'; risco='~0,4–0,7%'; }
        else if(pts<=0){ nivel='ok'; cat='baixo'; risco='~1,2%'; }
        else if(pts<=3){ nivel='warn'; cat='médio'; risco='~2–8%'; }
        else if(pts<=5){ nivel='bad'; cat='alto'; risco='~14–28%'; }
        else { nivel='bad'; cat='muito alto'; risco='> 28%'; }
        const cond='Risco <b>'+cat+'</b> de evento grave em 30 dias ('+risco+'). '+(pts<=0?'Em geral permite alta com orientação/seguimento.':(pts<=3?'Observação/monitorização e avaliação dirigida.':'Monitorização e investigação cardíaca; considerar internação.'));
        return { valor: (pts>0?'+':'')+pts+' ('+cat+')', nivel, conduta: cond };
      }
    },
    {
      id:'endocardite', grupo:'Infecção / endocardite', nome:'Critérios de Duke (endocardite) — 2023 ISCVID',
      desc:'Classifica endocardite infecciosa em Definitiva / Possível / Improvável. EI = ≥ 1 critério MAIOR e/ou MENORES conforme a regra.',
      campos:[
        {id:'micro_maj', tipo:'chk', maj:true, label:'MAIOR — microbiológico: hemocultura(s) positiva(s) para microrganismo típico (2 amostras) ou persistentemente positiva; ou PCR/sorologia específica'},
        {id:'img_maj', tipo:'chk', maj:true, label:'MAIOR — imagem: vegetação, abscesso, pseudoaneurisma, deiscência protética nova, perfuração/fístula (eco/TC), ou captação anormal em PET/TC (prótese)'},
        {id:'predispo', tipo:'chk', label:'menor — condição cardíaca predisponente ou uso de droga injetável'},
        {id:'febre', tipo:'chk', label:'menor — febre ≥ 38 °C'},
        {id:'vascular', tipo:'chk', label:'menor — fenômenos vasculares (êmbolo arterial, infarto pulmonar séptico, aneurisma micótico, hemorragia intracraniana/conjuntival, lesões de Janeway)'},
        {id:'imuno', tipo:'chk', label:'menor — fenômenos imunológicos (glomerulonefrite, nódulos de Osler, manchas de Roth, fator reumatoide)'},
        {id:'micro_min', tipo:'chk', label:'menor — evidência microbiológica que não preenche o critério maior'}
      ],
      calc(v){
        let maj=0,min=0;
        this.campos.forEach(c=>{ if(v[c.id]){ if(c.maj) maj++; else min++; } });
        let res,nivel;
        if(maj>=2 || (maj===1&&min>=3) || min>=5){ res='EI DEFINITIVA'; nivel='bad'; }
        else if((maj===1&&min>=1) || min>=3){ res='EI POSSÍVEL'; nivel='warn'; }
        else { res='EI improvável (critérios não preenchidos)'; nivel='ok'; }
        const cond='<b>'+res+'</b> — '+maj+' maior(es), '+min+' menor(es). Regra: Definitiva = 2 maiores, ou 1 maior + 3 menores, ou 5 menores; Possível = 1 maior + 1 menor, ou 3 menores.'+(res!=='EI improvável (critérios não preenchidos)'?' Ecocardiograma (TT/TE), hemoculturas seriadas e equipe multidisciplinar (endocarditis team).':'');
        return { valor: res, nivel, conduta: cond };
      }
    },
    {
      id:'rcri', grupo:'Avaliação perioperatória', nome:'Índice de Lee (RCRI)',
      desc:'Risco de evento cardíaco maior em cirurgia não cardíaca.',
      campos:[
        {id:'cir', tipo:'chk', label:'Cirurgia de alto risco (intraperitoneal, intratorácica ou vascular suprainguinal)', p:1},
        {id:'dac', tipo:'chk', label:'Doença arterial coronariana', p:1},
        {id:'icc', tipo:'chk', label:'Insuficiência cardíaca', p:1},
        {id:'avc', tipo:'chk', label:'Doença cerebrovascular (AVC/AIT)', p:1},
        {id:'dm', tipo:'chk', label:'Diabetes em insulinoterapia', p:1},
        {id:'cr', tipo:'chk', label:'Creatinina > 2,0 mg/dL', p:1}
      ],
      calc(v){
        const pts=somaChk(v,this.campos);
        const tab={0:'0,4%',1:'0,9%',2:'6,6%'};
        const risco = pts>=3 ? '≥ 11%' : tab[pts];
        let nivel = pts>=2?'bad':(pts===1?'warn':'ok');
        const cond = pts>=2
          ? '<b>Risco elevado.</b> Otimizar condições clínicas; considerar avaliação funcional/biomarcadores e estratégia perioperatória conforme diretriz.'
          : 'Risco baixo. Em geral segue para cirurgia sem investigação cardíaca adicional, conforme capacidade funcional.';
        return { valor: pts+' ponto'+(pts===1?'':'s')+' · risco ~'+risco, nivel, conduta: cond };
      }
    },
    {
      id:'dapt', grupo:'Antiagregação', nome:'DAPT score',
      desc:'Avalia benefício de prolongar a dupla antiagregação além de 12 meses pós-stent.',
      campos:[
        {id:'idade', tipo:'sel', label:'Idade', opts:[{v:'0',t:'< 65 anos (0)'},{v:'-1',t:'65–74 anos (−1)'},{v:'-2',t:'≥ 75 anos (−2)'}]},
        {id:'tabag', tipo:'chk', label:'Tabagismo atual', p:1},
        {id:'dm', tipo:'chk', label:'Diabetes', p:1},
        {id:'iam', tipo:'chk', label:'IAM na apresentação', p:1},
        {id:'previo', tipo:'chk', label:'ICP ou IAM prévio', p:1},
        {id:'stent', tipo:'chk', label:'Stent de diâmetro < 3 mm', p:1},
        {id:'icc', tipo:'chk', label:'IC ou FEVE < 30%', p:2},
        {id:'paclitaxel', tipo:'chk', label:'Stent eluidor de paclitaxel', p:1},
        {id:'veia', tipo:'chk', label:'ICP de enxerto de veia safena', p:2}
      ],
      calc(v){
        let pts=(n(v.idade)||0)+somaChk(v,this.campos);
        let nivel, cond;
        if(pts>=2){ nivel='ok'; cond='<b>DAPT score ≥ 2:</b> favorece <b>prolongar a DAPT</b> além de 12 meses (benefício isquêmico tende a superar o risco hemorrágico). Confirmar baixo risco de sangramento.'; }
        else { nivel='warn'; cond='<b>DAPT score < 2:</b> não favorece prolongar a DAPT (risco de sangramento tende a superar o benefício).'; }
        return { valor: (pts>0?'+':'')+pts, nivel, conduta: cond };
      }
    },
    {
      id:'archbr', grupo:'Antiagregação', nome:'ARC-HBR (alto risco de sangramento)',
      desc:'Define alto risco hemorrágico (HBR) para guiar a duração/escolha da DAPT. HBR = ≥ 1 critério MAIOR ou ≥ 2 MENORES (consenso ARC-HBR 2019).',
      campos:[
        {id:'aco', tipo:'chk', maj:true, label:'MAIOR — uso prolongado de anticoagulante oral'},
        {id:'drcg', tipo:'chk', maj:true, label:'MAIOR — DRC grave/terminal (TFG < 30 mL/min)'},
        {id:'hb11', tipo:'chk', maj:true, label:'MAIOR — hemoglobina < 11 g/dL'},
        {id:'sangr6', tipo:'chk', maj:true, label:'MAIOR — sangramento espontâneo com internação/transfusão nos últimos 6 meses (ou recorrente)'},
        {id:'plaq', tipo:'chk', maj:true, label:'MAIOR — plaquetopenia moderada/grave (< 100.000/µL)'},
        {id:'diatese', tipo:'chk', maj:true, label:'MAIOR — diátese hemorrágica crônica'},
        {id:'cirrose', tipo:'chk', maj:true, label:'MAIOR — cirrose com hipertensão portal'},
        {id:'neo', tipo:'chk', maj:true, label:'MAIOR — neoplasia ativa (últimos 12 meses)'},
        {id:'hic', tipo:'chk', maj:true, label:'MAIOR — HIC espontânea prévia; HIC traumática < 12m; MAV cerebral; ou AVC isquêmico moderado/grave < 6m'},
        {id:'cirurgia', tipo:'chk', maj:true, label:'MAIOR — cirurgia maior não adiável sob DAPT; ou cirurgia maior/trauma < 30 dias antes da ICP'},
        {id:'idade', tipo:'chk', label:'menor — idade ≥ 75 anos'},
        {id:'drcm', tipo:'chk', label:'menor — DRC moderada (TFG 30–59 mL/min)'},
        {id:'hbm', tipo:'chk', label:'menor — hemoglobina 11–12,9 (♂) / 11–11,9 (♀) g/dL'},
        {id:'sangr12', tipo:'chk', label:'menor — sangramento espontâneo com internação/transfusão nos últimos 12 meses (sem critério maior)'},
        {id:'aine', tipo:'chk', label:'menor — uso prolongado de AINE ou corticoide oral'},
        {id:'avc', tipo:'chk', label:'menor — qualquer AVC isquêmico prévio (sem critério maior)'}
      ],
      calc(v){
        let maj=0, men=0;
        this.campos.forEach(c=>{ if(v[c.id]){ if(c.maj) maj++; else men++; } });
        const hbr = maj>=1 || men>=2;
        const nivel = hbr ? 'bad' : 'ok';
        const cond = hbr
          ? '<b>Alto risco de sangramento (HBR).</b> Favorece <b>DAPT mais curta</b> (ex.: 1–3 meses e depois monoterapia — de preferência com inibidor de P2Y12) e/ou agente menos potente; acesso radial, IBP e correção de fatores modificáveis (anemia, AINE, PA). Pesar contra o risco isquêmico (DAPT score / PRECISE-DAPT).'
          : 'Não preenche critérios de HBR. DAPT de duração padrão conforme o risco isquêmico.';
        return { valor: (hbr?'HBR positivo':'HBR negativo')+' · '+maj+' maior / '+men+' menor', nivel, conduta: cond };
      }
    },
    {
      id:'h2fpef', grupo:'Insuficiência cardíaca', nome:'H₂FPEF',
      desc:'Probabilidade de IC com fração de ejeção preservada (ICFEp).',
      campos:[
        {id:'obeso', tipo:'chk', label:'Heavy — IMC > 30 kg/m² (2 pts)', p:2},
        {id:'hta', tipo:'chk', label:'Hypertensive — ≥ 2 anti-hipertensivos (1 pt)', p:1},
        {id:'fa', tipo:'chk', label:'AF — fibrilação atrial (paroxística ou persistente) (3 pts)', p:3},
        {id:'php', tipo:'chk', label:'Pulmonary HTN — PSAP > 35 mmHg (1 pt)', p:1},
        {id:'elder', tipo:'chk', label:'Elder — idade > 60 anos (1 pt)', p:1},
        {id:'filling', tipo:'chk', label:'Filling — E/eʹ médio > 9 (1 pt)', p:1}
      ],
      calc(v){
        const pts=somaChk(v,this.campos);
        let nivel,cond;
        if(pts<=1){ nivel='ok'; cond='<b>Baixa probabilidade</b> de ICFEp — considerar outras causas de dispneia.'; }
        else if(pts<=5){ nivel='warn'; cond='<b>Probabilidade intermediária</b> — considerar testes adicionais (eco diastólico, BNP/NT-proBNP, teste de esforço/cateterismo direito).'; }
        else { nivel='bad'; cond='<b>Alta probabilidade</b> de ICFEp — diagnóstico provável; iniciar manejo (iSGLT2, controle de PA/volume/comorbidades).'; }
        return { valor: pts+'/9', nivel, conduta: cond };
      }
    },
    {
      id:'ckdepi', grupo:'Função renal', nome:'CKD-EPI 2021 (TFG)',
      desc:'Taxa de filtração glomerular estimada (equação de creatinina, sem raça).',
      campos:[
        {id:'cr', tipo:'num', label:'Creatinina sérica', un:'mg/dL'},
        {id:'idade', tipo:'num', label:'Idade', un:'anos'},
        {id:'sexo', tipo:'sel', label:'Sexo', opts:[{v:'M',t:'Masculino'},{v:'F',t:'Feminino'}]}
      ],
      calc(v){
        const cr=n(v.cr), id=n(v.idade);
        if(!cr||!id) return { valor:'—', nivel:'info', conduta:'Preencha creatinina e idade.' };
        const fem = v.sexo==='F';
        const k = fem?0.7:0.9, a = fem?-0.241:-0.302;
        const minr = Math.min(cr/k,1), maxr = Math.max(cr/k,1);
        let egfr = 142*Math.pow(minr,a)*Math.pow(maxr,-1.200)*Math.pow(0.9938,id);
        if(fem) egfr*=1.012;
        egfr = Math.round(egfr);
        let estagio, nivel;
        if(egfr>=90){estagio='G1 (normal)'; nivel='ok';}
        else if(egfr>=60){estagio='G2 (levemente reduzida)'; nivel='ok';}
        else if(egfr>=45){estagio='G3a'; nivel='warn';}
        else if(egfr>=30){estagio='G3b'; nivel='warn';}
        else if(egfr>=15){estagio='G4'; nivel='bad';}
        else {estagio='G5 (falência)'; nivel='bad';}
        const cond = 'Estágio <b>'+estagio+'</b>. Ajustar doses de fármacos pela TFG; em G3b–G5 evitar nefrotóxicos/contraste e considerar nefrologia. (Classifique também pela albuminúria.)';
        return { valor: egfr+' mL/min/1,73m²', nivel, conduta: cond };
      }
    },
    {
      id:'qtc', grupo:'Eletrocardiograma', nome:'Correção do intervalo QT (QTc)',
      desc:'Calcula o QTc por Bazett, Fridericia, Framingham e Hodges.',
      campos:[
        {id:'qt', tipo:'num', label:'Intervalo QT medido', un:'ms'},
        {id:'fc', tipo:'num', label:'Frequência cardíaca', un:'bpm'},
        {id:'sexo', tipo:'sel', label:'Sexo', opts:[{v:'M',t:'Masculino'},{v:'F',t:'Feminino'}]}
      ],
      calc(v){
        const qt=n(v.qt), fc=n(v.fc);
        if(!qt||!fc) return { valor:'—', nivel:'info', conduta:'Preencha o QT (ms) e a FC (bpm).' };
        const rr=60/fc; // segundos
        const bazett=Math.round(qt/Math.sqrt(rr));
        const frid=Math.round(qt/Math.cbrt(rr));
        const fram=Math.round(qt+154*(1-rr));
        const hodges=Math.round(qt+1.75*(fc-60));
        const limProl = v.sexo==='F'?460:450;
        let nivel='ok';
        if(bazett>500) nivel='bad'; else if(bazett>limProl) nivel='warn';
        const cond = 'QTc (Bazett) = <b>'+bazett+' ms</b>. '
          + (bazett>500 ? 'QTc > 500 ms: <b>risco elevado de Torsades</b> — revisar fármacos que prolongam QT, corrigir K⁺/Mg²⁺/Ca²⁺.'
             : (bazett>limProl ? 'QTc prolongado para o sexo (>'+limProl+' ms) — investigar causas (fármacos, distúrbios eletrolíticos).'
                : 'QTc dentro do normal.'))
          + '<br><span class="sc-extra">Fridericia '+frid+' ms · Framingham '+fram+' ms · Hodges '+hodges+' ms. Em FC muito alta/baixa, prefira Fridericia/Framingham ao Bazett.</span>';
        return { valor: bazett+' ms (Bazett)', nivel, conduta: cond };
      }
    },
    {
      id:'imc', grupo:'Antropometria', nome:'IMC',
      desc:'Índice de massa corporal e classificação.',
      campos:[
        {id:'peso', tipo:'num', label:'Peso', un:'kg'},
        {id:'altura', tipo:'num', label:'Altura', un:'cm'}
      ],
      calc(v){
        const p=n(v.peso), a=n(v.altura);
        if(!p||!a) return { valor:'—', nivel:'info', conduta:'Preencha peso e altura.' };
        const imc = p/Math.pow(a/100,2);
        const r = Math.round(imc*10)/10;
        let cat, nivel;
        if(imc<18.5){cat='Baixo peso'; nivel='warn';}
        else if(imc<25){cat='Eutrófico'; nivel='ok';}
        else if(imc<30){cat='Sobrepeso'; nivel='warn';}
        else if(imc<35){cat='Obesidade grau I'; nivel='bad';}
        else if(imc<40){cat='Obesidade grau II'; nivel='bad';}
        else {cat='Obesidade grau III'; nivel='bad';}
        return { valor: r+' kg/m² — '+cat, nivel, conduta:'Classificação OMS. Avalie também circunferência abdominal e risco cardiometabólico global.' };
      }
    },
    {
      id:'timi_nstemi', grupo:'Síndrome coronariana / dor torácica', nome:'TIMI (NSTEMI / angina instável)',
      desc:'Risco de óbito, IAM ou revascularização urgente em 14 dias na SCA sem supra.',
      campos:[
        {id:'idade', tipo:'chk', label:'Idade ≥ 65 anos', p:1},
        {id:'fr', tipo:'chk', label:'≥ 3 fatores de risco para DAC (HAS, DM, dislipidemia, tabagismo, história familiar)', p:1},
        {id:'dac', tipo:'chk', label:'DAC conhecida (estenose ≥ 50%)', p:1},
        {id:'aas', tipo:'chk', label:'Uso de AAS nos últimos 7 dias', p:1},
        {id:'angina', tipo:'chk', label:'≥ 2 episódios de angina em 24h', p:1},
        {id:'st', tipo:'chk', label:'Desvio de ST ≥ 0,5 mm', p:1},
        {id:'marc', tipo:'chk', label:'Marcadores de necrose elevados', p:1}
      ],
      calc(v){
        const pts=somaChk(v,this.campos);
        const risco = pts<=1?'4,7%':pts===2?'8,3%':pts===3?'13,2%':pts===4?'19,9%':pts===5?'26,2%':'40,9%';
        const nivel = pts>=5?'bad':(pts>=3?'warn':'ok');
        const cond = pts>=3
          ? '<b>Risco intermediário/alto</b> (evento ~'+risco+' em 14d). Favorece estratégia invasiva e terapia antitrombótica plena.'
          : '<b>Risco baixo</b> (~'+risco+'). Estratégia conservadora pode ser adequada conforme contexto.';
        return { valor: pts+'/7 · risco ~'+risco, nivel, conduta: cond };
      }
    },
    {
      id:'timi_stemi', grupo:'Síndrome coronariana / dor torácica', nome:'TIMI (STEMI)',
      desc:'Risco de mortalidade em 30 dias no IAM com supra de ST.',
      campos:[
        {id:'idade', tipo:'sel', label:'Idade', opts:[{v:'0',t:'< 65 anos (0)'},{v:'2',t:'65–74 anos (2)'},{v:'3',t:'≥ 75 anos (3)'}]},
        {id:'comorb', tipo:'chk', label:'DM, HAS ou angina', p:1},
        {id:'pas', tipo:'chk', label:'PAS < 100 mmHg', p:3},
        {id:'fc', tipo:'chk', label:'FC > 100 bpm', p:2},
        {id:'killip', tipo:'chk', label:'Killip II–IV', p:2},
        {id:'peso', tipo:'chk', label:'Peso < 67 kg', p:1},
        {id:'ant', tipo:'chk', label:'Supra anterior ou BRE novo', p:1},
        {id:'tempo', tipo:'chk', label:'Tempo até tratamento > 4h', p:1}
      ],
      calc(v){
        const pts=(n(v.idade)||0)+somaChk(v,this.campos);
        const tab={0:'0,8%',1:'1,6%',2:'2,2%',3:'4,4%',4:'7,3%',5:'12,4%',6:'16,1%',7:'23,4%',8:'26,8%'};
        const risco = pts>8?'~35,9%':tab[pts];
        const nivel = pts>=5?'bad':(pts>=3?'warn':'ok');
        return { valor: pts+' pts · mortalidade 30d '+risco, nivel, conduta:'Reperfusão imediata. Escore alto identifica pacientes que mais se beneficiam de cuidado intensivo e monitorização.' };
      }
    },
    {
      id:'wells_tep', grupo:'Tromboembolismo', nome:'Wells (TEP)',
      desc:'Probabilidade clínica de tromboembolismo pulmonar.',
      campos:[
        {id:'tvp', tipo:'chk', label:'Sinais clínicos de TVP', p:3},
        {id:'dx', tipo:'chk', label:'TEP é o diagnóstico mais provável', p:3},
        {id:'fc', tipo:'chk', label:'FC > 100 bpm', p:1.5},
        {id:'imob', tipo:'chk', label:'Imobilização ou cirurgia recente (4 sem)', p:1.5},
        {id:'previo', tipo:'chk', label:'TVP/TEP prévio', p:1.5},
        {id:'hemo', tipo:'chk', label:'Hemoptise', p:1},
        {id:'ca', tipo:'chk', label:'Câncer ativo', p:1}
      ],
      calc(v){
        const pts=somaChk(v,this.campos);
        let nivel,cond;
        if(pts<=4){ nivel='ok'; cond='<b>TEP improvável</b> (≤4). Dosar D-dímero; se negativo, exclui TEP (com idade ajustada quando aplicável).'; }
        else { nivel='warn'; cond='<b>TEP provável</b> (>4). Prosseguir direto para angio-TC de tórax (ou cintilografia V/Q).'; }
        return { valor: (Math.round(pts*10)/10)+' pontos', nivel, conduta: cond };
      }
    },
    {
      id:'wells_tvp', grupo:'Tromboembolismo', nome:'Wells (TVP)',
      desc:'Probabilidade clínica de trombose venosa profunda.',
      campos:[
        {id:'ca', tipo:'chk', label:'Câncer ativo', p:1},
        {id:'paral', tipo:'chk', label:'Paralisia/paresia ou imobilização de MMII', p:1},
        {id:'acam', tipo:'chk', label:'Acamado > 3 dias ou cirurgia (12 sem)', p:1},
        {id:'dor', tipo:'chk', label:'Dor à palpação no trajeto venoso profundo', p:1},
        {id:'edema', tipo:'chk', label:'Edema de todo o membro', p:1},
        {id:'pant', tipo:'chk', label:'Panturrilha > 3 cm vs. contralateral', p:1},
        {id:'cacifo', tipo:'chk', label:'Edema com cacifo no membro sintomático', p:1},
        {id:'colat', tipo:'chk', label:'Veias colaterais superficiais (não varicosas)', p:1},
        {id:'previo', tipo:'chk', label:'TVP prévia documentada', p:1},
        {id:'altdx', tipo:'chk', label:'Diagnóstico alternativo tão ou mais provável', p:-2}
      ],
      calc(v){
        const pts=somaChk(v,this.campos);
        let nivel,cond;
        if(pts<1){ nivel='ok'; cond='<b>TVP improvável</b> (<1). Dosar D-dímero; se negativo, exclui TVP.'; }
        else { nivel='warn'; cond='<b>TVP provável</b> (≥1). Solicitar ultrassonografia com Doppler venoso.'; }
        return { valor: pts+' pontos', nivel, conduta: cond };
      }
    },
    {
      id:'spesi', grupo:'Tromboembolismo', nome:'sPESI (PESI simplificado)',
      desc:'Estratificação de risco/prognóstico no TEP confirmado.',
      campos:[
        {id:'idade', tipo:'chk', label:'Idade > 80 anos', p:1},
        {id:'ca', tipo:'chk', label:'Câncer', p:1},
        {id:'cardiopulm', tipo:'chk', label:'Doença cardiopulmonar crônica', p:1},
        {id:'fc', tipo:'chk', label:'FC ≥ 110 bpm', p:1},
        {id:'pas', tipo:'chk', label:'PAS < 100 mmHg', p:1},
        {id:'sat', tipo:'chk', label:'SatO₂ < 90%', p:1}
      ],
      calc(v){
        const pts=somaChk(v,this.campos);
        let nivel,cond;
        if(pts===0){ nivel='ok'; cond='<b>Baixo risco</b> (mortalidade 30d ~1%). Considerar tratamento ambulatorial/alta precoce se sem disfunção de VD e contexto favorável.'; }
        else { nivel='warn'; cond='<b>Não baixo risco</b> (≥1). Internar; avaliar VD (eco/TC) e biomarcadores para definir risco intermediário-alto.'; }
        return { valor: pts+' ponto'+(pts===1?'':'s'), nivel, conduta: cond };
      }
    },
    {
      id:'killip', grupo:'Síndrome coronariana / dor torácica', nome:'Classificação de Killip',
      desc:'Gravidade da IC no IAM e mortalidade associada.',
      campos:[
        {id:'classe', tipo:'sel', label:'Classe', opts:[
          {v:'1',t:'I — sem sinais de IC'},
          {v:'2',t:'II — estertores, B3 ou turgência jugular'},
          {v:'3',t:'III — edema agudo de pulmão'},
          {v:'4',t:'IV — choque cardiogênico'}
        ]}
      ],
      calc(v){
        const c=n(v.classe)||1;
        const tab={1:{m:'~6%',nv:'ok'},2:{m:'~17%',nv:'warn'},3:{m:'~38%',nv:'bad'},4:{m:'~67–80%',nv:'bad'}};
        const t=tab[c];
        const cond = c>=3 ? '<b>Killip III/IV.</b> Suporte intensivo, reperfusão imediata; no choque (IV) considerar suporte circulatório e revascularização precoce.'
          : (c===2 ? 'Killip II: diuréticos/oxigênio conforme congestão; reperfusão e monitorização.' : 'Killip I: sem congestão; seguir manejo padrão do IAM.');
        return { valor:'Classe '+c+' · mortalidade '+t.m, nivel:t.nv, conduta: cond };
      }
    },
    {
      id:'duke', grupo:'Síndrome coronariana / dor torácica', nome:'Escore de Duke (teste ergométrico)',
      desc:'Prognóstico pelo teste de esforço (Bruce): tempo, ST e angina.',
      campos:[
        {id:'tempo', tipo:'num', label:'Tempo de exercício (protocolo de Bruce)', un:'min'},
        {id:'st', tipo:'num', label:'Desvio máximo de ST', un:'mm'},
        {id:'angina', tipo:'sel', label:'Angina no esforço', opts:[{v:'0',t:'Ausente (0)'},{v:'1',t:'Não limitante (1)'},{v:'2',t:'Limitante ao teste (2)'}]}
      ],
      calc(v){
        const t=n(v.tempo), st=n(v.st), a=n(v.angina)||0;
        if(t===null||st===null) return { valor:'—', nivel:'info', conduta:'Preencha o tempo de exercício e o desvio de ST.' };
        const dts = t - 5*st - 4*a;
        let nivel,cat,cond;
        if(dts>=5){ nivel='ok'; cat='baixo risco'; cond='Sobrevida em 5 anos ~99%. Em geral, conduta conservadora.'; }
        else if(dts>=-10){ nivel='warn'; cat='risco intermediário'; cond='Sobrevida em 5 anos ~95%. Considerar investigação adicional/imagem.'; }
        else { nivel='bad'; cat='alto risco'; cond='Sobrevida em 5 anos ~79%. Favorece investigação invasiva.'; }
        return { valor: (Math.round(dts*10)/10)+' — '+cat, nivel, conduta: cond };
      }
    },
    {
      id:'hfapeff', grupo:'Insuficiência cardíaca', nome:'HFA-PEFF',
      desc:'Probabilidade diagnóstica de ICFEp (passo 2). Maior = 2 pts, menor = 1 pt; cada domínio conta o maior critério atingido (máx. 2). RS = ritmo sinusal; FA = fibrilação atrial.',
      campos:[
        {id:'func', tipo:'sel', label:'Funcional', opts:[
          {v:'2',t:'MAIOR (2): E/eʹ médio ≥ 15, ou eʹ septal < 7 / lateral < 10 cm/s, ou IT > 2,8 m/s (PSAP > 35)'},
          {v:'1',t:'menor (1): E/eʹ médio 9–14, ou GLS < 16%'},
          {v:'0',t:'Nenhum critério (0)'}
        ]},
        {id:'morf', tipo:'sel', label:'Morfológico', opts:[
          {v:'2',t:'MAIOR (2): VAEi > 34 mL/m² (RS) / > 40 (FA), ou MVEi ≥ 149♂/122♀ g/m² com ERP > 0,42'},
          {v:'1',t:'menor (1): VAEi 29–34 (RS)/34–40 (FA), ou MVEi ≥ 115♂/95♀, ou ERP > 0,42, ou parede ≥ 12 mm'},
          {v:'0',t:'Nenhum critério (0)'}
        ]},
        {id:'bio', tipo:'sel', label:'Biomarcador', opts:[
          {v:'2',t:'MAIOR (2): NT-proBNP > 220 ou BNP > 80 pg/mL (RS) | > 660 / > 240 (FA)'},
          {v:'1',t:'menor (1): NT-proBNP 125–220 ou BNP 35–80 (RS) | 365–660 / 105–240 (FA)'},
          {v:'0',t:'Nenhum critério (0)'}
        ]}
      ],
      calc(v){
        const pts=(n(v.func)||0)+(n(v.morf)||0)+(n(v.bio)||0);
        let nivel,cond;
        if(pts>=5){ nivel='bad'; cond='<b>≥5: diagnóstico de ICFEp confirmado.</b> Seguir para investigação etiológica (passo 3) e tratamento.'; }
        else if(pts>=2){ nivel='warn'; cond='<b>2–4: intermediário.</b> Realizar teste de estresse diastólico (eco de esforço) ou medida invasiva das pressões de enchimento.'; }
        else { nivel='ok'; cond='<b>≤1: ICFEp improvável.</b> Considerar outras causas de dispneia.'; }
        return { valor: pts+'/6', nivel, conduta: cond };
      }
    },
    {
      id:'prevent', grupo:'Prevenção / risco cardiovascular', nome:'PREVENT (AHA 2023)',
      desc:'Risco cardiovascular em 10/30 anos (ASCVD, IC e total) — equações AHA PREVENT.',
      link:{ u:'https://professional.heart.org/en/guidelines-and-statements/prevent-calculator', t:'Abrir calculadora oficial PREVENT (AHA)' },
      extra:'<b>Metas por categoria de risco</b> (após calcular o risco):'
        +'<br>• <b>Muito alto risco</b> (DCV estabelecida ou equivalente): LDL <b>&lt;55 mg/dL</b> e redução ≥50%; PA &lt;130/80.'
        +'<br>• <b>Alto risco</b> (PREVENT ≥20% ou alto risco clínico): LDL <b>&lt;70 mg/dL</b>; PA &lt;130/80.'
        +'<br>• <b>Intermediário</b> (7,5–20%): LDL &lt;100 mg/dL; individualizar (considerar escore de cálcio).'
        +'<br>• <b>Limítrofe/baixo</b> (&lt;7,5%): LDL &lt;116 mg/dL; mudança de estilo de vida.'
        +'<br><span class="sc-extra">Categorias PREVENT 10 anos: &lt;5% baixo · 5–7,5% limítrofe · 7,5–20% intermediário · ≥20% alto. Metas de LDL conforme ESC/EAS e SBC.</span>'
    },
    {
      id:'precisedapt', grupo:'Antiagregação', nome:'PRECISE-DAPT',
      desc:'Risco de sangramento e duração da DAPT (nomograma: idade, ClCr, Hb, leucócitos, sangramento prévio).',
      link:{ u:'https://www.precisedaptscore.com/predapt/webcalculator.html', t:'Abrir calculadora oficial PRECISE-DAPT' },
      extra:'Interpretação: <b>≥ 25</b> = alto risco de sangramento → <b>DAPT curta</b> (3–6 meses). <b>&lt; 25</b> → DAPT padrão/prolongada (12 meses ou mais) se baixo risco hemorrágico. Combine com o risco isquêmico (ex.: DAPT score).'
    },
    {
      id:'grace', grupo:'Síndrome coronariana / dor torácica', nome:'GRACE 2.0',
      desc:'Risco de óbito intra-hospitalar e em 6–12 meses na SCA.',
      link:{ u:'https://www.gracescore.org/WebSite/WebVersion.aspx', t:'Abrir calculadora oficial GRACE' },
      extra:'Variáveis: idade, FC, PAS, creatinina, classe de Killip, PCR à admissão, desvio de ST e marcadores elevados. <b>GRACE &gt; 140</b> indica alto risco e favorece <b>estratégia invasiva precoce (&lt; 24h)</b> na SCA sem supra.'
    },
    {
      id:'euroscore', grupo:'Risco cirúrgico', nome:'EuroSCORE II',
      desc:'Mortalidade prevista em cirurgia cardíaca (modelo logístico com ~18 variáveis).',
      link:{ u:'https://www.euroscore.org/index.php?id=17&lang=en', t:'Abrir calculadora oficial EuroSCORE II' },
      extra:'Estima a mortalidade hospitalar em cirurgia cardíaca. Útil na discussão do Heart Team (ex.: TAVI vs. cirurgia na estenose aórtica).'
    },
    {
      id:'sts', grupo:'Risco cirúrgico', nome:'STS Risk Score',
      desc:'Risco de mortalidade e morbidade em cirurgia cardíaca (modelo proprietário da Society of Thoracic Surgeons).',
      link:{ u:'https://acsdriskcalc.research.sts.org/', t:'Abrir calculadora oficial STS' },
      extra:'Modelo proprietário, sem equação pública completa — por isso usamos a calculadora oficial. <b>STS &lt; 4%</b> = baixo risco; <b>4–8%</b> = intermediário; <b>&gt; 8%</b> = alto risco (referência usada na avaliação para TAVI).'
    },
    {
      id:'maggic', grupo:'Insuficiência cardíaca', nome:'MAGGIC',
      desc:'Mortalidade em 1 e 3 anos na insuficiência cardíaca.',
      link:{ u:'https://www.mdcalc.com/calc/3803/maggic-risk-calculator-heart-failure', t:'Abrir calculadora MAGGIC' },
      extra:'Estima a mortalidade em 1 e 3 anos na IC (FE reduzida ou preservada) a partir de idade, FEVE, classe NYHA, PAS, creatinina, IMC, comorbidades e terapia. Útil para prognóstico e decisões (ex.: encaminhamento a transplante/dispositivos).'
    },
    {
      id:'gupta_mica', grupo:'Avaliação perioperatória', nome:'Gupta MICA (cirurgia vascular/não cardíaca)',
      desc:'Risco de IAM ou parada cardíaca em 30 dias após cirurgia não cardíaca (modelo NSQIP). Complementa o Índice de Lee, sobretudo em cirurgia vascular.',
      link:{ u:'https://www.mdcalc.com/calc/4038/gupta-perioperative-risk-myocardial-infarction-cardiac-arrest-mica', t:'Abrir calculadora Gupta MICA (NSQIP)' },
      extra:'Usa idade, status funcional, classe ASA, creatinina > 1,5 mg/dL e <b>tipo de cirurgia</b> (modelo de regressão com muitas categorias cirúrgicas — por isso usa a ferramenta oficial). Não existe um score padrão chamado "Lee vascular"; para risco cardíaco em cirurgia vascular, o Gupta MICA (NSQIP) e o VSG-CRI são os mais usados.'
    },
    {
      id:'score2', grupo:'Prevenção / risco cardiovascular', nome:'SCORE2 / SCORE2-OP (ESC)',
      desc:'Risco de evento cardiovascular fatal e não fatal em 10 anos (prevenção primária) — algoritmo europeu.',
      link:{ u:'https://u-prevent.com/', t:'Abrir calculadora SCORE2 (U-Prevent / ESC)' },
      extra:'SCORE2 (40–69 anos), SCORE2-OP (≥70) e SCORE2-Diabetes. Categorias de risco e metas de LDL conforme a diretriz ESC 2021 de prevenção. Alternativa europeia ao PREVENT (AHA).'
    },
    {
      id:'syntax', grupo:'Síndrome coronariana / dor torácica', nome:'SYNTAX score',
      desc:'Complexidade anatômica da DAC (multiarterial/TCE) para decidir entre ICP e cirurgia (CRM).',
      link:{ u:'https://syntaxscore.org/', t:'Abrir calculadora SYNTAX' },
      extra:'Pontua a complexidade das lesões coronárias. <b>SYNTAX baixo (≤22)</b> favorece ICP; <b>alto (≥33)</b> favorece CRM; intermediário decide-se no Heart Team. (O SYNTAX Score II/2020 integra variáveis clínicas para individualizar ICP × CRM.)'
    },
    {
      id:'crusade', grupo:'Síndrome coronariana / dor torácica', nome:'CRUSADE (sangramento na SCA)',
      desc:'Risco de sangramento maior intra-hospitalar na SCA sem supra (NSTEMI).',
      link:{ u:'https://www.mdcalc.com/calc/1784/crusade-score-post-mi-bleeding-risk', t:'Abrir calculadora CRUSADE' },
      extra:'Usa hematócrito, ClCr, FC, PAS, sexo, sinais de IC, diabetes e doença vascular prévia (nomograma). Ajuda a escolher a estratégia antitrombótica e o acesso (radial) conforme o risco hemorrágico.'
    },
    {
      id:'cockcroft', grupo:'Função renal', nome:'Clearance de creatinina (Cockcroft-Gault)',
      desc:'Estima o clearance de creatinina — preferido para ajuste de dose de fármacos (ex.: DOACs, enoxaparina).',
      campos:[
        {id:'idade', tipo:'num', label:'Idade', un:'anos'},
        {id:'peso', tipo:'num', label:'Peso', un:'kg'},
        {id:'cr', tipo:'num', label:'Creatinina sérica', un:'mg/dL'},
        {id:'sexo', tipo:'sel', label:'Sexo', opts:[{v:'M',t:'Masculino'},{v:'F',t:'Feminino'}]}
      ],
      calc(v){
        const id=n(v.idade), p=n(v.peso), cr=n(v.cr);
        if(!id||!p||!cr) return { valor:'—', nivel:'info', conduta:'Preencha idade, peso e creatinina.' };
        let clcr = ((140-id)*p)/(72*cr);
        if(v.sexo==='F') clcr*=0.85;
        clcr=Math.round(clcr);
        let nivel = clcr>=50?'ok':(clcr>=30?'warn':'bad');
        const cond = 'ClCr ≈ <b>'+clcr+' mL/min</b>. Use este valor (não a TFG do CKD-EPI) para ajustar doses de DOACs e demais fármacos com bula baseada em Cockcroft-Gault. '
          + (clcr<30 ? '<b>ClCr &lt; 30:</b> contraindica/exige ajuste de dabigatrana e cautela com os demais DOACs e a enoxaparina.' : (clcr<50 ? 'ClCr 30–49: pode exigir redução de dose de alguns DOACs — confira a bula.' : 'Em geral permite dose plena dos anticoagulantes (confira sangramento e interações).'))
          + '<br><span class="sc-extra">Em obesos/edemaciados o Cockcroft-Gault pode superestimar; considere peso ajustado.</span>';
        return { valor: clcr+' mL/min', nivel, conduta: cond };
      }
    },
    {
      id:'infusao', grupo:'Conversões & doses', nome:'Drogas vasoativas (dose ↔ mL/h)',
      desc:'Converte a dose desejada de droga vasoativa/inotrópica na velocidade de infusão da bomba (mL/h).',
      campos:[
        {id:'peso', tipo:'num', label:'Peso do paciente', un:'kg'},
        {id:'massa', tipo:'num', label:'Massa do fármaco na solução', un:'mg'},
        {id:'volume', tipo:'num', label:'Volume total da solução', un:'mL'},
        {id:'dose', tipo:'num', label:'Dose desejada'},
        {id:'unidade', tipo:'sel', label:'Unidade da dose', opts:[
          {v:'kgmin',t:'mcg/kg/min'},
          {v:'min',t:'mcg/min'}
        ]}
      ],
      calc(v){
        const p=n(v.peso), mg=n(v.massa), vol=n(v.volume), dose=n(v.dose);
        if(!mg||!vol||dose===null) return { valor:'—', nivel:'info', conduta:'Preencha massa, volume e dose (e o peso, se a dose for por kg).' };
        const conc = (mg*1000)/vol; // mcg/mL
        let mcgMin;
        if(v.unidade==='kgmin'){ if(!p) return { valor:'—', nivel:'info', conduta:'Informe o peso para doses em mcg/kg/min.' }; mcgMin = dose*p; }
        else { mcgMin = dose; }
        const rate = (mcgMin*60)/conc; // mL/h
        const cond = 'Programar a bomba em <b>'+(Math.round(rate*10)/10)+' mL/h</b>.'
          +'<br><span class="sc-extra">Solução a '+(Math.round(conc*10)/10)+' mcg/mL ('+mg+' mg em '+vol+' mL). '
          +'Confira a diluição padrão da sua instituição; doses máximas e titulação conforme a resposta hemodinâmica.</span>';
        return { valor: (Math.round(rate*10)/10)+' mL/h', nivel:'info', conduta: cond };
      }
    }
  ];

  // ---------- UI ----------
  function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  let atual = null;

  // monta menu agrupado
  const grupos={};
  SCORES.forEach(s=>{(grupos[s.grupo]=grupos[s.grupo]||[]).push(s);});
  Object.keys(grupos).forEach(g=>{
    const gt=document.createElement('div'); gt.className='evol-group-title'; gt.textContent=g; menu.appendChild(gt);
    grupos[g].forEach(s=>{
      const b=document.createElement('button'); b.className='evol-item'; b.textContent=s.nome; b.dataset.id=s.id;
      b.addEventListener('click',()=>select(s.id,b)); menu.appendChild(b);
    });
  });

  function readVals(s){
    const v={};
    s.campos.forEach(c=>{
      const el=document.getElementById('sc-'+c.id);
      if(!el) return;
      if(c.tipo==='chk') v[c.id]=el.checked;
      else v[c.id]=el.value;
    });
    return v;
  }

  function compute(s){
    const r=s.calc(readVals(s));
    const out=document.getElementById('sc-out');
    out.className='sc-result sc-'+(r.nivel||'info');
    out.innerHTML='<div class="sc-valor">'+esc(r.valor)+'</div><div class="sc-conduta">'+r.conduta+'</div>';
  }

  function select(id, el){
    const s=SCORES.find(x=>x.id===id); if(!s) return; atual=s;
    menu.querySelectorAll('.evol-item').forEach(x=>x.classList.toggle('active', x===el));
    // scores de "link oficial" (equações complexas / proprietárias)
    if(s.link){
      let h='<h3 class="sc-title">'+esc(s.nome)+'</h3><p class="muted small">'+esc(s.desc)+'</p>';
      h+='<div class="sc-result sc-info"><div class="sc-conduta">'+(s.extra||'')+'</div></div>';
      h+='<a class="btn-primary" style="display:inline-block;margin-top:14px;text-decoration:none" href="'+esc(s.link.u)+'" target="_blank" rel="noopener">'+esc(s.link.t)+' ↗</a>';
      h+='<p class="muted small" style="margin-top:10px">Esta calculadora usa equações complexas/proprietárias; para garantir o resultado correto, ela abre a ferramenta oficial validada.</p>';
      panel.innerHTML=h; return;
    }
    let html='<h3 class="sc-title">'+esc(s.nome)+'</h3><p class="muted small">'+esc(s.desc)+'</p><div class="sc-campos">';
    s.campos.forEach(c=>{
      if(c.tipo==='num'){
        html+='<label class="sc-campo"><span>'+esc(c.label)+(c.un?' <em>('+esc(c.un)+')</em>':'')+'</span><input type="number" step="any" id="sc-'+c.id+'"></label>';
      } else if(c.tipo==='sel'){
        html+='<label class="sc-campo"><span>'+esc(c.label)+'</span><select id="sc-'+c.id+'">'+c.opts.map(o=>'<option value="'+esc(o.v)+'">'+esc(o.t)+'</option>').join('')+'</select></label>';
      } else if(c.tipo==='chk'){
        html+='<label class="sc-check"><input type="checkbox" id="sc-'+c.id+'"><span>'+esc(c.label)+'</span></label>';
      }
    });
    html+='</div><button id="sc-calc" class="btn-primary">Calcular</button><div id="sc-out" class="sc-result sc-info"><div class="sc-conduta">Preencha os campos e clique em Calcular.</div></div>';
    panel.innerHTML=html;
    document.getElementById('sc-calc').addEventListener('click',()=>compute(s));
    panel.querySelectorAll('input,select').forEach(el=>el.addEventListener('change',()=>compute(s)));
  }

  // ---------- integração com o hub Paciente: pré-preenchimento ----------
  // mapeia window.PACIENTE -> valores dos campos de cada score
  const FILLMAP = {
    chadsvasc: P => ({ idade: P.idade, icc: P.ic, has: P.has, dm: P.dm, avc: P.avc, vasc: !!(P.vascular || P.iam) }),
    hasbled:   P => ({ has: P.has, renal: (P.cr != null && P.cr > 2.26), avc: P.avc, idoso: (P.idade != null && P.idade > 65), drogas: !!(P.m_aas || P.m_p2y12) }),
    ckdepi:    P => ({ cr: P.cr, idade: P.idade, sexo: P.sexo === 'F' ? 'F' : 'M' }),
    cockcroft: P => ({ idade: P.idade, peso: P.peso, cr: P.cr, sexo: P.sexo === 'F' ? 'F' : 'M' }),
    rcri:      P => ({ dac: !!(P.dcv || P.iam || P.sca_rec), icc: P.ic, avc: P.avc, dm: P.dm, cr: (P.cr != null && P.cr > 2.0) })
  };
  window.cardioScoreFill = function (scoreId) {
    const P = window.PACIENTE || {};
    const btn = menu.querySelector('.evol-item[data-id="' + scoreId + '"]');
    if (btn) select(scoreId, btn);
    const map = FILLMAP[scoreId]; if (!map) return;
    const vals = map(P);
    Object.keys(vals).forEach(k => {
      const el = document.getElementById('sc-' + k); if (!el) return;
      if (el.type === 'checkbox') el.checked = !!vals[k];
      else if (vals[k] != null && vals[k] !== '') el.value = vals[k];
    });
    const s = SCORES.find(x => x.id === scoreId);
    if (s && s.campos) compute(s);
    if (window.toast) window.toast('Preenchido com os dados do Paciente');
  };

  // seleciona o primeiro
  const first=menu.querySelector('.evol-item');
  if(first) select(first.dataset.id, first);

  // expõe a lista para a busca global
  window.SCORES_LIST = SCORES.map(s => ({ id: s.id, nome: s.nome, grupo: s.grupo, desc: s.desc || '' }));
})();
