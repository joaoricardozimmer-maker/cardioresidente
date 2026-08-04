// Tutor socrático de cardiologia — chat com IA (chama a função serverless /api/tutor).
(function () {
  const root = document.getElementById('tutor-root');
  if (!root) return;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // markdown leve: **negrito**, *itálico*, quebras de linha
  function fmt(t) {
    return esc(t)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<i>$2</i>')
      .replace(/\n/g, '<br>');
  }

  const MODOS = [
    { id: 'livre', t: '💬 Tutoria livre', d: 'Traga uma dúvida ou tema; o tutor explora seu raciocínio.' },
    { id: 'caso', t: '🩺 Caso clínico', d: 'O tutor cria um caso e conduz você do diagnóstico à conduta.' },
    { id: 'quiz', t: '❓ Quiz dirigido', d: 'Perguntas conceituais progressivas sobre um tema.' },
    { id: 'paciente', t: '🧬 Meu paciente', d: 'Discuta o caso montado no gêmeo digital (aba Paciente) e o porquê de cada conduta.' }
  ];
  const TEMAS = ['Insuficiência cardíaca', 'Síndrome coronariana aguda (OCA/OMI)', 'Fibrilação atrial', 'Valvopatias', 'Dislipidemia e prevenção', 'Hipertensão', 'Arritmias e síncope', 'Emergências (plantão)'];

  let modo = 'livre';
  let messages = []; // { role:'user'|'model', text }
  let busy = false;

  root.innerHTML =
    '<div class="tutor-wrap">' +
    '<div class="tutor-modos" id="tutor-modos"></div>' +
    '<div class="tutor-tema-wrap" id="tutor-tema-wrap"><label class="tutor-tema-label">Tema (opcional): <select id="tutor-tema"><option value="">— escolher —</option>' +
    TEMAS.map(t => '<option value="' + esc(t) + '">' + esc(t) + '</option>').join('') + '</select></label>' +
    '<button class="pac-go" id="tutor-iniciar">Iniciar</button></div>' +
    '<div class="tutor-chat" id="tutor-chat"></div>' +
    '<div class="tutor-input"><textarea id="tutor-txt" rows="2" placeholder="Escreva sua resposta ou pergunta…"></textarea>' +
    '<button class="btn-primary" id="tutor-send">Enviar</button></div>' +
    '<p class="muted small tutor-aviso">⚠️ Ferramenta de estudo com IA — pode conter erros; confirme nas diretrizes. Não insira dados que identifiquem pacientes.</p>' +
    '</div>';

  const chatEl = document.getElementById('tutor-chat');
  const txtEl = document.getElementById('tutor-txt');
  const modosEl = document.getElementById('tutor-modos');
  const temaSel = document.getElementById('tutor-tema');

  function renderModos() {
    modosEl.innerHTML = MODOS.map(m => '<button class="tutor-modo' + (m.id === modo ? ' active' : '') + '" data-m="' + m.id + '" title="' + esc(m.d) + '">' + m.t + '</button>').join('');
    modosEl.querySelectorAll('.tutor-modo').forEach(b => b.addEventListener('click', () => {
      modo = b.dataset.m; renderModos(); resetChat();
    }));
  }
  function resetChat() {
    messages = []; chatEl.innerHTML = '';
    const m = MODOS.find(x => x.id === modo);
    addBubble('sys', m.d + (modo === 'livre' ? ' Mande sua primeira pergunta abaixo.' : ' Escolha um tema (opcional) e clique em Iniciar.'));
  }
  function addBubble(role, html) {
    const div = document.createElement('div');
    div.className = 'tutor-msg tutor-' + role;
    div.innerHTML = (role === 'tutor' ? '<span class="tutor-av">🎓</span>' : '') + '<div class="tutor-bubble">' + html + '</div>';
    chatEl.appendChild(div);
    chatEl.scrollTop = chatEl.scrollHeight;
    return div;
  }

  async function send(text, isStart, displayText) {
    if (busy) return;
    if (!isStart) { messages.push({ role: 'user', text }); addBubble('user', fmt(displayText || text)); }
    busy = true;
    const loading = addBubble('tutor', '<span class="tutor-dots"><i></i><i></i><i></i></span>');
    try {
      const res = await fetch('/api/tutor', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modo, tema: temaSel.value || '', messages })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || ('HTTP ' + res.status));
      messages.push({ role: 'model', text: data.resposta });
      loading.querySelector('.tutor-bubble').innerHTML = fmt(data.resposta);
    } catch (err) {
      loading.querySelector('.tutor-bubble').innerHTML = '<span class="tutor-erro">Não foi possível obter resposta: ' + esc(err.message) + '<br>Verifique se a função /api/tutor está publicada e a chave de API configurada.</span>';
    } finally {
      busy = false; chatEl.scrollTop = chatEl.scrollHeight;
    }
  }

  function doSend() {
    const t = txtEl.value.trim(); if (!t || busy) return;
    txtEl.value = '';
    send(t, false);
  }

  document.getElementById('tutor-send').addEventListener('click', doSend);
  txtEl.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); doSend(); } });
  document.getElementById('tutor-iniciar').addEventListener('click', () => {
    if (busy) return;
    if (modo === 'paciente') { startPaciente(); return; }
    chatEl.innerHTML = ''; messages = [];
    const kick = modo === 'caso'
      ? 'Crie um caso clínico cardiológico e faça a primeira pergunta.'
      : (modo === 'quiz' ? 'Comece o quiz socrático sobre o tema.' : 'Vamos começar.');
    messages.push({ role: 'user', text: kick });
    send(null, true);
  });

  function startPaciente() {
    const txt = window.cardioPaciente ? window.cardioPaciente.texto() : '';
    if (!txt || !/OPORTUNIDADES/.test(txt)) {
      chatEl.innerHTML = '';
      addBubble('sys', 'Monte um paciente na aba 🧬 Paciente primeiro (preencha comorbidades e medicações). Depois volte aqui e clique em Iniciar — ou use o botão "🎓 Por quê?" em cada conduta.');
      return;
    }
    chatEl.innerHTML = ''; messages = [];
    send('Discuta comigo o paciente abaixo: explique o PORQUÊ de cada conduta (mecanismo + evidência/diretriz + benefício), a ordem de otimização e as contraindicações. Depois faça uma pergunta para fixar.\n\n' + txt,
      false, 'Vamos discutir o paciente que montei no gêmeo digital — explique o porquê de cada conduta.');
  }

  // chamado pela aba Paciente (botão "🎓 Por quê?")
  window.cardioTutorExplica = function (apiText, displayText) {
    modo = 'paciente'; renderModos();
    chatEl.innerHTML = ''; messages = [];
    send(apiText, false, displayText);
  };

  renderModos();
  resetChat();
})();
