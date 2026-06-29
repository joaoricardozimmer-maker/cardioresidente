// Função serverless (Vercel) — Tutor socrático de cardiologia com a API Google Gemini.
// Recebe o histórico de mensagens + o modo e devolve uma resposta socrática.
// Requer a variável de ambiente GEMINI_API_KEY (mesma usada por /api/transcrever).

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

const BASE = `Você é um TUTOR SOCRÁTICO de cardiologia para residentes, em português do Brasil.
Seu objetivo é desenvolver o RACIOCÍNIO clínico do residente — não apenas dar respostas prontas.

Princípios:
- Conduza pelo método socrático: faça UMA pergunta de cada vez, parta do que o residente já sabe e avance por etapas.
- Quando o residente responder, dê feedback específico: valorize o que está certo, corrija com gentileza o que está equivocado e aprofunde.
- Dê DICAS progressivas antes de entregar a resposta. Se o residente pedir explicitamente a resposta, ou errar duas vezes, explique de forma clara e objetiva e então faça uma nova pergunta para fixar.
- Baseie-se nas diretrizes vigentes (ESC, AHA/ACC, SBC) e em ensaios pivotais; cite a diretriz/estudo quando relevante (ex.: "DAPA-HF", "ESC 2024"). NÃO invente números, classes de recomendação, doses ou referências — se não tiver certeza, diga que é preciso confirmar.
- Incorpore o paradigma atual (ex.: OCA/OMI em vez de só supra clássico; 4 pilares da ICFEr; CHA₂DS₂-VA da ESC 2024).
- Seja conciso e didático. Use no máximo 1–2 parágrafos curtos por resposta e termine com uma pergunta (salvo quando estiver fechando o caso).
- Nunca peça nem use dados que identifiquem pacientes reais. Se aparecerem, ignore-os.
- Não substitui julgamento clínico nem treinamento formal; é uma ferramenta de estudo.`;

const MODOS = {
  livre: `MODO: Tutoria livre. O residente traz um tema ou dúvida. Explore o raciocínio dele com perguntas socráticas.`,
  caso: `MODO: Caso clínico. Na PRIMEIRA mensagem, CRIE um caso clínico cardiológico realista e original (apresentação, sinais vitais, ECG/exames pertinentes) adequado ao nível de residência — sem dados identificáveis — e faça a primeira pergunta (ex.: hipótese diagnóstica ou próxima conduta). A cada resposta do residente, avance o caso por etapas (diagnóstico → exames → conduta → seguimento), dando feedback. Conduza um caso por vez até o desfecho.`,
  quiz: `MODO: Perguntas dirigidas (quiz socrático). Faça perguntas conceituais progressivas sobre o tema pedido, uma por vez, com feedback e aprofundamento a cada resposta.`,
  paciente: `MODO: Discussão do paciente do gêmeo digital. O residente traz o PERFIL e a lista de condutas (oportunidades / em uso / contraindicações) geradas pela ferramenta CardioResidente. Use esse contexto: EXPLIQUE o porquê de cada conduta (mecanismo + evidência/diretriz/estudo + benefício esperado, ex.: NNT), aponte a PRIORIDADE e a sequência de otimização, e confirme as contraindicações listadas. Aqui pode explicar de forma clara e completa (não precisa esconder a resposta), mas, ao final de cada bloco, faça uma pergunta para fixar o raciocínio. Os dados vêm da ferramenta e não identificam o paciente; nunca peça dados pessoais.`
};

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST.' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY não configurada no ambiente.' });

  try {
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body);
    const modo = (body && body.modo) || 'livre';
    const tema = (body && body.tema) || '';
    let messages = (body && body.messages) || [];
    if (!Array.isArray(messages)) messages = [];
    // saneamento básico
    messages = messages.filter(m => m && m.text && (m.role === 'user' || m.role === 'model')).slice(-20);
    messages.forEach(m => { if (m.text.length > 4000) m.text = m.text.slice(0, 4000); });
    if (!messages.length) return res.status(400).json({ error: 'Sem mensagens.' });

    const sistema = BASE + '\n\n' + (MODOS[modo] || MODOS.livre) + (tema ? `\nTema escolhido: ${tema}.` : '');

    const contents = messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;
    const apiRes = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: sistema }] },
        contents,
        generationConfig: { temperature: 0.6, maxOutputTokens: 1200 }
      })
    });

    if (!apiRes.ok) {
      const errBody = await apiRes.text();
      return res.status(502).json({ error: 'Erro da API de IA: ' + errBody.slice(0, 500) });
    }

    const data = await apiRes.json();
    const cand = (data.candidates && data.candidates[0]) || null;
    const resposta = cand && cand.content && cand.content.parts
      ? cand.content.parts.map(p => p.text || '').join('\n').trim()
      : '';
    if (!resposta) return res.status(502).json({ error: 'A IA não retornou texto. ' + (cand && cand.finishReason ? 'Motivo: ' + cand.finishReason : '') });

    return res.status(200).json({ resposta });
  } catch (err) {
    return res.status(500).json({ error: 'Falha ao processar: ' + (err.message || String(err)) });
  }
};
