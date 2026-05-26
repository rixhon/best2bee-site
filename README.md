# Best2bee Site

Landing page B2B da Best2bee desenvolvida com Next.js, TypeScript, Tailwind CSS e animacoes modernas. O projeto foi estruturado para receber secoes aprovadas no Figma de forma incremental, mantendo alta fidelidade visual, responsividade premium, performance e manutencao simples.

## Objetivo

Criar uma landing page escalavel para captacao B2B, com base no Design System da Best2bee e preparada para integracoes futuras como Calendly, formulario de leads e evolucao por secoes vindas do Figma.

## Stack

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP com ScrollTrigger preparado de forma SSR-safe
- React Hook Form
- Zod
- Vercel para deploy automatico
- GitHub como repositorio remoto

## Arquitetura

O projeto segue uma arquitetura por responsabilidades:

- `src/app`: App Router, layout global, pagina principal e estilos globais.
- `src/components/layout`: componentes estruturais.
- `src/components/sections`: secoes da landing page.
- `src/components/sections/hero`: Hero Section modularizada.
- `src/components/ui`: componentes reutilizaveis de Design System.
- `src/components/forms`: formularios e campos.
- `src/components/animations`: componentes de animacao.
- `src/lib`: utilitarios, motion variants, estilos compartilhados e integracoes.
- `src/hooks`: hooks client-side compartilhados.
- `src/data`: dados estaticos e fonte do Design System.
- `src/types`: tipos compartilhados.
- `public/figma`: assets extraidos do Figma.
- `docs`: documentacao viva do projeto.

## Estrutura de Pastas

```txt
.
├── docs/
│   ├── architecture/
│   │   └── decisions/
│   ├── guides/
│   └── reference/
├── public/
│   └── figma/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── animations/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   └── types/
└── tailwind.config.ts
```

## Setup Local

Instale as dependencias:

```bash
npm install
```

Crie o arquivo de ambiente local quando necessario:

```bash
cp .env.example .env.local
```

Variaveis disponiveis:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CALENDLY_URL=
```

Rode o projeto:

```bash
npm run dev
```

Acesse:

```txt
http://localhost:3000
```

## Scripts

```bash
npm run dev        # ambiente local
npm run build      # build de producao
npm run start      # executa build de producao
npm run lint       # valida ESLint
npm run typecheck  # valida TypeScript
npm run adr:new -- "Titulo da decisao" # cria novo ADR numerado
npm run changelog:add -- --type feature --message "Descricao da mudanca"
npm run changelog:release -- --version 0.2.0
```

Antes de finalizar qualquer entrega, rode:

```bash
npm run typecheck
npm run lint
npm run build
```

## Git Workflow

Branch principal:

```txt
main
```

Repositorio remoto:

```txt
https://github.com/rixhon/best2bee-site.git
```

Fluxo recomendado:

```bash
git status
git add .
git commit -m "docs: update project readme"
git push
```

Para mudancas maiores, prefira branch dedicada:

```bash
git checkout -b feature/nome-da-feature
git push -u origin feature/nome-da-feature
```

## Deploy

O deploy esperado e GitHub -> Vercel.

Configuracao na Vercel:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: default
- Production Branch: `main`

Todo push em `main` deve disparar deploy automatico em producao. Pull Requests devem gerar Preview Deploys.

## Integracoes

### Figma MCP

O projeto utiliza MCP do Figma para leitura de contexto visual e implementacao incremental das secoes. Assets relevantes devem ser salvos em `public/figma/{section}/`.

Fluxo resumido:

1. Receber URL do Figma com `node-id`.
2. Consultar `get_design_context`.
3. Consultar `get_screenshot`.
4. Baixar assets para `public/figma`.
5. Adaptar para o Design System local.

### Calendly

A integracao esta preparada via variavel:

```bash
NEXT_PUBLIC_CALENDLY_URL=
```

A implementacao final deve ser conectada quando o link oficial estiver definido.

### Leads

O formulario base usa React Hook Form e Zod. A camada de envio ainda deve ser conectada a um endpoint, CRM ou backend escolhido.

## Padroes Utilizados

- Mobile-first.
- Componentes pequenos e com responsabilidade unica.
- Secoes complexas em pastas proprias.
- Dados estaticos em `*.data.ts`.
- Tokens do Design System via CSS variables `--b2b-*`.
- Tailwind para composicao visual.
- Framer Motion para animacoes declarativas.
- GSAP somente para futuras animacoes complexas de scroll.
- Assets do Figma versionados em `public/figma`.

## Convencoes do Projeto

### Secoes

Secoes simples podem ficar em um unico arquivo:

```txt
src/components/sections/ProblemSection.tsx
```

Secoes complexas devem seguir:

```txt
src/components/sections/{section}/
  index.ts
  {Section}Section.tsx
  {Section}Content.tsx
  {Section}Background.tsx
  {Section}Actions.tsx
  {section}.data.ts
```

### Design System

A fonte oficial fica em:

```txt
src/data/design-system.md
```

Os tokens aplicados ficam em:

```txt
src/app/globals.css
tailwind.config.ts
```

### Animacoes

Variants reutilizaveis ficam em:

```txt
src/lib/motion.ts
```

### Estilos compartilhados

Classes reutilizaveis ficam em:

```txt
src/lib/styles.ts
```

## Links Importantes

- [Documentacao viva](./docs/README.md)
- [Arquitetura](./docs/architecture.md)
- [Stack](./docs/stack.md)
- [Design System](./docs/design-system/README.md)
- [Setup local](./docs/setup-local.md)
- [Git e GitHub](./docs/git-github.md)
- [Deploy Vercel](./docs/deploy-vercel.md)
- [Figma MCP](./docs/figma-mcp.md)
- [Componentes](./docs/components/README.md)
- [Animacoes](./docs/animations.md)
- [Responsividade](./docs/responsive.md)
- [Estado atual](./docs/current-state.md)
- [Roadmap tecnico](./docs/roadmap.md)
- [Changelog](./CHANGELOG.md)
- [Guia de changelog](./docs/changelog.md)
- [ADRs](./docs/architecture/decisions/README.md)

## Status Atual

- Hero Section implementada a partir do Figma.
- Hero modularizada em `src/components/sections/hero/`.
- Design System integrado ao Tailwind e CSS variables.
- Documentacao viva criada em `docs/`.
- Demais secoes ainda estao como placeholders estruturais para implementacao futura.
