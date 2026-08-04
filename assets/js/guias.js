// Aba "Diretrizes": lista por tema com botões ESC / AHA-ACC / SBC que abrem o documento oficial.
(function () {
  const root = document.getElementById('guias-root');
  if (!root) return;
  const input = document.getElementById('guias-busca');

  function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');}
  function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

  function btn(cls, soc){
    if(!soc) return '';
    return `<a class="gv-btn ${cls}" href="${esc(soc.u)}" target="_blank" rel="noopener" title="${esc(soc.t)}">${esc(soc.t)} ↗</a>`;
  }

  function render(){
    const q=norm(input.value);
    const termos=q.split(/\s+/).filter(t=>t.length>1);
    const items=window.GUIAS.filter(g=>{
      if(!termos.length) return true;
      const hay=norm(g.t+' '+(g.esc?g.esc.t:'')+' '+(g.aha?g.aha.t:'')+' '+(g.sbc?g.sbc.t:''));
      return termos.every(t=>hay.includes(t));
    });
    if(!items.length){ root.innerHTML='<p class="muted">Nenhum tema encontrado.</p>'; return; }
    root.innerHTML = items.map(g=>`
      <div class="gv-card">
        <h3 class="gv-tema">${esc(g.t)}</h3>
        <div class="gv-btns">
          ${btn('gv-esc', g.esc)}
          ${btn('gv-aha', g.aha)}
          ${btn('gv-sbc', g.sbc)}
        </div>
      </div>`).join('');
  }

  input.addEventListener('input', render);
  render();
})();
