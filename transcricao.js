// Módulo de transcrição de laudos por IA (chama a função serverless /api/transcrever)
(function () {
  const tipoSel = document.getElementById('transc-tipo');
  const input = document.getElementById('transc-input');
  const btn = document.getElementById('transc-btn');
  const clearBtn = document.getElementById('transc-clear');
  const copyBtn = document.getElementById('transc-copy');
  const out = document.getElementById('transc-output');
  const hint = document.getElementById('transc-hint');

  const dicas = {
    ecocardiograma: "Gera 1 linha de medidas em siglas (Ao, AE, DDVE, DSVE, Septo, PP, FEVE/método) + contratilidade, valvas e conclusão.",
    ressonancia: "Resume função biventricular, volumes, realce tardio (fibrose/isquemia) e conclusão.",
    ergometria: "Resume protocolo, METs, FC/PA, motivo de interrupção, alterações de ST/sintomas e conclusão (Duke se possível).",
    cintilografia: "Resume perfusão (isquemia/fibrose por território), FEVE de repouso/estresse e conclusão.",
    cateterismo: "Lista cada vaso em sigla com % de lesão e localização (óstio/proximal/médio/distal) + dominância e conduta.",
    laboratorio: "Organiza os exames laboratoriais em linha compacta com valores e unidades, destacando alterações.",
    holter: "Resume ritmo de base, FC média/mín/máx, arritmias, pausas e correlação com sintomas (ou cargas pressóricas no MAPA).",
    generico: "Resume os principais achados do laudo de forma objetiva para o prontuário."
  };

  function updateHint() { hint.textContent = dicas[tipoSel.value] || ''; }
  tipoSel.addEventListener('change', updateHint);
  updateHint();

  clearBtn.addEventListener('click', () => {
    input.value = '';
    out.innerHTML = '<span class="placeholder">O resumo aparecerá aqui.</span>';
    copyBtn.disabled = true;
    input.focus();
  });

  copyBtn.addEventListener('click', () => window.copyText(out.textContent));

  btn.addEventListener('click', async () => {
    const texto = input.value.trim();
    if (!texto) { window.toast('Cole o laudo primeiro.'); return; }

    btn.disabled = true;
    out.innerHTML = '<span class="spinner"></span> Resumindo o laudo...';
    copyBtn.disabled = true;

    try {
      const res = await fetch('/api/transcrever', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: tipoSel.value, texto })
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Servidor respondeu ${res.status}: ${errText}`);
      }
      const data = await res.json();
      const resumo = (data.resumo || '').trim();
      if (!resumo) throw new Error('Resposta vazia da IA.');
      out.textContent = resumo;
      copyBtn.disabled = false;
    } catch (err) {
      console.error(err);
      out.innerHTML = '<span class="placeholder">⚠️ Não foi possível gerar o resumo.\n\n'
        + esc(err.message) + '\n\nVerifique se a função /api/transcrever está publicada e se a chave de API está configurada (veja o README).</span>';
    } finally {
      btn.disabled = false;
    }
  });

  function esc(s) {
    return String(s).replace(/[&<>]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;' }[c]));
  }
})();
