# Segurança — Lizaviê Landing Page

Este projeto é uma **landing estática** (Next.js). Não há API, banco de dados nem autenticação de usuários. A segurança concentra-se em **deploy**, **dependências** e **cabeçalhos HTTP**.

## O que já está configurado no código

- **Security headers** em `next.config.ts` (CSP, HSTS, anti-clickjacking, etc.)
- **`.env*` ignorado** no Git — nunca commitar chaves ou senhas
- **Fontes self-hosted** via `next/font` (sem carregar scripts do Google em runtime)
- **`config/site.json` protegido** (ver seção abaixo)
- Conteúdo público em `config/site.json` (telefone, e-mail, links) — visível no site de propósito

## Proteção do `config/site.json`

O arquivo **não fica em `public/`** — o Next.js não o serve como arquivo estático.

| Camada | O que faz |
|--------|-----------|
| `src/middleware.ts` | Responde **404** para `/config/*`, `/site.json`, etc. |
| `src/lib/site-config.server.ts` | Importa o JSON só no **servidor** (`import "server-only"`) |
| Componentes com `"use client"` | Recebem **apenas os dados necessários** via props (não importam o JSON) |

**Importante:** textos e contatos do site continuam visíveis no HTML e no JavaScript da página — isso é normal numa landing. O que evitamos é:

- Baixar o arquivo JSON inteiro por URL (`/config/site.json`)
- Incluir o JSON completo no bundle dos componentes cliente por engano

**Nunca coloque no JSON:** senhas, tokens de API, chaves privadas. Use variáveis de ambiente na Vercel para segredos reais.

**Edição do conteúdo:** só quem tem acesso ao repositório GitHub ou ao deploy na Vercel pode alterar o site — não há painel admin exposto na internet.

## Vercel (recomendado)

1. **Environment Variables**  
   Use apenas se no futuro existir API ou integrações. Segredos **sem** prefixo `NEXT_PUBLIC_`.  
   Variáveis `NEXT_PUBLIC_*` são expostas no navegador.

2. **Production vs Preview**  
   - **Production**: URL pública (`liz-landing-page-gpnl.vercel.app`).  
   - **Preview**: em *Project → Settings → Deployment Protection*, ative proteção por login Vercel se não quiser previews indexáveis.

3. **`NEXT_PUBLIC_SITE_URL`** (opcional)  
   Defina na Production com a URL canônica, ex.: `https://liz-landing-page-gpnl.vercel.app`  
   Melhora Open Graph e metadados.

4. **Domínio customizado**  
   Após apontar DNS, atualize `site.url` em `config/site.json` e `NEXT_PUBLIC_SITE_URL` na Vercel.

## O que não colocar no repositório

- Arquivos `.env`, `.env.local`, tokens de API
- Senhas, chaves de banco, webhooks secretos
- Dados que não devem ser públicos (use backend + variáveis de ambiente no futuro)

## Manutenção periódica

```bash
npm audit
npm update
```

Corrija vulnerabilidades **moderadas ou superiores** quando houver patch compatível com o Next.js em uso. Evite `npm audit fix --force` sem revisar breaking changes.

## Se adicionar backend no futuro

| Recurso | Prática |
|--------|---------|
| Formulário de contato | API Route + rate limit + validação + CAPTCHA |
| Banco de dados | `DATABASE_URL` só no servidor (Vercel env) |
| Painel admin | Auth forte, HTTPS, logs |
| Analytics (GA, Meta Pixel) | Atualizar CSP em `next.config.ts` com domínios permitidos |

## Content-Security-Policy (CSP)

A CSP atual permite apenas recursos do próprio site (`'self'`), com exceções mínimas para o Next.js (`unsafe-inline` / `unsafe-eval` em scripts).  
Se integrar **Google Analytics**, **Hotjar**, **embed de vídeo**, etc., será necessário ampliar `script-src`, `connect-src` ou `frame-src` em `next.config.ts`.

## Contato / incidentes

Para reportar problema de segurança relacionado a este site, use o e-mail em `config/site.json` → `contato.email`.
