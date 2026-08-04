// Aba "Plantão": fluxogramas/algoritmos de emergência.
(function () {
  const menu = document.getElementById('protocolos-menu');
  const panel = document.getElementById('protocolos-panel');
  if (!menu || !panel) return;
  const P = window.PROTOCOLOS || [];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function render(p) {
    let n = 0;
    let h = '<h3 class="sc-title">' + esc(p.nome) + '</h3><span class="rec-area">' + esc(p.area) + '</span><div class="pr-steps">';
    p.passos.forEach(s => {
      if (s.t === 'passo') { n++; h += '<div class="pr-step"><span class="pr-num">' + n + '</span><div class="pr-txt">' + esc(s.x) + '</div></div>'; }
      else if (s.t === 'dose') h += '<div class="pr-dose"><span class="pr-ic">💊</span><div>' + esc(s.x) + '</div></div>';
      else if (s.t === 'decisao') h += '<div class="pr-decisao"><span class="pr-ic">↳</span><div>' + esc(s.x) + '</div></div>';
      else if (s.t === 'alerta') h += '<div class="pr-alerta"><span class="pr-ic">⚠️</span><div>' + esc(s.x) + '</div></div>';
      else if (s.t === 'nota') h += '<div class="pr-nota">' + esc(s.x) + '</div>';
      else if (s.t === 'sub') h += '<ul class="pr-sub">' + s.items.map(i => '<li>' + esc(i) + '</li>').join('') + '</ul>';
    });
    h += '</div><p class="muted small" style="margin-top:14px">Apoio à decisão — siga o protocolo da sua instituição e o ACLS/diretriz vigente. Doses para adultos; individualize.</p>';
    panel.innerHTML = h;
  }

  P.forEach(p => {
    const b = document.createElement('button');
    b.className = 'evol-item'; b.textContent = p.nome; b.dataset.id = p.id;
    b.addEventListener('click', () => { menu.querySelectorAll('.evol-item').forEach(x => x.classList.toggle('active', x === b)); render(p); });
    menu.appendChild(b);
  });
  const first = menu.querySelector('.evol-item');
  if (first) { first.classList.add('active'); render(P[0]); }
})();
