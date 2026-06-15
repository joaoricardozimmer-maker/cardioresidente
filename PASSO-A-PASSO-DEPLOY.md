# 🚀 Como colocar o CardioResidente no ar (passo a passo, sem terminal)

Você vai fazer tudo pelo navegador. São 3 contas gratuitas: **Google AI Studio** (chave da IA), **GitHub** (guardar os arquivos) e **Vercel** (publicar o site). Leva ~15 minutos.

> Por que precisa disso? A busca de evidências e os modelos de evolução funcionam sozinhos, mas a **transcrição de laudos** e os **sinais vitais** usam IA. A IA precisa rodar num servidor (não dá pra rodar só no navegador), e a Vercel faz isso de graça.

---

## PARTE 1 — Pegar a chave da IA (Google Gemini, grátis)

1. Acesse **https://aistudio.google.com/app/apikey**
2. Faça login com sua conta Google.
3. Clique em **"Create API key"** (Criar chave de API).
4. Vai aparecer um código começando com `AIza...`. Clique em **copiar** e **guarde** num lugar seguro (Notas, por exemplo). Você vai colar isso na Parte 3.

> Essa chave é gratuita. Tem um limite de uso por minuto, mais que suficiente para o dia a dia.

---

## PARTE 2 — Subir os arquivos no GitHub

1. Crie uma conta grátis em **https://github.com/signup** (e-mail + senha).
2. Já logado, clique no **+** no canto superior direito → **"New repository"**.
3. Em **Repository name**, escreva `cardioresidente`.
4. Deixe marcado **Public** (ou Private, tanto faz) e clique em **"Create repository"**.
5. Na página que abrir, clique no link **"uploading an existing file"** (no meio da tela).
6. **Abra a pasta "Site Cardio" no seu computador**, selecione **TODOS os arquivos e pastas de dentro dela** (index.html, a pasta `assets`, a pasta `api`, package.json, vercel.json, etc.) e **arraste para a área de upload** do GitHub.
   - Dica: o GitHub mantém as pastas. Se aparecer só alguns arquivos, arraste também as pastas `assets` e `api`.
7. Lá embaixo, clique no botão verde **"Commit changes"**.

Pronto, seus arquivos estão no GitHub.

---

## PARTE 3 — Publicar na Vercel

1. Acesse **https://vercel.com/signup**
2. Escolha **"Continue with GitHub"** e autorize (use a conta que você acabou de criar).
3. No painel, clique em **"Add New..." → "Project"**.
4. Encontre o repositório **`cardioresidente`** na lista e clique em **"Import"**.
5. **ANTES de publicar**, abra a seção **"Environment Variables"** e adicione:
   - **Name (Key):** `GEMINI_API_KEY`
   - **Value:** cole aqui a chave `AIza...` que você copiou na Parte 1
   - Clique em **"Add"**.
6. Clique no botão **"Deploy"**.
7. Espere ~1 minuto. Quando aparecer "Congratulations", clique em **"Continue to Dashboard"** ou **"Visit"**.

🎉 Seu site está no ar! A URL será algo como `https://cardioresidente.vercel.app`.

---

## PARTE 4 — Testar

- Abra a URL no celular ou computador.
- Teste a **busca de evidências** (funciona na hora).
- Teste a **transcrição** de um laudo e os **sinais vitais** (usam a chave da IA).

Se a transcrição der erro dizendo que a chave não está configurada, volte na Vercel em **Settings → Environment Variables**, confira que o nome é exatamente `GEMINI_API_KEY`, e depois vá em **Deployments → (os três pontinhos) → Redeploy**.

---

## Como atualizar o site depois

Sempre que você quiser mudar algo (adicionar uma conduta, um modelo de evolução):
1. Edite o arquivo no GitHub (clique no arquivo → ícone de lápis → edite → "Commit changes"), **ou** suba uma versão nova pelo mesmo "uploading an existing file".
2. A Vercel **republica sozinha** em segundos. Não precisa fazer mais nada.

---

## Problemas comuns

| Problema | Solução |
|---|---|
| "GEMINI_API_KEY não configurada" | Adicione a variável na Vercel (Parte 3, passo 5) e faça **Redeploy**. |
| A IA não responde / erro 502 | A chave pode estar errada ou estourou o limite por minuto. Espere 1 min e tente; confira a chave. |
| PubMed não carrega artigos | Pode ser bloqueio de rede/firewall do hospital. Em casa/celular costuma funcionar. |
| Não achei meus arquivos pra subir | A pasta se chama **"Site Cardio"**. Suba o que está **dentro** dela, não a pasta inteira. |

---

## Dica de segurança (opcional, recomendado)

Para ninguém usar sua chave do Gemini em outro site: no **Google AI Studio / Google Cloud**, você pode restringir a chave para aceitar apenas requisições do seu domínio `*.vercel.app`. Não é obrigatório (a chave fica protegida no servidor da Vercel, não aparece no site), mas é uma camada extra.
