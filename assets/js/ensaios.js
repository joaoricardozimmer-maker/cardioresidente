// Aba "Ensaios pivotais": lista pesquisável + botão que resolve o DOI ao vivo (PubMed E-utilities).
(function () {
  const root = document.getElementById('ensaios-root');
  if (!root) return;
  const input = document.getElementById('ensaios-busca');
  const pesoSel = document.getElementById('ensaios-peso');
  const areaSel = document.getElementById('ensaios-area');
  const countEl = document.getElementById('ensaios-count');
  const EUTILS = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';

  function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');}
  function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function stars(p){return '★'.repeat(p);}

  // popular filtro de área
  window.ENSAIOS.forEach((g,idx)=>{
    const o=document.createElement('option'); o.value=String(idx); o.textContent=g.sec; areaSel.appendChild(o);
  });

  function render(){
    const q=norm(input.value);
    const termos=q.split(/\s+/).filter(t=>t.length>1);
    const minPeso=parseInt(pesoSel.value,10);
    const areaFiltro=areaSel.value;
    let total=0;
    let html='';

    window.ENSAIOS.forEach((g,idx)=>{
      if(areaFiltro!=='all' && areaFiltro!==String(idx)) return;
      const trials=g.t.filter(tr=>{
        if(tr.p<minPeso) return false;
        if(!termos.length) return true;
        const hay=norm(tr.n+' '+tr.d+' '+tr.x+' '+tr.i+' '+g.sec);
        return termos.every(t=>hay.includes(t));
      });
      if(!trials.length) return;
      total+=trials.length;
      html+=`<div class="ens-sec"><h3 class="ens-sec-title">${esc(g.sec)} <span class="ens-sec-n">(${trials.length})</span></h3><div class="ens-list">`;
      trials.forEach(tr=>{
        html+=`<div class="ens-card">
          <div class="ens-head">
            <span class="ens-nome">${esc(tr.n)}</span>
            <span class="ens-stars" title="peso didático">${stars(tr.p)}</span>
          </div>
          <div class="ens-meta">${esc(tr.r)} · ${esc(String(tr.a))}</div>
          <div class="ens-d">${esc(tr.d)}</div>
          <div class="ens-x"><strong>Resultado:</strong> ${esc(tr.x)}</div>
          <div class="ens-i"><strong>Impacto:</strong> ${esc(tr.i)}</div>
          <button class="ens-doi" data-q="${esc(tr.n)}" data-y="${esc(String(tr.a))}" data-j="${esc(tr.r)}">🔎 Ver no PubMed</button>
        </div>`;
      });
      html+='</div></div>';
    });

    root.innerHTML = html || '<p class="muted">Nenhum ensaio encontrado para esse filtro.</p>';
    countEl.textContent = total + ' ensaios';
    root.querySelectorAll('.ens-doi').forEach(b=>b.addEventListener('click',()=>abrirDOI(b)));
  }

  // mapeia a sigla da revista para o nome reconhecido pelo PubMed (melhora a precisão da busca)
  const REV={"NEJM":"N Engl J Med","Lancet":"Lancet","JAMA":"JAMA","Circulation":"Circulation",
    "JACC":"J Am Coll Cardiol","Eur Heart J":"Eur Heart J","BMJ":"BMJ","AHA":"","ACC.26":"","ESC":"",
    "ESC/NEJM":"N Engl J Med","Lancet/JACC":"Lancet","BMJ/JACC":"BMJ","Circ Arrhythm Electrophysiol":"Circ Arrhythm Electrophysiol"};

  // limpa o nome do trial para a busca (remove parênteses e pega o 1º antes de " / ")
  function cleanName(n){
    return n.replace(/\([^)]*\)/g,' ').split('/')[0].replace(/\s+/g,' ').trim();
  }
  function abrirURL(u){ window.open(u,'_blank','noopener'); }
  async function esearch(term){
    const r=await fetch(`${EUTILS}/esearch.fcgi?db=pubmed&retmode=json&retmax=6&sort=relevance&term=${encodeURIComponent(term)}`);
    const d=await r.json(); return (d.esearchresult&&d.esearchresult.idlist)||[];
  }

  // Abre a busca PRECISA do trial no PubMed (nome + ano + revista), ordenada por relevância.
  // O artigo original aparece no topo; o usuário clica nele e segue para o DOI/texto completo.
  // (Evita o erro de "adivinhar" um DOI e abrir editorial/sub-análise/estudo errado.)
  function abrirDOI(btn){
    const nome=btn.dataset.q, ano=btn.dataset.y, rev=btn.dataset.j||'';
    const jornal = REV[rev]!==undefined ? REV[rev] : rev;
    const cn = cleanName(nome);
    const term = jornal ? `${cn} ${ano} ${jornal}` : `${cn} ${ano}`;
    window.open('https://pubmed.ncbi.nlm.nih.gov/?term='+encodeURIComponent(term)+'&sort=relevance','_blank','noopener');
  }

  function extractDOI(it){
    if(it.elocationid){const m=it.elocationid.match(/(10\.\d{4,}\/[^\s]+)/); if(m) return m[1];}
    if(Array.isArray(it.articleids)){const d=it.articleids.find(a=>a.idtype==='doi'); if(d) return d.value;}
    return null;
  }

  input.addEventListener('input', render);
  pesoSel.addEventListener('change', render);
  areaSel.addEventListener('change', render);
  render();
})();
