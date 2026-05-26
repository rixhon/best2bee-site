# Final Architecture

Status: `Oficial`

Data: 2026-05-26

## Objetivo

Este documento congela a arquitetura definitiva do projeto Best2bee Site antes da implementacao das proximas secoes. Ele passa a ser a base oficial para novas features, refatoracoes, componentes, integracoes, Design System, performance e documentacao viva.

Qualquer mudanca que contrarie este documento deve gerar ADR em `docs/architecture/decisions/`.

## Principios Arquiteturais

1. Landing page estatica por padrao.
2. Server Components por padrao.
3. Client Components apenas quando houver interatividade, browser API, form ou animacao real.
4. Secoes complexas em pastas proprias.
5. UI compartilhada desacoplada de negocio.
6. Dados estaticos fora do JSX em `*.data.ts`.
7. Tokens antes de valores hardcoded quando houver padrao reutilizavel.
8. Assets locais versionados por secao.
9. Integracoes isoladas por responsabilidade.
10. Performance e SEO considerados antes do deploy publico.
11. Documentacao atualizada junto da mudanca.
12. ADRs para decisoes estruturais.

## Visao Geral

```txt
Figma
  -> Figma MCP
  -> assets locais
  -> Design System tokens
  -> UI primitives
  -> sections
  -> App Router static page
  -> Vercel
```

## Estrutura Ideal Escalavel

```txt
.
|-- .cursor/
|   `-- rules/
|-- .github/
|   `-- workflows/
|-- docs/
|   |-- architecture/
|   |   |-- decisions/
|   |   |-- final-architecture.md
|   |   |-- frontend-performance.md
|   |   |-- project-analysis.md
|   |   `-- technical-debt.md
|   |-- design-system/
|   |   |-- README.md
|   |   `-- tokenization-plan.md
|   |-- guides/
|   |-- reference/
|   `-- roadmap/
|-- public/
|   |-- figma/
|   |   `-- {section}/
|   |-- icons/
|   `-- social/
|-- scripts/
|-- src/
|   |-- app/
|   |-- components/
|   |   |-- animations/
|   |   |-- forms/
|   |   |-- integrations/
|   |   |-- layout/
|   |   |-- sections/
|   |   `-- ui/
|   |-- data/
|   |-- hooks/
|   |-- lib/
|   |-- providers/
|   |-- styles/
|   `-- types/
|-- CHANGELOG.md
|-- next.config.ts
|-- package.json
|-- tailwind.config.ts
`-- tsconfig.json
```

### Estado Atual vs Estrutura Ideal

Pastas existentes e mantidas:

- `src/app`
- `src/components`
- `src/components/animations`
- `src/components/forms`
- `src/components/layout`
- `src/components/sections`
- `src/components/ui`
- `src/data`
- `src/hooks`
- `src/lib`
- `src/types`
- `public/figma`
- `docs`
- `scripts`

Pastas aprovadas para criacao quando houver uso real:

- `src/components/integrations`
- `src/providers`
- `src/styles`
- `public/icons`
- `public/social`
- `.github/workflows`

Nao criar pastas abstratas sem necessidade real.

## App Router

### Papel de `src/app`

`src/app` pertence exclusivamente a camada de aplicacao do Next.js.

Responsabilidades:

- rotas;
- layouts;
- metadata;
- viewport;
- estilos globais;
- composicao de paginas.

Arquivos atuais:

```txt
src/app/
  layout.tsx
  page.tsx
  globals.css
```

Regras:

- `page.tsx` deve continuar sendo Server Component.
- `layout.tsx` deve continuar sendo Server Component.
- Nao colocar componentes de secao diretamente em `src/app`.
- Nao colocar regras de negocio em `src/app`.
- Nao transformar `page.tsx` em `"use client"`.

### Rotas

Estado atual:

- `/`: landing page principal.

Padrao futuro:

```txt
src/app/
  layout.tsx
  page.tsx
  globals.css
  privacy/
    page.tsx
  terms/
    page.tsx
```

Paginas institucionais futuras devem usar `src/components/layout/Header` apenas se houver necessidade real de navegacao global.

## Estrutura de Componentes

## Camadas Oficiais

```txt
components/ui
  primitives reutilizaveis sem dominio

components/layout
  estruturas globais de pagina

components/sections
  secoes da landing

components/forms
  formularios e campos

components/animations
  wrappers client de animacao

components/integrations
  UI de integracoes externas
```

## UI Shared

Pasta:

```txt
src/components/ui/
```

Componentes atuais:

- `Button`
- `Container`
- `GlassCard`
- `Section`
- `SectionTitle`

Regras:

- UI shared nao conhece copy de marketing.
- UI shared nao acessa APIs externas.
- UI shared nao conhece Figma node ou asset especifico.
- UI shared nao importa componentes de `sections`.
- UI shared pode importar `src/lib/styles`.
- UI shared deve usar tokens do Design System.

Quando criar novo UI component:

- existe repeticao real em duas ou mais secoes;
- o componente tem nome semantico claro;
- props sao pequenas e previsiveis;
- documentacao em `docs/components/README.md` e atualizada.

Exemplos aprovados para futuro:

```txt
MetricCard
Badge
Chip
AvatarStack
IconTile
SectionHeaderGrid
```

Criar apenas quando houver repeticao real.

## Layout Components

Pasta:

```txt
src/components/layout/
```

Componentes atuais:

- `Header`
- `Footer`

Decisao definitiva:

- `HeroNavbar` pertence a Hero Section.
- `Header` fica reservado para paginas internas futuras ou fluxo multi-page.
- A landing principal nao deve renderizar `Header` junto com `HeroNavbar` sem nova decisao de UX.

Padrao:

- Layout global permanente fica em `src/app/layout.tsx`.
- Layout visual reutilizavel fica em `src/components/layout`.
- Layout de secao fica dentro da propria secao.

## Sections

Pasta:

```txt
src/components/sections/
```

Secoes oficiais:

1. `HeroSection`
2. `ProblemSection`
3. `SolutionSection`
4. `WorkSection`
5. `StackSection`
6. `SquadsSection`
7. `SocialSection`
8. `ComplianceSection`
9. `CTASection`

## Padrao para Secao Simples

Use arquivo unico quando:

- e placeholder;
- tem baixa complexidade;
- nao possui assets proprios;
- nao possui lista de dados significativa;
- nao possui animacao especial.

```txt
src/components/sections/ProblemSection.tsx
```

## Padrao para Secao Complexa

Use pasta propria quando a secao tiver:

- assets;
- dados;
- subcomponentes;
- card/grid proprio;
- background complexo;
- animacoes;
- regras responsivas relevantes.

```txt
src/components/sections/{section}/
  index.ts
  {Section}Section.tsx
  {Section}Content.tsx
  {Section}Background.tsx
  {Section}Actions.tsx
  {Section}Card.tsx
  {Section}Metrics.tsx
  {section}.data.ts
```

Nem todos os arquivos sao obrigatorios. Crie apenas os necessarios.

## Regra de API Publica de Secao

Cada secao complexa deve exportar apenas sua entrada publica pelo `index.ts`:

```ts
export { HeroSection } from "./HeroSection";
```

`page.tsx` deve importar secoes complexas pelo barrel:

```ts
import { HeroSection } from "@/components/sections/hero";
```

## Dados de Secao

Dados repetidos devem ficar em:

```txt
src/components/sections/{section}/{section}.data.ts
```

Exemplos:

- nav items;
- metricas;
- cards;
- depoimentos;
- logos;
- steps;
- FAQs.

`src/data/sections.ts` deve continuar como fonte de metadados globais das 9 secoes, incluindo `status`.

## Server e Client Components

## Regra Definitiva

Server Component por padrao.

Client Component somente quando houver:

- `useState`, `useEffect`, `useRef` com browser API;
- Framer Motion;
- GSAP;
- React Hook Form;
- evento interativo que dependa de estado;
- embed externo que precise de runtime no browser.

## Padrao Ideal

```txt
{Section}Section.tsx        # server
{Section}Content.tsx        # server
{Section}Background.tsx     # server
{Section}Actions.tsx        # server, se apenas links
{Section}Reveal.client.tsx  # client, se houver motion
{Section}Form.client.tsx    # client, se houver form
```

## Proibido

- Colocar `"use client"` em `page.tsx`.
- Colocar `"use client"` em uma secao inteira apenas para animar pequenos blocos.
- Importar `gsap` diretamente em Server Component.
- Adicionar provider global para necessidade local.

## Padrao de Animacao

Correto:

```txt
Server section
  -> client animated wrapper
    -> children estaticos
```

Evitar:

```txt
Client section inteira
  -> todos os subcomponentes hidratados sem necessidade
```

## Animacoes

Pasta:

```txt
src/components/animations/
src/lib/motion.ts
src/lib/gsap.ts
src/hooks/useGsapScrollTrigger.ts
```

Camadas:

- `src/lib/motion.ts`: variants e constantes Framer Motion.
- `src/components/animations`: wrappers client reutilizaveis.
- `src/lib/gsap.ts`: loader SSR-safe.
- `src/hooks`: hooks client para inicializacao controlada.

Regras:

- Usar Framer Motion para reveal, fade, stagger e microinteracoes.
- Usar GSAP somente para scroll scrub, pinning ou timelines complexas.
- Respeitar `prefers-reduced-motion`.
- Animar `opacity`, `transform` e `scale`.
- Evitar animar layout.
- Nao usar animacao para esconder falta de conteudo.

Padrao definitivo:

```txt
fadeUp
staggerContainer
scaleIn
revealOpacity
```

Novas variants devem ser adicionadas apenas se:

- houver reutilizacao real;
- estiverem alinhadas ao Design System;
- forem documentadas em `docs/components/official-animation-system.md`.

## Hooks

Pasta:

```txt
src/hooks/
```

Uso:

- Hooks compartilhados entre componentes.
- Hooks que usam browser API devem ser client-only.
- Hooks especificos de uma secao devem ficar na pasta da secao ate haver reutilizacao.

Padrao:

```txt
src/hooks/useGsapScrollTrigger.ts
src/components/sections/{section}/useSectionThing.ts # apenas se local
```

Regras:

- Nao criar hook para logica usada uma unica vez se funcao local resolver.
- Hooks compartilhados devem ter nome claro e responsabilidade unica.
- Hooks nao devem esconder efeitos globais inesperados.

## Providers

Pasta aprovada:

```txt
src/providers/
```

Estado atual:

- Nenhum provider global e necessario.

Regra definitiva:

- Nao criar provider global sem necessidade transversal real.
- Tema visual nao precisa de provider enquanto tokens CSS resolvem.
- Motion nao precisa de provider global.
- GSAP nao precisa de provider global.

Providers aceitaveis no futuro:

- analytics consent;
- feature flags;
- auth, se o produto deixar de ser landing publica;
- lead/session context, se houver fluxo multi-step.

Todo provider novo exige ADR.

## Utils e Lib

Pasta:

```txt
src/lib/
```

Responsabilidades:

- helpers puros;
- estilos compartilhados;
- constants;
- integracoes tecnicas;
- loaders SSR-safe;
- schemas compartilhados;
- services sem UI.

Arquivos atuais:

- `constants.ts`
- `styles.ts`
- `motion.ts`
- `gsap.ts`

Padrao:

```txt
src/lib/
  constants.ts
  styles.ts
  motion.ts
  gsap.ts
  calendly.ts
  leads/
    lead.schema.ts
    submitLead.ts
```

Regras:

- `lib` nao deve importar componentes React.
- `lib` pode importar tipos.
- `lib` pode expor funcoes usadas por componentes.
- Integracoes externas devem ficar em `lib` quando nao tiverem UI.

## Forms

Pasta:

```txt
src/components/forms/
```

Estado atual:

- `LeadForm`

Regra definitiva:

- Form components sao client components.
- Validacao deve usar Zod.
- Estado deve usar React Hook Form.
- Submit deve ser delegado por prop ou service.
- Endpoint nao deve ficar hardcoded no JSX.

Arquitetura futura:

```txt
src/components/forms/
  LeadForm.tsx
  FormField.tsx

src/lib/leads/
  lead.schema.ts
  submitLead.ts
```

## Integracoes

Pasta aprovada:

```txt
src/components/integrations/
src/lib/
```

Regra:

- UI da integracao fica em `components/integrations`.
- Config, helpers e clients ficam em `lib`.
- Env vars devem estar em `.env.example`.
- Toda integracao deve ter documentacao operacional.

### Calendly

Arquitetura final recomendada:

```txt
src/lib/calendly.ts
src/components/integrations/CalendlyLink.tsx
src/components/integrations/CalendlyEmbed.client.tsx
```

Uso:

- Link simples pode ser server component.
- Embed/popup deve ser client component e lazy.

### Leads

Arquitetura final recomendada:

```txt
src/lib/leads/
  lead.schema.ts
  submitLead.ts
```

Se houver backend no Next:

```txt
src/app/api/leads/route.ts
```

Criar API route apenas quando o destino real for decidido.

## Tokens e Design System

Fontes oficiais:

```txt
src/data/design-system.md       # fonte conceitual oficial
docs/design-system/README.md    # aplicacao tecnica
docs/design-system/final-tokens.md
docs/design-system/tokenization-plan.md
src/app/globals.css             # CSS variables aplicadas
tailwind.config.ts              # mapeamento Tailwind
```

Regra:

- Tokens oficiais usam prefixo `--b2b-*`.
- Tailwind deve mapear tokens, nao substituir a fonte de verdade.
- Valores arbitrarios do Figma sao permitidos apenas para fidelidade pontual.
- Repeticao em duas secoes vira token, helper ou componente.
- Mudanca de token exige atualizar Design System docs.

Camadas de token:

```txt
foundation tokens
  color, type, spacing, radius, shadow, motion, z-index

semantic tokens
  surface, text, border, action, feedback

component tokens
  hero, nav, metric, button

local values
  ajustes pontuais de Figma
```

## Assets e Imagens

Pasta:

```txt
public/
  figma/
    {section}/
  icons/
  social/
```

Regra para assets do Figma:

```txt
public/figma/{section}/asset-name.{avif|webp|png|svg}
```

Padrao:

- background acima da dobra: AVIF/WebP preferencial.
- logo: SVG preferencial.
- icones: SVG.
- PNG apenas quando necessario.
- assets temporarios do Figma devem ser baixados e versionados.

Uso de `next/image`:

- usar para imagens raster;
- definir `width` e `height`, ou wrapper com aspect ratio quando usar `fill`;
- usar `sizes` correto;
- usar `priority` apenas acima da dobra;
- deixar lazy loading default abaixo da dobra.

## Fontes

Fonte atual:

- Space Grotesk: display.
- Inter: body/UI.
- JetBrains Mono: eyebrow/labels.

Regra:

- Fontes carregadas em `src/app/layout.tsx` via `next/font`.
- Novos pesos exigem justificativa no Design System.
- Self-hosting so deve ser avaliado com evidencia de performance.
- `display: "swap"` deve permanecer salvo decisao contraria documentada.

## Responsividade

Breakpoints oficiais:

```txt
tablet:  768px
laptop:  1024px
desktop: 1280px
wide:    1560px
```

Regra:

- mobile-first sempre;
- `Container` para largura/padding global;
- grids empilham no mobile;
- headings podem usar `clamp()`;
- imagens decorativas nao podem causar overflow;
- validar 390px, 768px, 1024px, 1280px e wide.

Padrao de secao:

```txt
1 coluna no mobile
2 colunas no tablet quando fizer sentido
3/4 colunas no laptop/desktop quando houver cards
container max 1280px
```

## SEO

Camada:

```txt
src/app/layout.tsx
```

Regras:

- `metadataBase` vem de `SITE_CONFIG.url`.
- `NEXT_PUBLIC_SITE_URL` precisa estar correto em producao.
- Uma pagina deve ter apenas um `h1`.
- Secoes devem ter estrutura semantica.
- Imagens informativas precisam de `alt`.
- Imagens decorativas usam `alt=""` e `aria-hidden`.
- OG image, favicon e apple icon devem existir antes de deploy publico.

Futuro:

```txt
public/social/og-image.png
public/icons/favicon.ico
public/icons/apple-touch-icon.png
```

Structured data so deve ser criado quando conteudo final e dados da empresa estiverem aprovados.

## Performance

Documento detalhado:

```txt
docs/architecture/frontend-performance.md
docs/architecture/seo-performance-strategy.md
```

Regras definitivas:

- rota `/` deve permanecer estatica enquanto possivel;
- server component por padrao;
- client JS deve crescer com justificativa;
- imagens acima da dobra devem ser otimizadas;
- Framer Motion deve ser isolado;
- GSAP deve ser lazy;
- placeholders nao devem chegar a producao publica;
- medir baseline antes de release.

Budgets iniciais:

```txt
LCP: < 2.5s
CLS: < 0.1
INP: < 200ms
Lighthouse mobile: > 90 antes de deploy publico
```

## App State

Estado global:

- Nao usar estado global para conteudo estatico.
- Nao criar stores para landing simples.
- Dados estaticos devem ser arquivos `*.data.ts`.
- Estado local apenas em forms, interacoes ou embeds.

## Enterprise-level Organization

## Limites entre Camadas

### `app`

Pode importar:

- `components/sections`
- `components/layout`
- `lib/constants`
- estilos globais

Nao deve conter:

- UI primitives;
- logica de integracao;
- dados grandes;
- business logic.

### `components/ui`

Pode importar:

- `lib/styles`
- tipos React

Nao pode importar:

- `components/sections`
- `data/sections`
- integrations
- env vars diretamente

### `components/sections`

Pode importar:

- `components/ui`
- `components/animations`
- `data`
- `lib/styles`
- assets locais via paths public

Nao deve:

- chamar APIs diretamente;
- conter services;
- conter regras globais.

### `components/forms`

Pode importar:

- React Hook Form;
- Zod resolver;
- UI components;
- schemas/types.

Nao deve:

- hardcodar endpoint;
- conhecer CRM especifico;
- fazer side effect sem camada intermediaria.

### `components/integrations`

Pode importar:

- helpers de `lib`;
- env-safe constants;
- UI components.

Nao deve:

- misturar varias integracoes no mesmo componente;
- carregar scripts externos acima da dobra sem necessidade.

### `lib`

Pode conter:

- helpers puros;
- clients;
- loaders;
- services;
- schemas;
- constants.

Nao deve importar:

- componentes React;
- CSS;
- arquivos de secao.

### `hooks`

Pode conter:

- hooks compartilhados.

Nao deve conter:

- hooks de uso unico que poderiam ser locais;
- estado global oculto.

## Convencoes Definitivas

### Naming

Componentes:

```txt
PascalCase.tsx
```

Dados:

```txt
{domain}.data.ts
```

Client components:

```txt
Component.client.tsx
```

Server components:

```txt
Component.tsx
```

Hooks:

```txt
useThing.ts
```

Services:

```txt
verbNoun.ts
```

### Imports

Usar alias:

```ts
import { Container } from "@/components/ui/Container";
```

Imports relativos sao permitidos dentro da mesma pasta de secao:

```ts
import { HeroContent } from "./HeroContent";
```

### Exports

Secoes complexas exportam via `index.ts`.

UI components podem exportar diretamente do arquivo.

Evitar barrel global grande em `components/index.ts`.

### Props

- props pequenas;
- nomes descritivos;
- evitar objetos genericos demais;
- evitar booleanos ambiguos;
- componentes UI podem herdar props HTML quando fizer sentido.

### Comments

Comentar apenas decisoes nao obvias.

Nao comentar o que o JSX ja explica.

## Documentacao Viva

Toda mudanca relevante deve atualizar:

- `CHANGELOG.md`;
- `docs/current-state.md`, se alterar status;
- `docs/components/README.md`, se criar/alterar componente reutilizavel;
- `docs/design-system/README.md`, se alterar padrao visual;
- `docs/design-system/tokenization-plan.md`, se promover tokens;
- ADR, se mudar arquitetura.

## ADRs

Caminho canonico:

```txt
docs/architecture/decisions/
```

Criar com:

```bash
npm run adr:new -- "Titulo da decisao"
```

O caminho `docs/adr/` e legado e nao deve receber novos registros.

## Ordem Oficial para Novas Secoes

1. Ler `final-architecture.md`.
2. Ler Design System.
3. Consultar Figma MCP.
4. Salvar assets em `public/figma/{section}/`.
5. Decidir se a secao sera simples ou complexa.
6. Criar dados em `*.data.ts` quando houver repeticao/listas.
7. Implementar server component por padrao.
8. Isolar animacoes em client wrappers.
9. Usar UI shared existente.
10. Criar novo UI component somente com repeticao real.
11. Validar mobile/tablet/desktop.
12. Rodar `npm run typecheck`, `npm run lint`, `npm run build`.
13. Atualizar docs e changelog.

## Estrutura Oficial de Proxima Secao Complexa

Exemplo para `ProblemSection`:

```txt
src/components/sections/problem/
  index.ts
  ProblemSection.tsx
  ProblemContent.tsx
  ProblemCard.tsx
  ProblemBackground.tsx
  problem.data.ts
```

`src/app/page.tsx`:

```ts
import { ProblemSection } from "@/components/sections/problem";
```

Quando isso acontecer, remover o placeholder antigo correspondente.

## Decisoes Congeladas

1. Next.js App Router permanece como framework.
2. TypeScript strict permanece.
3. Tailwind permanece como camada principal de estilo.
4. Design System via CSS variables `--b2b-*` permanece.
5. Framer Motion permanece para animacoes declarativas.
6. GSAP permanece preparado apenas para casos complexos.
7. React Hook Form + Zod permanece para forms.
8. Vercel permanece como destino de deploy.
9. `docs/architecture/decisions/` e o unico ADR canonico.
10. Server Components sao default arquitetural.

## Pendencias antes de Implementar Muitas Secoes

Prioridade alta:

- resolver `tsconfig.tsbuildinfo`;
- consolidar ADR legado;
- decidir escopo de `Header`;
- otimizar assets da Hero;
- definir gate contra placeholders em producao.

Prioridade media:

- revisar `cx`, `clsx` e `tailwind-merge`;
- aplicar tokens globais seguros;
- definir padrao de motion server/client na pratica;
- criar CI basico.

## Conclusao

A arquitetura definitiva do projeto e modular, orientada a secoes, Design System-first e server-first. A partir deste documento, novas secoes devem ser implementadas de forma incremental, mantendo a pagina estatica sempre que possivel, isolando client-side apenas onde houver necessidade real, e promovendo padroes para tokens/componentes somente depois de repeticao comprovada.

Este documento deve ser tratado como a base oficial do projeto daqui para frente.
