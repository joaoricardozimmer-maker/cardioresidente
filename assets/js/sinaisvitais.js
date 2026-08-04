// Aba "Sinais vitais": envia foto da tabela (e/ou texto) à IA e gera a linha padronizada.
(function () {
  const drop = document.getElementById('sv-drop');
  const fileInput = document.getElementById('sv-file');
  const empty = document.getElementById('sv-drop-empty');
  const preview = document.getElementById('sv-preview');
  const textEl = document.getElementById('sv-text');
  const btn = document.getElementById('sv-btn');
  const clearBtn = document.getElementById('sv-clear');
  const copyBtn = document.getElementById('sv-copy');
  const out = document.getElementById('sv-output');

  let imagem = null; // { mimeType, data(base64 sem prefixo) }

  function setImage(file) {
    if (!file || !file.type.startsWith('image/')) { window.toast('Selecione um arquivo de imagem.'); return; }
    if (file.size > 6 * 1024 * 1024) { window.toast('Imagem muito grande (máx. 6 MB).'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      preview.src = dataUrl;
      preview.hidden = false;
      empty.hidden = true;
      imagem = { mimeType: file.type, data: dataUrl.split(',')[1] };
    };
    reader.readAsDataURL(file);
  }

  drop.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', e => setImage(e.target.files[0]));

  drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('dragover'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('dragover'));
  drop.addEventListener('drop', e => {
    e.preventDefault(); drop.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) setImage(e.dataTransfer.files[0]);
  });

  // Colar imagem (Ctrl+V) quando a aba estiver ativa
  document.addEventListener('paste', e => {
    if (!document.getElementById('view-sinaisvitais').classList.contains('active')) return;
    const items = (e.clipboardData && e.clipboardData.items) || [];
    for (const it of items) {
      if (it.type.startsWith('image/')) { setImage(it.getAsFile()); break; }
    }
  });

  clearBtn.addEventListener('click', () => {
    imagem = null; fileInput.value = '';
    preview.hidden = true; preview.src = ''; empty.hidden = false;
    textEl.value = '';
    out.innerHTML = '<span class="placeholder">A linha de sinais vitais aparecerá aqui.</span>';
    copyBtn.disabled = true;
  });

  copyBtn.addEventListener('click', () => window.copyText(out.textContent));

  btn.addEventListener('click', async () => {
    const texto = textEl.value.trim();
    if (!imagem && !texto) { window.toast('Envie a foto ou cole os valores.'); return; }

    btn.disabled = true;
    out.innerHTML = '<span class="spinner"></span> Processando os sinais vitais...';
    copyBtn.disabled = true;

    try {
      const res = await fetch('/api/transcrever', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: 'controles', texto, imagem })
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
      out.innerHTML = '<span class="placeholder">⚠️ Não foi possível processar.\n\n'
        + esc(err.message) + '\n\nVerifique se a função /api/transcrever está publicada e se a GEMINI_API_KEY está configurada.</span>';
    } finally {
      btn.disabled = false;
    }
  });

  function esc(s) {
    return String(s).replace(/[&<>]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;' }[c]));
  }
})();
