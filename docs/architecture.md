# Arquitetura do Projeto

> Documento historico e explicativo. A base oficial daqui para frente e [Arquitetura definitiva](./architecture/final-architecture.md).

## Visao Geral

O Best2bee Site e uma landing page B2B construida com Next.js App Router, TypeScript, Tailwind CSS, Framer Motion e uma preparacao SSR-safe para GSAP ScrollTrigger.

A arquitetura foi pensada para:

- evoluir por secoes vindas do Figma;
- evitar arquivos gigantes;
- preservar alta fidelidade visual;
- manter Design System centralizado;
- facilitar responsividade premium;
- permitir animacoes sofisticadas sem acoplar logica visual ao layout global;
- sustentar deploy automatico via GitHub e Vercel.

## Diagrama Geral

```mermaid
flowchart TD
  Figma[Figma Design] --> MCP[Figma MCP]
  MCP --> Cursor[Cursor IDE]
  Cursor --> Code[Next.js Codebase]
  Code --> GitHub[GitHub Repository]
  GitHub --> Vercel[Vercel Deploy]
  Vercel --> Users[Usuarios finais]

  Code --> DS[Design System Tokens]
  Code --> UI[UI Components]
  Code --> Sections[Landing Sections]
  Code --> Motion[Animation Layer]
```

## Separacao das Camadas

```mermaid
flowchart TB
  App[src/app] --> Page[page.tsx]
  App --> Layout[layout.tsx]
  App --> Globals[globals.css]

  Page --> Sections[src/components/sections]
  Sections --> Hero[src/components/sections/hero]
  Sections --> Placeholders[Demais secoes placeholder]

  Sections --> UI[src/components/ui]
  Sections --> Lib[src/lib]
  Sections --> Data[src/data]

  UI --> Tokens[Design System tokens]
  Lib --> Motion[src/lib/motion.ts]
  Lib --> Styles[src/lib/styles.ts]
  Lib --> Gsap[src/lib/gsap.ts]

  Hooks[src/hooks] --> GsapHook[useGsapScrollTrigger]
```

### `src/app`

Responsavel pela camada de aplicacao do App Router.

- `layout.tsx`: metadados, fontes globais e estrutura base HTML.
- `page.tsx`: composicao ordenada da landing page.
- `globals.css`: tokens CSS, resets e estilos globais.

### `src/components/sections`

Responsavel pelas secoes da landing. Cada secao representa um bloco de jornada do usuario.

O estado atual renderiza:

```txt
HeroSection
ProblemSection
SolutionSection
WorkSection
StackSection
SquadsSection
SocialSection
ComplianceSection
CTASection
Footer
```

### `src/components/ui`

Camada de primitives reutilizaveis do Design System.

- `Button`
- `Container`
- `GlassCard`
- `Section`
- `SectionTitle`

### `src/lib`

Camada de utilitarios e infraestrutura front-end.

- `motion.ts`: variants reutilizaveis do Framer Motion.
- `styles.ts`: classes compartilhadas para layout, superficies e botoes.
- `gsap.ts`: loader SSR-safe para GSAP ScrollTrigger.
- `constants.ts`: configuracoes estaticas.
- `animations.ts`: compatibilidade com componentes de animacao existentes.

### `src/hooks`

Hooks client-side compartilhados.

- `useGsapScrollTrigger.ts`: prepara ScrollTrigger no browser sem quebrar SSR.

### `src/data`

Dados estaticos e Design System fonte.

- `design-system.md`: fonte oficial do Design System.
- `sections.ts`: metadados das secoes placeholder.

## Organizacao das Secoes

Secoes simples podem permanecer em arquivo unico enquanto ainda sao placeholders ou possuem baixa complexidade.

```txt
src/components/sections/ProblemSection.tsx
src/components/sections/SolutionSection.tsx
src/components/sections/WorkSection.tsx
```

Secoes complexas devem seguir o padrao de pasta propria:

```txt
src/components/sections/{section}/
  index.ts
  {Section}Section.tsx
  {Section}Content.tsx
  {Section}Background.tsx
  {Section}Actions.tsx
  {Section}Metrics.tsx
  {section}.data.ts
```

## Hero Section

A Hero ja segue o modelo modular.

```mermaid
flowchart TD
  Page[src/app/page.tsx] --> HeroIndex[sections/hero/index.ts]
  HeroIndex --> HeroSection[HeroSection.tsx]

  HeroSection --> HeroBackground[HeroBackground.tsx]
  HeroSection --> HeroNavbar[HeroNavbar.tsx]
  HeroSection --> HeroContent[HeroContent.tsx]

  HeroContent --> HeroActions[HeroActions.tsx]
  HeroContent --> HeroMetrics[HeroMetrics.tsx]

  HeroNavbar --> HeroData[hero.data.ts]
  HeroMetrics --> HeroData
```

Responsabilidades:

- `HeroSection.tsx`: composicao, semantica da secao e container principal.
- `HeroBackground.tsx`: imagem, overlay e background decorativo.
- `HeroNavbar.tsx`: navegacao visual da Hero.
- `HeroContent.tsx`: headline, subheadline e orquestracao dos blocos.
- `HeroActions.tsx`: CTAs.
- `HeroMetrics.tsx`: metricas e indicador de scroll.
- `hero.data.ts`: dados estaticos da Hero.
- `index.ts`: API publica da secao.

## Estrutura de Componentes

```mermaid
flowchart LR
  Sections[Sections] --> UI[UI Components]
  Sections --> Forms[Forms]
  Sections --> Animations[Animation Components]
  Sections --> Lib[Lib Utilities]

  UI --> Button
  UI --> Container
  UI --> GlassCard
  UI --> Section
  UI --> SectionTitle

  Forms --> LeadForm
  Animations --> FadeIn
  Animations --> RevealOnScroll
```

Regras:

- Componentes UI nao devem conhecer regra de negocio.
- Secoes podem compor UI, motion, dados e assets.
- Dados repetidos saem do JSX para arquivos `*.data.ts`.
- Componentes com browser APIs devem ser client components.

## Estrategia de Responsividade

O projeto usa abordagem mobile-first com breakpoints semanticos no Tailwind:

```txt
tablet:  768px
laptop:  1024px
desktop: 1280px
wide:    1560px
```

```mermaid
flowchart LR
  Mobile[Mobile base] --> Tablet[tablet >= 768px]
  Tablet --> Laptop[laptop >= 1024px]
  Laptop --> Desktop[desktop >= 1280px]
  Desktop --> Wide[wide >= 1560px]
```

Principios:

- O layout base deve funcionar em mobile.
- `Container` centraliza largura maxima e paddings responsivos.
- Tipografia display usa `clamp()` quando precisa preservar fidelidade ao Figma.
- Grids comecam em uma coluna e evoluem conforme o breakpoint.
- Imagens decorativas nao devem causar overflow horizontal.

## Estrategia de Animacoes

Framer Motion e a camada principal para animacoes declarativas.

Variants reutilizaveis:

- `fadeUp`
- `staggerContainer`
- `scaleIn`
- `revealOpacity`

```mermaid
flowchart TD
  Component[Client Component] --> MotionVariants[src/lib/motion.ts]
  MotionVariants --> Framer[Framer Motion]
  Component --> ReducedMotion[prefers-reduced-motion]
```

GSAP ScrollTrigger fica preparado para casos mais complexos:

```mermaid
sequenceDiagram
  participant Component as Client Component
  participant Hook as useGsapScrollTrigger
  participant Loader as loadGsapScrollTrigger
  participant GSAP as GSAP + ScrollTrigger

  Component->>Hook: chama hook no browser
  Hook->>Loader: solicita import dinamico
  Loader->>Loader: verifica typeof window
  Loader->>GSAP: importa e registra plugin
  Hook->>GSAP: refresh quando montado
```

Regras:

- Animacoes devem respeitar reduced motion.
- Preferir `opacity`, `transform` e `scale`.
- Evitar animar propriedades que geram layout shift.
- GSAP nao deve ser importado diretamente em server components.

## Fluxo Figma -> MCP -> Cursor -> Codigo

```mermaid
sequenceDiagram
  participant Designer as Figma
  participant MCP as Figma MCP
  participant Cursor as Cursor
  participant Code as Codebase
  participant Browser as Browser Preview

  Designer->>Cursor: envia URL com node-id
  Cursor->>MCP: get_design_context(fileKey, nodeId)
  Cursor->>MCP: get_screenshot(fileKey, nodeId)
  MCP-->>Cursor: referencia visual, assets e metadados
  Cursor->>Code: salva assets em public/figma/{section}
  Cursor->>Code: implementa secao com Design System
  Cursor->>Browser: valida visualmente
  Cursor->>Code: ajusta responsividade e fidelidade
```

Regras do fluxo:

- O codigo gerado pelo MCP e referencia, nao implementacao final.
- Assets temporarios devem ser baixados para `public/figma/{section}/`.
- A implementacao deve usar tokens e componentes locais.
- A secao deve ser validada em desktop, tablet e mobile.
- Sempre rodar `typecheck`, `lint` e `build`.

## Integracao com GitHub

Repositorio remoto:

```txt
https://github.com/rixhon/best2bee-site.git
```

Branch principal:

```txt
main
```

```mermaid
flowchart LR
  Local[Local workspace] --> Commit[git commit]
  Commit --> Push[git push]
  Push --> GitHub[GitHub main]
  GitHub --> Vercel[Vercel Deploy]
```

Fluxo recomendado:

1. Criar mudanca local.
2. Rodar validacoes.
3. Commitar com mensagem clara.
4. Push para GitHub.
5. Vercel executa build automatico.

## Integracao com Vercel

```mermaid
sequenceDiagram
  participant Dev as Developer
  participant GH as GitHub
  participant Vercel as Vercel
  participant Prod as Production

  Dev->>GH: push main
  GH->>Vercel: webhook de deploy
  Vercel->>Vercel: npm install
  Vercel->>Vercel: npm run build
  Vercel->>Prod: publica deploy
```

Configuracao esperada:

- Framework: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Production branch: `main`
- Output directory: default

Variaveis previstas:

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CALENDLY_URL=
```

## Principios de Manutencao

- Mantenha a documentacao junto da mudanca.
- Promova secoes complexas para pasta propria.
- Evite abstrair antes de haver repeticao real.
- Preserve tokens do Design System.
- Prefira componentes pequenos e nomes explicitos.
- Registre decisoes arquiteturais em ADRs.

## Referencias Relacionadas

- [Stack tecnologica](./stack.md)
- [Design System](./design-system/README.md)
- [Componentes](./components/README.md)
- [Animacoes](./animations.md)
- [Sistema oficial de animacoes](./components/official-animation-system.md)
- [Responsividade](./responsive.md)
- [Figma MCP](./figma-mcp.md)
- [Git e GitHub](./git-github.md)
- [Deploy Vercel](./deploy-vercel.md)
- [ADRs](./architecture/decisions/README.md)
