// Aba "Temas": resumos clínicos com ensaios-chave e links internos (recomendações, scores, diretriz).
(function () {
  const menu = document.getElementById('temas-menu');
  const panel = document.getElementById('temas-panel');
  if (!menu || !panel) return;
  const T = window.TEMAS || [];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function nomeScore(id) { const s = (window.SCORES_LIST || []).find(x => x.id === id); return s ? s.nome : id; }

  function irRec(termo) { if (window.cardioGoView) window.cardioGoView('evidencia'); const i = document.getElementById('busca-input'); if (i) { i.value = termo; const f = document.getElementById('busca-form'); if (f) f.dispatchEvent(new Event('submit', { cancelable: true })); } }
  function irScore(id) { if (window.cardioGoView) window.cardioGoView('scores'); const b = document.querySelector('#scores-menu .evol-item[data-id="' + id + '"]'); if (b) { b.click(); b.scrollIntoView({ block: 'center' }); } }
  function irGuia(termo) { if (window.cardioGoView) window.cardioGoView('guias'); const i = document.getElementById('guias-busca'); if (i) { i.value = termo; i.dispatchEvent(new Event('input')); } }
  function irPretest() { if (window.cardioGoView) window.cardioGoView('pretest'); }

  function render(t) {
    let h = '<h3 class="sc-title">' + esc(t.nome) + '</h3><span class="rec-area">' + esc(t.area) + '</span>';
    if (t.fisio) h += '<h4 class="tema-h">Fisiopatologia</h4><div class="tema-resumo tema-fisio">' + t.fisio + '<div class="tema-fonte-fisio">Fonte: Braunwald’s Heart Disease (12ª ed.) e Harrison’s Principles of Internal Medicine; conduta conforme a diretriz do tema.</div></div>';
    h += '<h4 class="tema-h">Resumo clínico</h4><div class="tema-resumo">' + t.resumo + '</div>';
    const crit = (window.TEMAS_CRIT || {})[t.id];
    if (crit) h += '<h4 class="tema-h">Critérios e cortes</h4><div class="tema-crit">' + crit + '</div>';
    if (t.trials && t.trials.length) {
      h += '<h4 class="tema-h">Ensaios-chave</h4><ul class="tema-trials">' +
        t.trials.map(tr => '<li><b><a class="tema-trial-link" href="https://pubmed.ncbi.nlm.nih.gov/?term=' + encodeURIComponent(tr.n) + '&sort=relevance" target="_blank" rel="noopener" title="Abrir no PubMed">' + esc(tr.n) + '</a></b> — ' + esc(tr.t) + '</li>').join('') + '</ul>';
    }
    h += '<h4 class="tema-h">No site</h4><div class="tema-links">';
    (t.recs || []).forEach(r => h += '<button class="tema-link tl-rec" data-termo="' + esc(r[0]) + '">📋 ' + esc(r[1]) + '</button>');
    (t.scores || []).forEach(id => h += '<button class="tema-link tl-score" data-id="' + esc(id) + '">🧮 ' + esc(nomeScore(id)) + '</button>');
    if (t.guia) h += '<button class="tema-link tl-guia" data-guia="' + esc(t.guia) + '">📚 Diretriz</button>';
    if (t.pretest) h += '<button class="tema-link tl-pre">🎯 Pré-teste</button>';
    h += '<button class="tema-link tl-ens" data-ens="' + esc(t.nome) + '">🧪 Ensaios pivotais</button>';
    h += '</div>';
    h += '<p class="muted small" style="margin-top:14px">Fisiopatologia baseada em Braunwald/Harrison e nas diretrizes ESC/AHA/SBC. Resumo de apoio ao estudo — confira sempre a diretriz original.</p>';
    panel.innerHTML = h;
    panel.querySelectorAll('.tl-rec').forEach(b => b.addEventListener('click', () => irRec(b.dataset.termo)));
    panel.querySelectorAll('.tl-score').forEach(b => b.addEventListener('click', () => irScore(b.dataset.id)));
    panel.querySelectorAll('.tl-guia').forEach(b => b.addEventListener('click', () => irGuia(b.dataset.guia)));
    panel.querySelectorAll('.tl-pre').forEach(b => b.addEventListener('click', irPretest));
    panel.querySelectorAll('.tl-ens').forEach(b => b.addEventListener('click', () => {
      if (window.cardioGoView) window.cardioGoView('ensaios');
      const i = document.getElementById('ensaios-busca'); if (i) { i.value = ''; i.dispatchEvent(new Event('input')); }
    }));
  }

  // menu agrupado por grandes áreas
  const CATS = [
    { c: 'Doença coronariana', ids: ['dor', 'scc', 'sca', 'noca'] },
    { c: 'Insuficiência cardíaca e miocardiopatias', ids: ['ic', 'dilatada', 'cmh', 'amiloidose', 'sarcoidose', 'fabry', 'chagas'] },
    { c: 'Arritmias, síncope e morte súbita', ids: ['fa', 'arritmias', 'sincope'] },
    { c: 'Valvopatias e pericárdio', ids: ['valvopatia', 'febrereum', 'pericardite', 'miocardite', 'endocardite'] },
    { c: 'Aorta, vascular e tromboembolismo', ids: ['aorta', 'dap', 'tep', 'hp'] },
    { c: 'Métodos diagnósticos', ids: ['ecg', 'rx', 'ergometria', 'eco', 'nuclear', 'rmc', 'tc', 'cate'] },
    { c: 'Prevenção e fatores de risco', ids: ['dislipidemia', 'has', 'prevencao'] },
    { c: 'Situações especiais', ids: ['congenita', 'onco', 'sistemicas'] }
  ];
  const byId = {}; T.forEach(t => { byId[t.id] = t; });
  let primeiro = null;
  function addBtn(t) {
    const b = document.createElement('button');
    b.className = 'evol-item'; b.textContent = t.nome; b.dataset.id = t.id;
    b.addEventListener('click', () => { menu.querySelectorAll('.evol-item').forEach(x => x.classList.toggle('active', x === b)); render(t); });
    menu.appendChild(b);
    if (!primeiro) primeiro = { b: b, t: t };
  }
  const usados = {};
  CATS.forEach(cat => {
    const temas = cat.ids.map(id => byId[id]).filter(Boolean);
    if (!temas.length) return;
    const gt = document.createElement('div'); gt.className = 'evol-group-title'; gt.textContent = cat.c; menu.appendChild(gt);
    temas.forEach(t => { usados[t.id] = 1; addBtn(t); });
  });
  T.filter(t => !usados[t.id]).forEach(addBtn);
  if (primeiro) { primeiro.b.classList.add('active'); render(primeiro.t); }
})();
