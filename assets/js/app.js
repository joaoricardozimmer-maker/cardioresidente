// Navegação em hubs (2 níveis) + busca global + utilidades compartilhadas
(function () {
  const HUBS = [
    { id: 'paciente', label: '🧬 Paciente', views: [['paciente', '🧬 Conduta'], ['diagnostico', '🔍 Diagnóstico']] },
    { id: 'temas', label: '🫀 Temas', views: [['temas', '🫀 Temas']] },
    { id: 'evidencias', label: '📚 Evidências', views: [['evidencia', '🔎 Recomendações'], ['guias', '📚 Diretrizes'], ['ensaios', '🧪 Ensaios pivotais']] },
    { id: 'ferramentas', label: '🧮 Ferramentas', views: [['scores', '🧮 Scores'], ['pretest', '🎯 Pré-teste'], ['doses', '💊 Doses']] },
    { id: 'mbe', label: '📐 MBE', views: [['mbe', '📐 MBE']] },
    { id: 'plantao', label: '🚨 Plantão', views: [['protocolos', '🚨 Protocolos']] },
    { id: 'prontuario', label: '📝 Prontuário', views: [['transcricao', '📝 Transcrever laudo'], ['evolucoes', '🗂️ Evoluções']] },
    { id: 'sobre', label: 'ℹ️ Sobre', views: [['novidades', '🆕 Atualizações'], ['sobre', 'ℹ️ Sobre']] }
  ];
  const viewHub = {};
  HUBS.forEach(h => h.views.forEach(v => { viewHub[v[0]] = h; }));

  const hubsEl = document.getElementById('hubs');
  const subEl = document.getElementById('subtabs');
  const sections = document.querySelectorAll('.view');

  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
  function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  function renderHubs(activeHubId) {
    hubsEl.innerHTML = HUBS.map(h => '<button class="hub' + (h.id === activeHubId ? ' active' : '') + '" data-hub="' + h.id + '">' + h.label + '</button>').join('');
    hubsEl.querySelectorAll('.hub').forEach(b => b.addEventListener('click', () => {
      const h = HUBS.find(x => x.id === b.dataset.hub);
      showView(h.views[0][0]);
    }));
  }
  function renderSub(hub, activeView) {
    if (hub.views.length <= 1) { subEl.innerHTML = ''; subEl.style.display = 'none'; return; }
    subEl.style.display = '';
    subEl.innerHTML = hub.views.map(v => '<button class="subtab' + (v[0] === activeView ? ' active' : '') + '" data-view="' + v[0] + '">' + v[1] + '</button>').join('');
    subEl.querySelectorAll('.subtab').forEach(b => b.addEventListener('click', () => showView(b.dataset.view)));
  }
  function showView(view) {
    const hub = viewHub[view]; if (!hub) return;
    renderHubs(hub.id);
    renderSub(hub, view);
    sections.forEach(s => s.classList.toggle('active', s.id === 'view-' + view));
    history.replaceState(null, '', '#' + view);
    window.scrollTo({ top: 0, behavior: 'instant' in document.body.style ? 'instant' : 'auto' });
  }
  window.cardioGoView = showView;

  const initial = (location.hash || '#paciente').slice(1);
  showView(viewHub[initial] ? initial : 'paciente');

  // ---------------- Busca global ----------------
  const gi = document.getElementById('gsearch');
  const gr = document.getElementById('gsearch-results');
  const IDX = [];
  let built = false;
  function buildIndex() {
    IDX.length = 0;
    (window.RECOMENDACOES || []).forEach(r => IDX.push({
      label: r.titulo, sub: r.area, type: 'Conduta', kw: (r.kw || []).join(' '),
      run: () => { showView('evidencia'); const i = document.getElementById('busca-input'); if (i) { i.value = r.titulo; document.getElementById('busca-form').dispatchEvent(new Event('submit', { cancelable: true })); } }
    }));
    (window.SCORES_LIST || []).forEach(s => IDX.push({
      label: s.nome, sub: s.grupo, type: 'Score', kw: s.desc || '',
      run: () => { showView('scores'); const b = document.querySelector('#scores-menu .evol-item[data-id="' + s.id + '"]'); if (b) { b.click(); b.scrollIntoView({ block: 'center' }); } }
    }));
    (window.DOSES || []).forEach(d => IDX.push({
      label: d.nome, sub: d.g, type: 'Dose', kw: (d.dose || '') + ' ' + (d.obs || ''),
      run: () => { showView('doses'); const i = document.getElementById('dz-busca'); if (i) { i.value = d.nome; i.dispatchEvent(new Event('input')); } }
    }));
    (window.GUIAS || []).forEach(g => IDX.push({
      label: g.t, sub: 'Diretriz por tema', type: 'Diretriz', kw: '',
      run: () => { showView('guias'); const i = document.getElementById('guias-busca'); if (i) { i.value = g.t; i.dispatchEvent(new Event('input')); } }
    }));
    (window.PROTOCOLOS || []).forEach(p => IDX.push({
      label: p.nome, sub: 'Protocolo de plantão', type: 'Protocolo', kw: (p.area || ''),
      run: () => { showView('protocolos'); const b = document.querySelector('#protocolos-menu .evol-item[data-id="' + p.id + '"]'); if (b) b.click(); }
    }));
    // ensaios pivotais: estrutura { sec, t:[{n,a,...}] }
    (window.ENSAIOS || []).forEach(sec => {
      (sec.t || []).forEach(tr => { if (tr && tr.n) IDX.push({
        label: tr.n + (tr.a ? ' (' + tr.a + ')' : ''), sub: 'Ensaio pivotal', type: 'Ensaio', kw: (tr.i || '') + ' ' + (tr.x || '') + ' ' + (tr.d || ''),
        run: () => { showView('ensaios'); const i = document.getElementById('ensaios-busca'); if (i) { i.value = tr.n; i.dispatchEvent(new Event('input')); } }
      }); });
    });
    built = true;
  }
  function badgeClass(t) { return 'gs-' + ({ 'Conduta': 'cond', 'Score': 'score', 'Dose': 'dose', 'Diretriz': 'guia', 'Ensaio': 'ens', 'Protocolo': 'prot' }[t] || 'cond'); }

  if (gi && gr) {
    const run = () => {
      if (!built) buildIndex();
      const q = norm(gi.value); if (q.length < 2) { gr.innerHTML = ''; gr.classList.remove('show'); return; }
      const terms = q.split(/\s+/).filter(Boolean);
      const res = IDX.map(it => {
        const hay = norm(it.label + ' ' + it.sub + ' ' + it.type + ' ' + it.kw);
        let s = 0; terms.forEach(t => { if (hay.includes(t)) s++; });
        if (norm(it.label).includes(q)) s += 3;
        return { it, s };
      }).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 14);
      gr.innerHTML = res.length
        ? res.map(x => '<button class="gs-item" data-i="' + IDX.indexOf(x.it) + '"><span class="gs-type ' + badgeClass(x.it.type) + '">' + x.it.type + '</span><span class="gs-label">' + esc(x.it.label) + '</span><span class="gs-sub">' + esc(x.it.sub) + '</span></button>').join('')
        : '<div class="gs-empty">Nada encontrado para "' + esc(gi.value) + '".</div>';
      gr.classList.add('show');
      gr.querySelectorAll('.gs-item').forEach(b => b.addEventListener('click', () => {
        const it = IDX[+b.dataset.i]; gr.classList.remove('show'); gi.value = ''; if (it) it.run();
      }));
    };
    gi.addEventListener('input', run);
    gi.addEventListener('focus', () => { if (gi.value.length >= 2) run(); });
    document.addEventListener('click', e => { if (!e.target.closest('.globalsearch')) gr.classList.remove('show'); });
    gi.addEventListener('keydown', e => { if (e.key === 'Escape') { gr.classList.remove('show'); gi.blur(); } });
  }

  // ---------------- utilidades ----------------
  let toastEl;
  window.toast = function (msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastEl._t); toastEl._t = setTimeout(() => toastEl.classList.remove('show'), 1800);
  };
  window.copyText = async function (text) {
    try { await navigator.clipboard.writeText(text); window.toast('Copiado!'); }
    catch (e) { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); window.toast('Copiado!'); }
  };
})();
