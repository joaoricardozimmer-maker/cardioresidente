// Hub Paciente — sub-aba "Diagnóstico": raciocínio bayesiano por contexto (agudo/ambulatorial).
// Fluxo: quadro clínico → PRÉ-teste automática → exame sugerido (com LR) → lança-se o resultado →
// PÓS-teste (em cadeia). Inclui limiares de ação, aviso de independência condicional e guardas de
// segurança. Apoio à decisão; não substitui o julgamento clínico.
// Fontes: HEART (Six 2008), ESC 2024 (RF-CL), Wells/PERC, ADD-RS (Klompas 2002), Goldstein 2005,
// Gillmore 2016 (PYP), séries Rational Clinical Examination (JAMA) e meta-análises de acurácia.
(function () {
  const root = document.getElementById('diagnostico-root');
  if (!root) return;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const r1 = x => Math.round(x * 10) / 10;
  const fmt = x => (x == null) ? '—' : String(Math.round(x * 100) / 100).replace('.', ',');
  const odds = p => p / (1 - p), prob = o => o / (1 + o);
  const pct = v => Math.max(0, Math.min(100, v));

  const RFCL = {
    s01: { W: [[0, 1, 2], [1, 1, 3], [1, 2, 5], [2, 4, 7], [4, 7, 11]], M: [[1, 2, 5], [2, 4, 8], [4, 7, 12], [8, 12, 17], [15, 19, 24]] },
    s2: { W: [[0, 1, 3], [1, 2, 5], [2, 3, 7], [3, 6, 11], [6, 10, 16]], M: [[2, 4, 8], [3, 6, 12], [6, 11, 17], [12, 17, 25], [22, 27, 34]] },
    s3: { W: [[2, 5, 10], [4, 7, 12], [6, 10, 15], [10, 14, 19], [16, 19, 23]], M: [[9, 14, 22], [14, 20, 27], [21, 27, 33], [32, 35, 39], [44, 44, 45]] }
  };
  function ageIdx(a) { return a == null ? 2 : a < 40 ? 0 : a < 50 ? 1 : a < 60 ? 2 : a < 70 ? 3 : 4; }

  const TARGETS = [
    // ---------- AGUDO: dor torácica → SCA (HEART clínico) ----------
    {
      id: 'sca', nome: 'Dor torácica aguda → SCA', contextos: ['agudo'],
      alerta: 'Diretriz SBC 2025 (Dor Torácica na Emergência): o <b>HEART é o escore preferencial</b> na suspeita de SCA (superior a EDACS/ADAPT/TIMI/GRACE na avaliação inicial). Fluxo em 4 passos: ECG ≤ 10 min → estratificar (HEART + troponina hs 0/1–0/3 h) → decidir → observar. <b>Supra de ST → ativar reperfusão</b>, não “calcular”. ECG normal + troponina negativa <b>não excluem angina instável</b>. Lembre dos diagnósticos competitivos (TEP, dissecção).',
      thresholds: { test: 2, treat: 70, vTest: '≤ ~2% (MACE) — protocolo de alta/observação curta costuma ser razoável.', vTreat: '≥ ~70% — tratar como SCA / estratégia invasiva.' },
      inputs: function () {
        const m = S.scaMetodo;
        const metodoSel = '<label class="sc-campo diag-metodo"><span>Método de pré-teste / estratificação</span><select id="dg-metodo">' +
          '<option value="clinico"' + (m === 'clinico' ? ' selected' : '') + '>Clínico (H+idade+FR) → encadear ECG/troponina</option>' +
          '<option value="heart"' + (m === 'heart' ? ' selected' : '') + '>HEART completo (score de MACE)</option>' +
          '<option value="edacs"' + (m === 'edacs' ? ' selected' : '') + '>EDACS-ADP (via de baixo risco)</option>' +
          '</select></label>';
        const fr = '<div class="diag-sub">Fatores de risco / DAC conhecida</div><div class="pac-checks">' +
          '<label class="sc-check"><input type="checkbox" id="dg-sfam"><span>História familiar de DAC precoce</span></label>' +
          '<label class="sc-check"><input type="checkbox" id="dg-stab"><span>Tabagismo</span></label>' +
          '<label class="sc-check"><input type="checkbox" id="dg-sdisl"><span>Dislipidemia</span></label>' +
          '<label class="sc-check"><input type="checkbox" id="dg-shas"><span>Hipertensão</span></label>' +
          '<label class="sc-check"><input type="checkbox" id="dg-sdm"><span>Diabetes</span></label>' +
          '<label class="sc-check"><input type="checkbox" id="dg-sdac"><span>DAC conhecida (IAM/ICP/CRM, estenose ≥ 50%)</span></label></div>';
        if (m === 'edacs') {
          return metodoSel +
            '<div class="sc-campos diag-grid"><label class="sc-campo"><span>Sexo</span><select id="dg-sexo"><option value="M">Masculino</option><option value="F">Feminino</option></select></label>' +
            '<label class="sc-campo"><span>Idade <em>(anos)</em></span><input type="number" id="dg-sidade"></label></div>' +
            '<div class="pac-checks">' +
            '<label class="sc-check"><input type="checkbox" id="dg-cadedacs"><span>DAC conhecida ou ≥ 3 fatores de risco (18–50 a)</span></label>' +
            '<label class="sc-check"><input type="checkbox" id="dg-diaf"><span>Diaforese</span></label>' +
            '<label class="sc-check"><input type="checkbox" id="dg-irrad"><span>Dor irradia para braço/ombro/pescoço/mandíbula</span></label>' +
            '<label class="sc-check"><input type="checkbox" id="dg-pleur"><span>Dor ocorre/piora com inspiração</span></label>' +
            '<label class="sc-check"><input type="checkbox" id="dg-palp"><span>Dor reproduzível à palpação</span></label>' +
            '<label class="sc-check"><input type="checkbox" id="dg-ecgisq"><span>ECG SEM nova isquemia</span></label>' +
            '<label class="sc-check"><input type="checkbox" id="dg-tropneg"><span>Troponina 0/2 h negativa</span></label>' +
            '</div>';
        }
        let h = metodoSel + '<div class="sc-campos diag-grid">' +
          '<label class="sc-campo"><span>' + (m === 'heart' ? 'História' : 'Suspeição pela história') + '</span><select id="dg-hist"><option value="0">Pouco suspeita</option><option value="1" selected>Moderadamente suspeita</option><option value="2">Muito suspeita</option></select></label>' +
          '<label class="sc-campo"><span>Idade <em>(anos)</em></span><input type="number" id="dg-sidade"></label></div>';
        if (m === 'heart') {
          h += '<div class="sc-campos diag-grid">' +
            '<label class="sc-campo"><span>ECG</span><select id="dg-ecg"><option value="0">Normal</option><option value="1">Alteração inespecífica da repolarização</option><option value="2">Infra de ST significativo</option></select></label>' +
            '<label class="sc-campo"><span>Troponina</span><select id="dg-trop"><option value="0">≤ limite</option><option value="1">1–3× o limite</option><option value="2">&gt; 3× o limite</option></select></label></div>';
        }
        return h + fr;
      },
      pretest: function () {
        const m = S.scaMetodo;
        const num = id => { const e = document.getElementById(id); return e ? parseFloat(e.value) : NaN; };
        const chk = id => { const e = document.getElementById(id); return e ? e.checked : false; };
        const sel = id => { const e = document.getElementById(id); return e ? (parseInt(e.value, 10) || 0) : 0; };
        const nrf = ['dg-sfam', 'dg-stab', 'dg-sdisl', 'dg-shas', 'dg-sdm'].filter(i => { const e = document.getElementById(i); return e && e.checked; }).length;
        if (m === 'heart') {
          const idade = num('dg-sidade'); const a = !isFinite(idade) ? 1 : (idade < 45 ? 0 : idade < 65 ? 1 : 2);
          const rf = (chk('dg-sdac') || nrf >= 3) ? 2 : (nrf >= 1 ? 1 : 0);
          const s = sel('dg-hist') + sel('dg-ecg') + a + rf + sel('dg-trop');
          let risk, disp;
          if (s <= 3) { risk = 1.7; disp = '<b>Baixo risco</b> (MACE ~0,9–1,7%) — em geral permite alta com seguimento.'; }
          else if (s <= 6) { risk = 15; disp = '<b>Risco moderado</b> (MACE ~12–17%) — internar/observar, seriar troponina, investigar isquemia.'; }
          else { risk = 58; disp = '<b>Alto risco</b> (MACE ~50–65%) — estratégia invasiva precoce.'; }
          return { pre: risk, nota: 'HEART completo = ' + s + '/10 (história + ECG + idade + FR + troponina).', scoreMode: true, disp: disp };
        }
        if (m === 'edacs') {
          const idade = num('dg-sidade');
          const ageP = !isFinite(idade) ? 0 : (idade < 46 ? 2 : idade < 51 ? 4 : idade < 56 ? 6 : idade < 61 ? 8 : idade < 66 ? 10 : idade < 71 ? 12 : idade < 76 ? 14 : idade < 81 ? 16 : idade < 86 ? 18 : 20);
          const sexP = document.getElementById('dg-sexo') && document.getElementById('dg-sexo').value === 'M' ? 6 : 0;
          let ed = ageP + sexP + (chk('dg-cadedacs') ? 4 : 0) + (chk('dg-diaf') ? 3 : 0) + (chk('dg-irrad') ? 5 : 0) + (chk('dg-pleur') ? -4 : 0) + (chk('dg-palp') ? -6 : 0);
          const low = ed < 16 && chk('dg-ecgisq') && chk('dg-tropneg');
          return { pre: low ? 1 : 15, nota: 'EDACS = ' + ed + (ed < 16 ? ' (< 16)' : ' (≥ 16)') + '. ADP exige também ECG sem isquemia + troponina 0/2 h negativa.', scoreMode: true, disp: low ? '<b>EDACS-ADP: baixo risco</b> — candidato a alta precoce (MACE muito baixo).' : '<b>Não preenche a via de baixo risco</b> — observar, seriar troponina e investigar.' };
        }
        const h = sel('dg-hist');
        const idade = num('dg-sidade'); const a = !isFinite(idade) ? 1 : (idade < 45 ? 0 : idade < 65 ? 1 : 2);
        const rf = (chk('dg-sdac') || nrf >= 3) ? 2 : (nrf >= 1 ? 1 : 0);
        const score = h + a + rf;
        const map = { 0: 3, 1: 6, 2: 10, 3: 18, 4: 30, 5: 45, 6: 58 };
        return { pre: map[score], nota: 'HEART clínico (H+A+FR, sem troponina/ECG) = ' + score + '/6 → estimativa ' + map[score] + '%. ECG e troponina entram como testes abaixo.' };
      },
      exames: [
        { ctx: 'agudo', grupo: 'ecg', nome: 'ECG', ref: 'Panju, JAMA 1998', res: [['Supra de ST novo', 11], ['Infra de ST novo', 5.2], ['Onda Q nova', 3.9], ['Alteração inespecífica de T', 1.3], ['Normal', 0.2]] },
        { ctx: 'agudo', grupo: 'necrose', nome: 'Troponina hs — LR por intervalo (concentração/Δ)', ref: 'hs-cTn (cortes assay-específicos)', res: [['Muito baixa (< LoD; ex.: hs-cTnT < 5 ng/L)', 0.02], ['Baixa (ex.: 5–14 ng/L) e Δ 0/1 h pequeno', 0.3], ['Intermediária (ex.: 14–52 ng/L)', 3], ['Alta (> 52 ng/L) ou Δ 0/1 h significativo', 20]] },
        { ctx: 'agudo', grupo: 'anatomia', nome: 'Angio-TC de coronárias', ref: 'Meta-análise (sens 95/espec 76)', res: [['Estenose ≥ 50%', 4.0], ['Sem estenose significativa', 0.07]] }
      ]
    },
    // ---------- AMBULATORIAL: dor torácica → DAC crônica (RF-CL) ----------
    {
      id: 'dac', nome: 'Dor torácica → DAC crônica (RF-CL)', contextos: ['ambulatorial'],
      alerta: 'Modelo <b>RF-CL da ESC 2024</b> — validado para <b>síndrome coronariana crônica</b> (dor estável ambulatorial). Não use no contexto agudo. Evite combinar dois testes de isquemia (não são independentes).',
      thresholds: { test: 5, treat: 85, vTest: '≤ ~5% — DAC obstrutiva improvável; em geral adiar testes.', vTreat: '≥ ~85% — considerar coronariografia/estratégia invasiva.' },
      inputs: `
        <div class="sc-campos diag-grid">
          <label class="sc-campo"><span>Sexo</span><select id="dg-sexo"><option value="M">Masculino</option><option value="W">Feminino</option></select></label>
          <label class="sc-campo"><span>Idade <em>(anos)</em></span><input type="number" id="dg-idade"></label>
        </div>
        <div class="diag-sub">Características da dor (score de sintomas)</div>
        <div class="pac-checks">
          <label class="sc-check"><input type="checkbox" id="dg-cp1"><span>Desconforto retroesternal típico</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-cp2"><span>Agravado por esforço/estresse</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-cp3"><span>Aliviado por repouso/nitrato em 5 min</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-disp"><span>Dispneia como sintoma principal (= 2 pontos)</span></label>
        </div>
        <div class="diag-sub">Fatores de risco</div>
        <div class="pac-checks">
          <label class="sc-check"><input type="checkbox" id="dg-fam"><span>História familiar de DAC precoce</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-tab"><span>Tabagismo</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-disl"><span>Dislipidemia</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-has"><span>Hipertensão</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-dm"><span>Diabetes</span></label>
        </div>`,
      pretest: function () {
        const sexo = document.getElementById('dg-sexo').value;
        const idade = parseFloat(document.getElementById('dg-idade').value);
        const disp = document.getElementById('dg-disp').checked;
        const score = disp ? 2 : ['dg-cp1', 'dg-cp2', 'dg-cp3'].filter(i => document.getElementById(i).checked).length;
        const col = disp ? 's2' : (score <= 1 ? 's01' : score === 2 ? 's2' : 's3');
        const nrf = ['dg-fam', 'dg-tab', 'dg-disl', 'dg-has', 'dg-dm'].filter(i => document.getElementById(i).checked).length;
        const rfg = nrf <= 1 ? 0 : nrf <= 3 ? 1 : 2;
        const p = RFCL[col][sexo][ageIdx(isFinite(idade) ? idade : null)][rfg];
        return { pre: p, nota: 'RF-CL (ESC 2024): score de sintomas ' + (disp ? 'dispneia (2)' : score) + ', ' + nrf + ' fator(es) de risco.' };
      },
      link: 'pretest',
      exames: [
        { ctx: 'ambulatorial', grupo: 'isquemia', nome: 'Teste ergométrico', ref: 'Meta-análise 2025', res: [['Positivo (isquemia)', 1.7], ['Negativo', 0.56], ['Inconclusivo', 1]] },
        { ctx: 'ambulatorial', grupo: 'isquemia', nome: 'Ecocardiograma de estresse', ref: 'Meta-análise 2025', res: [['Positivo', 5.4], ['Negativo', 0.22]] },
        { ctx: 'ambulatorial', grupo: 'isquemia', nome: 'Cintilografia de perfusão (SPECT)', ref: 'Meta-análise 2025', res: [['Positivo', 3.2], ['Negativo', 0.24]] },
        { ctx: 'ambulatorial', grupo: 'isquemia', nome: 'RM cardíaca de estresse (perfusão)', ref: 'CE-MARC', res: [['Positivo', 6.8], ['Negativo', 0.13]] },
        { ctx: 'ambulatorial', grupo: 'anatomia', nome: 'Angio-TC de coronárias', ref: 'Meta-análise', res: [['Estenose ≥ 50%', 4.0], ['Sem estenose significativa', 0.07]] },
        { ctx: 'ambulatorial', grupo: 'anatomia', nome: 'Escore de cálcio coronário (CAC)', ref: 'CAD Consortium (aprox.)', res: [['CAC = 0', 0.15], ['CAC 1–99', 1.3], ['CAC 100–399', 4.0], ['CAC ≥ 400', 12]] }
      ]
    },
    {
      id: 'tep', nome: 'Suspeita de embolia pulmonar (TEP)', contextos: ['agudo'],
      alerta: 'Em pré-teste <b>baixa</b>, aplique a regra <b>PERC</b> (8 critérios): se todos negativos, exclui TEP sem D-dímero. Use <b>D-dímero ajustado por idade</b> (idade × 10 µg/L se > 50 a); o algoritmo <b>YEARS</b> também é aceito pela AHA/ACC 2026, inclusive na gestação. <b>Não use D-dímero em pré-teste alta</b> (> 50%) — vá direto à angio-TC. O <b>ecocardiograma não confirma nem exclui TEP</b>: ele estratifica. Confirmado o diagnóstico, classifique em A–E (aba Scores → Categoria clínica do TEP).',
      thresholds: { test: 1.85, vTest: '≤ ~1,85% — TEP excluído (limiar de teste, Kline).' },
      inputs: `
        <div class="diag-sub">Critérios de Wells (TEP)</div>
        <div class="pac-checks">
          <label class="sc-check"><input type="checkbox" id="dg-w1"><span>Sinais clínicos de TVP (3)</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-w2"><span>TEP é o diagnóstico mais provável (3)</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-w3"><span>FC > 100 bpm (1,5)</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-w4"><span>Imobilização/cirurgia ≤ 4 sem (1,5)</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-w5"><span>TVP/TEP prévio (1,5)</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-w6"><span>Hemoptise (1)</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-w7"><span>Câncer ativo (1)</span></label>
        </div>`,
      pretest: function () {
        const w = (id, v) => document.getElementById(id).checked ? v : 0;
        const s = w('dg-w1', 3) + w('dg-w2', 3) + w('dg-w3', 1.5) + w('dg-w4', 1.5) + w('dg-w5', 1.5) + w('dg-w6', 1) + w('dg-w7', 1);
        const p = s < 2 ? 3.6 : (s <= 6 ? 20.5 : 66.7);
        const cat = s < 2 ? 'baixa' : (s <= 6 ? 'moderada' : 'alta');
        return { pre: p, nota: 'Wells = ' + (Math.round(s * 10) / 10) + ' → probabilidade clínica ' + cat + '.' };
      },
      exames: [
        { ctx: 'agudo', grupo: 'dimero', nome: 'D-dímero (corte ajustado por idade)', ref: 'ADJUST-PE', guard: p => p >= 20 ? 'Pré-teste não-baixa: o D-dímero perde utilidade — prossiga para angio-TC.' : null, res: [['Negativo (< idade × 10 µg/L)', 0.09], ['Positivo', 1.6]] },
        { ctx: 'agudo', grupo: 'imagem', nome: 'Angio-TC de tórax', ref: 'Meta-análise (sens 83/espec 96)', res: [['Positiva (TEP)', 20.8], ['Negativa', 0.11]] },
        { ctx: 'agudo', grupo: 'imagem', nome: 'Cintilografia V/Q', ref: 'PIOPED', res: [['Alta probabilidade', 18], ['Intermediária', 1], ['Normal/baixa', 0.05]] }
      ]
    },
    {
      id: 'ic', nome: 'Dispneia → Insuficiência cardíaca', contextos: ['agudo', 'ambulatorial'],
      inputs: `
        <div class="diag-sub">Probabilidade pré-teste (ajuste ao quadro)</div>
        <label class="sc-campo" style="max-width:320px"><span>Pré-teste estimada <em>(%)</em></span><input type="number" id="dg-icpre"></label>
        <p class="muted small">Sugestão: dispneia aguda na emergência ~50%; ambulatório ~30%. Os achados de exame abaixo entram como testes na cadeia.</p>`,
      pretest: function (ctx) {
        let p = parseFloat(document.getElementById('dg-icpre').value);
        if (!isFinite(p)) p = ctx === 'agudo' ? 50 : 30;
        return { pre: p, nota: 'Pré-teste estimada pelo contexto/quadro (' + r1(p) + '%).' };
      },
      exames: [
        { ctx: 'ambos', grupo: 'hist', nome: 'História prévia de IC', ref: 'Wang 2005', res: [['Presente', 5.8], ['Ausente', 0.45]] },
        { ctx: 'ambos', grupo: 'exame', nome: 'Terceira bulha (B3)', ref: 'Wang 2005', res: [['Presente', 11], ['Ausente', 0.88]] },
        { ctx: 'agudo', grupo: 'peptideo', nome: 'NT-proBNP (corte ajustado por idade)', ref: 'Januzzi (PRIDE)', res: [['< 300 pg/mL', 0.02], ['> 450 (<50a) / >900 (50–75) / >1800 (>75)', 4], ['Zona cinzenta', 1]] },
        { ctx: 'ambos', grupo: 'peptideo', nome: 'BNP', ref: 'Wang 2005 / Worster', res: [['< 100 pg/mL', 0.13], ['> 400 pg/mL', 7.6], ['100–400', 1]] },
        { ctx: 'ambos', grupo: 'imagem', nome: 'RX de tórax', ref: 'Wang 2005', res: [['Congestão venosa pulmonar', 12], ['Cardiomegalia', 3.3], ['Sem alterações', 0.48]] },
        { ctx: 'ambos', grupo: 'imagem', nome: 'Ecocardiograma', ref: 'clínico', res: [['FEVE reduzida / disfunção', 4.3], ['Normal', 0.3]] }
      ]
    },
    {
      id: 'aorta', nome: 'Dor torácica → Dissecção / síndrome aórtica aguda', contextos: ['agudo'],
      alerta: '<b>ADD-RS ≥ 2 → imagem direta</b> (angio-TC): não descarte por D-dímero isolado no alto risco. O D-dímero (< 500) é útil sobretudo no risco baixo/intermediário (ADvISED).',
      inputs: `
        <div class="diag-sub">ADD-RS (Aortic Dissection Detection Risk Score)</div>
        <div class="pac-checks">
          <label class="sc-check"><input type="checkbox" id="dg-acond"><span>Condição de alto risco (Marfan/conectivopatia, história familiar de doença aórtica, valva aórtica bicúspide, aneurisma ou manipulação aórtica prévia)</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-ador"><span>Dor de alto risco (início abrupto, intensidade máxima súbita, caráter dilacerante/rasgando)</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-aexame"><span>Exame de alto risco (déficit de pulso / diferença de PA, sopro de IAo novo, déficit neurológico focal com dor, hipotensão/choque)</span></label>
        </div>`,
      pretest: function () {
        const n = ['dg-acond', 'dg-ador', 'dg-aexame'].filter(i => document.getElementById(i).checked).length;
        const p = n === 0 ? 2 : (n === 1 ? 12 : 40);
        return { pre: p, nota: 'ADD-RS = ' + n + ' categoria(s) → probabilidade ' + (n === 0 ? 'baixa' : n === 1 ? 'intermediária' : 'alta') + ' (estimativa).' };
      },
      exames: [
        { ctx: 'agudo', grupo: 'dimero', nome: 'D-dímero', ref: 'Klompas 2002 / ADvISED', guard: p => p >= 40 ? 'ADD-RS alto: imagem direta — não descartar por D-dímero.' : null, res: [['Negativo (< 500 ng/mL)', 0.06], ['Positivo', 1.5]] },
        { ctx: 'agudo', grupo: 'imagem', nome: 'RX de tórax (mediastino)', ref: 'Klompas 2002', res: [['Mediastino alargado', 2.0], ['Normal', 0.3]] },
        { ctx: 'agudo', grupo: 'exame', nome: 'Déficit de pulso ao exame', ref: 'Klompas 2002', res: [['Presente', 5.7], ['Ausente', 0.7]] },
        { ctx: 'agudo', grupo: 'imagem', nome: 'Angio-TC de aorta', ref: 'padrão-ouro', res: [['Positiva (dissecção/hematoma)', 40], ['Negativa', 0.02]] }
      ]
    },
    {
      id: 'avc', nome: 'Déficit neurológico agudo → AVC', contextos: ['agudo'],
      alerta: 'Excluir <b>hipoglicemia</b> primeiro. A TC sem contraste diferencia isquêmico × hemorrágico. Fonte: Goldstein, JAMA 2005.',
      inputs: `
        <div class="diag-sub">Probabilidade pré-teste (ajuste ao quadro)</div>
        <label class="sc-campo" style="max-width:320px"><span>Pré-teste estimada <em>(%)</em></span><input type="number" id="dg-avcpre"></label>
        <p class="muted small">Déficit neurológico focal de início súbito.</p>`,
      pretest: function () {
        let p = parseFloat(document.getElementById('dg-avcpre').value);
        if (!isFinite(p)) p = 50;
        return { pre: p, nota: 'Pré-teste estimada pelo quadro (' + r1(p) + '%).' };
      },
      exames: [
        { ctx: 'agudo', grupo: 'escala', nome: 'Escala pré-hospitalar (FAST / Cincinnati)', ref: 'Goldstein 2005', res: [['Qualquer item alterado (face/braço/fala)', 5.5], ['Todos normais', 0.4]] },
        { ctx: 'agudo', grupo: 'lab', nome: 'Glicemia capilar', ref: 'mimético', res: [['Hipoglicemia (mimético — corrigir e reavaliar)', 0.1], ['Normal', 1]] },
        { ctx: 'agudo', grupo: 'imagem', nome: 'RM com difusão (DWI)', ref: 'alta sensibilidade p/ isquemia', res: [['Restrição à difusão (isquemia aguda)', 15], ['Sem restrição', 0.1]] }
      ]
    },
    {
      id: 'amiloide', nome: 'IC / HVE inexplicada → Amiloidose (ATTR)', contextos: ['ambulatorial'],
      alerta: 'A cintilografia com <b>99mTc-pirofosfato (PYP)</b> só firma <b>ATTR</b> após <b>excluir gamopatia monoclonal</b> (eletroforese + cadeias leves séricas): a amiloidose AL também pode captar. Perugini 2–3 + ausência de proteína monoclonal ≈ diagnóstico sem biópsia (Gillmore 2016).',
      inputs: `
        <div class="diag-sub">Sinais de alarme (red flags)</div>
        <div class="pac-checks">
          <label class="sc-check"><input type="checkbox" id="dg-am1"><span>HVE inexplicada com espessamento &gt; 12 mm</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-am2"><span>Discordância voltagem (baixa) × massa de VE</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-am3"><span>Síndrome do túnel do carpo bilateral / ruptura de bíceps</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-am4"><span>Estenose aórtica de baixo fluxo/baixo gradiente em idoso</span></label>
          <label class="sc-check"><input type="checkbox" id="dg-am5"><span>Neuropatia / disautonomia; intolerância a BB/IECA</span></label>
        </div>`,
      pretest: function () {
        const n = ['dg-am1', 'dg-am2', 'dg-am3', 'dg-am4', 'dg-am5'].filter(i => document.getElementById(i).checked).length;
        const p = n === 0 ? 3 : (n <= 2 ? 15 : 40);
        return { pre: p, nota: n + ' red flag(s) → probabilidade ' + (n === 0 ? 'baixa' : n <= 2 ? 'intermediária' : 'alta') + ' (estimativa).' };
      },
      exames: [
        { ctx: 'ambulatorial', grupo: 'cintilo', nome: 'Cintilografia óssea 99mTc-PYP (gamopatia excluída)', ref: 'Gillmore 2016', res: [['Perugini grau 2–3', 40], ['Perugini grau 0–1', 0.03]] },
        { ctx: 'ambulatorial', grupo: 'imagem', nome: 'RM cardíaca (realce tardio / T1 nativo, VEC)', ref: 'imagem', res: [['Realce subendocárdico difuso / VEC muito alto', 8], ['Ausente', 0.3]] }
      ]
    },
    {
      id: 'arritmia', nome: 'Palpitações / síncope → Arritmia', contextos: ['ambulatorial', 'agudo'], monitor: true,
      inputs: '<p class="muted small">A escolha do monitor depende da <b>frequência dos sintomas</b>. Abaixo, o rendimento diagnóstico típico (não é razão de verossimilhança).</p>',
      monitores: [
        { nome: 'Holter 24–48 h', quando: 'sintomas diários', rend: '~10–15%' },
        { nome: 'Holter prolongado (7–14 dias)', quando: 'sintomas algumas vezes/semana', rend: '~20–25%' },
        { nome: 'Monitor de eventos (event recorder)', quando: 'sintomas semanais', rend: '~25–35%' },
        { nome: 'Monitor externo prolongado (patch, 14–30 d)', quando: 'sintomas esparsos', rend: '~ até 50%' },
        { nome: 'Looper implantável (ILR)', quando: 'síncope inexplicada recorrente / sintomas raros', rend: '~ até 50–70% em 1–3 anos' },
        { nome: 'Teste ergométrico', quando: 'arritmia relacionada ao esforço', rend: 'seletivo' }
      ]
    }
  ];

  const S = { ctx: 'agudo', target: 'sca', res: {}, scaMetodo: 'clinico' };

  function shell() {
    return '<div class="rec-revbanner">Monte o caso, obtenha a <b>probabilidade pré-teste automática</b>, escolha um <b>exame</b> conforme o contexto e lance o resultado — a <b>probabilidade pós-teste</b> é recalculada em cadeia, com <b>limiares de ação</b>. Assume independência entre os testes (aproximação); não substitui o julgamento clínico.</div>' +
      '<div class="diag-ctx" id="diag-ctx">' +
      '<button class="diag-ctxbtn" data-c="agudo">🚑 Agudo (emergência)</button>' +
      '<button class="diag-ctxbtn" data-c="ambulatorial">🏥 Ambulatorial</button>' +
      '</div>' +
      '<label class="sc-campo diag-tsel"><span>Cenário / alvo diagnóstico</span><select id="diag-target"></select></label>' +
      '<div class="diag-wrap"><div class="diag-form" id="diag-form"></div><div class="diag-out" id="diag-out"></div></div>';
  }

  function renderCtx() {
    document.querySelectorAll('.diag-ctxbtn').forEach(b => b.classList.toggle('on', b.dataset.c === S.ctx));
    const sel = document.getElementById('diag-target');
    const avail = TARGETS.filter(t => t.contextos.includes(S.ctx));
    sel.innerHTML = avail.map(t => '<option value="' + t.id + '">' + esc(t.nome) + '</option>').join('');
    if (!avail.find(t => t.id === S.target)) S.target = avail[0].id;
    sel.value = S.target;
  }

  function renderForm() {
    const t = TARGETS.find(x => x.id === S.target);
    const form = document.getElementById('diag-form');
    const inputsHtml = typeof t.inputs === 'function' ? t.inputs() : (t.inputs || '');
    form.innerHTML = '<h3 class="sc-title">' + esc(t.nome) + '</h3>' + inputsHtml;
    form.querySelectorAll('input, select').forEach(el => el.addEventListener('input', () => { compute(); }));
    const mm = document.getElementById('dg-metodo');
    if (mm) mm.addEventListener('change', () => { S.scaMetodo = mm.value; renderForm(); });
    S.res = {};
    compute();
  }

  function examesDo(t) { return t.monitor ? [] : t.exames.filter(e => e.ctx === S.ctx || e.ctx === 'ambos'); }

  function threshBar(t, post) {
    if (!t.thresholds) return '';
    const th = t.thresholds, test = th.test, treat = th.treat;
    let z = '<div class="diag-thbar">';
    if (test != null) z += '<span class="thz thz-ok" style="width:' + test + '%"></span>';
    z += '<span class="thz thz-mid" style="width:' + ((treat != null ? treat : 100) - (test != null ? test : 0)) + '%"></span>';
    if (treat != null) z += '<span class="thz thz-hi" style="width:' + (100 - treat) + '%"></span>';
    z += '<span class="thz-marker" title="pós-teste" style="left:' + pct(post) + '%"></span></div>';
    let v;
    if (test != null && post < test) v = th.vTest || 'Abaixo do limiar de teste.';
    else if (treat != null && post >= treat) v = th.vTreat || 'Acima do limiar de tratamento.';
    else v = 'Zona de teste — investigação adicional muda a conduta.';
    return z + '<div class="diag-verdict">' + v + '</div>';
  }

  function compute() {
    const t = TARGETS.find(x => x.id === S.target);
    const out = document.getElementById('diag-out');
    if (t.monitor) {
      out.innerHTML = '<div class="pac-resumo"><b>Rendimento diagnóstico dos monitores</b> (escolha pela frequência dos sintomas):</div>' +
        '<table class="mbc-table"><thead><tr><th>Método</th><th>Quando</th><th>Rendimento</th></tr></thead><tbody>' +
        t.monitores.map(m => '<tr><td>' + esc(m.nome) + '</td><td class="mbc-ref" style="white-space:normal">' + esc(m.quando) + '</td><td class="mbe-num">' + esc(m.rend) + '</td></tr>').join('') +
        '</tbody></table><p class="muted small">Valores aproximados; o rendimento cresce com a duração da monitorização e a correlação sintoma-ritmo.</p>';
      return;
    }
    const pr = t.pretest(S.ctx);
    if (pr.scoreMode) {
      const nivel = pr.pre >= 50 ? 'sc-bad' : (pr.pre >= 15 ? 'sc-warn' : 'sc-ok');
      out.innerHTML =
        (t.alerta ? '<div class="diag-alerta">⚠ ' + t.alerta + '</div>' : '') +
        '<div class="diag-pre">' + esc(pr.nota) + '</div>' +
        '<div class="sc-result ' + nivel + '"><div class="sc-conduta">' +
        '<div class="mbc-barwrap"><div class="mbc-barlbl">Risco</div><div class="mbc-bar mbc-bar-post"><span style="width:' + pct(pr.pre) + '%"></span></div></div>' +
        '<div class="mbc-post">' + pr.disp + '</div>' +
        threshBar(t, pr.pre) +
        '<div class="sc-extra">Score de decisão validado — o ECG e a troponina já entram no cálculo, por isso não são encadeados novamente (evita dupla contagem).</div>' +
        '</div></div>';
      return;
    }
    const exs = examesDo(t);
    let o = odds(pr.pre / 100), net = 1; const aplic = []; const gruposSel = {}; let stSupra = false;
    exs.forEach((e, i) => {
      const key = t.id + '_' + i; const sel = S.res[key];
      if (sel == null || sel === '') return;
      const lr = parseFloat(sel); if (!isFinite(lr)) return;
      o *= lr; net *= lr;
      const rot = e.res.find(r => String(r[1]) === sel);
      if (rot && /Supra de ST/.test(rot[0])) stSupra = true;
      if (e.grupo) gruposSel[e.grupo] = (gruposSel[e.grupo] || 0) + 1;
      aplic.push(esc(e.nome) + ': ' + (rot ? rot[0] : '') + ' (LR ' + fmt(lr) + ')');
    });
    const post = prob(o) * 100;
    const nivel = post >= 50 ? 'sc-bad' : (post >= 15 ? 'sc-warn' : 'sc-ok');
    const depend = Object.keys(gruposSel).some(g => gruposSel[g] >= 2);

    const preExtra = t.link === 'pretest' ? ' <button class="mbe-usar" id="diag-topretest">📊 Ver tabela RF-CL (aba Pré-teste)</button>' : '';
    let rows = exs.map((e, i) => {
      const key = t.id + '_' + i; const cur = S.res[key] || '';
      const opts = '<option value="">— não realizado —</option>' + e.res.map(r => '<option value="' + r[1] + '"' + (String(r[1]) === cur ? ' selected' : '') + '>' + esc(r[0]) + ' · LR ' + fmt(r[1]) + '</option>').join('');
      const g = e.guard ? e.guard(pr.pre) : null;
      return '<tr><td class="mbc-ach">' + esc(e.nome) + '<div class="mbc-ref">' + esc(e.ref) + '</div>' + (g ? '<div class="diag-guard">⚠ ' + g + '</div>' : '') + '</td>' +
        '<td class="diag-rescell"><select class="diag-res" data-k="' + key + '">' + opts + '</select></td></tr>';
    }).join('');

    out.innerHTML =
      (t.alerta ? '<div class="diag-alerta">⚠ ' + t.alerta + '</div>' : '') +
      (stSupra ? '<div class="diag-alerta diag-alerta-red">🚨 Supra de ST → <b>ativar reperfusão imediatamente</b> (não “calcular”).</div>' : '') +
      '<div class="diag-pre">Probabilidade <b>pré-teste</b>: <b class="mbe-big">' + r1(pr.pre) + '%</b><div class="mbc-ref" style="white-space:normal">' + esc(pr.nota) + preExtra + '</div></div>' +
      '<div class="sc-result ' + nivel + '"><div class="sc-conduta">' +
      '<div class="mbc-barwrap"><div class="mbc-barlbl">Pré ' + r1(pr.pre) + '%</div><div class="mbc-bar"><span style="width:' + pct(pr.pre) + '%"></span></div></div>' +
      '<div class="mbc-barwrap"><div class="mbc-barlbl">Pós <b>' + r1(post) + '%</b></div><div class="mbc-bar mbc-bar-post"><span style="width:' + pct(post) + '%"></span></div></div>' +
      '<div class="mbc-post">Probabilidade <b>pós-teste</b> ≈ <b class="mbe-big">' + r1(post) + '%</b>' + (aplic.length ? ' · LR combinada ' + fmt(net) : '') + '</div>' +
      threshBar(t, post) +
      (aplic.length ? '<div class="sc-extra">' + aplic.join(' · ') + '.</div>' : '<div class="sc-extra">Escolha o resultado de um exame para atualizar a pós-teste.</div>') +
      (depend ? '<div class="diag-guard" style="margin-top:8px">⚠ Você combinou 2+ testes do mesmo eixo fisiopatológico — eles <b>não são independentes</b>; a pós-teste tende a estar <b>superestimada</b>. Prefira o teste de maior acurácia isolado.</div>' : '') +
      '</div></div>' +
      '<div class="diag-sub">Exames sugeridos — ' + (S.ctx === 'agudo' ? 'contexto agudo' : 'ambulatorial') + '</div>' +
      '<table class="mbc-table"><thead><tr><th>Exame</th><th>Resultado</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<button class="mbe-usar" id="diag-reset">Limpar resultados</button>';

    out.querySelectorAll('.diag-res').forEach(s => s.addEventListener('change', () => { S.res[s.dataset.k] = s.value; compute(); }));
    const rb = document.getElementById('diag-reset'); if (rb) rb.addEventListener('click', () => { S.res = {}; compute(); });
    const tp = document.getElementById('diag-topretest'); if (tp) tp.addEventListener('click', () => { if (window.cardioGoView) window.cardioGoView('pretest'); });
  }

  window.cardioDiagSetDAC = function (d) {
    S.ctx = 'ambulatorial'; S.target = 'dac';
    renderCtx();
    const sel = document.getElementById('diag-target'); if (sel) sel.value = 'dac';
    renderForm();
    const set = (id, v) => { const e = document.getElementById(id); if (e != null) { if (e.type === 'checkbox') e.checked = !!v; else if (v != null) e.value = v; } };
    set('dg-sexo', d.sexo === 'W' ? 'W' : 'M'); set('dg-idade', d.idade);
    set('dg-cp1', d.cp1); set('dg-cp2', d.cp2); set('dg-cp3', d.cp3); set('dg-disp', d.disp);
    set('dg-fam', d.fam); set('dg-tab', d.tab); set('dg-disl', d.disl); set('dg-has', d.has); set('dg-dm', d.dm);
    compute();
    if (window.toast) window.toast('Pré-teste levada ao Diagnóstico (DAC crônica)');
  };

  root.innerHTML = shell();
  document.querySelectorAll('.diag-ctxbtn').forEach(b => b.addEventListener('click', () => { S.ctx = b.dataset.c; renderCtx(); renderForm(); }));
  document.getElementById('diag-target').addEventListener('change', e => { S.target = e.target.value; renderForm(); });
  renderCtx();
  renderForm();
})();
