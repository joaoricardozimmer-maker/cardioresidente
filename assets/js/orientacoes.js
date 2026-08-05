// Aba "Orientações" — mudança de estilo de vida com a evidência ao lado,
// em duas versões: texto para o paciente e bloco técnico para a evolução.
(function () {
  const menu = document.getElementById('orient-menu');
  const panel = document.getElementById('orient-panel');
  const search = document.getElementById('orient-search');
  const count = document.getElementById('orient-count');
  if (!menu || !panel) return;

  const O = window.ORIENTACOES || [];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  let atual = null;
  let pronto = false; // evita rolar a página na renderização inicial

  function render(o) {
    atual = o;
    let h = '<h3 class="sc-title">' + esc(o.nome) + '</h3>';
    h += '<span class="rec-area">' + esc(o.grupo) + '</span>';
    h += '<p class="or-resumo">' + esc(o.resumo) + '</p>';

    h += '<div class="or-sec-title">O que a evidência mostra</div>';
    h += '<div class="or-evid">' + (o.evidencia || []).map(e =>
      '<div class="or-ev"><div class="or-ev-t">' + esc(e.t) + '</div><div class="or-ev-x">' + esc(e.x) + '</div></div>'
    ).join('') + '</div>';

    h += '<div class="or-boxes">';
    h += '<div class="or-box">'
      + '<div class="or-box-head"><span class="or-box-t">📄 Para o paciente</span>'
      + '<button class="btn-ghost or-copy" data-alvo="paciente">📋 Copiar</button></div>'
      + '<pre class="or-pre" id="or-paciente">' + esc(o.paciente) + '</pre></div>';
    h += '<div class="or-box">'
      + '<div class="or-box-head"><span class="or-box-t">🗂️ Para o prontuário</span>'
      + '<button class="btn-ghost or-copy" data-alvo="prontuario">📋 Copiar</button></div>'
      + '<pre class="or-pre" id="or-prontuario">' + esc(o.prontuario) + '</pre></div>';
    h += '</div>';

    if (o.fonte) h += '<p class="muted small or-fonte">Fontes: ' + esc(o.fonte) + '</p>';
    h += '<p class="muted small">Apoio à decisão — individualize para o paciente e confira as diretrizes vigentes.</p>';

    panel.innerHTML = h;
    panel.querySelectorAll('.or-copy').forEach(b => b.addEventListener('click', () => {
      const el = document.getElementById('or-' + b.dataset.alvo);
      if (el && window.copyText) window.copyText(el.textContent);
    }));
    if (pronto) panel.scrollIntoView({ block: 'nearest' });
  }

  // ---------- menu agrupado ----------
  const entries = [];
  const grupos = {}; const ordem = [];
  O.forEach(o => { if (!grupos[o.grupo]) { grupos[o.grupo] = []; ordem.push(o.grupo); } grupos[o.grupo].push(o); });

  ordem.forEach(g => {
    const gt = document.createElement('div');
    gt.className = 'evol-group-title'; gt.textContent = g;
    menu.appendChild(gt);
    grupos[g].forEach(o => {
      const b = document.createElement('button');
      b.className = 'evol-item'; b.textContent = o.nome; b.dataset.id = o.id;
      b.addEventListener('click', () => {
        menu.querySelectorAll('.evol-item').forEach(x => x.classList.toggle('active', x === b));
        render(o);
      });
      menu.appendChild(b);
      entries.push({
        btn: b, groupEl: gt, o,
        hay: norm(g + ' ' + o.nome + ' ' + o.resumo + ' ' + o.paciente + ' ' + o.prontuario
          + ' ' + (o.evidencia || []).map(e => e.t + ' ' + e.x).join(' '))
      });
    });
  });

  function filtrar() {
    const q = norm(search ? search.value.trim() : '');
    const termos = q ? q.split(/\s+/) : [];
    const visiveis = new Set();
    let n = 0;
    entries.forEach(e => {
      const ok = !termos.length || termos.every(t => e.hay.includes(t));
      e.btn.style.display = ok ? '' : 'none';
      if (ok) { visiveis.add(e.groupEl); n++; }
    });
    menu.querySelectorAll('.evol-group-title').forEach(gt => {
      gt.style.display = visiveis.has(gt) ? '' : 'none';
    });
    if (count) count.textContent = n === 0 ? 'nada encontrado' : (n === 1 ? '1 orientação' : n + ' orientações');
    if (termos.length && n === 1) {
      const e = entries.find(x => x.btn.style.display !== 'none');
      if (e) { menu.querySelectorAll('.evol-item').forEach(x => x.classList.toggle('active', x === e.btn)); render(e.o); }
    }
  }

  if (search) {
    search.addEventListener('input', filtrar);
    search.addEventListener('keydown', ev => { if (ev.key === 'Escape') { search.value = ''; filtrar(); } });
  }
  filtrar();

  const first = menu.querySelector('.evol-item');
  if (first) { first.classList.add('active'); render(O[0]); }
  pronto = true;

  // atalho para a busca global e para outras abas
  window.cardioAbrirOrientacao = function (id) {
    const b = menu.querySelector('.evol-item[data-id="' + id + '"]');
    if (b) b.click();
  };
})();
