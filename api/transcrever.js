// Função serverless (Vercel) — transcreve/resume laudos cardiológicos com a API Google Gemini.
// Requer a variável de ambiente GEMINI_API_KEY (nível gratuito do Google AI Studio).
// Obtenha em: https://aistudio.google.com/app/apikey

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

const PROMPTS = {
  ecocardiograma: `Você resume laudos de ecocardiograma transtorácico para o prontuário (padrão Instituto Dante Pazzanese).
Estrutura da saída:
1) UMA linha de medidas em siglas, na ordem (só o que constar): Ao (raiz), AoAsc, AEi (vol. indexado ml/m²), DDVE, DSVE, Septo, PP, IMVEi, ERP, FEVE (com método entre parênteses), FAC (VD). Separe por " / ". Use as unidades do laudo.
2) Linha de contratilidade: função global do VE (e grau de disfunção) + alterações segmentares (acinesia/hipocinesia e paredes); função do VD.
3) Linha das valvas: para cada valva, estenose/insuficiência e grau (mín/discreta/moderada/importante). Inclua PSAP e presença/ausência de HP; VCI e colapso; derrame pericárdico.
4) Linha "Conclusão:" objetiva.
Não invente valores ausentes; inclua só o que está no laudo.
EXEMPLO de saída:
Ao 34 / AoAsc 32 / AEi 34 ml/m² / DDVE 66 / Septo 7 / PP 8 / IMVEi 126 g/m² / ERP 0,24 / FEVE 25% (Simpson) / FAC 40%
Contratilidade: aumento moderado do VE com HVE excêntrica; acinesia de parede inferior, septo e toda região apical, hipocinesia das demais — disfunção sistólica importante do VE. Disfunção diastólica grau I. Função sistólica do VD preservada.
Valvas: IM discreta, IAo mínima, IT discreta; valva pulmonar normal. PSAP 32 mmHg (sem HP). Sem derrame pericárdico. VCI 12 mm com colapso >50%.
Conclusão: disfunção sistólica importante do VE de padrão isquêmico.`,

  ressonancia: `Você resume laudos de ressonância magnética cardíaca para o prontuário (padrão Instituto Dante Pazzanese).
Estrutura da saída:
1) UMA linha de medidas em siglas (só o que constar): FEVE, DDVE, DSVE, VDF, iVDF, VSF, Massa VE (e indexada), FEVD, AEi/AE. Separe por " / ".
2) Linha de função/morfologia: dilatação de câmaras, disfunção sistólica (grau) e alterações segmentares.
3) Linha de valvas (se descritas) e perfusão de repouso/estresse (se houver).
4) Linha "Realce tardio:" detalhando padrão (isquêmico subendocárdico = com viabilidade vs. transmural = sem viabilidade) e segmentos; presença/ausência de trombo.
5) Linha "Conclusão:".
Não invente dados. Português, conciso.
EXEMPLO de saída:
FEVE 22% / DDVE 68 / DSVE 58 / VDF 265 ml / iVDF 172 ml/m² / VSF 206 ml / Massa VE 115 g (75 g/m²) / FEVD 60% / AEi 57 ml/m²
VE com dilatação importante e disfunção sistólica importante (acinesia de ápice, porção apical, anterosseptal e anterior médio; hipocinesia difusa). VD preservado.
Valvas: IM e IT discretas. Defeito de perfusão em repouso no septo.
Realce tardio: infarto transmural SEM viabilidade em ápice/apical (anterior, septal, inferior) e anterosseptal/anterior médio; infarto subendocárdico COM viabilidade em inferolateral basal. Sem trombos.
Conclusão: miocardiopatia isquêmica com disfunção importante do VE; viabilidade apenas em parede inferolateral basal.`,

  ergometria: `Você resume laudos de teste ergométrico para o prontuário. Inclua: protocolo, carga atingida (METs), FC máxima (e % do previsto), comportamento da PA, motivo de interrupção, presença/ausência de alterações isquêmicas do ST (e derivações), sintomas, arritmias, e conclusão (escore de Duke se calculável). Não invente dados. Português, conciso, pronto para colar.`,

  cintilografia: `Você resume laudos de cintilografia miocárdica de perfusão para o prontuário. Inclua: protocolo (estresse físico/farmacológico, radiotraçador), achados de perfusão por território/parede (isquemia e/ou fibrose, extensão e gravidade), FEVE de repouso e pós-estresse e motilidade se houver, e conclusão. Não invente dados. Português, conciso.`,

  cateterismo: `Você resume laudos de cateterismo/cinecoronariografia para o prontuário (padrão Instituto Dante Pazzanese).
Regras:
- Comece informando a dominância.
- Para CADA vaso citado, escreva a sigla + % de lesão + localização (óstio/terço proximal/médio/distal); cite oclusão e circulação colateral (grau de Rentrop) quando houver.
- Siglas: TCE, DA, Dg1/Dg2, Cx, Mg1/Mg2..., CD, DP, VP.
- "Irregularidades parietais" e "ateromatose difusa" podem ser citadas de forma curta.
- Resuma a ventriculografia (VDF, contratilidade, valva mitral, obstrução à via de saída) se houver.
- Cite conduta/recomendação se descrita. Não invente lesões.
Português, conciso, uma linha por vaso.
EXEMPLO de saída:
Dominância direita.
CD: 50% no terço proximal + oclusão no terço médio (colaterais Rentrop II).
TCE: irregularidades parietais. DA: 70% no terço médio e 70% do médio ao distal.
Dg1 (fino): irregularidades. Dg2: 70% do proximal ao médio. Cx: 30% no terço médio.
Mg1 (fino): ateromatose difusa moderada. Mg2: irregularidades. Mg4: 90% no óstio. Mg5: 30% no óstio.
Ventriculografia: VDF preservado, hipocinesia moderada inferior; valva mitral competente; sem obstrução à via de saída.`,

  angiotc: `Você resume laudos de angiotomografia (angio-TC) das artérias coronárias para o prontuário (padrão Instituto Dante Pazzanese).
Estrutura:
1) Escore de cálcio (Agatston) — valor.
2) Dominância coronariana.
3) Por vaso (TCE/DA/Dg/Cx/Mg/CD/DP/VP): presença de placas e % de redução luminal (ou "sem placas/sem redução"). Cite CAD-RADS se constar.
4) Linha "Conclusão:".
Não invente dados. Português, conciso.
EXEMPLO de saída:
Escore de cálcio (Agatston) = 0. Dominância direita.
TCE, DA, Dg1, Dg2, Cx, Mg1, Mg2, CD, DP e VP: sem placas ou redução luminal.
Conclusão: ausência de calcificação e de redução luminal coronária.`,

  doppler: `Você resume laudos de Doppler de artérias carótidas e vertebrais para o prontuário (padrão Instituto Dante Pazzanese).
Estrutura:
1) Espessamento médio-intimal (presença/lado).
2) Por segmento (carótida comum/interna/externa, direita e esquerda): presença de placa (características) e grau de estenose (%); cite VPS quando houver. Use siglas ACC, ACI, ACE (D/E).
3) Artérias vertebrais: fluxo/direção e dominância.
4) Linha "Conclusão:" com a estenose mais relevante.
Não invente dados. Português, conciso.
EXEMPLO de saída:
Espessamento médio-intimal em carótidas comuns bilateralmente.
ACI D: placa diminuta no bulbo, estenose <50%. ACI E: placa diminuta no bulbo, estenose <50%.
ACE E: placa heterogênea, estenose 50–69% (VPS 170 cm/s). Demais segmentos pérvios, sem placas obstrutivas.
Vertebrais: fluxo normal bilateral, sem dominância.
Conclusão: estenose carotídea 50–69% em ACE esquerda; demais <50%.`,

  laboratorio: `Você organiza resultados de exames laboratoriais em formato compacto para o prontuário. A entrada costuma vir BAGUNÇADA (cópia de tela do AFIP/sistema), com lista de pedidos, nomes de solicitantes, datas/horas, "Liberado por", valores históricos e gráficos. IGNORE todo esse ruído e extraia APENAS os RESULTADOS ATUAIS de cada exame (o valor mais recente quando houver vários).
Regras:
- Agrupe: Hemograma (Hb, Ht, Leuco com diferencial absoluto se houver, Plaq), Coagulação (TAP/AP/RNI, TTPA/relação, Fibrinogênio), Bioquímica/renal (Ur, Cr, Na, K, Mg), Glicídico (Glicose, HbA1c), Lipídico, Hepático, Marcadores, Tireoide, etc. — só os que existirem.
- Formato: sigla valor unidade, separados por " / "; uma linha por grupo OU tudo corrido.
- Ao final, linha "Alterações:" destacando o que está fora da referência.
- NÃO inclua nome do paciente, médico, datas de coleta nem valores históricos. Não invente valores.
Português, conciso.
EXEMPLO de saída:
Hb 12,8 / Ht 36% / Leuco 9.060 (Neutrófilos 4.240, Eosinófilos 1.290, Linfócitos 2.840) / Plaq 325 mil
TAP 11,3s (AP 109%, RNI 0,95) / TTPA 25s (rel 0,93) / Fibrinogênio 356 mg/dL / Glicose 224 mg/dL
Alterações: anemia leve, eosinofilia, hiperglicemia.`,

  balanco: `Você resume uma planilha de Balanço Hídrico (UTI/enfermaria) para o prontuário. A entrada traz ganhos e perdas hora a hora; você deve TOTALIZAR o período.
Saída em UMA a duas linhas, com: Ganhos totais (mL), Perdas totais (mL), Diurese total (mL) e débito urinário (mL/kg/h se houver peso), drenos (mediastino/pleural, mL) e Balanço hídrico final (com sinal + ou −).
Não inclua tabela hora a hora nem dados de identificação. Não invente valores.
EXEMPLO de saída:
BH 24h: Ganhos 664 mL / Perdas 1.700 mL / Diurese 1.100 mL (DU ~0,67 mL/kg/h) / Drenos 600 mL (mediastino 300 + pleural E 300) / Balanço hídrico −1.036 mL (negativo).`,

  holter: `Você resume laudos de Holter 24h ou MAPA para o prontuário. Holter: ritmo de base, FC média/mínima/máxima, extrassístoles supraventriculares e ventriculares (carga/%), taquiarritmias, pausas, e correlação com sintomas. MAPA: médias de PA (24h/vigília/sono), descenso noturno, cargas pressóricas e conclusão. Não invente dados. Português, conciso.`,

  generico: `Você resume laudos cardiológicos para o prontuário de forma objetiva: principais achados quantitativos em siglas quando aplicável, valvas/contratilidade quando houver, e conclusão. Não invente dados ausentes. Português, conciso, pronto para colar.`,

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
    const imagem = (body && body.imagem) || null;

    if (!texto.trim() && !imagem) {
      return res.status(400).json({ error: 'Envie o texto e/ou a imagem.' });
    }
    if (texto.length > 20000) return res.status(400).json({ error: 'Texto muito longo (limite 20.000 caracteres).' });

    const sistema = (PROMPTS[tipo] || PROMPTS.generico)
      + '\n\nIMPORTANTE: NÃO inclua dados que identifiquem o paciente (nome, registro, CPF). Responda APENAS com o resultado pedido, sem comentários, sem markdown.';

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
