// Aba "Medicina baseada em evidências" (MBE) — inspirada no getthediagnosis.org.
// Ferramentas: (1) Calculadora diagnóstica interativa (pré→pós-teste em cadeia de LRs),
// (2) probabilidade pós-teste manual (Bayes/Fagan), (3) medidas de efeito (NNT/NNH),
// (4) biblioteca de razões de verossimilhança (LR).
(function () {
  const menu = document.getElementById('mbe-menu');
  const panel = document.getElementById('mbe-panel');
  if (!menu || !panel) return;

  const n = v => { const x = parseFloat(String(v).replace(',', '.')); return isFinite(x) ? x : null; };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const r1 = x => Math.round(x * 10) / 10;
  const r2 = x => Math.round(x * 100) / 100;
  const fmt = x => (x === null || x === undefined) ? '—' : String(r2(x)).replace('.', ',');

  let pendingLR = null;

  function forcaLR(lr, positiva) {
    if (positiva) {
      if (lr > 10) return 'mudança <b>grande</b> e em geral conclusiva na probabilidade';
      if (lr >= 5) return 'mudança <b>moderada</b> na probabilidade';
      if (lr >= 2) return 'mudança <b>pequena</b> (às vezes importante)';
      return 'mudança <b>mínima/insignificante</b>';
    }
    if (lr < 0.1) return 'mudança <b>grande</b> e em geral conclusiva (afasta o diagnóstico)';
    if (lr <= 0.2) return 'mudança <b>moderada</b> na probabilidade';
    if (lr <= 0.5) return 'mudança <b>pequena</b> (às vezes importante)';
    return 'mudança <b>mínima/insignificante</b>';
  }
  function chipClass(lr, positiva) {
    if (lr === null || lr === undefined) return 'lr-na';
    if (positiva) return lr >= 10 ? 'lr-strong' : (lr >= 5 ? 'lr-mod' : (lr >= 2 ? 'lr-small' : 'lr-min'));
    return lr < 0.1 ? 'lr-strong' : (lr <= 0.2 ? 'lr-mod' : (lr <= 0.5 ? 'lr-small' : 'lr-min'));
  }

  // ------------------------------------------------------------------
  // BANCO DE DIAGNÓSTICOS (achados com LR+/LR− e referência)
  // prev = prevalência/pré-teste sugerida (%) para a população típica da questão.
  // Cada achado: {a: nome, lrp, lrn, ref}. lrp/lrn podem ser null.
  // ------------------------------------------------------------------
  const DIAGNOSTICOS = [
    { id: 'ic', area: 'Cardiovascular', nome: 'Insuficiência cardíaca (dispneia aguda)', prev: 50,
      nota: 'Adulto com dispneia aguda na emergência. Prevalência típica ~50%. Fonte: Wang, JAMA 2005 (“Does this dyspneic patient have heart failure?”).',
      achados: [
        { a: 'Terceira bulha (B3 / galope)', lrp: 11, lrn: 0.88, ref: 'Wang 2005', ci: 'LR+ 4,9–25' },
        { a: 'Congestão venosa pulmonar no RX de tórax', lrp: 12, lrn: 0.48, ref: 'Wang 2005', ci: 'LR+ 6,8–21' },
        { a: 'Refluxo hepatojugular', lrp: 6.4, lrn: 0.79, ref: 'Wang 2005', ci: 'LR+ 0,8–51 (amplo)' },
        { a: 'História prévia de insuficiência cardíaca', lrp: 5.8, lrn: 0.45, ref: 'Wang 2005', ci: 'LR+ 4,1–8,0' },
        { a: 'Turgência jugular', lrp: 5.1, lrn: 0.66, ref: 'Wang 2005', ci: 'LR+ 3,2–7,9' },
        { a: 'Fibrilação atrial no ECG', lrp: 3.8, lrn: 0.79, ref: 'Wang 2005' },
        { a: 'Cardiomegalia no RX de tórax', lrp: 3.3, lrn: 0.33, ref: 'Wang 2005' },
        { a: 'Estertores pulmonares', lrp: 2.8, lrn: 0.51, ref: 'Wang 2005', ci: 'LR+ 1,9–4,1' },
        { a: 'Dispneia paroxística noturna', lrp: 2.6, lrn: 0.70, ref: 'Wang 2005' },
        { a: 'Edema de membros', lrp: 2.3, lrn: 0.64, ref: 'Wang 2005' },
        { a: 'Ortopneia', lrp: 2.2, lrn: 0.65, ref: 'Wang 2005' },
        { a: 'BNP < 100 pg/mL', lrp: null, lrn: 0.13, ref: 'Wang 2005' },
        { a: 'NT-proBNP < 300 pg/mL', lrp: null, lrn: 0.02, ref: 'Januzzi (PRIDE) 2005' }
      ] },
    { id: 'sca', area: 'Cardiovascular', nome: 'Síndrome coronariana aguda (dor torácica)', prev: 20,
      nota: 'Dor torácica na emergência. Pré-teste depende do risco (use a aba Pré-teste). Fontes: Swap, JAMA 2005 (dor) e Panju, JAMA 1998 (ECG/IAM).',
      achados: [
        { a: 'Supra de ST novo no ECG', lrp: 11, lrn: null, ref: 'Panju 1998' },
        { a: 'Infra de ST novo no ECG', lrp: 5.2, lrn: null, ref: 'Panju 1998' },
        { a: 'Irradiação para o braço/ombro DIREITO', lrp: 4.7, lrn: null, ref: 'Swap 2005', ci: 'LR+ 1,9–12' },
        { a: 'Onda Q nova no ECG', lrp: 3.9, lrn: null, ref: 'Panju 1998' },
        { a: 'Irradiação para AMBOS os braços', lrp: 2.6, lrn: null, ref: 'Swap 2005' },
        { a: 'Dor desencadeada pelo esforço', lrp: 2.4, lrn: null, ref: 'Swap 2005' },
        { a: 'Irradiação para o braço ESQUERDO', lrp: 2.3, lrn: null, ref: 'Swap 2005' },
        { a: 'Sudorese (diaforese)', lrp: 2.0, lrn: null, ref: 'Swap 2005' },
        { a: 'Náusea ou vômito', lrp: 1.9, lrn: null, ref: 'Swap 2005' },
        { a: 'ECG completamente normal', lrp: 0.2, lrn: null, ref: 'Panju 1998' },
        { a: 'Dor reprodutível à palpação', lrp: 0.3, lrn: null, ref: 'Swap 2005', ci: 'LR 0,2–0,4' },
        { a: 'Dor posicional', lrp: 0.3, lrn: null, ref: 'Swap 2005' },
        { a: 'Dor pleurítica', lrp: 0.2, lrn: null, ref: 'Swap 2005', ci: 'LR 0,1–0,3' }
      ] },
    { id: 'eao', area: 'Cardiovascular', nome: 'Estenose aórtica (sopro sistólico)', prev: 25,
      nota: 'Adulto com sopro sistólico — avaliar EAo moderada/grave. Fonte: Etchells, JAMA 1997 / JGIM 1998.',
      achados: [
        { a: '3–4 achados combinados (S2 reduzida + carótida lenta + sopro aórtico)', lrp: 40, lrn: null, ref: 'Etchells 1998' },
        { a: 'Ascensão carotídea lenta/tardia', lrp: 3.7, lrn: 0.42, ref: 'Etchells 1997' },
        { a: 'Sopro irradiando para a carótida direita', lrp: 1.5, lrn: 0.10, ref: 'Etchells 1998' },
        { a: 'Componente aórtico da 2ª bulha (A2) reduzido/ausente', lrp: 3.1, lrn: 0.50, ref: 'Etchells 1997' }
      ] },
    { id: 'iao', area: 'Cardiovascular', nome: 'Insuficiência aórtica', prev: 20,
      nota: 'Sopro diastólico / suspeita de IAo. Fonte: Choudhry, JAMA 1999.',
      achados: [
        { a: 'Sopro diastólico precoce presente (LR+ 9–32)', lrp: 10, lrn: 0.1, ref: 'Choudhry 1999' },
        { a: 'Aumento do sopro à oclusão arterial transitória (handgrip)', lrp: 8.4, lrn: 0.3, ref: 'Choudhry 1999' }
      ] },
    { id: 'sopro', area: 'Cardiovascular', nome: 'Sopro sistólico — manobras dinâmicas', prev: 30,
      nota: 'Diferenciar a origem do sopro sistólico pela resposta às manobras. Fonte: Lembo, NEJM 1988.',
      achados: [
        { a: 'Sopro AUMENTA com Valsalva → cardiomiopatia hipertrófica', lrp: 16, lrn: 0.36, ref: 'Lembo 1988' },
        { a: 'Sopro AUMENTA com handgrip → insuf. mitral / CIV', lrp: 8.5, lrn: 0.35, ref: 'Lembo 1988' }
      ] },
    { id: 'tampo', area: 'Cardiovascular', nome: 'Tamponamento cardíaco (com derrame)', prev: 30,
      nota: 'Paciente com derrame pericárdico — avaliar repercussão hemodinâmica. Fonte: Roy, JAMA 2007.',
      achados: [
        { a: 'Pulso paradoxal > 20 mmHg', lrp: 8.8, lrn: null, ref: 'Roy 2007' },
        { a: 'Pulso paradoxal > 12 mmHg', lrp: 5.9, lrn: null, ref: 'Roy 2007' },
        { a: 'Pulso paradoxal > 10 mmHg', lrp: 3.3, lrn: 0.03, ref: 'Roy 2007' },
        { a: 'Taquicardia', lrp: 1.4, lrn: 0.30, ref: 'Roy 2007' }
      ] },
    { id: 'tep', area: 'Cardiovascular', nome: 'Tromboembolismo pulmonar (TEP)', prev: 15,
      nota: 'Suspeita de TEP — estratifique antes com Wells (aba Scores). Fontes: Stein 2004 (D-dímero) e meta-análise de angio-TC.',
      achados: [
        { a: 'Angio-TC de tórax positiva', lrp: 20.8, lrn: 0.18, ref: 'Meta-análise (sens 83/espec 96)' },
        { a: 'D-dímero de alta sensibilidade', lrp: 1.6, lrn: 0.09, ref: 'Stein 2004' }
      ] },
    { id: 'carotida', area: 'Cardiovascular', nome: 'Estenose carotídea (50–99%)', prev: 15,
      nota: 'Sopro cervical / rastreio de estenose carotídea. Fonte: Rational Clinical Exam (McGee).',
      achados: [
        { a: 'Sopro carotídeo presente', lrp: 3.7, lrn: 0.36, ref: 'RCE / McGee' }
      ] },
    { id: 'pneumonia', area: 'Respiratório', nome: 'Pneumonia (tosse/febre)', prev: 20,
      nota: 'Adulto com tosse aguda. Prevalência ~5–20%. Fonte: Metlay, JAMA 1997.',
      achados: [
        { a: 'Egofonia', lrp: 4.1, lrn: 0.96, ref: 'Metlay 1997' },
        { a: 'Macicez à percussão', lrp: 3.0, lrn: 0.86, ref: 'Metlay 1997' },
        { a: 'Estertores (crepitações)', lrp: 2.0, lrn: 0.70, ref: 'Metlay 1997' },
        { a: 'Todos os sinais vitais normais (FR<20, FC<100, T<37,8°C)', lrp: 0.18, lrn: null, ref: 'Metlay 1997' }
      ] },
    { id: 'dpoc', area: 'Respiratório', nome: 'DPOC (dispneia/tabagismo)', prev: 30,
      nota: 'Adulto tabagista com dispneia crônica. Fonte: Straus, JAMA 2000.',
      achados: [
        { a: 'Tabagismo > 40 maços-ano', lrp: 8.3, lrn: 0.5, ref: 'Straus 2000' },
        { a: 'Tempo expiratório forçado > 9 s', lrp: 4.8, lrn: 0.45, ref: 'Straus 2000' },
        { a: 'Sibilância à ausculta', lrp: 2.8, lrn: 0.85, ref: 'Straus 2000' }
      ] },
    { id: 'ascite', area: 'Abdome', nome: 'Ascite', prev: 40,
      nota: 'Distensão abdominal — detectar líquido livre. Fonte: Williams, JAMA 1992.',
      achados: [
        { a: 'Piparote (fluid wave)', lrp: 6.0, lrn: 0.4, ref: 'Williams 1992' },
        { a: 'Macicez móvel (shifting dullness)', lrp: 2.7, lrn: 0.3, ref: 'Williams 1992' },
        { a: 'Flancos abaulados', lrp: 2.0, lrn: 0.3, ref: 'Williams 1992' },
        { a: 'Ausência de edema periférico', lrp: null, lrn: 0.2, ref: 'Williams 1992' }
      ] },
    { id: 'hipovolemia', area: 'Volemia', nome: 'Hipovolemia / perda sanguínea', prev: 30,
      nota: 'Suspeita de hipovolemia. O incremento postural da FC ≥30 bpm sinaliza perda volêmica grande. Fonte: McGee, JAMA 1999.',
      achados: [
        { a: 'Aumento postural da FC ≥ 30 bpm (ou tontura postural grave)', lrp: 39, lrn: null, ref: 'McGee 1999 (perda ≥630 mL)' },
        { a: 'Axila seca', lrp: 2.8, lrn: 0.6, ref: 'McGee 1999' },
        { a: 'Mucosa oral úmida', lrp: null, lrn: 0.3, ref: 'McGee 1999' }
      ] }
  ];

  // biblioteca de LRs derivada dos diagnósticos (fonte única)
  const LRS = [];
  DIAGNOSTICOS.forEach(d => d.achados.forEach(x => LRS.push({ g: d.nome, a: x.a, lrp: x.lrp, lrn: x.lrn, ref: x.ref, ci: x.ci })));

  function odds(p) { return p / (1 - p); }
  function prob(o) { return o / (1 + o); }

  // ------------------------------------------------------------------
  // Nomograma de Fagan (SVG) — pré-teste × LR → pós-teste.
  // Eixos: pré (esq., invertido) e pós (dir.) em log-odds em sentidos opostos;
  // LR (centro) em log com metade da escala → qualquer reta satisfaz Bayes.
  // ------------------------------------------------------------------
  function nomograma(prePct, lrp, lrn) {
    const W = 340, H = 380, yc = 190, k = 20, top = 34, bot = 346;
    const xL = 52, xM = 170, xR = 288;
    const lg = p => Math.log(p / (1 - p));
    const clampy = y => Math.max(top, Math.min(bot, y));
    const yPre = p => clampy(yc - k * lg(p));
    const yPost = p => clampy(yc + k * lg(p));
    const yLR = lr => clampy(yc + (k / 2) * Math.log(lr));
    const probT = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9, 0.95, 0.98, 0.99, 0.999];
    const lrT = [0.001, 0.01, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 1000];
    const lab = p => p >= 0.01 ? (p * 100).toString().replace('.', ',') : (p * 100).toString();
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="fagan-svg" xmlns="http://www.w3.org/2000/svg">';
    // eixos
    [[xL, 'Pré-teste %'], [xM, 'LR'], [xR, 'Pós-teste %']].forEach(ax => {
      s += '<line x1="' + ax[0] + '" y1="' + top + '" x2="' + ax[0] + '" y2="' + bot + '" stroke="var(--line)" stroke-width="1.5"/>';
      s += '<text x="' + ax[0] + '" y="' + (top - 12) + '" text-anchor="middle" class="fagan-axtitle">' + ax[1] + '</text>';
    });
    probT.forEach(p => {
      const y1 = yc - k * lg(p); if (y1 >= top && y1 <= bot) { s += '<line x1="' + (xL - 4) + '" y1="' + y1 + '" x2="' + (xL + 4) + '" y2="' + y1 + '" stroke="var(--muted)"/><text x="' + (xL - 8) + '" y="' + (y1 + 3) + '" text-anchor="end" class="fagan-tk">' + lab(p) + '</text>'; }
      const y2 = yc + k * lg(p); if (y2 >= top && y2 <= bot) { s += '<line x1="' + (xR - 4) + '" y1="' + y2 + '" x2="' + (xR + 4) + '" y2="' + y2 + '" stroke="var(--muted)"/><text x="' + (xR + 8) + '" y="' + (y2 + 3) + '" text-anchor="start" class="fagan-tk">' + lab(p) + '</text>'; }
    });
    lrT.forEach(lr => { const y = yc + (k / 2) * Math.log(lr); if (y >= top && y <= bot) { s += '<line x1="' + (xM - 4) + '" y1="' + y + '" x2="' + (xM + 4) + '" y2="' + y + '" stroke="var(--muted)"/><text x="' + (xM + 8) + '" y="' + (y + 3) + '" text-anchor="start" class="fagan-tk">' + (lr < 1 ? lr : lr) + '</text>'; } });
    const pre = Math.max(0.001, Math.min(0.999, prePct / 100));
    function linha(lr, cor, dash) {
      if (lr == null || lr <= 0) return '';
      const post = prob(odds(pre) * lr);
      const y1 = yPre(pre), y3 = yPost(post);
      return '<line x1="' + xL + '" y1="' + y1 + '" x2="' + xR + '" y2="' + y3 + '" stroke="' + cor + '" stroke-width="2" ' + (dash ? 'stroke-dasharray="5 4"' : '') + '/>' +
        '<circle cx="' + xL + '" cy="' + y1 + '" r="3.5" fill="' + cor + '"/>' +
        '<circle cx="' + xM + '" cy="' + yLR(lr) + '" r="3" fill="' + cor + '"/>' +
        '<circle cx="' + xR + '" cy="' + y3 + '" r="3.5" fill="' + cor + '"/>' +
        '<text x="' + xR + '" y="' + (y3 - 6) + '" text-anchor="middle" class="fagan-post" fill="' + cor + '">' + r1(post * 100) + '%</text>';
    }
    s += linha(lrp, '#1f9d57', false);
    s += linha(lrn, '#c0392b', true);
    s += '</svg>';
    return s;
  }

  // ------------------------------------------------------------------
  // 1) CALCULADORA DIAGNÓSTICA (interativa)
  // ------------------------------------------------------------------
  const estado = {}; // dxId -> { pre, sel: {idx: 'pos'|'neg'} }

  function viewCalc() {
    const areas = [...new Set(DIAGNOSTICOS.map(d => d.area))];
    panel.innerHTML =
      '<h3 class="sc-title">Calculadora diagnóstica (pré → pós-teste)</h3>' +
      '<p class="muted small">Escolha o diagnóstico, ajuste a <b>probabilidade pré-teste</b> ao seu paciente e marque cada achado como <b>Presente</b> (aplica a LR+) ou <b>Ausente</b> (aplica a LR−). A probabilidade pós-teste é recalculada em cadeia. Assume independência entre os achados (aproximação) — use como apoio, não como valor absoluto.</p>' +
      '<label class="sc-campo mbe-dxsel"><span>Diagnóstico / questão clínica</span><select id="mbc-dx">' +
      areas.map(ar => '<optgroup label="' + esc(ar) + '">' +
        DIAGNOSTICOS.filter(d => d.area === ar).map(d => '<option value="' + d.id + '">' + esc(d.nome) + '</option>').join('') +
        '</optgroup>').join('') +
      '</select></label>' +
      '<div id="mbc-body"></div>';

    const sel = document.getElementById('mbc-dx');
    sel.addEventListener('change', () => renderDx(sel.value));
    renderDx(sel.value);
  }

  function renderDx(dxId) {
    const d = DIAGNOSTICOS.find(x => x.id === dxId); if (!d) return;
    if (!estado[dxId]) estado[dxId] = { pre: d.prev, sel: {} };
    const st = estado[dxId];
    const body = document.getElementById('mbc-body');

    let rows = d.achados.map((x, i) => {
      const cur = st.sel[i] || null;
      const posBtn = '<button class="mbc-seg mbc-pos' + (cur === 'pos' ? ' on' : '') + '" data-i="' + i + '" data-v="pos"' + (x.lrp == null ? ' disabled title="sem LR+"' : '') + '>Presente</button>';
      const negBtn = '<button class="mbc-seg mbc-neg' + (cur === 'neg' ? ' on' : '') + '" data-i="' + i + '" data-v="neg"' + (x.lrn == null ? ' disabled title="sem LR−"' : '') + '>Ausente</button>';
      return '<tr>' +
        '<td class="mbc-ach">' + esc(x.a) + '<div class="mbc-ref">LR+ ' + fmt(x.lrp) + ' · LR− ' + fmt(x.lrn) + (x.ci ? ' · IC 95% ' + esc(x.ci) : '') + ' · ' + esc(x.ref) + '</div></td>' +
        '<td class="mbc-ctrl"><div class="mbc-seg-wrap">' + posBtn + negBtn + '</div></td>' +
        '</tr>';
    }).join('');

    body.innerHTML =
      '<div class="mbc-nota">' + esc(d.nota) + '</div>' +
      '<label class="sc-campo mbc-pre"><span>Probabilidade pré-teste <em>(%)</em></span><input type="number" step="any" id="mbc-pre" value="' + st.pre + '"></label>' +
      '<div id="mbc-result"></div>' +
      '<table class="mbc-table"><thead><tr><th>Achado / exame</th><th>Presente / Ausente</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<button class="mbe-usar" id="mbc-reset" style="margin-top:10px">Limpar achados</button>';

    const preEl = document.getElementById('mbc-pre');
    preEl.addEventListener('input', () => { st.pre = n(preEl.value); recompute(dxId); });
    body.querySelectorAll('.mbc-seg').forEach(b => b.addEventListener('click', () => {
      if (b.disabled) return;
      const i = +b.dataset.i, v = b.dataset.v;
      st.sel[i] = (st.sel[i] === v) ? null : v;
      renderDx(dxId);
    }));
    document.getElementById('mbc-reset').addEventListener('click', () => { st.sel = {}; renderDx(dxId); });
    recompute(dxId);
  }

  function recompute(dxId) {
    const d = DIAGNOSTICOS.find(x => x.id === dxId); const st = estado[dxId];
    const out = document.getElementById('mbc-result'); if (!out) return;
    const pre = st.pre;
    if (pre === null || pre <= 0 || pre >= 100) {
      out.className = 'sc-result sc-info';
      out.innerHTML = '<div class="sc-conduta">Informe uma probabilidade pré-teste entre 0 e 100%.</div>';
      return;
    }
    let o = odds(pre / 100); let netLR = 1; const aplicados = [];
    d.achados.forEach((x, i) => {
      const s = st.sel[i]; if (!s) return;
      const lr = s === 'pos' ? x.lrp : x.lrn;
      if (lr == null) return;
      o *= lr; netLR *= lr;
      aplicados.push((s === 'pos' ? '✚ ' : '– ') + x.a.replace(/ \(.*/, '') + ' (LR ' + fmt(lr) + ')');
    });
    const post = prob(o) * 100;
    const nivel = post >= 50 ? 'sc-bad' : (post >= 15 ? 'sc-warn' : 'sc-ok');
    const pct = v => Math.max(0, Math.min(100, v));
    out.className = 'sc-result ' + nivel;
    out.innerHTML = '<div class="sc-conduta">' +
      '<div class="mbc-barwrap"><div class="mbc-barlbl">Pré ' + r1(pre) + '%</div><div class="mbc-bar"><span style="width:' + pct(pre) + '%"></span></div></div>' +
      '<div class="mbc-barwrap"><div class="mbc-barlbl">Pós <b>' + r1(post) + '%</b></div><div class="mbc-bar mbc-bar-post"><span style="width:' + pct(post) + '%"></span></div></div>' +
      '<div class="mbc-post">Probabilidade pós-teste ≈ <b class="mbe-big">' + r1(post) + '%</b>' + (aplicados.length ? ' · LR combinada ' + fmt(netLR) : '') + '</div>' +
      (aplicados.length ? '<div class="sc-extra">Aplicados: ' + esc(aplicados.join(' · ')) + '.</div>' : '<div class="sc-extra">Marque achados como presentes/ausentes para atualizar.</div>') +
      '</div>';
  }

  // ------------------------------------------------------------------
  // 2) PROBABILIDADE PÓS-TESTE (Bayes / nomograma de Fagan) — manual
  // ------------------------------------------------------------------
  function viewPostTeste() {
    panel.innerHTML =
      '<h3 class="sc-title">Probabilidade pós-teste (teorema de Bayes)</h3>' +
      '<p class="muted small">Informe a probabilidade pré-teste e as características do exame. Use sensibilidade/especificidade <b>ou</b> as razões de verossimilhança (LR+/LR−).</p>' +
      '<div class="sc-campos">' +
      '<label class="sc-campo"><span>Probabilidade pré-teste <em>(%)</em></span><input type="number" step="any" id="mb-pre" placeholder="ex: 20"></label>' +
      '<div class="mbe-or">— informe sensibilidade e especificidade… —</div>' +
      '<label class="sc-campo"><span>Sensibilidade <em>(%)</em></span><input type="number" step="any" id="mb-sens"></label>' +
      '<label class="sc-campo"><span>Especificidade <em>(%)</em></span><input type="number" step="any" id="mb-spec"></label>' +
      '<div class="mbe-or">— …ou diretamente as razões de verossimilhança —</div>' +
      '<label class="sc-campo"><span>LR+ (razão de verossimilhança positiva)</span><input type="number" step="any" id="mb-lrp"></label>' +
      '<label class="sc-campo"><span>LR− (razão de verossimilhança negativa)</span><input type="number" step="any" id="mb-lrn"></label>' +
      '</div>' +
      '<button id="mb-calc" class="btn-primary">Calcular</button>' +
      '<div id="mb-out" class="sc-result sc-info"><div class="sc-conduta">Preencha os campos e clique em Calcular.</div></div>' +
      '<div id="mb-nomo" class="fagan-wrap"></div>';

    const setNomo = (pre, lrp, lrn) => {
      const el = document.getElementById('mb-nomo'); if (!el) return;
      el.innerHTML = (pre !== null && pre > 0 && pre < 100 && ((lrp && lrp > 0) || (lrn && lrn > 0)))
        ? '<div class="fagan-title">Nomograma de Fagan</div><div class="fagan-legend"><span class="fg-pos">● positivo (LR+)</span> <span class="fg-neg">● negativo (LR−)</span></div>' + nomograma(pre, (lrp && lrp > 0) ? lrp : null, (lrn && lrn > 0) ? lrn : null)
        : '';
    };

    const calc = () => {
      const pre = n(document.getElementById('mb-pre').value);
      let sens = n(document.getElementById('mb-sens').value);
      let spec = n(document.getElementById('mb-spec').value);
      let lrp = n(document.getElementById('mb-lrp').value);
      let lrn = n(document.getElementById('mb-lrn').value);
      const out = document.getElementById('mb-out');
      if (pre === null || pre < 0 || pre > 100) { out.className = 'sc-result sc-info'; out.innerHTML = '<div class="sc-conduta">Informe a pré-teste entre 0 e 100%.</div>'; setNomo(null); return; }
      let origem = '';
      if (sens !== null && spec !== null && sens > 0 && sens < 100 && spec > 0 && spec < 100) {
        const se = sens / 100, sp = spec / 100; lrp = se / (1 - sp); lrn = (1 - se) / sp;
        origem = '<br><span class="sc-extra">De sens ' + r1(sens) + '% e espec ' + r1(spec) + '%: LR+ = ' + r2(lrp) + ' · LR− = ' + r2(lrn) + '.</span>';
      }
      if (lrp === null && lrn === null) { out.className = 'sc-result sc-info'; out.innerHTML = '<div class="sc-conduta">Informe sens/espec ou as LR+/LR−.</div>'; setNomo(null); return; }
      const preOdds = odds(pre / 100); let html = '';
      if (lrp !== null && lrp > 0) { const p = prob(preOdds * lrp) * 100; html += '<div class="mbe-res-line"><b>Se POSITIVO →</b> pós-teste ≈ <b class="mbe-big">' + r1(p) + '%</b><br><span class="sc-extra">LR+ ' + r2(lrp) + ': ' + forcaLR(lrp, true) + '.</span></div>'; }
      if (lrn !== null && lrn > 0) { const p = prob(preOdds * lrn) * 100; html += '<div class="mbe-res-line"><b>Se NEGATIVO →</b> pós-teste ≈ <b class="mbe-big">' + r1(p) + '%</b><br><span class="sc-extra">LR− ' + r2(lrn) + ': ' + forcaLR(lrn, false) + '.</span></div>'; }
      out.className = 'sc-result sc-info'; out.innerHTML = '<div class="sc-conduta">' + html + origem + '</div>';
      setNomo(pre, lrp, lrn);
    };
    document.getElementById('mb-calc').addEventListener('click', calc);
    panel.querySelectorAll('input').forEach(el => el.addEventListener('change', calc));

    if (pendingLR) {
      const hadLR = pendingLR.lrp != null || pendingLR.lrn != null;
      if (pendingLR.lrp != null) document.getElementById('mb-lrp').value = pendingLR.lrp;
      if (pendingLR.lrn != null) document.getElementById('mb-lrn').value = pendingLR.lrn;
      document.getElementById('mb-pre').value = pendingLR.pre != null ? pendingLR.pre : 20;
      pendingLR = null; if (hadLR) calc();
    }
  }

  window.MBE_setPreTeste = function (pre) {
    if (window.cardioGoView) window.cardioGoView('mbe');
    pendingLR = { pre: pre, lrp: null, lrn: null };
    irPara('post');
    if (window.toast) window.toast('Pré-teste enviado: ' + pre + '%');
  };

  // ------------------------------------------------------------------
  // 3) MEDIDAS DE EFEITO
  // ------------------------------------------------------------------
  function viewEfeito() {
    panel.innerHTML =
      '<h3 class="sc-title">Medidas de efeito (NNT / NNH)</h3>' +
      '<p class="muted small">Informe a taxa de eventos no grupo controle e no tratado (%). Calcula RRA/RRR, NNT/NNH, RR e OR.</p>' +
      '<div class="sc-campos">' +
      '<label class="sc-campo"><span>Eventos no grupo CONTROLE <em>(%)</em></span><input type="number" step="any" id="mb-cer" placeholder="ex: 10"></label>' +
      '<label class="sc-campo"><span>Eventos no grupo TRATADO <em>(%)</em></span><input type="number" step="any" id="mb-eer" placeholder="ex: 7"></label>' +
      '</div>' +
      '<button id="mb-calc2" class="btn-primary">Calcular</button>' +
      '<div id="mb-out2" class="sc-result sc-info"><div class="sc-conduta">Preencha as duas taxas e clique em Calcular.</div></div>';
    const calc = () => {
      const cerP = n(document.getElementById('mb-cer').value), eerP = n(document.getElementById('mb-eer').value);
      const out = document.getElementById('mb-out2');
      if (cerP === null || eerP === null || cerP < 0 || cerP > 100 || eerP < 0 || eerP > 100) { out.className = 'sc-result sc-info'; out.innerHTML = '<div class="sc-conduta">Informe as duas taxas entre 0 e 100%.</div>'; return; }
      const cer = cerP / 100, eer = eerP / 100, ard = cer - eer;
      const rrr = cer > 0 ? ard / cer : null, rr = cer > 0 ? eer / cer : null;
      const or = (cer > 0 && cer < 1 && eer < 1) ? (eer / (1 - eer)) / (cer / (1 - cer)) : null;
      let html;
      if (Math.abs(ard) < 1e-9) html = '<b>Sem diferença</b> (RRA = 0). NNT/NNH indefinidos.';
      else if (ard > 0) { const nnt = Math.round(1 / ard); html = 'O tratamento <b>reduz</b> o desfecho.<br>• RRA: <b>' + r1(ard * 100) + '%</b><br>' + (rrr != null ? '• RRR: <b>' + r1(rrr * 100) + '%</b><br>' : '') + '• <b class="mbe-big">NNT = ' + nnt + '</b> — tratar ' + nnt + ' para evitar 1 desfecho.'; }
      else { const nnh = Math.round(1 / Math.abs(ard)); html = 'O tratamento <b>aumenta</b> o desfecho (dano).<br>• Aumento absoluto: <b>' + r1(Math.abs(ard) * 100) + '%</b><br>• <b class="mbe-big">NNH = ' + nnh + '</b>.'; }
      html += '<br><span class="sc-extra">' + (rr != null ? 'RR = ' + r2(rr) + ' · ' : '') + (or != null ? 'OR = ' + r2(or) : '') + '. NNT/NNH dependem do risco basal.</span>';
      out.className = 'sc-result sc-info'; out.innerHTML = '<div class="sc-conduta">' + html + '</div>';
    };
    document.getElementById('mb-calc2').addEventListener('click', calc);
    panel.querySelectorAll('input').forEach(el => el.addEventListener('change', calc));
  }

  // ------------------------------------------------------------------
  // 4) BIBLIOTECA DE LRs
  // ------------------------------------------------------------------
  function viewLRs() {
    const grupos = [...new Set(LRS.map(x => x.g))];
    panel.innerHTML =
      '<h3 class="sc-title">Biblioteca de razões de verossimilhança (LR)</h3>' +
      '<p class="muted small">' + LRS.length + ' achados clínicos e exames com LR+/LR− e referência. As LRs têm <b>intervalos de confiança frequentemente amplos</b> (mostrados quando disponíveis) — leia-as como faixas, não valores exatos. Testes contínuos (troponina, BNP, escore de cálcio) são melhor lidos por <b>LR por intervalo</b>. Use <b>→ Bayes</b> para enviar a LR à calculadora, ou a <b>Calculadora diagnóstica</b> para encadear achados.</p>' +
      '<div class="mbe-filtros">' +
      '<input type="text" id="mb-lr-busca" placeholder="Buscar achado ou tema... (ex: B3, Valsalva, D-dímero)" class="mbe-search">' +
      '<select id="mb-lr-grupo" class="mbe-search"><option value="">Todos os grupos</option>' + grupos.map(g => '<option value="' + esc(g) + '">' + esc(g) + '</option>').join('') + '</select>' +
      '</div>' +
      '<div class="mbe-legenda"><span class="lr-chip lr-strong">grande</span><span class="lr-chip lr-mod">moderada</span><span class="lr-chip lr-small">pequena</span><span class="lr-chip lr-min">mínima</span> — força da mudança na probabilidade</div>' +
      '<div id="mb-lr-table"></div>';
    const render = (filtro, grupoSel) => {
      const f = (filtro || '').toLowerCase(), grp = {};
      LRS.filter(x => (!grupoSel || x.g === grupoSel) && (!f || (x.a + ' ' + x.g + ' ' + x.ref).toLowerCase().includes(f))).forEach(x => { (grp[x.g] = grp[x.g] || []).push(x); });
      let h = '';
      Object.keys(grp).forEach(g => {
        h += '<div class="evol-group-title" style="margin-top:14px">' + esc(g) + '</div>';
        h += '<table class="mbe-table"><thead><tr><th>Achado / exame</th><th>LR+</th><th>LR−</th><th>Ref.</th><th></th></tr></thead><tbody>';
        grp[g].forEach(x => {
          const idx = LRS.indexOf(x);
          h += '<tr><td>' + esc(x.a) + '</td><td class="mbe-num"><span class="lr-chip ' + chipClass(x.lrp, true) + '">' + fmt(x.lrp) + '</span></td><td class="mbe-num"><span class="lr-chip ' + chipClass(x.lrn, false) + '">' + fmt(x.lrn) + '</span></td><td class="mbe-ref">' + esc(x.ref) + (x.ci ? '<br>IC 95% ' + esc(x.ci) : '') + '</td><td class="mbe-num"><button class="mbe-usar" data-i="' + idx + '">→ Bayes</button></td></tr>';
        });
        h += '</tbody></table>';
      });
      if (!h) h = '<p class="muted small">Nenhum achado encontrado.</p>';
      const t = document.getElementById('mb-lr-table'); t.innerHTML = h;
      t.querySelectorAll('.mbe-usar').forEach(b => b.addEventListener('click', () => { const x = LRS[+b.dataset.i]; pendingLR = { lrp: x.lrp, lrn: x.lrn, pre: 20 }; irPara('post'); }));
    };
    render('', '');
    document.getElementById('mb-lr-busca').addEventListener('input', e => render(e.target.value, document.getElementById('mb-lr-grupo').value));
    document.getElementById('mb-lr-grupo').addEventListener('change', e => render(document.getElementById('mb-lr-busca').value, e.target.value));
  }

  // ------------------------------------------------------------------
  // LIMIARES DE DECISÃO (Pauker-Kassirer): limiar de teste e de tratamento
  // a partir do limiar terapêutico (benefício × dano) e das LRs do exame.
  // ------------------------------------------------------------------
  function viewLimiares() {
    panel.innerHTML =
      '<h3 class="sc-title">Limiares de decisão (Pauker-Kassirer)</h3>' +
      '<p class="muted small">A partir do <b>limiar terapêutico</b> (onde tratar = não tratar) e das <b>LRs do exame</b>, calcula o <b>limiar de teste</b> (abaixo → não testar) e o <b>limiar de teste-tratamento</b> (acima → tratar sem testar). O limiar terapêutico vem da razão dano/benefício: p* = Dano / (Dano + Benefício). Versão simplificada (ignora o risco do próprio teste).</p>' +
      '<div class="sc-campos">' +
      '<label class="sc-campo"><span>Benefício de tratar o doente <em>(unidades)</em></span><input type="number" step="any" id="mb-ben" placeholder="ex: 10"></label>' +
      '<label class="sc-campo"><span>Dano de tratar o não-doente <em>(unidades)</em></span><input type="number" step="any" id="mb-dano" placeholder="ex: 1"></label>' +
      '<div class="mbe-or">— ou informe o limiar terapêutico direto —</div>' +
      '<label class="sc-campo"><span>Limiar terapêutico p* <em>(%)</em></span><input type="number" step="any" id="mb-pstar" placeholder="ex: 9"></label>' +
      '<div class="mbe-or">— características do exame —</div>' +
      '<label class="sc-campo"><span>LR+ do exame</span><input type="number" step="any" id="mb-tlrp"></label>' +
      '<label class="sc-campo"><span>LR− do exame</span><input type="number" step="any" id="mb-tlrn"></label>' +
      '<label class="sc-campo"><span>Pré-teste do paciente <em>(%, opcional)</em></span><input type="number" step="any" id="mb-tpre"></label>' +
      '</div>' +
      '<button id="mb-tcalc" class="btn-primary">Calcular</button>' +
      '<div id="mb-tout" class="sc-result sc-info"><div class="sc-conduta">Informe benefício/dano (ou p*) e as LRs do exame.</div></div>';

    const calc = () => {
      const B = n(document.getElementById('mb-ben').value), H = n(document.getElementById('mb-dano').value);
      let pstar = n(document.getElementById('mb-pstar').value);
      const lrp = n(document.getElementById('mb-tlrp').value), lrn = n(document.getElementById('mb-tlrn').value);
      const pre = n(document.getElementById('mb-tpre').value);
      const out = document.getElementById('mb-tout');
      if ((pstar === null || pstar <= 0 || pstar >= 100) && B !== null && H !== null && (B + H) > 0) pstar = 100 * H / (H + B);
      if (pstar === null || pstar <= 0 || pstar >= 100 || lrp === null || lrn === null || lrp <= 0 || lrn <= 0) {
        out.className = 'sc-result sc-info'; out.innerHTML = '<div class="sc-conduta">Informe benefício/dano (ou p* entre 0 e 100) e LR+ e LR−.</div>'; return;
      }
      const oStar = odds(pstar / 100);
      const testTh = prob(oStar / lrp) * 100;   // abaixo: nem um positivo cruza p*
      const treatTh = prob(oStar / lrn) * 100;   // acima: nem um negativo desce de p*
      const pctc = v => Math.max(0, Math.min(100, v));
      let bar = '<div class="diag-thbar"><span class="thz thz-ok" style="width:' + pctc(testTh) + '%"></span><span class="thz thz-mid" style="width:' + pctc(treatTh - testTh) + '%"></span><span class="thz thz-hi" style="width:' + pctc(100 - treatTh) + '%"></span>';
      if (pre !== null && pre > 0 && pre < 100) bar += '<span class="thz-marker" style="left:' + pctc(pre) + '%"></span>';
      bar += '</div>';
      let rec = '';
      if (pre !== null && pre > 0 && pre < 100) {
        rec = pre < testTh ? '<b>Não testar</b> — nem um resultado positivo levaria acima do limiar terapêutico.'
          : (pre > treatTh ? '<b>Tratar sem testar</b> — nem um resultado negativo desceria abaixo do limiar terapêutico.'
            : '<b>Testar</b> — o resultado do exame muda a conduta (zona de teste).');
        rec = '<div class="mbc-post">Pré-teste ' + r1(pre) + '% → ' + rec + '</div>';
      }
      out.className = 'sc-result sc-info';
      out.innerHTML = '<div class="sc-conduta">' +
        '<div>Limiar terapêutico <b>p* = ' + r1(pstar) + '%</b>' + (B !== null && H !== null ? ' (dano/benefício ' + fmt(H) + '/' + fmt(B) + ')' : '') + '.</div>' +
        '<div>Limiar de <b>teste</b> = <b class="mbe-big">' + r1(testTh) + '%</b> · limiar de <b>teste-tratamento</b> = <b class="mbe-big">' + r1(treatTh) + '%</b></div>' +
        bar +
        '<div class="diag-verdict">Zonas: &lt; ' + r1(testTh) + '% não testar · ' + r1(testTh) + '–' + r1(treatTh) + '% testar · &gt; ' + r1(treatTh) + '% tratar.</div>' +
        rec +
        '<div class="sc-extra">Modelo simplificado de Pauker-Kassirer: quanto pior o dano de tratar o não-doente, maior p*; testes mais potentes (LR+ alta, LR− baixa) alargam a faixa de teste.</div>' +
        '</div>';
    };
    document.getElementById('mb-tcalc').addEventListener('click', calc);
    panel.querySelectorAll('input').forEach(el => el.addEventListener('change', calc));
  }

  // ---------- menu ----------
  const TOOLS = [
    { id: 'calc', nome: '🧭 Calculadora diagnóstica', fn: viewCalc },
    { id: 'post', nome: 'Probabilidade pós-teste (Bayes) + nomograma', fn: viewPostTeste },
    { id: 'limiares', nome: '⚖️ Limiares de decisão', fn: viewLimiares },
    { id: 'efeito', nome: 'Medidas de efeito (NNT / NNH)', fn: viewEfeito },
    { id: 'lrs', nome: 'Biblioteca de LRs', fn: viewLRs }
  ];
  const botoes = {};
  const gt = document.createElement('div'); gt.className = 'evol-group-title'; gt.textContent = 'Ferramentas'; menu.appendChild(gt);
  TOOLS.forEach(t => {
    const b = document.createElement('button'); b.className = 'evol-item'; b.textContent = t.nome; b.dataset.id = t.id;
    botoes[t.id] = b; b.addEventListener('click', () => irPara(t.id)); menu.appendChild(b);
  });
  function irPara(id) {
    const t = TOOLS.find(x => x.id === id); if (!t) return;
    menu.querySelectorAll('.evol-item').forEach(x => x.classList.toggle('active', x === botoes[id]));
    t.fn();
  }
  irPara('calc');
})();
