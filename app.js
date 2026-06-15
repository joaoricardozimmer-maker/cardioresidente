// Navegação entre abas + utilidades compartilhadas
(function () {
  const tabs = document.querySelectorAll('.tab');
  const views = document.querySelectorAll('.view');

  function show(view) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.view === view));
    views.forEach(v => v.classList.toggle('active', v.id === 'view-' + view));
    history.replaceState(null, '', '#' + view);
  }

  tabs.forEach(t => t.addEventListener('click', () => show(t.dataset.view)));

  const initial = (location.hash || '#evidencia').slice(1);
  if (document.getElementById('view-' + initial)) show(initial);

  // Toast global
  let toastEl;
  window.toast = function (msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.classList.remove('show'), 1800);
  };

  // Copiar para a área de transferência
  window.copyText = async function (text) {
    try {
      await navigator.clipboard.writeText(text);
      window.toast('Copiado!');
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
      window.toast('Copiado!');
    }
  };
})();
