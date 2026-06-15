// Função serverless (Vercel) — transcreve/resume laudos cardiológicos com a API Google Gemini.
// Requer a variável de ambiente GEMINI_API_KEY (nível gratuito do Google AI Studio).
// Obtenha em: https://aistudio.google.com/app/apikey

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

const PROMPTS = {
  ecocardiograma: `Você resume laudos de ecocardiograma para o prontuário. Produza:
1) Uma única linha com as medidas em siglas, na ordem (incluindo apenas o que constar): Ao, AE, AEi (volume indexado), DDVE, DSVE, Septo, PP, IMVEi, ERP, FEVE (com o método: Teichholz/Simpson). Use as unidades do laudo.
2) Linha de contratilidade segmentar (global e segmentar).
3) Linha das valvas (estenoses/insuficiências e grau).
4) Conclusão objetiva.
Não invente valores ausentes. Seja conciso, em português, formato pronto para colar.`,

  ressonancia: `Você resume laudos de ressonância cardíaca para o prontuário. Inclua de forma objetiva: função e volumes do VE e VD (FEVE, FEVD, volumes indexados se houver), massa, presença e padrão de realce tardio (isquêmico subendocárdico/transmural vs. não isquêmico), edema/T2, perfusão sob estresse se houver, e conclusão. Não invente dados ausentes. Português, conciso, pronto para colar.`,

  ergometria: `Você resume laudos de teste ergométrico para o prontuário. Inclua: protocolo, carga atingida (METs), FC máxima atingida (e % do previsto), comportamento da PA, motivo de interrupção, presença/ausência de alterações isquêmicas do ST (e em quais derivações), sintomas, arritmias, e conclusão (cite escore de Duke se calculável). Não invente dados. Português, conciso.`,

  cintilografia: `Você resume laudos de cintilografia miocárdica de perfusão para o prontuário. Inclua: protocolo (estresse físico/farmacológico), achados de perfusão por território (presença de isquemia e/ou fibrose, extensão/gravidade), FEVE de repouso e pós-estresse e motilidade se houver, e conclusão. Não invente dados. Português, conciso.`,

  cateterismo: `Você resume laudos de cateterismo/cinecoronariografia para o prontuário. Para cada vaso acometido, escreva a sigla e o percentual de lesão com a localização (óstio/terço proximal/médio/distal). Siglas usuais: TCE, DA, Dg, Cx, Mg, CD, DP, VP. Informe dominância e, se houver, a conduta/recomendação descrita (ICP, CRM, tratamento clínico). Não invente lesões não descritas. Português, conciso, pronto para colar.`,

  laboratorio: `Você organiza resultados de exames laboratoriais em formato compacto para o prontuário. Agrupe logicamente (hemograma, função renal/eletrólitos, hepático, marcadores cardíacos, lipídico, coagulação, etc.), em linhas com sigla = valor (unidade). Destaque alterações relevantes ao final em uma linha "Alterações:". Não invente valores ausentes. Português, conciso.`,

  holter: `Você resume laudos de Holter 24h ou MAPA para o prontuário. Para Holter: ritmo de base, FC média/mínima/máxima, extrassístoles supra e ventriculares (carga/%), taquiarritmias, pausas, e correlação com sintomas. Para MAPA: médias de PA (24h, vigília, sono), descenso noturno, cargas pressóricas, e conclusão. Não invente dados. Português, conciso.`,

  generico: `Você resume laudos cardiológicos para o prontuário de forma objetiva: principais achados quantitativos em siglas quando aplicável e conclusão. Não invente dados ausentes. Português, conciso, pronto para colar.`,

  controles: `Você analisa uma tabela de sinais vitais (em imagem e/ou texto) e apresenta cada parâmetro em texto corrido, separado por " / ".
Regras:
- Organize no formato: "Parâmetro menor–maior unidade".
- Separar PAS e PAD em itens distintos.
- Utilizar as siglas originais (FC, FR, PAS, PAD, SatO₂, etc.).
- Não incluir horários para Temperatura, FC, FR, PAS, PAD e SatO₂.
- Para Glicemia, informar todos os valores registrados com o horário correspondente, no formato: valor (HHh). Se houver mais de uma, separar por " - ".
- Para Diurese, informar o volume total no período em mL (e mL/kg/h, se houver dado para calcular). Se houver vários registros, somar/totalizar quando fizer sentido.
- Para Balanço hídrico (BH), informar o valor com o sinal (positivo ou negativo) em mL.
- Manter a ordem: Temperatura / FC / FR / PAS / PAD / SatO₂ / Glicemia / Diurese / Balanço hídrico.
- Não incluir valores repetidos quando mínimo e máximo forem iguais; nesse caso, informar apenas um valor.
- Incluir apenas os parâmetros presentes nos dados. Não inventar valores.
- Responder em UMA única linha, sem comentários.
Exemplo de saída:
Temperatura 36,0–36,7°C / FC 63–117 bpm / FR 17–20 irpm / PAS 135–162 mmHg / PAD 65–101 mmHg / SatO₂ 86–92% / Glicemia 124 (08h) - 231 (12h) - 199 (20h) mg/dL / Diurese 1450 mL / BH +320 mL`
};

module.exports = async function handler(req, res) {
  // CORS básico (caso o front esteja em outro domínio)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST.' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY não configurada no ambiente.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body);
    const tipo = (body && body.tipo) || 'generico';
    const texto = (body && body.texto) || '';
    const imagem = (body && body.imagem) || null; // { mimeType, data(base64) }

    if (!texto.trim() && !imagem) {
      return res.status(400).json({ error: 'Envie o texto e/ou a imagem.' });
    }
    if (texto.length > 20000) return res.status(400).json({ error: 'Texto muito longo (limite 20.000 caracteres).' });

    const sistema = (PROMPTS[tipo] || PROMPTS.generico)
      + '\n\nIMPORTANTE: NÃO inclua dados que identifiquem o paciente (nome, registro, CPF). Responda APENAS com o resultado pedido, sem comentários, sem markdown.';

    // Monta as partes da mensagem (texto + imagem opcional para visão)
    const parts = [];
    const instrucao = tipo === 'controles'
      ? 'Processe os sinais vitais a seguir conforme as regras.'
      : 'Resuma este laudo:';
    parts.push({ text: instrucao + (texto ? `\n\n${texto}` : '') });
    if (imagem && imagem.data && imagem.mimeType) {
      parts.push({ inline_data: { mime_type: imagem.mimeType, data: imagem.data } });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;
    const apiRes = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: sistema }] },
        contents: [{ role: 'user', parts }],
        generationConfig: { temperature: 0.2, maxOutputTokens: 1500 }
      })
    });

    if (!apiRes.ok) {
      const errBody = await apiRes.text();
      return res.status(502).json({ error: 'Erro da API de IA: ' + errBody.slice(0, 500) });
    }

    const data = await apiRes.json();
    const cand = (data.candidates && data.candidates[0]) || null;
    const resumo = cand && cand.content && cand.content.parts
      ? cand.content.parts.map(p => p.text || '').join('\n').trim()
      : '';

    if (!resumo) {
      return res.status(502).json({ error: 'A IA não retornou texto. ' + (cand && cand.finishReason ? 'Motivo: ' + cand.finishReason : '') });
    }

    return res.status(200).json({ resumo });
  } catch (err) {
    return res.status(500).json({ error: 'Falha ao processar: ' + (err.message || String(err)) });
  }
};
