// Hub "Paciente" — gêmeo digital + EVIDÊNCIA PERSONALIZADA + integração com as outras abas.
// Perfil clínico detalhado (PA, IMC, NYHA, QRS/BRE, HbA1c, ferro, albuminúria) refina as condutas.
// Mostra LACUNAS (terapias indicadas faltando) com NNT/estudo, o que está EM USO e o CONTRAINDICADO.
// Liga para Scores, Pré-teste, Doses e Evidências; gera texto de plano para o prontuário.
// Apoio à decisão; não substitui o julgamento clínico.
(function () {
  const root = document.getElementById('paciente-root');
  if (!root) return;
  const P = window.PACIENTE = window.PACIENTE || {};
  const n = v => { const x = parseFloat(String(v).replace(',', '.')); return isFinite(x) ? x : null; };
  const r1 = x => Math.round(x * 10) / 10;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const AVC_ANO = { 0: 0.2, 1: 0.6, 2: 2.2, 3: 3.2, 4: 4.8, 5: 7.2, 6: 9.7, 7: 11.2, 8: 10.8, 9: 12.2 };

  function ckdepi(cr, idade, fem) {
    if (!cr || !idade) return null;
    const k = fem ? 0.7 : 0.9, a = fem ? -0.241 : -0.302;
    const mn = Math.min(cr / k, 1), mx = Math.max(cr / k, 1);
    let e = 142 * Math.pow(mn, a) * Math.pow(mx, -1.2) * Math.pow(0.9938, idade);
    if (fem) e *= 1.012;
    return Math.round(e);
  }

  // ---------- biblioteca de intervenções ----------
  // aplica/emUso/contra recebem (P, ctx); beneficio devolve {base,com,arr,nnt,horiz,txt} ou {txt}
  // opcionais: doses (termo p/ Doses) · score (id p/ Scores) · evid (termo p/ Evidências)
  const INTERV = [
    // ---------------- ICFEr — 4 pilares ----------------
    { id: 'raas', nome: 'IECA/BRA ou ARNI', grupo: 'ICFEr — pilares',
      aplica: (p, c) => c.icfer,
      emUso: p => p.m_ieca || p.m_arni,
      contra: (p, c) => p.gravidez ? 'contraindicado na gravidez' : (c.k != null && c.k > 5.5 ? 'K⁺ > 5,5 mEq/L' : (c.tfg != null && c.tfg < 15 ? 'TFG < 15 (cautela)' : null)),
      beneficio: () => ({ base: 39.7, com: 35.2, arr: 4.5, nnt: 22, horiz: '~3,5 anos', txt: 'Pilar da ICFEr — reduz mortalidade. <b>Preferir ARNI</b> (sacubitril/valsartana) ao IECA quando possível.' }),
      estudo: { nome: 'SOLVD-Treatment (NEJM 1991) / PARADIGM-HF (2014)', q: 'PARADIGM-HF sacubitril valsartan heart failure 2014' }, doses: 'sacubitril' },

    { id: 'bb', nome: 'Betabloqueador', grupo: 'ICFEr — pilares',
      aplica: (p, c) => c.icfer,
      emUso: p => p.m_bb,
      contra: (p, c) => (c.fc != null && c.fc < 50) ? 'FC < 50 bpm' : (p.asma ? 'asma/DPOC grave (preferir beta-1 seletivo, cautela)' : null),
      beneficio: () => ({ base: 17.3, com: 11.8, arr: 5.5, nnt: 18, horiz: '~1,3 ano', txt: 'Pilar — reduz mortalidade. Iniciar com o paciente compensado e titular a cada 2 semanas. <b>Use os 3 com evidência de mortalidade na ICFEr.</b>' }),
      agentes: [
        { n: 'Carvedilol', t: 'COPERNICUS / US Carvedilol', o: 'β1+β2+α; benefício mesmo na IC grave' },
        { n: 'Succinato de metoprolol (CR/XL)', t: 'MERIT-HF', o: 'β1 seletivo de liberação prolongada' },
        { n: 'Bisoprolol', t: 'CIBIS-II', o: 'β1 seletivo' }
      ],
      agentesNota: '<b>Nebivolol (SENIORS)</b> reduziu o desfecho composto de morte/hospitalização CV, mas <b>NÃO</b> a mortalidade isolada — opção sobretudo no idoso, não preferencial. <b>Atenolol</b> e <b>metoprolol tartarato</b> não têm evidência na ICFEr.',
      estudo: { nome: 'CIBIS-II (Lancet 1999)', q: 'CIBIS-II bisoprolol heart failure mortality 1999' }, doses: 'carvedilol' },

    { id: 'mra', nome: 'Antagonista mineralocorticoide (espironolactona)', grupo: 'ICFEr — pilares',
      aplica: (p, c) => c.icfer,
      emUso: p => p.m_mra,
      contra: (p, c) => (c.k != null && c.k > 5.0) ? 'K⁺ > 5,0 mEq/L' : (c.tfg != null && c.tfg < 30 ? 'TFG < 30' : null),
      beneficio: () => ({ base: 46, com: 35, arr: 11, nnt: 9, horiz: '~2 anos', txt: 'Pilar — reduz mortalidade na ICFEr sintomática. Monitorar K⁺ e função renal.' }),
      estudo: { nome: 'RALES (NEJM 1999)', q: 'RALES spironolactone severe heart failure 1999' }, doses: 'espironolactona' },

    { id: 'sglt2hf', nome: 'iSGLT2 (dapagliflozina/empagliflozina)', grupo: 'ICFEr — pilares',
      aplica: (p, c) => c.icfer,
      emUso: p => p.m_isglt2,
      contra: (p, c) => (c.tfg != null && c.tfg < 20) ? 'TFG < 20 (não iniciar)' : (p.gravidez ? 'gravidez' : null),
      beneficio: () => ({ base: 21.2, com: 16.3, arr: 4.9, nnt: 21, horiz: '~18 meses', txt: 'Quarto pilar — reduz morte CV/piora de IC, com ou sem diabetes. Pausar em doença aguda/jejum.' }),
      estudo: { nome: 'DAPA-HF (NEJM 2019)', q: 'DAPA-HF dapagliflozin heart failure reduced ejection fraction 2019' }, doses: 'dapagliflozina' },

    // ---------------- ICFEr — congestão e linhas adicionais ----------------
    { id: 'diur', nome: 'Diurético de alça (furosemida)', grupo: 'ICFEr — congestão',
      aplica: (p, c) => (c.icfer || c.icfep) && (c.nyha == null || c.nyha >= 2),
      emUso: p => p.m_diur,
      contra: () => null,
      beneficio: () => ({ txt: 'Alívio de congestão/sintomas (sem benefício de mortalidade). Usar a menor dose eficaz, ajustar à diurese/peso e evitar hipovolemia que limite a titulação dos pilares.' }),
      estudo: { nome: 'DOSE trial (NEJM 2011)', q: 'DOSE trial furosemide acute decompensated heart failure 2011' }, doses: 'furosemida' },

    { id: 'ivab', nome: 'Ivabradina', grupo: 'ICFEr — congestão',
      aplica: (p, c) => c.icfer && p.m_bb && c.sinus && c.fc != null && c.fc >= 70,
      emUso: p => p.m_ivab,
      contra: () => null,
      beneficio: () => ({ base: 29, com: 24, arr: 5, nnt: 20, horiz: '~2 anos', txt: 'ICFEr em <b>ritmo sinusal</b> com FC ≥ 70 bpm apesar de betabloqueador otimizado (não usar em FA).' }),
      estudo: { nome: 'SHIFT (Lancet 2010)', q: 'SHIFT ivabradine heart failure 2010' }, doses: 'ivabradina' },

    { id: 'ferro', nome: 'Reposição de ferro EV (carboximaltose férrica)', grupo: 'ICFEr — congestão',
      aplica: (p, c) => c.icfer && c.ferropenia !== false,
      emUso: p => p.m_ferro,
      contra: () => null,
      beneficio: (p, c) => c.ferropenia === true
        ? { txt: '<b>Deficiência de ferro confirmada</b> (ferritina ' + p.ferritina + (p.tsat != null ? ', TSAT ' + p.tsat + '%' : '') + ') — ferro EV (carboximaltose) melhora sintomas/qualidade de vida e reduz hospitalização por IC. Não usar ferro oral nessa indicação.' }
        : { txt: 'Verificar <b>deficiência de ferro</b> (ferritina &lt; 100 ng/mL, ou 100–299 com TSAT &lt; 20%) — informe ferritina/TSAT. Se presente, ferro EV reduz hospitalização e melhora sintomas.' },
      estudo: { nome: 'AFFIRM-AHF (Lancet 2020) / FAIR-HF', q: 'AFFIRM-AHF ferric carboxymaltose iron deficiency heart failure 2020' } },

    { id: 'vericiguat', nome: 'Vericiguate', grupo: 'ICFEr — avançada',
      aplica: (p, c) => c.icfer,
      emUso: p => p.m_vericiguat,
      contra: () => null,
      beneficio: () => ({ base: 37.8, com: 33.6, arr: 4.2, nnt: 24, horiz: '~11 meses', txt: 'Opção em ICFEr com <b>piora recente</b> (hospitalização/uso de diurético EV) apesar da terapia otimizada — reduz morte CV/hospitalização por IC.' }),
      estudo: { nome: 'VICTORIA (NEJM 2020)', q: 'VICTORIA vericiguat heart failure reduced ejection fraction 2020' } },

    { id: 'hidnit', nome: 'Hidralazina + nitrato', grupo: 'ICFEr — avançada',
      aplica: (p, c) => c.icfer,
      emUso: p => p.m_hidnit,
      contra: () => null,
      beneficio: () => ({ base: 10.2, com: 6.2, arr: 4.0, nnt: 25, horiz: '~10 meses', txt: 'Benefício de mortalidade em <b>autodeclarados negros</b> com ICFEr sintomática (NYHA III–IV) apesar de GDMT; também é <b>alternativa</b> quando IECA/BRA/ARNI são contraindicados (ex.: TFG muito baixa, hipercalemia).' }),
      estudo: { nome: 'A-HeFT (NEJM 2004)', q: 'A-HeFT isosorbide dinitrate hydralazine heart failure 2004' } },

    // ---------------- Dispositivos ----------------
    { id: 'cdi', nome: 'CDI (cardiodesfibrilador) — prevenção primária', grupo: 'Dispositivos',
      aplica: (p, c) => c.icfer && p.feve != null && p.feve <= 35 && (c.nyha == null || (c.nyha >= 2 && c.nyha <= 3)),
      emUso: p => p.m_cdi,
      contra: () => null,
      beneficio: () => ({ txt: 'FEVE ≤ 35% sintomática (NYHA II–III) apesar de <b>≥ 3 meses</b> de GDMT otimizada, com expectativa de vida &gt; 1 ano. Maior benefício na cardiopatia <b>isquêmica</b>; na não isquêmica, individualizar (DANISH).' }),
      estudo: { nome: 'SCD-HeFT (NEJM 2005) / MADIT-II', q: 'SCD-HeFT implantable defibrillator heart failure 2005' } },

    { id: 'trc', nome: 'TRC (ressincronização cardíaca)', grupo: 'Dispositivos',
      aplica: (p, c) => c.icfer && p.feve != null && p.feve <= 35 && c.sinus && (c.qrs == null || c.qrs >= 130),
      emUso: p => p.m_trc,
      contra: () => null,
      beneficio: (p, c) => {
        let t;
        if (c.qrs == null) t = 'Confirmar duração/morfologia do QRS no ECG — maior benefício com <b>BRE e QRS ≥ 150 ms</b>.';
        else if (c.qrs >= 150) t = 'QRS ' + c.qrs + ' ms' + (p.bre ? ' com BRE' : '') + ' — <b>forte indicação</b> de TRC.';
        else t = 'QRS ' + c.qrs + ' ms (130–149)' + (p.bre ? ' com BRE' : ' sem BRE') + ' — benefício ' + (p.bre ? 'moderado' : 'menor/incerto') + '.';
        return { txt: 'FEVE ≤ 35%, ritmo sinusal e QRS largo apesar de GDMT. ' + t };
      },
      estudo: { nome: 'CARE-HF (NEJM 2005) / MADIT-CRT', q: 'CARE-HF cardiac resynchronization therapy heart failure 2005' } },

    // ---------------- ICFEp / ICFEmr ----------------
    { id: 'sglt2pef', nome: 'iSGLT2 (dapagliflozina/empagliflozina)', grupo: 'ICFEp / ICFEmr',
      aplica: (p, c) => c.icfep,
      emUso: p => p.m_isglt2,
      contra: (p, c) => (c.tfg != null && c.tfg < 20) ? 'TFG < 20 (não iniciar)' : (p.gravidez ? 'gravidez' : null),
      beneficio: () => ({ base: 19.5, com: 16.4, arr: 3.1, nnt: 32, horiz: '~2,3 anos', txt: 'Terapia de base na <b>IC com FE preservada ou levemente reduzida</b> (FEVE &gt; 40%) — reduz morte CV/piora de IC, independente de diabetes.' }),
      estudo: { nome: 'DELIVER (NEJM 2022) / EMPEROR-Preserved', q: 'DELIVER dapagliflozin heart failure preserved ejection fraction 2022' }, doses: 'dapagliflozina' },

    { id: 'mrapef', nome: 'Antagonista mineralocorticoide', grupo: 'ICFEp / ICFEmr',
      aplica: (p, c) => c.icfep,
      emUso: p => p.m_mra,
      contra: (p, c) => (c.k != null && c.k > 5.0) ? 'K⁺ > 5,0 mEq/L' : (c.tfg != null && c.tfg < 30 ? 'TFG < 30' : null),
      beneficio: () => ({ txt: 'Reduz eventos de piora de IC na FE preservada/levemente reduzida (FINEARTS-HF mostrou benefício da <b>finerenona</b>; espironolactona com sinal de benefício no TOPCAT, sobretudo FEVE mais baixa). Vigiar K⁺/função renal.' }),
      estudo: { nome: 'FINEARTS-HF (NEJM 2024) / TOPCAT', q: 'FINEARTS-HF finerenone heart failure mildly reduced preserved ejection fraction 2024' }, doses: 'espironolactona' },

    // ---------------- Fibrilação atrial ----------------
    { id: 'aco', nome: 'Anticoagulação na FA', grupo: 'Fibrilação atrial',
      aplica: (p, c) => p.fa && c.cv >= 1,
      emUso: p => p.m_aco,
      contra: () => null,
      beneficio: (p, c) => { const base = AVC_ANO[Math.min(c.cv, 9)]; const com = base * 0.36; return { base, com, arr: base - com, nnt: Math.max(1, Math.round(100 / (base - com))), horiz: 'por ano', txt: 'Risco de AVC por CHA₂DS₂-VA = ' + c.cv + '; anticoagulação reduz ~64%. <b>Preferir DOAC.</b> Pesar HAS-BLED.' }; },
      estudo: { nome: 'Hart et al. (Ann Intern Med 2007)', q: 'antithrombotic therapy prevent stroke atrial fibrillation Hart meta-analysis' }, score: 'chadsvasc', doses: 'apixabana' },

    { id: 'fa_freq', nome: 'Controle de frequência', grupo: 'Fibrilação atrial',
      aplica: (p) => p.fa,
      emUso: p => p.m_bb || p.m_bcc || p.m_digoxina,
      contra: () => null,
      beneficio: (p, c) => ({ txt: 'Alvo inicial de FC de repouso <b>&lt; 110 bpm</b> (controle leniente — RACE II).' }),
      agentes: [
        { n: 'Betabloqueador', t: 'RACE II', o: '1ª linha; seguro na ICFEr' },
        { n: 'BCC não-diidropiridínico (verapamil/diltiazem)', t: '—', o: 'alternativa se FEVE preservada; <b>EVITAR na ICFEr</b> (inotrópico negativo)' },
        { n: 'Digoxina', t: '—', o: 'adjuvante (sobretudo na IC ou idoso sedentário); janela terapêutica estreita' }
      ],
      estudo: { nome: 'RACE II (NEJM 2010)', q: 'RACE II lenient versus strict rate control atrial fibrillation 2010' }, doses: 'metoprolol' },

    { id: 'fa_ritmo', nome: 'Controle de ritmo precoce', grupo: 'Fibrilação atrial',
      aplica: (p) => p.fa,
      emUso: p => p.m_antiarr,
      contra: () => null,
      beneficio: () => ({ txt: 'Controle de ritmo <b>precoce</b> (≤ 1 ano do diagnóstico) reduz desfechos CV (EAST-AFNET 4). Escolha do antiarrítmico pela cardiopatia: <b>propafenona/flecainida só sem doença estrutural</b>; sotalol/dronedarona conforme contexto; <b>amiodarona</b> preferida na IC/cardiopatia estrutural.' }),
      estudo: { nome: 'EAST-AFNET 4 (NEJM 2020)', q: 'EAST-AFNET 4 early rhythm control atrial fibrillation 2020' }, doses: 'amiodarona' },

    { id: 'fa_ablacao', nome: 'Ablação por cateter (isolamento de veias pulmonares)', grupo: 'Fibrilação atrial',
      aplica: (p) => p.fa,
      emUso: p => p.m_ablacao,
      contra: () => null,
      beneficio: (p, c) => c.icfer
        ? { base: 25, com: 13.4, arr: 11.6, nnt: 9, horiz: '~3 anos', txt: 'Na <b>FA + ICFEr</b>, a ablação reduz mortalidade e hospitalização por IC (CASTLE-AF) — superior ao tratamento clínico.' }
        : { txt: 'Opção de <b>1ª linha</b> para controle de ritmo (sobretudo FA paroxística): mais eficaz que antiarrítmicos para manter o ritmo sinusal e melhora sintomas/qualidade de vida.' },
      estudo: { nome: 'CASTLE-AF (NEJM 2018) / CABANA', q: 'CASTLE-AF catheter ablation atrial fibrillation heart failure 2018' } },

    // ---------------- Coronariopatia / pós-IAM ----------------
    { id: 'dapt', nome: 'Dupla antiagregação (AAS + inibidor de P2Y12)', grupo: 'Coronariopatia / pós-IAM',
      aplica: (p) => p.sca_rec,
      emUso: p => p.m_aas && p.m_p2y12,
      contra: () => null,
      beneficio: () => ({ txt: 'Pós-SCA/ICP: AAS + inibidor de P2Y12 por ~12 meses. Ajustar a duração pelo equilíbrio isquêmico × hemorrágico (DAPT score / PRECISE-DAPT / <b>ARC-HBR</b> para risco de sangramento).' }),
      agentes: [
        { n: 'Ticagrelor', t: 'PLATO', o: 'preferido na SCA; reversível; pode causar dispneia; não exige conhecer a anatomia coronária' },
        { n: 'Prasugrel', t: 'TRITON-TIMI 38 · ISAR-REACT 5', o: 'na SCA tratada com ICP; <b>ISAR-REACT 5</b> sugeriu superioridade sobre o ticagrelor. <b>Contraindicado se AVC/AIT prévio</b>; cautela se &gt; 75 anos ou &lt; 60 kg' },
        { n: 'Clopidogrel', t: 'CURE', o: 'quando ticagrelor/prasugrel são contraindicados, alto risco de sangramento, ou em associação a anticoagulante (terapia tripla curta)' }
      ],
      agentesNota: 'Na SCA, prefira ticagrelor ou prasugrel ao clopidogrel (PLATO; TRITON). O prasugrel não foi melhor no pré-tratamento sem anatomia conhecida (ACCOAST).',
      estudo: { nome: 'PLATO (NEJM 2009) / PEGASUS-TIMI 54', q: 'PLATO ticagrelor acute coronary syndrome 2009' }, score: 'dapt', score2: 'archbr' },

    { id: 'bbpos', nome: 'Betabloqueador pós-IAM', grupo: 'Coronariopatia / pós-IAM',
      aplica: (p, c) => (p.iam || p.sca_rec) && !c.icfer,
      emUso: p => p.m_bb,
      contra: (p, c) => (c.fc != null && c.fc < 50) ? 'FC < 50 bpm' : (p.asma ? 'asma/DPOC grave (cautela)' : null),
      beneficio: () => ({ txt: 'Benefício de mortalidade <b>claro quando há disfunção de VE/IC</b>. Na <b>FEVE preservada</b>, dados recentes (REDUCE-AMI 2024) questionam o uso rotineiro de longo prazo — individualizar (ex.: manter por ~1 ano, angina ou arritmia).' }),
      estudo: { nome: 'CAPRICORN (2001) / REDUCE-AMI (NEJM 2024)', q: 'REDUCE-AMI beta-blocker myocardial infarction preserved ejection fraction 2024' }, doses: 'metoprolol' },

    { id: 'iecapos', nome: 'IECA/BRA pós-IAM', grupo: 'Coronariopatia / pós-IAM',
      aplica: (p, c) => (p.iam || p.sca_rec) && !c.icfer,
      emUso: p => p.m_ieca || p.m_arni,
      contra: (p, c) => p.gravidez ? 'contraindicado na gravidez' : (c.k != null && c.k > 5.5 ? 'K⁺ > 5,5 mEq/L' : null),
      beneficio: () => ({ txt: 'Maior benefício no IAM <b>anterior</b>, com disfunção de VE, IC, diabetes ou hipertensão. Em IAM não complicado de baixo risco, o benefício é menor.' }),
      estudo: { nome: 'SAVE (NEJM 1992) / HOPE', q: 'SAVE captopril myocardial infarction left ventricular dysfunction 1992' }, doses: 'enalapril' },

    { id: 'colchicina', nome: 'Colchicina 0,5 mg/dia', grupo: 'Coronariopatia / pós-IAM',
      aplica: (p, c) => c.ascvd,
      emUso: p => p.m_colchicina,
      contra: (p, c) => (c.tfg != null && c.tfg < 30) ? 'TFG < 30 (cautela/evitar)' : null,
      beneficio: () => ({ base: 9.6, com: 6.8, arr: 2.8, nnt: 36, horiz: '~2,4 anos', txt: 'Anti-inflamatório na DAC crônica ou pós-IAM — reduz eventos CV. Atenção a interações (claritromicina, estatinas em dose alta) e intolerância gastrointestinal.' }),
      estudo: { nome: 'LoDoCo2 (NEJM 2020) / COLCOT', q: 'LoDoCo2 colchicine chronic coronary disease 2020' } },

    { id: 'angina', nome: 'Antianginosos (controle de sintomas)', grupo: 'Coronariopatia / pós-IAM',
      aplica: (p) => p.angina,
      emUso: p => p.m_nitrato || p.m_bcc,
      contra: () => null,
      beneficio: () => ({ txt: 'Objetivo é <b>sintoma/qualidade de vida</b> (não reduzem mortalidade).' }),
      agentes: [
        { n: 'Betabloqueador', t: '—', o: '1ª linha; ideal se pós-IAM ou FC alta' },
        { n: 'BCC diidropiridínico (anlodipino)', t: 'PRAISE', o: 'vasodilatador; <b>seguro na ICFEr</b> (anlodipino); útil se vasoespasmo/HAS' },
        { n: 'BCC não-diidropiridínico (verapamil/diltiazem)', t: '—', o: 'reduz FC; <b>EVITAR na ICFEr</b>; não associar a betabloqueador (bradicardia/BAV)' },
        { n: 'Nitrato / ranolazina / trimetazidina', t: '—', o: 'add-on para controle de sintomas refratários' }
      ],
      estudo: { nome: 'ESC 2024 — Síndromes coronarianas crônicas', q: 'ESC 2024 chronic coronary syndromes antianginal therapy' }, doses: 'nitrato' },

    { id: 'reab', nome: 'Reabilitação cardíaca', grupo: 'Coronariopatia / pós-IAM',
      aplica: (p, c) => p.iam || p.sca_rec || c.icfer,
      emUso: p => p.m_reab,
      contra: () => null,
      beneficio: () => ({ txt: 'Programa estruturado baseado em exercício pós-IAM/ICP e na IC: reduz mortalidade CV e re-hospitalização e melhora a capacidade funcional. Indicação Classe I — encaminhar.' }),
      estudo: { nome: 'Cochrane — reabilitação cardíaca baseada em exercício', q: 'exercise-based cardiac rehabilitation coronary heart disease Cochrane' } },

    // ---------------- Lípides / aterosclerose ----------------
    { id: 'estatina', nome: 'Estatina de alta intensidade', grupo: 'Lípides / aterosclerose',
      aplica: (p, c) => c.ascvd || (p.risco10 != null && p.risco10 >= 7.5),
      emUso: p => p.m_estatina,
      contra: p => p.gravidez ? 'contraindicada na gravidez' : null,
      beneficio: (p, c) => {
        const base10 = c.ascvd ? 30 : p.risco10; const alvo = c.ascvd ? 55 : 70;
        if (!base10 || p.ldl == null) return { txt: 'Reduz eventos ~22% por mmol/L de LDL (CTT). Informe LDL e risco para o NNT.' };
        const dmmol = Math.max(0, (p.ldl - alvo) / 38.7); const rrr = Math.min(0.6, 0.22 * dmmol);
        const com = base10 * (1 - rrr); return { base: base10, com, arr: base10 - com, nnt: Math.max(1, Math.round(100 / (base10 - com))), horiz: 'em 10 anos', txt: 'Meta LDL &lt; ' + alvo + '. RRR ~' + Math.round(rrr * 100) + '% sobre risco basal de ' + base10 + '% (10 anos).' };
      },
      estudo: { nome: 'CTT Collaboration (Lancet 2010)', q: 'Cholesterol Treatment Trialists more intensive lowering LDL 2010' }, evid: 'estatina', doses: 'atorvastatina' },

    { id: 'ezet', nome: 'Ezetimiba (associar à estatina)', grupo: 'Lípides / aterosclerose',
      aplica: (p, c) => c.ascvd && p.m_estatina && p.ldl != null && p.ldl > 55,
      emUso: p => p.m_ezet,
      contra: () => null,
      beneficio: () => ({ base: 34.7, com: 32.7, arr: 2.0, nnt: 50, horiz: '~7 anos', txt: 'Quando a meta de LDL não é atingida com estatina na dose máxima tolerada.' }),
      estudo: { nome: 'IMPROVE-IT (NEJM 2015)', q: 'IMPROVE-IT ezetimibe simvastatin acute coronary syndrome 2015' }, evid: 'ezetimiba', doses: 'ezetimiba' },

    { id: 'pcsk9', nome: 'Inibidor de PCSK9', grupo: 'Lípides / aterosclerose',
      aplica: (p, c) => c.ascvd && p.m_estatina && p.m_ezet && p.ldl != null && p.ldl > 55,
      emUso: p => p.m_pcsk9,
      contra: () => null,
      beneficio: () => ({ base: 11.3, com: 9.8, arr: 1.5, nnt: 67, horiz: '~2,2 anos', txt: 'Muito alto risco fora da meta de LDL apesar de estatina + ezetimiba.' }),
      estudo: { nome: 'FOURIER (NEJM 2017)', q: 'FOURIER evolocumab cardiovascular outcomes 2017' }, evid: 'PCSK9' },

    { id: 'aas', nome: 'Antiagregante (AAS)', grupo: 'Prevenção secundária',
      aplica: (p, c) => c.ascvd && !p.sca_rec,
      emUso: p => p.m_aas || p.m_p2y12,
      contra: () => null,
      beneficio: () => ({ txt: 'Prevenção secundária: reduz ~19–22% os eventos vasculares graves. AAS 75–100 mg/dia indefinidamente.' }),
      estudo: { nome: 'Antithrombotic Trialists (Lancet 2009)', q: 'Antithrombotic Trialists aspirin secondary prevention vascular events 2009' }, doses: 'AAS' },

    // ---------------- Diabetes e doença renal ----------------
    { id: 'sglt2dm', nome: 'iSGLT2 (proteção CV/renal)', grupo: 'Diabetes e doença renal',
      aplica: (p, c) => p.dm && !c.icfer && !c.icfep && (c.ascvd || c.drc),
      emUso: p => p.m_isglt2,
      contra: (p, c) => (c.tfg != null && c.tfg < 20) ? 'TFG < 20 (não iniciar)' : (p.gravidez ? 'gravidez' : null),
      beneficio: () => ({ base: 14.5, com: 9.2, arr: 5.3, nnt: 19, horiz: '~2,4 anos', txt: 'DM2 com DCV ou DRC: reduz progressão renal e desfechos CV (desfecho renal composto).' }),
      estudo: { nome: 'DAPA-CKD (NEJM 2020)', q: 'DAPA-CKD dapagliflozin chronic kidney disease 2020' }, doses: 'dapagliflozina' },

    { id: 'glp1', nome: 'Agonista de GLP-1', grupo: 'Diabetes e doença renal',
      aplica: (p, c) => p.dm && c.ascvd && !c.icfer,
      emUso: p => p.m_glp1,
      contra: () => null,
      beneficio: () => ({ base: 14.9, com: 13.0, arr: 1.9, nnt: 53, horiz: '~3,8 anos', txt: 'DM2 com DCV estabelecida: reduz eventos cardiovasculares (benefício CV comprovado).' }),
      estudo: { nome: 'LEADER (NEJM 2016)', q: 'LEADER liraglutide cardiovascular outcomes type 2 diabetes 2016' } },

    { id: 'finer', nome: 'Finerenona', grupo: 'Diabetes e doença renal',
      aplica: (p, c) => p.dm && c.drc && !c.icfer && !c.icfep,
      emUso: () => false,
      contra: (p, c) => (c.k != null && c.k > 5.0) ? 'K⁺ > 5,0 mEq/L' : null,
      beneficio: () => ({ base: 21.1, com: 17.8, arr: 3.3, nnt: 30, horiz: '~2,6 anos', txt: 'DRC com DM2 e albuminúria, em adição a IECA/BRA e iSGLT2. Vigiar K⁺.' }),
      estudo: { nome: 'FIDELIO-DKD (NEJM 2020)', q: 'FIDELIO-DKD finerenone chronic kidney disease type 2 diabetes 2020' } },

    // ---------------- Doença renal crônica (não diabética) ----------------
    { id: 'sglt2ckd', nome: 'iSGLT2 na DRC', grupo: 'Doença renal crônica',
      aplica: (p, c) => c.drc && !p.dm && !c.icfer && !c.icfep && (c.albumin || (c.tfg != null && c.tfg < 45)),
      emUso: p => p.m_isglt2,
      contra: (p, c) => (c.tfg != null && c.tfg < 20) ? 'TFG < 20 (não iniciar)' : (p.gravidez ? 'gravidez' : null),
      beneficio: () => ({ base: 14.5, com: 9.2, arr: 5.3, nnt: 19, horiz: '~2,4 anos', txt: 'DRC <b>mesmo sem diabetes</b> (sobretudo com albuminúria): retarda a progressão renal e reduz desfechos CV.' }),
      estudo: { nome: 'DAPA-CKD (NEJM 2020) / EMPA-KIDNEY (2023)', q: 'EMPA-KIDNEY empagliflozin chronic kidney disease 2023' }, doses: 'dapagliflozina' },

    { id: 'raas_ckd', nome: 'IECA/BRA (DRC albuminúrica)', grupo: 'Doença renal crônica',
      aplica: (p, c) => c.albumin && !c.icfer && !p.iam,
      emUso: p => p.m_ieca || p.m_arni,
      contra: (p, c) => p.gravidez ? 'contraindicado na gravidez' : (c.k != null && c.k > 5.5 ? 'K⁺ > 5,5 mEq/L' : null),
      beneficio: () => ({ txt: 'Na DRC com <b>albuminúria</b>, IECA/BRA na dose máxima tolerada reduz a proteinúria e retarda a progressão renal. Monitorar K⁺ e creatinina (alta &lt; 30% é aceitável).' }),
      estudo: { nome: 'RENAAL / IDNT', q: 'RENAAL losartan diabetic nephropathy renal outcomes' }, doses: 'enalapril' },

    { id: 'nefro', nome: 'Encaminhar à nefrologia', grupo: 'Doença renal crônica',
      aplica: (p, c) => c.tfg != null && c.tfg < 30,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: 'TFG &lt; 30 (G4–G5): encaminhar à nefrologia — planejar acesso/terapia renal substitutiva, manejar anemia/distúrbio mineral-ósseo e <b>evitar nefrotóxicos e contraste</b>. Ajustar doses pela função renal.' }),
      estudo: { nome: 'KDIGO 2024 — avaliação e manejo da DRC', q: 'KDIGO 2024 clinical practice guideline chronic kidney disease evaluation management' } },

    // ---------------- Valvopatia ----------------
    { id: 'eao', nome: 'Estenose aórtica grave — troca valvar', grupo: 'Valvopatia',
      aplica: (p) => p.eao,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: 'EAo grave <b>sintomática</b> (ou assintomática com FEVE &lt; 50%): indicação de <b>troca valvar — TAVI ou cirúrgica (SAVR)</b>, decidida pelo Heart Team conforme idade, risco e anatomia. Não retardar; usar vasodilatadores/diuréticos com cautela.' }),
      estudo: { nome: 'PARTNER 3 / Evolut Low Risk (NEJM 2019)', q: 'PARTNER 3 transcatheter aortic valve replacement low risk 2019' } },

    { id: 'im', nome: 'Insuficiência mitral grave', grupo: 'Valvopatia',
      aplica: (p) => p.im,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: 'IM <b>primária</b> grave sintomática (ou FEVE 30–60% / DSVE ≥ 40 mm): cirurgia, <b>preferindo o reparo</b>. IM <b>secundária</b> sintomática apesar de GDMT otimizada: considerar <b>TEER (MitraClip)</b> — reduz hospitalização e mortalidade em pacientes selecionados (COAPT).' }),
      estudo: { nome: 'COAPT (NEJM 2018)', q: 'COAPT transcatheter mitral valve repair heart failure 2018' } },

    { id: 'em', nome: 'Estenose mitral reumática', grupo: 'Valvopatia',
      aplica: (p) => p.em,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: 'EM reumática moderada/grave sintomática: <b>valvoplastia mitral percutânea por balão</b> se anatomia favorável e sem trombo/IM significativa; senão cirurgia. <b>Anticoagular</b> (varfarina — DOAC não validado na EM reumática) se FA, átrio gigante ou trombo. Profilaxia secundária de febre reumática.' }),
      estudo: { nome: 'ESC/EACTS 2021 — valvopatias', q: 'ESC EACTS 2021 guidelines valvular heart disease mitral stenosis' } },

    // ---------------- Hipertensão pulmonar ----------------
    { id: 'hp', nome: 'Hipertensão pulmonar — investigar e referenciar', grupo: 'Hipertensão pulmonar',
      aplica: (p) => p.hp,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: 'Confirmar o grupo por <b>cateterismo cardíaco direito</b> e encaminhar a centro especializado. Na <b>HAP (grupo 1)</b>: terapia específica (iPDE5/riociguate, antagonista de endotelina, prostanoides). <b>Não usar vasodilatadores pulmonares específicos</b> na HP de grupo 2 (cardíaca) ou 3 (pulmonar) — tratar a causa de base.' }),
      estudo: { nome: 'ESC/ERS 2022 — hipertensão pulmonar', q: 'ESC ERS 2022 guidelines pulmonary hypertension' } },

    // ---------------- Doença arterial periférica ----------------
    { id: 'compass', nome: 'Rivaroxabana 2,5 mg + AAS (esquema vascular)', grupo: 'Doença arterial periférica',
      aplica: (p) => (p.vascular || p.dcv) && !p.sca_rec && !p.m_aco,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ base: 5.4, com: 4.1, arr: 1.3, nnt: 77, horiz: '~23 meses', txt: 'Rivaroxabana <b>2,5 mg 2×/dia + AAS</b> na DAC/DAP estável reduz eventos CV e eventos adversos de membro (MALE) — ao custo de mais sangramento. Avaliar risco hemorrágico (não usar se já anticoagulado).' }),
      estudo: { nome: 'COMPASS (NEJM 2017)', q: 'COMPASS rivaroxaban aspirin stable cardiovascular disease 2017' }, doses: 'rivaroxabana' },

    { id: 'claudicacao', nome: 'Manejo da claudicação (DAP)', grupo: 'Doença arterial periférica',
      aplica: (p) => p.vascular,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: '<b>Exercício supervisionado</b> + cilostazol melhoram a distância de marcha. Estatina, antiagregante e <b>cessação do tabagismo</b> são mandatórios. Revascularização se claudicação limitante refratária ou isquemia crítica de membro.' }),
      estudo: { nome: 'ESC 2024 / AHA — doença arterial periférica', q: 'peripheral artery disease management supervised exercise cilostazol guideline' } },

    // ---------------- Miocardiopatias específicas ----------------
    { id: 'amiloidose', nome: 'Amiloidose cardíaca por TTR (ATTR-CM)', grupo: 'Miocardiopatias específicas',
      aplica: (p) => p.amiloidose,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ base: 42.9, com: 29.5, arr: 13.4, nnt: 8, horiz: '~2,5 anos', txt: '<b>Tafamide</b> (estabilizador de TTR) reduz mortalidade e hospitalização na ATTR-CM. <b>Cautela</b>: BB, IECA/BRA e ARNI costumam ser mal tolerados (débito fixo); <b>evitar digoxina e BCC</b>. Anticoagular se FA. Considerar tratar deficiência de ferro.' }),
      estudo: { nome: 'ATTR-ACT (NEJM 2018)', q: 'ATTR-ACT tafamidis transthyretin amyloid cardiomyopathy 2018' } },

    { id: 'cmh', nome: 'Cardiomiopatia hipertrófica (CMH)', grupo: 'Miocardiopatias específicas',
      aplica: (p) => p.cmh,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: 'CMH <b>obstrutiva</b> sintomática: 1ª linha betabloqueador ou verapamil; <b>EVITAR vasodilatadores, nitratos e diuréticos agressivos</b> (pioram a obstrução). <b>Mavacamteno</b> (inibidor de miosina — EXPLORER-HCM) se sintomas refratários. Estratificar morte súbita (<b>HCM Risk-SCD</b>) para CDI; rastrear familiares.' }),
      estudo: { nome: 'EXPLORER-HCM (Lancet 2020)', q: 'EXPLORER-HCM mavacamten obstructive hypertrophic cardiomyopathy 2020' } },

    { id: 'chagas', nome: 'Cardiopatia chagásica', grupo: 'Miocardiopatias específicas',
      aplica: (p) => p.chagas,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: 'Manejo de IC conforme a FEVE (pilares). <b>Alto risco de arritmia ventricular/morte súbita</b> e de bloqueios — avaliar Holter/CDI. <b>Tromboembolismo</b>: anticoagular conforme o escore de risco de Chagas (aneurisma apical, disfunção de VE, FA). Benznidazol na fase aguda/reativação ou em casos selecionados.' }),
      estudo: { nome: 'SBC 2023 — cardiopatia da doença de Chagas', q: 'Brazilian guideline Chagas cardiomyopathy management anticoagulation' } },

    // ---------------- Tromboembolismo venoso ----------------
    { id: 'aco_vte', nome: 'Anticoagulação (TEP/TVP)', grupo: 'Tromboembolismo venoso',
      aplica: (p) => p.vte,
      emUso: p => p.m_aco,
      contra: () => null,
      beneficio: () => ({ txt: '<b>DOAC de 1ª linha</b> (apixabana ou rivaroxabana — não exigem ponte com heparina). Mínimo de <b>3 meses</b>; estender se TEV não provocado ou fator de risco persistente (e baixo risco hemorrágico). No TEP, estratificar gravidade (sPESI + disfunção/biomarcadores de VD) — trombólise se alto risco/instável.' }),
      estudo: { nome: 'EINSTEIN / AMPLIFY', q: 'apixaban rivaroxaban acute venous thromboembolism AMPLIFY EINSTEIN' }, doses: 'rivaroxabana', score: 'wells_tep' },

    // ---------------- Pericárdio ----------------
    { id: 'peric', nome: 'Pericardite aguda — AINE + colchicina', grupo: 'Pericárdio',
      aplica: (p) => p.pericardite,
      emUso: p => p.m_colchicina,
      contra: () => null,
      beneficio: () => ({ txt: 'AAS ou AINE em dose plena (com IBP) <b>+ colchicina</b> — a colchicina reduz sintomas e <b>recorrência</b> (COPE/ICAP/CORP). Restrição de exercício até resolução; corticoide apenas se refratário/contraindicação ao AINE (favorece recorrência). Investigar etiologia e derrame.' }),
      estudo: { nome: 'ICAP (NEJM 2013)', q: 'ICAP colchicine acute pericarditis 2013' }, doses: 'colchicina' },

    // ---------------- Hipertensão resistente ----------------
    { id: 'resist', nome: 'Hipertensão resistente — 4ª droga', grupo: 'Hipertensão',
      aplica: (p) => p.has_resist,
      emUso: p => p.m_mra,
      contra: (p, c) => (c.k != null && c.k > 5.0) ? 'K⁺ > 5,0 (cautela com espironolactona)' : null,
      beneficio: () => ({ txt: 'Confirmar adesão e PA fora do consultório (afastar jaleco branco/pseudorresistência); otimizar <b>IECA/BRA + BCC + diurético tiazídico</b> em dose plena. Adicionar <b>espironolactona</b> como 4ª droga (PATHWAY-2). Investigar causas secundárias (apneia do sono, hiperaldosteronismo, doença renal, estenose de artéria renal).' }),
      estudo: { nome: 'PATHWAY-2 (Lancet 2015)', q: 'PATHWAY-2 spironolactone resistant hypertension 2015' }, doses: 'espironolactona' },

    // ---------------- Lípides — triglicérides ----------------
    { id: 'icosapent', nome: 'Icosapento de etila (TG alto + alto risco)', grupo: 'Lípides / aterosclerose',
      aplica: (p, c) => p.tg_alto && (c.ascvd || (p.dm && (p.risco10 == null || p.risco10 >= 7.5))) && p.m_estatina,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ base: 22.0, com: 17.2, arr: 4.8, nnt: 21, horiz: '~5 anos', txt: 'Alto risco com <b>TG 135–499 mg/dL apesar de estatina</b>: icosapento de etila 4 g/dia reduz eventos CV (REDUCE-IT). Atenção a risco de FA e sangramento. Fibrato não reduziu eventos nesse cenário; <b>não associar genfibrozila a estatina</b>.' }),
      estudo: { nome: 'REDUCE-IT (NEJM 2019)', q: 'REDUCE-IT icosapent ethyl cardiovascular risk 2019' } },

    // ---------------- Cardio-oncologia ----------------
    { id: 'onco', nome: 'Cardioproteção / vigilância (cardio-oncologia)', grupo: 'Cardio-oncologia',
      aplica: (p) => p.onco,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: 'Estratificar o risco basal e fazer <b>vigilância de FEVE/strain</b> (eco/RMC) e biomarcadores (troponina/BNP) antes e durante terapias cardiotóxicas (antraciclinas, anti-HER2, inibidores de VEGF/proteassoma, ICIs). Otimizar fatores de risco; iniciar <b>IECA/BRA + betabloqueador</b> se queda de FEVE/disfunção. Discutir com a oncologia (não suspender oncológico sem necessidade).' }),
      estudo: { nome: 'ESC 2022 — Cardio-oncologia', q: 'ESC 2022 cardio-oncology guidelines cardiotoxicity surveillance' } },

    // ---------------- Prevenção / estilo de vida ----------------
    { id: 'tabag', nome: 'Cessação do tabagismo', grupo: 'Prevenção / estilo de vida',
      aplica: (p) => p.tabag,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: '<b>A intervenção isolada de maior impacto</b> na prevenção CV. Aconselhamento estruturado + farmacoterapia: vareniclina (mais eficaz), bupropiona ou terapia de reposição de nicotina. O risco CV cai progressivamente após a parada.' }),
      estudo: { nome: 'Cochrane — farmacoterapia para cessação do tabagismo', q: 'pharmacological interventions smoking cessation Cochrane review' } },

    { id: 'pa_meta', nome: 'Controle pressórico (meta de PA)', grupo: 'Prevenção / estilo de vida',
      aplica: (p, c) => p.has && (c.pas == null || c.pas >= 130 || (c.pad != null && c.pad >= 80)),
      emUso: () => false,
      contra: () => null,
      beneficio: (p, c) => ({ txt: (c.pas != null ? 'PA atual <b>' + c.pas + '/' + (c.pad != null ? c.pad : '?') + ' mmHg</b> — acima da meta. ' : '') + 'Meta geralmente <b>&lt; 130/80 mmHg</b> se tolerada (AHA/ACC 2025; ESC 2024) — reduz AVC, IC e eventos CV (SPRINT). Estilo de vida (sal &lt; 2 g Na/dia, peso, exercício, álcool) + anti-hipertensivos; preferir combinação precoce.' }),
      estudo: { nome: 'SPRINT (NEJM 2015)', q: 'SPRINT intensive blood pressure control 2015' } },

    { id: 'atividade', nome: 'Atividade física e dieta cardioprotetora', grupo: 'Prevenção / estilo de vida',
      aplica: (p, c) => c.ascvd || p.ic || p.has || p.dm || c.obeso || (p.risco10 != null && p.risco10 >= 7.5),
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: '<b>≥ 150 min/semana</b> de atividade aeróbica moderada (ou 75 min vigorosa) + treino de força 2×/semana. Dieta tipo mediterrânea reduz eventos CV (PREDIMED). Base da prevenção primária e secundária.' }),
      estudo: { nome: 'PREDIMED (NEJM 2018)', q: 'PREDIMED mediterranean diet cardiovascular prevention 2018' } },

    { id: 'glicemia', nome: 'Controle glicêmico (metas individualizadas)', grupo: 'Prevenção / estilo de vida',
      aplica: (p) => p.dm,
      emUso: () => false,
      contra: () => null,
      beneficio: (p, c) => ({ txt: (c.hba1c != null ? 'HbA1c atual <b>' + c.hba1c + '%</b>. ' : '') + 'Meta de HbA1c <b>individualizada</b> (~7%, mais flexível em idosos/comorbidades). <b>Priorizar agentes com benefício CV/renal</b> (iSGLT2, GLP-1) sobre o controle glicêmico isolado; evitar hipoglicemia.' }),
      estudo: { nome: 'ADA/EASD — manejo da hiperglicemia (consenso)', q: 'ADA EASD consensus management hyperglycemia type 2 diabetes' } },

    { id: 'obes_glp1', nome: 'Semaglutida (obesidade + DCV, sem diabetes)', grupo: 'Prevenção / estilo de vida',
      aplica: (p, c) => c.obeso && c.ascvd && !p.dm,
      emUso: p => p.m_glp1,
      contra: p => p.gravidez ? 'gravidez' : null,
      beneficio: () => ({ base: 8.0, com: 6.5, arr: 1.5, nnt: 67, horiz: '~3,3 anos', txt: 'Sobrepeso/obesidade com DCV estabelecida e <b>sem diabetes</b>: semaglutida 2,4 mg reduz eventos cardiovasculares maiores (SELECT), além da perda de peso.' }),
      estudo: { nome: 'SELECT (NEJM 2023)', q: 'SELECT semaglutide cardiovascular outcomes obesity without diabetes 2023' } },

    { id: 'vacina', nome: 'Vacinação (influenza anual)', grupo: 'Prevenção / estilo de vida',
      aplica: (p, c) => c.ascvd || p.ic,
      emUso: () => false,
      contra: () => null,
      beneficio: () => ({ txt: 'Vacina <b>influenza anual</b> reduz eventos CV em pacientes com doença cardiovascular (IAMI) — recomendação Classe I. Considerar também pneumocócica e COVID-19 conforme calendário.' }),
      estudo: { nome: 'IAMI trial (Circulation 2021)', q: 'IAMI influenza vaccination acute myocardial infarction 2021' } }
  ];

  // Classe de recomendação e nível de evidência (referência geral ESC/AHA/SBC; pode variar por sociedade/contexto).
  const CLASSE = {
    raas: ['I', 'A'], bb: ['I', 'A'], mra: ['I', 'A'], sglt2hf: ['I', 'A'],
    diur: ['I', 'C'], ivab: ['IIa', 'B'], ferro: ['IIa', 'A'], vericiguat: ['IIb', 'B'], hidnit: ['IIa', 'B'],
    cdi: ['I', 'A'], trc: ['I', 'A'],
    sglt2pef: ['I', 'A'], mrapef: ['IIa', 'B'],
    aco: ['I', 'A'], fa_freq: ['I', 'B'], fa_ritmo: ['IIa', 'B'], fa_ablacao: ['I', 'A'],
    dapt: ['I', 'A'], bbpos: ['IIa', 'B'], iecapos: ['I', 'A'], colchicina: ['IIa', 'A'], angina: ['I', 'B'], reab: ['I', 'A'],
    estatina: ['I', 'A'], ezet: ['I', 'B'], pcsk9: ['I', 'A'], aas: ['I', 'A'],
    sglt2dm: ['I', 'A'], glp1: ['I', 'A'], finer: ['I', 'A'],
    sglt2ckd: ['I', 'A'], raas_ckd: ['I', 'A'], nefro: ['I', 'C'],
    eao: ['I', 'B'], im: ['I', 'B'], em: ['I', 'C'],
    hp: ['I', 'C'],
    compass: ['IIa', 'A'], claudicacao: ['I', 'A'],
    amiloidose: ['I', 'B'], cmh: ['I', 'B'], chagas: ['IIa', 'C'],
    aco_vte: ['I', 'B'], peric: ['I', 'A'], resist: ['I', 'B'], icosapent: ['IIa', 'B'], onco: ['I', 'C'],
    tabag: ['I', 'A'], pa_meta: ['I', 'A'], atividade: ['I', 'A'], glicemia: ['I', 'A'], obes_glp1: ['IIa', 'B'], vacina: ['I', 'B']
  };
  const CLASS_RANK = { I: 0, IIa: 1, IIb: 2, III: 3 };
  function classOf(iv) { return CLASSE[iv.id] || ['IIa', 'C']; }
  function impactTier(nnt) { if (nnt == null) return null; if (nnt <= 20) return 'alto'; if (nnt <= 50) return 'moderado'; return 'menor'; }
  const TIERS = [
    { cl: 'I', titulo: '✅ Classe I — recomendado (deve ser feito)' },
    { cl: 'IIa', titulo: '🟡 Classe IIa — razoável (provavelmente fazer)' },
    { cl: 'IIb', titulo: '🟠 Classe IIb — pode-se considerar' }
  ];

  // ---------- formulário ----------
  const NUM = [
    ['idade', 'Idade', 'anos'], ['cr', 'Creatinina', 'mg/dL'], ['k', 'Potássio', 'mEq/L'],
    ['pas', 'PA sistólica', 'mmHg'], ['pad', 'PA diastólica', 'mmHg'], ['fc', 'FC', 'bpm'],
    ['peso', 'Peso', 'kg'], ['altura', 'Altura', 'cm'], ['feve', 'FEVE', '%'],
    ['qrs', 'QRS', 'ms'], ['ldl', 'LDL atual', 'mg/dL'], ['hba1c', 'HbA1c', '%'],
    ['ferritina', 'Ferritina', 'ng/mL'], ['tsat', 'Sat. transferrina', '%'], ['risco10', 'Risco CV 10a', '%']
  ];
  const CAMPOS = `
    <h3 class="sc-title">Perfil do paciente</h3>
    <div class="sc-campos pac-grid">
      <label class="sc-campo"><span>Sexo</span><select id="pac-sexo"><option value="M">Masculino</option><option value="F">Feminino</option></select></label>
      <label class="sc-campo"><span>NYHA</span><select id="pac-nyha"><option value="">—</option><option value="1">I</option><option value="2">II</option><option value="3">III</option><option value="4">IV</option></select></label>
      ${NUM.map(c => `<label class="sc-campo"><span>${c[1]} <em>(${c[2]})</em></span><input type="number" step="any" id="pac-${c[0]}"></label>`).join('')}
    </div>
    <div class="pac-sec">ECG / achados</div>
    <div class="pac-checks">
      ${[['bre', 'BRE no ECG'], ['albumin', 'Albuminúria']].map(c => `<label class="sc-check"><input type="checkbox" id="pac-${c[0]}"><span>${c[1]}</span></label>`).join('')}
    </div>
    <div class="pac-sec">Comorbidades</div>
    <div class="pac-checks">
      ${[['has', 'Hipertensão'], ['dm', 'Diabetes'], ['dislip', 'Dislipidemia'], ['tabag', 'Tabagismo'], ['obesidade', 'Obesidade / sobrepeso'], ['dcv', 'DCV aterosclerótica estabelecida'], ['iam', 'IAM prévio'], ['sca_rec', 'SCA/ICP recente (≤12 meses)'], ['angina', 'Angina estável'], ['fa', 'Fibrilação atrial'], ['ic', 'Insuficiência cardíaca'], ['avc', 'AVC/AIT prévio'], ['vascular', 'Doença arterial periférica/carótida'], ['eao', 'Estenose aórtica grave'], ['im', 'Insuf. mitral grave'], ['em', 'Estenose mitral reumática'], ['hp', 'Hipertensão pulmonar'], ['amiloidose', 'Amiloidose cardíaca (ATTR)'], ['cmh', 'Cardiomiopatia hipertrófica'], ['chagas', 'Doença de Chagas'], ['vte', 'TEP/TVP (tromboembolismo venoso)'], ['pericardite', 'Pericardite aguda'], ['has_resist', 'Hipertensão resistente'], ['tg_alto', 'Hipertrigliceridemia (TG 135–499)'], ['onco', 'Terapia oncológica cardiotóxica'], ['asma', 'Asma/DPOC grave'], ['gravidez', 'Gestante']]
      .map(c => `<label class="sc-check"><input type="checkbox" id="pac-${c[0]}"><span>${c[1]}</span></label>`).join('')}
    </div>
    <div class="pac-sec">Medicações / terapias em uso</div>
    <div class="pac-checks">
      ${[['m_ieca', 'IECA/BRA'], ['m_arni', 'ARNI (sacubitril/valsartana)'], ['m_bb', 'Betabloqueador'], ['m_mra', 'Espironolactona/eplerenona'], ['m_isglt2', 'iSGLT2'], ['m_diur', 'Diurético de alça'], ['m_ivab', 'Ivabradina'], ['m_vericiguat', 'Vericiguate'], ['m_hidnit', 'Hidralazina + nitrato'], ['m_ferro', 'Ferro EV'], ['m_cdi', 'CDI'], ['m_trc', 'TRC (ressincronizador)'], ['m_estatina', 'Estatina'], ['m_ezet', 'Ezetimiba'], ['m_pcsk9', 'Inibidor de PCSK9'], ['m_aas', 'AAS'], ['m_p2y12', 'Clopidogrel/ticagrelor/prasugrel'], ['m_colchicina', 'Colchicina'], ['m_nitrato', 'Nitrato'], ['m_bcc', 'Bloq. canal de cálcio'], ['m_reab', 'Em reabilitação cardíaca'], ['m_aco', 'Anticoagulante'], ['m_digoxina', 'Digoxina'], ['m_antiarr', 'Antiarrítmico'], ['m_ablacao', 'Ablação de FA prévia'], ['m_glp1', 'Agonista de GLP-1']]
      .map(c => `<label class="sc-check"><input type="checkbox" id="pac-${c[0]}"><span>${c[1]}</span></label>`).join('')}
    </div>`;

  const NUM_KEYS = NUM.map(c => c[0]);
  const MED_KEYS = ['m_ieca', 'm_arni', 'm_bb', 'm_mra', 'm_isglt2', 'm_diur', 'm_ivab', 'm_vericiguat', 'm_hidnit', 'm_ferro', 'm_cdi', 'm_trc', 'm_estatina', 'm_ezet', 'm_pcsk9', 'm_aas', 'm_p2y12', 'm_colchicina', 'm_nitrato', 'm_bcc', 'm_reab', 'm_aco', 'm_digoxina', 'm_antiarr', 'm_ablacao', 'm_glp1'];
  const COMORB_KEYS = ['bre', 'albumin', 'has', 'dm', 'dislip', 'tabag', 'obesidade', 'dcv', 'iam', 'sca_rec', 'angina', 'fa', 'ic', 'avc', 'vascular', 'eao', 'im', 'em', 'hp', 'amiloidose', 'cmh', 'chagas', 'vte', 'pericardite', 'has_resist', 'tg_alto', 'onco', 'asma', 'gravidez'];

  function read() {
    P.sexo = document.getElementById('pac-sexo').value;
    P.nyha = n(document.getElementById('pac-nyha').value);
    NUM_KEYS.forEach(k => { P[k] = n(document.getElementById('pac-' + k).value); });
    COMORB_KEYS.concat(MED_KEYS).forEach(k => { P[k] = document.getElementById('pac-' + k).checked; });
  }

  function ctxFrom() {
    const fem = P.sexo === 'F';
    const tfg = ckdepi(P.cr, P.idade, fem);
    let cv = 0; const id = P.idade || 0;
    if (id >= 75) cv += 2; else if (id >= 65) cv += 1;
    if (P.ic) cv += 1; if (P.has) cv += 1; if (P.dm) cv += 1; if (P.avc) cv += 2; if (P.vascular || P.iam) cv += 1;
    const icfer = P.ic && P.feve != null && P.feve <= 40;
    const icfep = P.ic && P.feve != null && P.feve > 40;
    const drc = tfg != null && tfg < 60;
    const ascvd = !!(P.dcv || P.iam || P.vascular || P.sca_rec);
    const imc = (P.peso && P.altura) ? P.peso / Math.pow(P.altura / 100, 2) : null;
    const obeso = !!(P.obesidade || (imc != null && imc >= 30));
    const sinus = !P.fa;
    let ferropenia = null;
    if (P.ferritina != null) ferropenia = (P.ferritina < 100) || (P.ferritina < 300 && (P.tsat == null || P.tsat < 20));
    return { tfg, k: P.k, fc: P.fc, cv, icfer, icfep, drc, ascvd, imc, obeso, sinus, nyha: P.nyha, qrs: P.qrs, bre: P.bre, pas: P.pas, pad: P.pad, hba1c: P.hba1c, ferropenia, albumin: !!P.albumin };
  }

  function nums(b) {
    if (b.nnt == null) return '';
    return `<div class="pac-nums">
      <div class="pac-num"><span class="pac-n-v">${r1(b.base)}%</span><span class="pac-n-l">sem tratar</span></div>
      <div class="pac-arw">→</div>
      <div class="pac-num"><span class="pac-n-v">${r1(b.com)}%</span><span class="pac-n-l">com</span></div>
      <div class="pac-num pac-nnt"><span class="pac-n-v">NNT ${b.nnt}</span><span class="pac-n-l">${b.horiz}</span></div>
    </div>`;
  }
  function estudoLink(e) {
    return `<div class="pac-estudo">📚 <b>Estudo-base:</b> <a class="tema-trial-link" href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(e.q)}&sort=relevance" target="_blank" rel="noopener">${esc(e.nome)}</a></div>`;
  }
  function estudoLinkInline(e) {
    return '<a class="tema-trial-link" href="https://pubmed.ncbi.nlm.nih.gov/?term=' + encodeURIComponent(e.q) + '&sort=relevance" target="_blank" rel="noopener">' + esc(e.nome) + '</a>';
  }
  function cardLinks(iv) {
    const bts = [];
    if (iv.doses) bts.push('<button class="pac-go" data-go="doses" data-arg="' + esc(iv.doses) + '">💊 Dose / ajuste renal</button>');
    if (iv.score) bts.push('<button class="pac-go" data-go="score" data-arg="' + esc(iv.score) + '">🧮 Calcular score</button>');
    if (iv.score2) bts.push('<button class="pac-go" data-go="score" data-arg="' + esc(iv.score2) + '">🩸 ARC-HBR (sangramento)</button>');
    if (iv.evid) bts.push('<button class="pac-go" data-go="evid" data-arg="' + esc(iv.evid) + '">📚 Ver recomendação</button>');
    return '<div class="pac-golinks">' + bts.join('') + '</div>';
  }

  function badges(iv, b) {
    const cl = classOf(iv);
    const it = impactTier(b.nnt);
    const clCss = 'c-' + cl[0].replace(/[^A-Za-z0-9]/g, '');
    let h = '<div class="pac-badges">';
    h += '<span class="pac-classe ' + clCss + '">Classe ' + cl[0] + '</span>';
    h += '<span class="pac-nivel">Nível ' + cl[1] + '</span>';
    if (it) h += '<span class="pac-impact imp-' + it + '">' + (it === 'alto' ? 'Alto impacto' : it === 'moderado' ? 'Impacto moderado' : 'Impacto menor') + ' · NNT ' + b.nnt + '</span>';
    else h += '<span class="pac-impact imp-quali">Benefício qualitativo</span>';
    h += '</div>';
    return h;
  }
  function agentesBlock(iv) {
    if (!iv.agentes) return '';
    let h = '<div class="pac-agentes"><div class="pac-agentes-t">Escolha do agente / evidência comparada</div>';
    iv.agentes.forEach(a => {
      h += '<div class="pac-agente"><b>' + esc(a.n) + '</b>' + (a.t && a.t !== '—' ? ' <span class="pac-agente-t">' + esc(a.t) + '</span>' : '') + '<div class="pac-agente-o">' + a.o + '</div></div>';
    });
    if (iv.agentesNota) h += '<div class="pac-agente-nota">⚠ ' + iv.agentesNota + '</div>';
    return h + '</div>';
  }
  function gapCard(g) {
    return '<div class="pac-card"><div class="pac-card-h">' + esc(g.iv.nome) + ' <span class="pac-tag">' + esc(g.iv.grupo) + '</span></div>' +
      badges(g.iv, g.b) + nums(g.b) +
      '<div class="pac-txt">' + g.b.txt + (g.b.arr != null ? ' <b>Redução absoluta ≈ ' + r1(g.b.arr) + '%.</b>' : '') + '</div>' +
      agentesBlock(g.iv) + estudoLink(g.iv.estudo) + cardLinks(g.iv) + '</div>';
  }

  function riscoBlock(c) {
    let txt, showPrevent = true;
    if (c.ascvd || c.icfer || c.icfep) {
      txt = '<b>Muito alto risco</b> (prevenção secundária / doença CV estabelecida) — meta de LDL <b>&lt; 55 mg/dL</b> e redução ≥ 50%, PA &lt; 130/80. Não é necessário calcular escore.';
      showPrevent = false;
    } else if (c.drc) {
      txt = '<b>DRC</b> — risco alto a muito alto conforme TFG/albuminúria; meta de LDL &lt; 70 (ou &lt; 55 se muito alto). Calculadora de escore tem valor limitado na DRC avançada.';
      showPrevent = false;
    } else if (P.dm) {
      txt = '<b>Diabetes</b> — risco alto a muito alto conforme tempo de doença, lesão de órgão-alvo e fatores de risco. Use a versão para diabetes (PREVENT/SCORE2-Diabetes).';
    } else if (P.risco10 != null) {
      const r = P.risco10; const cat = r < 5 ? 'baixo' : r < 7.5 ? 'limítrofe' : r < 20 ? 'intermediário' : 'alto';
      txt = 'Risco informado: <b>' + r + '%</b> em 10 anos — categoria <b>' + cat + '</b>.' + (r >= 7.5 ? ' Favorece estatina + estilo de vida.' : ' Foco em estilo de vida; reavaliar periodicamente.');
    } else {
      txt = 'Sem evento aterosclerótico estabelecido — <b>calcule o risco em 10 anos</b> (PREVENT/AHA) e preencha o campo "Risco CV 10a" para personalizar as metas.';
    }
    let links = '<div class="pac-golinks">';
    if (showPrevent) {
      links += '<button class="pac-go" data-go="score" data-arg="prevent">🧮 Abrir PREVENT no site</button>';
      links += '<a class="pac-go" style="text-decoration:none;display:inline-block" href="https://professional.heart.org/en/guidelines-and-statements/prevent-calculator" target="_blank" rel="noopener">↗ Calculadora PREVENT (AHA)</a>';
    }
    links += '</div>';
    return '<div class="pac-risco"><b>🎯 Risco cardiovascular:</b> ' + txt + links + '</div>';
  }

  let lastPlan = '';

  function compute() {
    read();
    const c = ctxFrom();
    const out = document.getElementById('pac-out');

    let bits = [];
    if (c.tfg) bits.push('TFG ≈ <b>' + c.tfg + '</b>' + (c.tfg < 30 ? ' (DRC avançada)' : c.drc ? ' (DRC)' : ''));
    if (c.imc != null) bits.push('IMC ' + r1(c.imc));
    if (P.feve != null) bits.push('FEVE <b>' + P.feve + '%</b>' + (c.icfer ? ' (ICFEr)' : c.icfep ? ' (ICFEp/ICFEmr)' : ''));
    if (c.nyha) bits.push('NYHA ' + ['', 'I', 'II', 'III', 'IV'][c.nyha]);
    if (P.fa) bits.push('CHA₂DS₂-VA = <b>' + c.cv + '</b>');
    if (c.pas != null) bits.push('PA ' + c.pas + '/' + (c.pad != null ? c.pad : '?'));
    if (P.k != null) bits.push('K⁺ ' + P.k);
    const resumo = '<div class="pac-resumo"><b>Gêmeo digital:</b> ' + (bits.length ? bits.join(' · ') : 'preencha o perfil ao lado') + '.</div>';

    const gaps = [], uso = [], contra = [];
    INTERV.forEach(iv => {
      if (!iv.aplica(P, c)) return;
      if (iv.emUso(P)) { uso.push(iv); return; }
      const ct = iv.contra(P, c);
      if (ct) { contra.push({ iv, motivo: ct }); return; }
      gaps.push({ iv, b: iv.beneficio(P, c) });
    });

    const actions = '<div class="pac-actions">' +
      '<button class="pac-go pac-go-main" data-go="score" data-arg="chadsvasc">🧮 Scores (CHA₂DS₂-VA, ClCr…)</button>' +
      '<button class="pac-go pac-go-main" data-go="pretest" data-arg="">🎯 Pré-teste de DAC</button>' +
      '<button class="pac-go pac-go-main" data-go="copy" data-arg="">📋 Copiar plano p/ prontuário</button>' +
      '</div>';

    let html = resumo + actions + riscoBlock(c);
    const totalInd = gaps.length + uso.length + contra.length;
    if (totalInd) html += '<div class="pac-score">Terapias indicadas: <b>' + totalInd + '</b> · em uso <b>' + uso.length + '</b> · <b style="color:#b07414">oportunidades ' + gaps.length + '</b> · contraindicadas ' + contra.length + '</div>';

    // ordena por prioridade: Classe (I > IIa > IIb) e, dentro da classe, menor NNT (maior impacto)
    gaps.sort((a, b) => {
      const ra = CLASS_RANK[classOf(a.iv)[0]] ?? 1, rb = CLASS_RANK[classOf(b.iv)[0]] ?? 1;
      if (ra !== rb) return ra - rb;
      const na = a.b.nnt == null ? 9999 : a.b.nnt, nb = b.b.nnt == null ? 9999 : b.b.nnt;
      return na - nb;
    });

    if (gaps.length) {
      html += '<h3 class="sc-title pac-h-gap">⚠ Oportunidades — priorizadas por classe e impacto</h3>';
      html += '<div class="pac-legenda">Ordenadas pela <b>força da recomendação</b> (Classe I → IIa → IIb) e, dentro de cada nível, pelo <b>impacto</b> (menor NNT primeiro).</div>';
      TIERS.forEach(t => {
        const lista = gaps.filter(g => classOf(g.iv)[0] === t.cl);
        if (!lista.length) return;
        html += '<div class="pac-tier pac-tier-' + t.cl.replace(/[^A-Za-z0-9]/g, '') + '">' + t.titulo + ' <span class="pac-tier-n">(' + lista.length + ')</span></div>';
        lista.forEach(g => { html += gapCard(g); });
      });
    }
    if (uso.length) {
      html += '<h3 class="sc-title pac-h-uso">✓ Em uso (manter e titular)</h3><div class="pac-lista">' +
        uso.map(iv => '<div class="pac-li pac-li-uso"><b>' + esc(iv.nome) + '</b> · ' + estudoLinkInline(iv.estudo) + '</div>').join('') + '</div>';
    }
    if (contra.length) {
      html += '<h3 class="sc-title pac-h-contra">✕ Contraindicado / cautela</h3><div class="pac-lista">' +
        contra.map(x => {
          const cl = classOf(x.iv);
          return '<div class="pac-li pac-li-contra"><b>' + esc(x.iv.nome) + '</b> '
            + '<span class="pac-classe ' + ('c-' + cl[0].replace(/[^A-Za-z0-9]/g, '')) + '">Classe ' + cl[0] + '</span>'
            + '<span class="pac-nivel">Nível ' + cl[1] + '</span>'
            + ' — ' + esc(x.motivo) + '</div>';
        }).join('') + '</div>';
    }
    if (!totalInd) html += '<p class="muted small">Preencha as comorbidades e as medicações para ver as oportunidades de otimização (ex.: marque Insuficiência cardíaca + FEVE 30% e veja os 4 pilares).</p>';

    out.innerHTML = html;
    lastPlan = montarPlano(c, gaps, uso, contra);
  }

  function montarPlano(c, gaps, uso, contra) {
    const L = [];
    L.push('PLANO — gêmeo digital (CardioResidente)');
    let perfil = [];
    if (P.idade) perfil.push(P.idade + 'a');
    perfil.push(P.sexo === 'F' ? 'feminino' : 'masculino');
    if (c.tfg) perfil.push('TFG ' + c.tfg);
    if (c.imc != null) perfil.push('IMC ' + r1(c.imc));
    if (P.feve != null) perfil.push('FEVE ' + P.feve + '%' + (c.icfer ? ' (ICFEr)' : c.icfep ? ' (ICFEp/ICFEmr)' : ''));
    if (c.nyha) perfil.push('NYHA ' + ['', 'I', 'II', 'III', 'IV'][c.nyha]);
    if (P.fa) perfil.push('CHA2DS2-VA ' + c.cv);
    if (c.pas != null) perfil.push('PA ' + c.pas + '/' + (c.pad != null ? c.pad : '?'));
    if (P.k != null) perfil.push('K ' + P.k);
    L.push('Perfil: ' + perfil.join(', ') + '.');
    L.push('');
    L.push('OPORTUNIDADES (otimizar — por prioridade):');
    if (gaps.length) gaps.forEach(g => { const cl = classOf(g.iv); L.push('- [Classe ' + cl[0] + '/' + cl[1] + '] ' + g.iv.nome.replace(/<[^>]+>/g, '') + (g.b.nnt != null ? ' (NNT ' + g.b.nnt + ', ' + g.iv.estudo.nome.split(' (')[0] + ')' : '')); });
    else L.push('- (nenhuma identificada)');
    L.push('');
    L.push('EM USO (manter e titular):');
    if (uso.length) uso.forEach(iv => L.push('- ' + iv.nome.replace(/<[^>]+>/g, '')));
    else L.push('- (nenhuma registrada)');
    L.push('');
    L.push('CONTRAINDICADO / CAUTELA:');
    if (contra.length) contra.forEach(x => L.push('- ' + x.iv.nome.replace(/<[^>]+>/g, '') + ' — ' + x.motivo));
    else L.push('- (nenhuma)');
    L.push('');
    L.push('Obs.: apoio à decisão baseado em diretrizes; NNT assume RRR constante. Conferir e individualizar.');
    return L.join('\n');
  }

  function go(view, after) { if (window.cardioGoView) window.cardioGoView(view); if (after) setTimeout(after, 80); }
  function handleGo(act, arg) {
    if (act === 'doses') go('doses', () => { const i = document.getElementById('dz-busca'); if (i) { i.value = arg; i.dispatchEvent(new Event('input')); } });
    else if (act === 'score') go('scores', () => { if (window.cardioScoreFill) window.cardioScoreFill(arg); });
    else if (act === 'pretest') go('pretest', () => { if (window.cardioPretestFill) window.cardioPretestFill(); });
    else if (act === 'evid') go('evidencia', () => { const i = document.getElementById('busca-input'); if (i) { i.value = arg; const f = document.getElementById('busca-form'); if (f) f.dispatchEvent(new Event('submit', { cancelable: true })); } });
    else if (act === 'copy') { if (window.copyText) window.copyText(lastPlan); else navigator.clipboard.writeText(lastPlan); }
  }

  root.innerHTML =
    '<div class="rec-revbanner">Monte o paciente (dados clínicos + comorbidades + o que ele <b>já usa</b>) e o gêmeo digital mostra as <b>lacunas de tratamento</b> com benefício absoluto/NNT e estudo, o que está <b>em uso</b> e o que está <b>contraindicado</b>. Quanto mais dados (PA, NYHA, QRS, ferritina, albuminúria…), mais precisas as condutas. Botões levam a Scores/Pré-teste/Doses já preenchidos e você pode copiar o plano. Apoio à decisão; não substitui o julgamento clínico.</div>' +
    '<div class="pac-wrap"><div class="pac-form">' + CAMPOS + '</div><div class="pac-out" id="pac-out"></div></div>';

  // expõe o resumo do paciente para o Tutor socrático discutir o caso
  window.cardioPaciente = { texto: () => lastPlan };

  root.querySelectorAll('.pac-form input, .pac-form select').forEach(el => el.addEventListener('input', compute));
  document.getElementById('pac-out').addEventListener('click', e => {
    const b = e.target.closest('.pac-go'); if (!b) return;
    handleGo(b.dataset.go, b.dataset.arg || '');
  });
  compute();
})();
