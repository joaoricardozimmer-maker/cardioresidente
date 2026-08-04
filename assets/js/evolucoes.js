// Módulo de modelos de evolução
(function () {
  const menu = document.getElementById('evol-menu');
  const title = document.getElementById('evol-title');
  const text = document.getElementById('evol-text');
  const copyBtn = document.getElementById('evol-copy');
  const search = document.getElementById('evol-search');
  const count = document.getElementById('evol-count');

  const entries = [];
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Agrupa por "grupo", preservando a ordem em que aparecem no arquivo de dados
  const grupos = {};
  const ordem = [];
  window.EVOLUCOES.forEach((m, i) => {
    if (!grupos[m.grupo]) { grupos[m.grupo] = []; ordem.push(m.grupo); }
    grupos[m.grupo].push({ ...m, i });
  });

  ordem.forEach(g => {
    const gt = document.createElement('div');
    gt.className = 'evol-group-title';
    gt.textContent = g;
    menu.appendChild(gt);
    grupos[g].forEach(m => {
      const b = document.createElement('button');
      b.className = 'evol-item';
      b.textContent = m.nome;
      b.dataset.i = m.i;
      b.addEventListener('click', () => select(m.i, b));
      menu.appendChild(b);
      // índice de busca: grupo + nome + corpo do modelo
      entries.push({ btn: b, groupEl: gt, hay: norm(g + ' ' + m.nome + ' ' + m.texto) });
    });
  });

  function select(i, el) {
    const m = window.EVOLUCOES[i];
    title.textContent = m.nome;
    text.value = m.texto;
    copyBtn.disabled = false;
    menu.querySelectorAll('.evol-item').forEach(x => x.classList.toggle('active', x === el));
  }

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

    if (count) {
      count.textContent = n === 0 ? 'nenhum modelo encontrado'
        : n === 1 ? '1 modelo' : n + ' modelos';
    }

    // se a busca deixou exatamente um resultado, já abre
    if (termos.length && n === 1) {
      const e = entries.find(x => x.btn.style.display !== 'none');
      if (e) select(parseInt(e.btn.dataset.i, 10), e.btn);
    }
  }

  if (search) {
    search.addEventListener('input', filtrar);
    search.addEventListener('keydown', ev => {
      if (ev.key === 'Escape') { search.value = ''; filtrar(); }
    });
  }
  filtrar();

  copyBtn.addEventListener('click', () => {
    if (text.value.trim()) window.copyText(text.value);
  });

  // Seleciona o primeiro por padrão
  const first = menu.querySelector('.evol-item');
  if (first) select(parseInt(first.dataset.i, 10), first);

  // Mede o cabeçalho fixo e expõe como --stick-top, para o menu e o editor
  // grudarem logo abaixo dele. Recalcula em resize porque a barra de hubs quebra
  // em mais linhas em telas estreitas.
  const topbar = document.querySelector('.topbar');
  function medirTopo() {
    if (!topbar) return;
    const h = Math.round(topbar.getBoundingClientRect().height);
    if (h > 0) document.documentElement.style.setProperty('--stick-top', h + 'px');
  }
  medirTopo();
  window.addEventListener('resize', medirTopo);
  window.addEventListener('load', medirTopo);
  if (window.ResizeObserver && topbar) new ResizeObserver(medirTopo).observe(topbar);
})();
