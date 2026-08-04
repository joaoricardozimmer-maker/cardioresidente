// Aba "Atualizações": changelog de diretrizes (o que mudou e quando).
(function () {
  const root = document.getElementById('novidades-root');
  if (!root) return;
  const M = window.MUDANCAS || [];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  root.innerHTML = M.map(m =>
    '<div class="nv-card"><div class="nv-head"><span class="nv-ano">' + esc(m.ano) + '</span><span class="nv-area">' + esc(m.area) + '</span></div>' +
    '<div class="nv-fonte">' + esc(m.fonte) + '</div>' +
    '<ul class="nv-itens">' + m.itens.map(i => '<li>' + esc(i) + '</li>').join('') + '</ul></div>'
  ).join('');
})();
