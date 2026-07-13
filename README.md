# Lizaviê Financial Management — Landing Page

Landing page premium para a Lizaviê Financial Management, especializada em limpeza de nome, recuperação de crédito, negociação de dívidas e consultoria financeira.

## Tecnologias

- **Next.js 15** — Framework React
- **Tailwind CSS 4** — Estilização
- **Framer Motion** — Animações elegantes
- **Lucide React** — Ícones modernos

## Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Erro 500 ou página em branco

Isso quase sempre é **cache `.next` corrompido** ou **dois servidores rodando ao mesmo tempo** (porta 3000 com instância antiga quebrada).

1. Pare **todos** os terminais com `npm run dev` (Ctrl+C em cada um).
2. Rode:

```bash
npm run dev:fresh
```

3. Abra **http://localhost:3000** (se o terminal mostrar outra porta, use a que aparecer lá).

**Não rode** `npm run clean` enquanto o `npm run dev` estiver ativo — isso apaga arquivos que o servidor ainda está usando e causa o erro 500.

Se ainda falhar, feche o Cursor/VS Code, abra um terminal novo na pasta do projeto e execute `npm run dev:fresh` de novo.

## Editar conteúdo (painel admin em JSON)

Todo o conteúdo editável do site está em **`config/site.json`**. Abra esse arquivo, altere textos, contatos, serviços, depoimentos e FAQ, salve e recarregue a página no navegador.

### O que você pode alterar

| Seção no JSON | Exemplos |
|---------------|----------|
| `contato` | WhatsApp, e-mail, telefone, Instagram, CNPJ |
| `seo` | Título, descrição e palavras-chave da página |
| `navegacao` | Links do menu e texto do botão |
| `hero` | Títulos, subtítulos e CTAs da área principal |
| `secoes` | Títulos e textos de Serviços, Como Funciona, Depoimentos, FAQ e CTA |
| `servicos` | Cards de serviços (ícone, título, descrição) |
| `passos` | Etapas do “Como funciona” |
| `depoimentos` | Nome, cargo, texto e avaliação de cada cliente |
| `anamnese` | Textos, campos e opções do formulário de anamnese |
| `faq` | Perguntas e respostas |
| `footer` | Textos do rodapé |
| `imagens` | Caminhos das imagens em `public/img/` |

### WhatsApp

No objeto `contato.whatsapp`:

- `numero` — apenas dígitos, com DDI (ex.: `5511999999999`)
- `mensagemPadrao` — mensagem ao clicar nos botões principais
- `mensagemFaq`, `mensagemFaqExtra`, `mensagemConsultoria`, `mensagemAnamnese` — mensagens específicas

### Anamnese

A página `/anamnese` permite que o cliente preencha um formulário e envie os dados formatados para o WhatsApp da empresa. Edite textos e opções na seção `anamnese` do `site.json`.

### Ícones dos serviços

Use nomes do [Lucide](https://lucide.dev/icons): `ShieldCheck`, `TrendingUp`, `Handshake`, `Briefcase`, etc.

### Validação (opcional)

O arquivo `config/site.schema.json` descreve a estrutura esperada. Editores como VS Code podem sugerir campos se o JSON referenciar `"$schema": "./site.schema.json"`.

### Produção

Antes de publicar, atualize `site.url` em `config/site.json` para a URL real do site.

## Estrutura

```
config/
├── site.json          # ← Edite aqui (conteúdo do site)
└── site.schema.json   # Referência da estrutura
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── lib/
    ├── site-config.ts # Carrega config/site.json
    └── constants.ts   # Reexporta site-config (compatibilidade)
```

## Paleta de Cores

| Cor | Hex |
|-----|-----|
| Vinho escuro | `#6B0000` |
| Dourado elegante | `#D9C08A` |
| Dourado claro | `#E8D7B0` |
| Preto | `#111111` |
| Branco suave | `#F5F1E8` |
