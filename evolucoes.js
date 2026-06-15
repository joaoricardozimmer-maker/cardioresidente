// Módulo de modelos de evolução
(function () {
  const menu = document.getElementById('evol-menu');
  const title = document.getElementById('evol-title');
  const text = document.getElementById('evol-text');
  const copyBtn = document.getElementById('evol-copy');

  let current = null;

  // Agrupa por "grupo"
  const grupos = {};
  window.EVOLUCOES.forEach((m, i) => {
    (grupos[m.grupo] = grupos[m.grupo] || []).push({ ...m, i });
  });

  Object.keys(grupos).forEach(g => {
    const gt = document.createElement('div');
    gt.className = 'evol-group-title'; gt.textContent = g;
    menu.appendChild(gt);
    grupos[g].forEach(m => {
      const b = document.createElement('button');
      b.className = 'evol-item'; b.textContent = m.nome; b.dataset.i = m.i;
      b.addEventListener('click', () => select(m.i, b));
      menu.appendChild(b);
    });
  });

  function select(i, el) {
    const m = window.EVOLUCOES[i];
    current = i;
    title.textContent = m.nome;
    text.value = m.texto;
    copyBtn.disabled = false;
    menu.querySelectorAll('.evol-item').forEach(x => x.classList.toggle('active', x === el));
  }

  copyBtn.addEventListener('click', () => {
    if (text.value.trim()) window.copyText(text.value);
  });

  // Seleciona o primeiro por padrão
  const first = menu.querySelector('.evol-item');
  if (first) select(parseInt(first.dataset.i, 10), first);
})();
