# CardioResidente

Site de apoio para o residente de cardiologia, com três ferramentas:

1. **Busca de evidências** — base curada das condutas-chave (com classe de recomendação e nível de evidência) + busca **ao vivo no PubMed**, com link direto para o DOI de cada artigo.
2. **Transcrição de laudos por IA** — cole o laudo (eco, ressonância, ergometria, cintilografia, cateterismo, laboratório, Holter/MAPA) e receba um resumo padronizado pronto para o prontuário.
3. **Modelos de evolução** — modelos prontos e editáveis para agilizar a evolução diária.

---

## Estrutura

```
Site Cardio/
├── index.html                  Página principal (abas)
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── app.js              Navegação + utilidades
│       ├── data-diretrizes.js  Base curada de evidências
│       ├── data-evolucoes.js   Modelos de evolução
│       ├── evidencia.js        Busca curada + PubMed ao vivo
│       ├── transcricao.js      Front da transcrição por IA
│       └── evolucoes.js        Front dos modelos
├── api/
│   └── transcrever.js          Função serverless (IA) — usa sua chave de API
├── package.json
├── vercel.json
└── README.md
```

A busca do PubMed roda **direto no navegador** (API pública NCBI E-utilities) e não precisa de servidor. Só a transcrição por IA usa a função serverless.

---

## Como publicar (Vercel) — passo a passo

1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Suba esta pasta para um repositório no GitHub (ou use o `vercel` CLI — veja abaixo).
3. Na Vercel: **Add New → Project → Import** o repositório.
4. Em **Settings → Environment Variables**, adicione:
   - `GEMINI_API_KEY` = sua chave do Google AI Studio (**gratuita**, obtida em https://aistudio.google.com/app/apikey).
   - (opcional) `GEMINI_MODEL` = `gemini-2.0-flash` (padrão).
5. Clique em **Deploy**. Pronto: você recebe uma URL pública.

> A transcrição usa o **nível gratuito do Google Gemini**. Há limite de requisições por minuto, mas é suficiente para uso pessoal. O resto do site (evidências e evoluções) não precisa de chave nenhuma.

### Alternativa por linha de comando

```bash
npm i -g vercel
cd "Site Cardio"
vercel            # primeira publicação (siga as perguntas)
vercel env add GEMINI_API_KEY    # cole sua chave quando pedir
vercel --prod     # publica em produção
```

---

## Rodar localmente

A parte de **evidências** e **evoluções** funciona abrindo o `index.html` num servidor estático:

```bash
cd "Site Cardio"
python3 -m http.server 8000
# abra http://localhost:8000
```

Para testar a **transcrição por IA** localmente, use o ambiente da Vercel (que sobe a função serverless):

```bash
npm i -g vercel
vercel dev        # roda site + /api/transcrever localmente
```

Crie um arquivo `.env.local` com `GEMINI_API_KEY=...` para o `vercel dev` usar a chave.

---

## Avisos

- **Apoio à decisão** — não substitui julgamento clínico nem a leitura das diretrizes vigentes.
- **Privacidade do paciente** — não cole dados identificáveis (nome, registro, CPF) na ferramenta de IA. A função reforça isso no prompt, mas a responsabilidade é do usuário. Avalie as normas da sua instituição (LGPD) antes de usar com dados reais.
- A base curada reflete recomendações consolidadas (ESC, AHA/ACC, SBC). Confira sempre a versão mais recente de cada diretriz.

## Como manter

- **Adicionar condutas** à base curada: edite `assets/js/data-diretrizes.js` (copie um bloco existente).
- **Adicionar modelos** de evolução: edite `assets/js/data-evolucoes.js`.
- **Ajustar os prompts** de transcrição por tipo de exame: edite `api/transcrever.js` (objeto `PROMPTS`).
