// Aba "Pré-teste": Risk Factor-weighted Clinical Likelihood (RF-CL) — ESC 2024 (Figura 4).
// Valores transcritos da Figura 4 da diretriz (Winther et al.). % de DAC obstrutiva.
(function () {
  const root = document.getElementById('pretest-root');
  if (!root) return;

  // RFCL[scoreCol][sexo] = [ por idade ][ por grupo de FR: 0-1, 2-3, 4-5 ]
  // scoreCol: 's01' (0-1 ponto), 's2' (2 pontos / dispneia), 's3' (3 pontos)
  // idades: 30-39, 40-49, 50-59, 60-69, 70-80
  const RFCL = {
    s01: {
      W: [[0, 1, 2], [1, 1, 3], [1, 2, 5], [2, 4, 7], [4, 7, 11]],
      M: [[1, 2, 5], [2, 4, 8], [4, 7, 12], [8, 12, 17], [15, 19, 24]]
    },
    s2: {
      W: [[0, 1, 3], [1, 2, 5], [2, 3, 7], [3, 6, 11], [6, 10, 16]],
      M: [[2, 4, 8], [3, 6, 12], [6, 11, 17], [12, 17, 25], [22, 27, 34]]
    },
    s3: {
      W: [[2, 5, 10], [4, 7, 12], [6, 10, 15], [10, 14, 19], [16, 19, 23]],
      M: [[9, 14, 22], [14, 20, 27], [21, 27, 33], [32, 35, 39], [44, 44, 45]]
    }
  };
  const AGES = ['30-39', '40-49', '50-59', '60-69', '70-80'];
  const RFG = ['0-1', '2-3', '4-5'];
  const RFS = [
    { id: 'rf-fam', t: 'História familiar de DAC precoce (♂ < 55, ♀ < 65 anos)' },
    { id: 'rf-tab', t: 'Tabagismo (atual ou prévio)' },
    { id: 'rf-disl', t: 'Dislipidemia' },
    { id: 'rf-has', t: 'Hipertensão arterial' },
    { id: 'rf-dm', t: 'Diabetes melito' }
  ];
  const CPS = [
    { id: 'cp1', t: 'Desconforto retroesternal típico (ou pescoço, mandíbula, ombro, braço) — 1 ponto' },
    { id: 'cp2', t: 'Agravado por esforço físico ou estresse emocional — 1 ponto' },
    { id: 'cp3', t: 'Aliviado por repouso ou nitrato em até 5 min — 1 ponto' }
  ];

  function categoria(p) {
    if (p <= 5) return { nome: 'Muito baixa (≤5%)', cls: 'sc-ok', cond: 'DAC obstrutiva muito improvável — em geral <b>adiar testes diagnósticos</b> e investigar outras causas.' };
    if (p <= 15) return { nome: 'Baixa (&gt;5–15%)', cls: 'sc-ok', cond: 'Considerar adiar; se prosseguir, o <b>escore de cálcio coronário</b> ajuda a reclassificar. Angio-TC é boa opção para excluir DAC.' };
    if (p <= 50) return { nome: 'Moderada (&gt;15–50%)', cls: 'sc-warn', cond: '<b>Angio-TC de coronárias</b> ou <b>imagem funcional de isquemia</b> (PET/SPECT, RM de estresse, eco de estresse) como primeira linha.' };
    if (p <= 85) return { nome: 'Alta (&gt;50–85%)', cls: 'sc-bad', cond: 'Preferir <b>imagem funcional de isquemia</b>; considerar invasivo conforme sintomas/risco.' };
    return { nome: 'Muito alta (&gt;85%)', cls: 'sc-bad', cond: '<b>Angiografia coronária invasiva (CATE)</b> recomendada.' };
  }
  function cor(p) { return p <= 5 ? '#2f6f9f' : (p <= 15 ? '#1f9d57' : '#b07414'); }

  const defs =
    '<div class="pt-defs"><b>Score de sintomas (ESC 2024, substitui típica/atípica):</b> dor torácica soma 1 ponto para cada — (1) desconforto retroesternal típico; (2) agravado por esforço/estresse; (3) aliviado por repouso/nitrato em 5 min (0–3 pontos). <b>Dispneia</b> ao esforço como sintoma principal = 2 pontos.</div>';

  const calc =
    '<div class="pt-card">' +
    '<h3 class="sc-title">RF-CL — likelihood clínica de DAC (ESC 2024)</h3>' +
    '<p class="muted small">Modelo recomendado (Classe I-B): combina sexo, idade, score de sintomas e nº de fatores de risco.</p>' +
    '<div class="sc-campos">' +
    '<label class="sc-campo"><span>Sexo</span><select id="pt-sexo"><option value="M">Masculino</option><option value="W">Feminino</option></select></label>' +
    '<label class="sc-campo"><span>Faixa etária</span><select id="pt-idade">' + AGES.map((f, i) => '<option value="' + i + '">' + f + ' anos</option>').join('') + '</select></label>' +
    '<label class="sc-campo"><span>Sintoma principal</span><select id="pt-sint"><option value="dor">Dor torácica</option><option value="disp">Dispneia ao esforço (2 pontos)</option></select></label>' +
    '</div>' +
    '<div id="pt-cp-wrap"><div class="pt-rf-title">Características da dor torácica:</div>' +
    '<div class="pt-rfs">' + CPS.map(c => '<label class="sc-check"><input type="checkbox" id="' + c.id + '"><span>' + c.t + '</span></label>').join('') + '</div></div>' +
    '<div class="pt-rf-title">Fatores de risco para DAC (0–5):</div>' +
    '<div class="pt-rfs">' + RFS.map(r => '<label class="sc-check"><input type="checkbox" id="' + r.id + '"><span>' + r.t + '</span></label>').join('') + '</div>' +
    '<div id="pt-out" class="sc-result sc-info"></div>' +
    '</div>';

  const cats =
    '<div class="pt-card"><h3 class="sc-title">Categorias e conduta (ESC 2024)</h3>' +
    '<table class="pt-table"><thead><tr><th>Likelihood clínica</th><th>Conduta recomendada</th></tr></thead><tbody>' +
    '<tr><td class="pt-cell" style="background:#2f6f9f">≤5% — muito baixa</td><td>Adiar testes; DAC obstrutiva muito improvável.</td></tr>' +
    '<tr><td class="pt-cell" style="background:#1f9d57">&gt;5–15% — baixa</td><td>Considerar adiar; escore de cálcio reclassifica; angio-TC opcional.</td></tr>' +
    '<tr><td class="pt-cell" style="background:#b07414">&gt;15–50% — moderada</td><td>Angio-TC de coronárias ou imagem funcional de isquemia.</td></tr>' +
    '<tr><td class="pt-cell" style="background:#c10e21">&gt;50–85% — alta</td><td>Imagem funcional de isquemia (preferível).</td></tr>' +
    '<tr><td class="pt-cell" style="background:#8d0a18">&gt;85% — muito alta</td><td>Angiografia coronária invasiva (CATE).</td></tr>' +
    '</tbody></table>' +
    '<p class="muted small">Fonte: ESC 2024 — SCC (Vrints et al.), Figura 4 (dados de Winther et al.). No RF-CL os valores vão até ~45%, ficando entre muito baixa, baixa e moderada.</p>' +
    '<a class="rec-fonte-link" href="https://academic.oup.com/eurheartj/article-pdf/45/36/3415/59561235/ehae177.pdf" target="_blank" rel="noopener">Abrir diretriz ESC 2024 (PDF) 📄</a></div>';

  // tabela de referência (reproduz a Figura 4) para um score
  function painel(col, titulo) {
    let h = '<div class="pt-tabwrap"><div class="pt-sexlabel">' + titulo + '</div>' +
      '<table class="pt-table"><thead><tr><th>Idade</th>' +
      '<th colspan="3">Mulheres (FR)</th><th colspan="3">Homens (FR)</th></tr>' +
      '<tr><th></th>' + RFG.map(g => '<th>' + g + '</th>').join('') + RFG.map(g => '<th>' + g + '</th>').join('') + '</tr></thead><tbody>';
    AGES.forEach((age, i) => {
      h += '<tr><td class="pt-age">' + age + '</td>';
      RFCL[col].W[i].forEach(p => { h += '<td class="pt-cell" style="background:' + cor(p) + '">' + p + '</td>'; });
      RFCL[col].M[i].forEach(p => { h += '<td class="pt-cell" style="background:' + cor(p) + '">' + p + '</td>'; });
      h += '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  function render() {
    root.innerHTML = defs + calc + cats +
      '<div class="pt-card"><h3 class="sc-title">Tabela RF-CL completa (ESC 2024, Figura 4)</h3>' +
      '<div class="pt-legenda"><span class="lr-chip" style="background:#2f6f9f">≤5% muito baixa</span> <span class="lr-chip" style="background:#1f9d57">&gt;5–15% baixa</span> <span class="lr-chip" style="background:#b07414">&gt;15% moderada</span></div>' +
      painel('s01', 'Score 0–1 ponto (dor não anginosa)') +
      painel('s2', 'Score 2 pontos (angina atípica ou dispneia)') +
      painel('s3', 'Score 3 pontos (angina típica)') +
      '<p class="muted small">FR = nº de fatores de risco (0–1, 2–3, 4–5). Valores em % de DAC obstrutiva.</p></div>';

    const sintSel = document.getElementById('pt-sint');
    const cpWrap = document.getElementById('pt-cp-wrap');

    const compute = () => {
      const sexo = document.getElementById('pt-sexo').value;
      const ageIdx = +document.getElementById('pt-idade').value;
      const disp = sintSel.value === 'disp';
      cpWrap.style.display = disp ? 'none' : '';
      let score;
      if (disp) score = 2;
      else score = CPS.filter(c => document.getElementById(c.id).checked).length; // 0-3
      const col = disp ? 's2' : (score <= 1 ? 's01' : (score === 2 ? 's2' : 's3'));
      const nrf = RFS.filter(r => document.getElementById(r.id).checked).length;
      const rfGroup = nrf <= 1 ? 0 : (nrf <= 3 ? 1 : 2);
      const p = RFCL[col][sexo][ageIdx][rfGroup];
      const cat = categoria(p);
      const scoreTxt = disp ? 'dispneia (2 pontos)' : (score + ' ponto' + (score === 1 ? '' : 's'));
      const out = document.getElementById('pt-out');
      out.className = 'sc-result ' + cat.cls;
      out.innerHTML = '<div class="sc-valor">RF-CL ≈ ' + p + '% · ' + cat.nome + '</div>' +
        '<div class="sc-conduta">' + cat.cond +
        '<br><span class="sc-extra">Score de sintomas: ' + scoreTxt + ' · fatores de risco: ' + nrf + ' (' + RFG[rfGroup] + ').</span>' +
        '<br><button id="pt-bayes" class="mbe-usar" style="margin-top:10px">→ usar no cálculo de Bayes</button>' +
        ' <button id="pt-diag" class="mbe-usar" style="margin-top:10px">→ levar ao Diagnóstico (DAC)</button></div>';
      const b = document.getElementById('pt-bayes');
      if (b) b.addEventListener('click', () => { if (window.MBE_setPreTeste) window.MBE_setPreTeste(p); });
      const bd = document.getElementById('pt-diag');
      if (bd) bd.addEventListener('click', () => {
        const ageMap = [35, 45, 55, 65, 75];
        const data = {
          ctx: 'ambulatorial', sexo: (sexo === 'W' ? 'W' : 'M'), idade: ageMap[ageIdx],
          cp1: document.getElementById('cp1').checked, cp2: document.getElementById('cp2').checked, cp3: document.getElementById('cp3').checked,
          disp: disp, fam: document.getElementById('rf-fam').checked, tab: document.getElementById('rf-tab').checked,
          disl: document.getElementById('rf-disl').checked, has: document.getElementById('rf-has').checked, dm: document.getElementById('rf-dm').checked
        };
        if (window.cardioGoView) window.cardioGoView('diagnostico');
        if (window.cardioDiagSetDAC) window.cardioDiagSetDAC(data);
      });
    };
    ['pt-sexo', 'pt-idade', 'pt-sint'].forEach(id => document.getElementById(id).addEventListener('change', compute));
    CPS.forEach(c => document.getElementById(c.id).addEventListener('change', compute));
    RFS.forEach(r => document.getElementById(r.id).addEventListener('change', compute));
    compute();

    // integração com o hub Paciente: pré-preenche sexo/idade/fatores de risco
    window.cardioPretestFill = function () {
      const p = window.PACIENTE || {};
      if (p.sexo) document.getElementById('pt-sexo').value = (p.sexo === 'F' ? 'W' : 'M');
      if (p.idade != null) {
        const a = p.idade; const idx = a < 40 ? 0 : a < 50 ? 1 : a < 60 ? 2 : a < 70 ? 3 : 4;
        document.getElementById('pt-idade').value = idx;
      }
      document.getElementById('rf-tab').checked = !!p.tabag;
      document.getElementById('rf-disl').checked = !!p.dislip;
      document.getElementById('rf-has').checked = !!p.has;
      document.getElementById('rf-dm').checked = !!p.dm;
      compute();
      if (window.toast) window.toast('Preenchido com os dados do Paciente');
    };
  }
  render();
})();
