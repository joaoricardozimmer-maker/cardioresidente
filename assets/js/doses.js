// Aba "Doses": busca rápida de doses e ajuste renal de fármacos cardiológicos.
(function () {
  const root = document.getElementById('doses-root');
  if (!root) return;
  const DB = window.DOSES || [];

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  const grupos = [...new Set(DB.map(d => d.g))];
  const aviso = '<div class="rec-revbanner"><b>Doses de referência para adultos</b> — confira a bula e <b>individualize</b> (peso, função renal/hepática, interações). Não substitui prescrição. Revisado em jun/2026.</div>';

  root.innerHTML = aviso +
    '<div class="mbe-filtros">' +
    '<input type="text" id="dz-busca" placeholder="Buscar fármaco... (ex: enoxaparina, amiodarona, DOAC)" class="mbe-search">' +
    '<select id="dz-grupo" class="mbe-search"><option value="">Todos os grupos</option>' +
    grupos.map(g => '<option value="' + esc(g) + '">' + esc(g) + '</option>').join('') + '</select>' +
    '</div><div id="dz-table"></div>';

  function render(filtro, grupoSel) {
    const f = norm(filtro);
    const grp = {};
    DB.filter(d => (!grupoSel || d.g === grupoSel) && (!f || norm(d.nome + ' ' + d.g + ' ' + d.dose + ' ' + d.renal + ' ' + d.obs).includes(f)))
      .forEach(d => { (grp[d.g] = grp[d.g] || []).push(d); });
    let h = '';
    Object.keys(grp).forEach(g => {
      h += '<div class="evol-group-title" style="margin-top:14px">' + esc(g) + '</div>';
      h += '<table class="mbe-table dz-table"><thead><tr><th>Fármaco</th><th>Dose habitual</th><th>Ajuste renal</th><th>Observações</th></tr></thead><tbody>';
      grp[g].forEach(d => {
        h += '<tr><td class="dz-nome">' + esc(d.nome) + '</td>' +
          '<td>' + esc(d.dose) + '</td>' +
          '<td class="dz-renal">' + esc(d.renal) + '</td>' +
          '<td class="dz-obs">' + esc(d.obs) + '</td></tr>';
      });
      h += '</tbody></table>';
    });
    if (!h) h = '<p class="muted small">Nenhum fármaco encontrado.</p>';
    document.getElementById('dz-table').innerHTML = h;
  }
  render('', '');
  document.getElementById('dz-busca').addEventListener('input', e => render(e.target.value, document.getElementById('dz-grupo').value));
  document.getElementById('dz-grupo').addEventListener('change', e => render(document.getElementById('dz-busca').value, e.target.value));
})();
