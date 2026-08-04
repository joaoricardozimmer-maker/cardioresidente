// Aba Evidências: motor de recomendações por sociedade (ESC, AHA/ACC, SBC).
// Pergunte uma conduta → recebe a Classe e o Nível de evidência de cada diretriz, com link para o PDF.
(function () {
  const form = document.getElementById('busca-form');
  const input = document.getElementById('busca-input');
  const chipsEl = document.getElementById('busca-chips');
  const resultsEl = document.getElementById('rec-results');
  if (!form || !input || !resultsEl) return;

  const BASE = window.RECOMENDACOES || [];
  const LINKS = window.REC_LINKS || {};

  // Grupos de sinônimos / siglas — qualquer termo do grupo "puxa" os demais na busca.
  const SINONIMOS = [
    ['bb', 'betabloqueador', 'beta bloqueador', 'carvedilol', 'bisoprolol', 'metoprolol', 'nebivolol', 'atenolol', 'propranolol'],
    ['ieca', 'inibidor da eca', 'inibidor de eca', 'enalapril', 'captopril', 'ramipril', 'lisinopril', 'perindopril'],
    ['bra', 'bloqueador do receptor', 'losartana', 'valsartana', 'candesartana', 'olmesartana', 'telmisartana', 'irbesartana'],
    ['arni', 'irna', 'sacubitril', 'sacubitril valsartana', 'entresto', 'neprilisina'],
    ['isglt2', 'sglt2', 'gliflozina', 'dapagliflozina', 'empagliflozina', 'canagliflozina', 'inibidor sglt2'],
    ['mra', 'arm', 'antagonista mineralocorticoide', 'espironolactona', 'eplerenona'],
    ['aco', 'anticoagulacao', 'anticoagulante', 'doac', 'noac', 'varfarina', 'apixabana', 'rivaroxabana', 'dabigatrana', 'edoxabana'],
    ['dapt', 'dupla antiagregacao', 'antiagregante', 'aas', 'aspirina', 'clopidogrel', 'ticagrelor', 'prasugrel'],
    ['bcc', 'bloqueador de canal de calcio', 'anlodipino', 'amlodipina', 'diltiazem', 'verapamil', 'nifedipino'],
    ['estatina', 'atorvastatina', 'rosuvastatina', 'sinvastatina', 'pravastatina'],
    ['glp1', 'glp-1', 'agonista glp', 'semaglutida', 'liraglutida', 'dulaglutida'],
    ['icfer', 'fe reduzida', 'fevr', 'fracao de ejecao reduzida', 'ic sistolica'],
    ['icfep', 'fe preservada', 'hfpef', 'diastolica'],
    ['sca', 'sindrome coronariana aguda', 'iam', 'infarto', 'nstemi', 'stemi'],
    ['fa', 'fibrilacao atrial', 'fibrilacao'],
    ['cmh', 'cardiomiopatia hipertrofica', 'hcm'],
    ['tep', 'tromboembolismo pulmonar', 'embolia pulmonar', 'tev'],
    ['eao', 'estenose aortica'],
    ['cdi', 'desfibrilador', 'desfibrilador implantavel'],
    ['trc', 'ressincronizacao', 'crt'],
    ['has', 'hipertensao', 'pressao alta', 'pressao arterial'],
    ['ldl', 'colesterol', 'dislipidemia']
  ];

  const exemplos = [
    'BB na ICFEr', 'IECA', 'IRNA', 'Anticoagulação na FA',
    'iSGLT2', 'TAVI', 'Meta de LDL', 'Mavacamten'
  ];

  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
  function normaliza(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  // expande a consulta com os sinônimos dos grupos correspondentes
  function expandir(q) {
    const nq = normaliza(q);
    let extra = [];
    SINONIMOS.forEach(grupo => {
      if (grupo.some(t => nq.includes(normaliza(t)))) extra = extra.concat(grupo);
    });
    return nq + ' ' + extra.map(normaliza).join(' ');
  }

  exemplos.forEach(ex => {
    const c = document.createElement('button');
    c.type = 'button'; c.className = 'chip'; c.textContent = ex;
    c.addEventListener('click', () => { input.value = ex; doSearch(ex); });
    chipsEl.appendChild(c);
  });

  function score(item, qExpand, qRaw) {
    const termos = qExpand.split(/\s+/).filter(t => t.length > 2);
    let s = 0;
    const hay = normaliza(item.titulo + ' ' + item.area + ' ' + item.kw.join(' ') + ' ' + item.resumo);
    const seen = {};
    termos.forEach(t => { if (!seen[t] && hay.includes(t)) { s += 1; seen[t] = 1; } });
    item.kw.forEach(k => { if (qExpand.includes(normaliza(k))) s += 1; });
    if (normaliza(item.titulo).includes(normaliza(qRaw)) && qRaw.length > 3) s += 4;
    return s;
  }

  function classeCss(cls) { return cls === 'I' ? 'cls-i' : cls === 'IIa' ? 'cls-iia' : cls === 'IIb' ? 'cls-iib' : cls === 'III' ? 'cls-iii' : 'cls-na'; }
  function classeTexto(cls) {
    return cls === 'I' ? 'Classe I — é recomendado/indicado (benefício comprovado)'
      : cls === 'IIa' ? 'Classe IIa — deve ser considerado (peso da evidência a favor)'
      : cls === 'IIb' ? 'Classe IIb — pode ser considerado (utilidade menos estabelecida)'
      : cls === 'III' ? 'Classe III — não recomendado / pode ser prejudicial' : '';
  }
  function nivelTexto(niv) {
    return niv === 'A' ? 'múltiplos ensaios randomizados ou metanálises'
      : niv === 'B' ? 'um ECR ou grandes estudos não randomizados'
      : niv === 'C' ? 'consenso de especialistas / estudos pequenos' : '';
  }

  // ordem de "força" das classes para detectar divergência relevante
  const ORDEM = { 'I': 4, 'IIa': 3, 'IIb': 2, 'III': 0 };
  function anoRecente(item) {
    let y = 0;
    item.recs.forEach(r => { const m = (r.fonte || '').match(/20\d{2}/g); if (m) m.forEach(x => { if (+x > y) y = +x; }); });
    return y || null;
  }
  function classeModal(recs) {
    const c = {}; recs.forEach(r => { c[r.cls] = (c[r.cls] || 0) + 1; });
    return Object.keys(c).sort((a, b) => c[b] - c[a])[0];
  }
  function divergencia(recs) {
    if (recs.length < 2) return null;
    const cls = recs.map(r => r.cls);
    const distintas = [...new Set(cls)];
    if (distintas.length < 2) return null;
    // diferença de pelo menos 1 nível de classe entre sociedades
    const vals = cls.map(c => ORDEM[c]);
    const forte = (Math.max(...vals) - Math.min(...vals)) >= 1;
    return forte ? recs.map(r => r.soc + ' ' + r.cls).join(' × ') : null;
  }

  function card(item) {
    const links = LINKS[item.doc] || {};
    const modal = classeModal(item.recs);
    const diverg = divergencia(item.recs);
    const ano = anoRecente(item);
    const linhas = item.recs.map(r => {
      const niv = r.niv ? '<span class="rec-niv rec-niv-' + esc(r.niv.toLowerCase()) + '" title="Nível ' + esc(r.niv) + ': ' + esc(nivelTexto(r.niv)) + '">Nível ' + esc(r.niv) + '</span>' : '<span class="rec-niv rec-niv-na">—</span>';
      const url = links[r.soc];
      const fonte = url
        ? '<a class="rec-fonte rec-fonte-link" href="' + esc(url) + '" target="_blank" rel="noopener" title="Abrir a diretriz (PDF/portal) — confira a recomendação na fonte">' + esc(r.fonte) + ' 📄</a>'
        : '<span class="rec-fonte">' + esc(r.fonte) + '</span>';
      const out = (diverg && r.cls !== modal) ? ' rec-classe-out' : '';
      return '<div class="rec-row">' +
        '<span class="rec-soc">' + esc(r.soc) + '</span>' +
        '<span class="rec-classe ' + classeCss(r.cls) + out + '" title="' + esc(classeTexto(r.cls)) + '">Classe ' + esc(r.cls) + '</span>' +
        niv + fonte + '</div>';
    }).join('');
    const badge = diverg
      ? '<span class="rec-diverg" title="As sociedades divergem na classe de recomendação: ' + esc(diverg) + '">⚠ Divergência entre sociedades</span>'
      : '';
    const meta = '<div class="rec-meta">' +
      (ano ? 'Diretriz mais recente: <b>' + ano + '</b> · ' : '') +
      'revisado em jun/2026' +
      (diverg ? ' · <span class="rec-meta-diverg">divergência: ' + esc(diverg) + '</span>' : '') +
      '</div>';
    const motivoHtml = item.motivo ? '<div class="rec-motivo"><b>Por que diverge:</b> ' + esc(item.motivo) + '</div>' : '';
    return '<div class="rec-card' + (diverg ? ' rec-card-diverg' : '') + '">' +
      '<div class="rec-head"><span class="rec-area">' + esc(item.area) + '</span>' + badge + '</div>' +
      '<h4 class="rec-titulo">' + esc(item.titulo) + '</h4>' +
      '<p class="rec-resumo">' + esc(item.resumo) + '</p>' +
      '<div class="rec-tabela">' + linhas + '</div>' +
      motivoHtml + meta +
      '</div>';
  }

  function doSearch(q) {
    if (!q || !q.trim()) { renderInicial(); return; }
    const qExpand = expandir(q);
    const ranked = BASE.map(it => ({ it, s: score(it, qExpand, q) }))
      .filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 10).map(x => x.it);
    if (!ranked.length) {
      resultsEl.innerHTML = '<div class="rec-vazio">Nenhuma conduta encontrada para <b>' + esc(q) + '</b> na base atual. ' +
        'Tente o nome do fármaco, da classe ou da condição (ex.: BB, IECA, anticoagulação), ou veja a aba <b>Diretrizes</b>.</div>';
      return;
    }
    resultsEl.innerHTML = REVNOTE + '<p class="rec-count">' + ranked.length + ' conduta(s) encontrada(s) — recomendação mais atual de cada sociedade:</p>' +
      ranked.map(card).join('');
  }

  const REVNOTE = '<div class="rec-revbanner">Recomendações <b>revisadas em jun/2026</b> — cada fonte abre a diretriz original (📄). O selo <span class="rec-diverg-inline">⚠ Divergência</span> aparece quando as sociedades discordam, com o motivo. <b>Nível de evidência:</b> A = vários ECR/metanálises · B = um ECR ou estudos grandes · <b>C = consenso/opinião</b> (interpretar com cautela).</div>';

  function renderInicial() {
    const areas = [...new Set(BASE.map(i => i.area))];
    const amostraTermos = ['Sacubitril', 'Anticoagulação na FA', 'Mavacamten', 'Meta de LDL'];
    const itens = [];
    amostraTermos.forEach(t => { const m = BASE.map(it => ({ it, s: score(it, expandir(t), t) })).sort((a, b) => b.s - a.s)[0]; if (m && m.s > 0 && !itens.includes(m.it)) itens.push(m.it); });
    resultsEl.innerHTML = REVNOTE +
      '<div class="rec-legenda">' +
      '<span class="rec-classe cls-i">Classe I</span> recomendado · ' +
      '<span class="rec-classe cls-iia">IIa</span> considerar · ' +
      '<span class="rec-classe cls-iib">IIb</span> pode-se considerar · ' +
      '<span class="rec-classe cls-iii">III</span> não recomendado' +
      '</div>' +
      '<p class="rec-count">' + BASE.length + ' condutas em ' + areas.length + ' áreas. Busca inteligente: <b>BB</b> = betabloqueador, <b>IRNA</b> = sacubitril/valsartana, <b>IECA</b> = enalapril e afins. Exemplos:</p>' +
      itens.map(card).join('');
  }

  form.addEventListener('submit', e => { e.preventDefault(); doSearch(input.value); });
  renderInicial();
})();
