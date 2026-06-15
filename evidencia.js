// Módulo de busca de evidências: base curada + PubMed ao vivo (NCBI E-utilities)
(function () {
  const form = document.getElementById('busca-form');
  const input = document.getElementById('busca-input');
  const chipsEl = document.getElementById('busca-chips');
  const curadaEl = document.getElementById('curada-results');
  const pubEl = document.getElementById('pubmed-results');
  const pubStatus = document.getElementById('pubmed-status');

  const EUTILS = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';

  const exemplos = [
    "AAS na síndrome coronariana aguda",
    "iSGLT2 na insuficiência cardíaca",
    "Anticoagulação na fibrilação atrial",
    "TAVI estenose aórtica",
    "Colchicina pericardite",
    "Metas de LDL"
  ];

  // ---------- Chips de exemplo ----------
  exemplos.forEach(ex => {
    const c = document.createElement('button');
    c.type = 'button'; c.className = 'chip'; c.textContent = ex;
    c.addEventListener('click', () => { input.value = ex; doSearch(ex); });
    chipsEl.appendChild(c);
  });

  // ---------- Base curada ----------
  function normaliza(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function scoreCurada(item, q) {
    const nq = normaliza(q);
    const termos = nq.split(/\s+/).filter(t => t.length > 2);
    let score = 0;
    const hay = normaliza(item.title + ' ' + item.cat + ' ' + item.keywords.join(' ') + ' ' + item.bottom);
    termos.forEach(t => { if (hay.includes(t)) score += 1; });
    item.keywords.forEach(k => { if (nq.includes(normaliza(k))) score += 2; });
    return score;
  }

  function renderCurada(q) {
    const ranked = window.DIRETRIZES
      .map(it => ({ it, s: scoreCurada(it, q) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 6)
      .map(x => x.it);

    if (!ranked.length) {
      curadaEl.innerHTML = '<p class="muted small">Nenhuma conduta na base curada para esse termo. Veja os resultados do PubMed ao lado.</p>';
      return;
    }
    curadaEl.innerHTML = ranked.map(cardCurada).join('');
    curadaEl.querySelectorAll('.pm-link').forEach(el => {
      el.addEventListener('click', () => {
        const q = el.dataset.q;
        input.value = el.dataset.title;
        searchPubMed(q);
        document.getElementById('view-evidencia').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function cardCurada(it) {
    return `
      <div class="evi-card">
        <span class="cat">${esc(it.cat)}</span>
        <h4>${esc(it.title)}</h4>
        <p class="bottom">${esc(it.bottom)}</p>
        <div class="badges">
          <span class="badge classe-${it.classe.replace(/[^IVab]/g,'')}">Classe ${esc(it.classe)}</span>
          <span class="badge nivel">Nível ${esc(it.nivel)}</span>
        </div>
        ${it.trials && it.trials !== '—' ? `<div class="trials"><strong>Ensaios:</strong> ${esc(it.trials)}</div>` : ''}
        <div class="src">${esc(it.src)}</div>
        <a class="pm-link" data-q="${esc(it.pubmedQuery)}" data-title="${esc(it.title)}">→ Ver artigos no PubMed</a>
      </div>`;
  }

  // ---------- PubMed ao vivo ----------
  async function searchPubMed(query) {
    pubEl.innerHTML = '';
    pubStatus.innerHTML = '<span class="spinner"></span> Buscando no PubMed...';
    try {
      // 1) esearch -> lista de PMIDs
      const term = encodeURIComponent(query);
      const sUrl = `${EUTILS}/esearch.fcgi?db=pubmed&retmode=json&retmax=12&sort=relevance&term=${term}`;
      const sRes = await fetch(sUrl);
      if (!sRes.ok) throw new Error('esearch ' + sRes.status);
      const sData = await sRes.json();
      const ids = (sData.esearchresult && sData.esearchresult.idlist) || [];
      if (!ids.length) {
        pubStatus.textContent = 'Nenhum artigo encontrado no PubMed para esse termo.';
        return;
      }
      // 2) esummary -> metadados
      const sumUrl = `${EUTILS}/esummary.fcgi?db=pubmed&retmode=json&id=${ids.join(',')}`;
      const sumRes = await fetch(sumUrl);
      if (!sumRes.ok) throw new Error('esummary ' + sumRes.status);
      const sumData = await sumRes.json();
      const result = sumData.result || {};
      const items = (result.uids || ids).map(id => result[id]).filter(Boolean);
      renderPubMed(items, query);
    } catch (err) {
      console.error(err);
      pubStatus.innerHTML = 'Não foi possível consultar o PubMed agora. '
        + `<a href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(query)}" target="_blank" rel="noopener">Abrir busca no PubMed →</a>`;
    }
  }

  function renderPubMed(items, query) {
    pubStatus.innerHTML = `${items.length} artigos mais relevantes · `
      + `<a href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(query)}" target="_blank" rel="noopener">ver todos no PubMed →</a>`;
    pubEl.innerHTML = items.map(it => {
      const pmid = it.uid;
      const journal = it.fulljournalname || it.source || '';
      const year = (it.pubdate || '').split(' ')[0] || '';
      const authors = (it.authors || []).slice(0, 3).map(a => a.name).join(', ')
        + ((it.authors || []).length > 3 ? ', et al.' : '');
      const doi = extractDOI(it);
      const pmLink = `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
      const doiLink = doi ? `https://doi.org/${doi}` : null;
      return `
        <div class="pm-item">
          <a class="title" href="${doiLink || pmLink}" target="_blank" rel="noopener">${esc(it.title || '(sem título)')}</a>
          <div class="meta">${esc(authors)} · <em>${esc(journal)}</em> ${esc(year)}</div>
          <div class="links">
            ${doiLink ? `<a href="${doiLink}" target="_blank" rel="noopener">DOI →</a>` : ''}
            <a href="${pmLink}" target="_blank" rel="noopener">PubMed (PMID ${esc(String(pmid))}) →</a>
          </div>
        </div>`;
    }).join('');
  }

  function extractDOI(it) {
    if (it.elocationid && /10\.\d{4,}/.test(it.elocationid)) {
      const m = it.elocationid.match(/(10\.\d{4,}\/[^\s]+)/);
      if (m) return m[1];
    }
    if (Array.isArray(it.articleids)) {
      const d = it.articleids.find(a => a.idtype === 'doi');
      if (d) return d.value;
    }
    return null;
  }

  // ---------- util ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }

  function doSearch(q) {
    if (!q || !q.trim()) return;
    renderCurada(q);
    searchPubMed(q);
  }

  form.addEventListener('submit', e => { e.preventDefault(); doSearch(input.value); });

  // Render inicial da base curada (amostra)
  curadaEl.innerHTML = window.DIRETRIZES.slice(0, 4).map(cardCurada).join('');
  curadaEl.querySelectorAll('.pm-link').forEach(el => {
    el.addEventListener('click', () => { input.value = el.dataset.title; searchPubMed(el.dataset.q); });
  });
})();
