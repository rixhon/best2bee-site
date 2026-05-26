# Project Analysis

Data da analise: 2026-05-26

## Objetivo

Este relatorio mapeia o estado atual do projeto Best2bee Site e consolida achados tecnicos sobre estrutura, frontend, componentes, paginas, secoes, assets, estilos, Tailwind, animacoes, integracoes, dependencias, hooks, utilitarios, configuracao, variaveis de ambiente, riscos e oportunidades de evolucao.

## Escopo Analisado

- Estrutura de pastas.
- App Router, paginas e layout global.
- Componentes UI, layout, forms, animacoes e secoes.
- Hero Section modular.
- Assets locais.
- Tailwind, CSS variables e Design System.
- Framer Motion e preparacao GSAP ScrollTrigger.
- Integracoes atuais e futuras.
- Hooks, utilitarios e scripts.
- Configuracoes do projeto.
- Variaveis de ambiente.
- Documentacao viva, ADRs, changelog e regras Cursor.

## Sumario Executivo

O projeto esta bem estruturado para uma landing page grande orientada por Figma. A Hero Section ja esta implementada e modularizada, enquanto as demais 8 secoes existem como placeholders. A base tecnica e coerente: Next.js App Router, TypeScript strict, Tailwind com tokens `--b2b-*`, Framer Motion centralizado, GSAP preparado de forma SSR-safe, documentacao viva, ADRs e scripts de automacao.

Os principais pontos de atencao sao:

- duplicidade potencial entre `Header` global e `HeroNavbar`;
- componentes, hooks e dependencias preparadas mas ainda nao usadas;
- `tsconfig.tsbuildinfo` aparece como artefato gerado no estado do Git;
- duas areas de ADR coexistem: `docs/adr/` e `docs/architecture/decisions/`;
- formularios e Calendly ainda nao possuem integracao real;
- uso crescente de classes Tailwind arbitrarias na Hero pode dificultar manutencao se o padrao se repetir em outras secoes;
- futuras secoes podem causar crescimento rapido de client components e bundle se animacoes/assets nao forem isolados.

## Mapa de Estrutura

```txt
.
|-- .cursor/
|   `-- rules/
|-- CHANGELOG.md
|-- docs/
|   |-- architecture/
|   |   `-- decisions/
|   |-- adr/
|   |-- guides/
|   `-- reference/
|-- public/
|   `-- figma/
|       `-- hero/
|-- scripts/
|-- src/
|   |-- app/
|   |-- components/
|   |   |-- animations/
|   |   |-- forms/
|   |   |-- layout/
|   |   |-- sections/
|   |   |   `-- hero/
|   |   `-- ui/
|   |-- data/
|   |-- hooks/
|   |-- lib/
|   `-- types/
|-- package.json
|-- tailwind.config.ts
|-- tsconfig.json
`-- next.config.ts
```

### Observacao sobre pastas geradas

O workspace local tambem contem `.next/`, `node_modules/` e `tsconfig.tsbuildinfo`. `.next/` e `node_modules/` estao ignorados no `.gitignore`. `tsconfig.tsbuildinfo` aparece como arquivo alterado no estado do Git e deve ser tratado como artefato gerado.

## Configuracao do Projeto

### `package.json`

Scripts atuais:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run adr:new -- "Titulo da decisao"
npm run changelog:add -- --type feature --message "Descricao da mudanca"
npm run changelog:release -- --version 0.2.0
```

Dependencias de runtime:

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `framer-motion`
- `gsap`
- `react-hook-form`
- `zod`
- `@hookform/resolvers`
- `clsx`
- `tailwind-merge`

Dependencias de desenvolvimento:

- `typescript`
- `eslint`
- `eslint-config-next`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `@tailwindcss/postcss`

### Achados em dependencias

- `clsx` e `tailwind-merge` estao instalados, mas o projeto usa `cx` proprio em `src/lib/styles.ts`.
- `gsap` esta instalado e preparado, mas ainda nao ha uso real em secoes.
- `react-hook-form`, `zod` e `@hookform/resolvers` estao usados em `LeadForm`, mas o formulario ainda nao esta renderizado na pagina.

### `tsconfig.json`

Pontos positivos:

- `strict: true`.
- `allowJs: false`.
- `moduleResolution: "bundler"`.
- alias `@/*` apontando para `./src/*`.

Ponto de atencao:

- `incremental: true` gera `tsconfig.tsbuildinfo`; esse arquivo deve ser ignorado se nao houver motivo para versiona-lo.

### `next.config.ts`

Configuracao atual:

- `poweredByHeader: false`.
- `reactStrictMode: true`.

O arquivo esta enxuto e adequado para o estado atual. Futuras imagens remotas, headers de cache ou redirects devem ser documentados quando surgirem.

### ESLint e PostCSS

- `eslint.config.mjs` usa `eslint-config-next/core-web-vitals` e `eslint-config-next/typescript`.
- `postcss.config.mjs` usa `@tailwindcss/postcss`.

## Variaveis de Ambiente

Arquivo de referencia: `.env.example`

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CALENDLY_URL=
```

Uso atual:

- `NEXT_PUBLIC_SITE_URL` alimenta `SITE_CONFIG.url` e metadados.
- `NEXT_PUBLIC_CALENDLY_URL` alimenta `CALENDLY_URL`, mas ainda nao e usado em componente renderizado.

Riscos:

- Variaveis `NEXT_PUBLIC_*` ficam expostas no browser.
- Em producao, `NEXT_PUBLIC_SITE_URL` precisa apontar para o dominio final para metadados corretos.
- Calendly depende de URL oficial antes da implementacao final.

## Arquitetura Frontend

### Camada App Router

Arquivos:

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

Responsabilidades:

- `layout.tsx`: metadados, viewport, fontes `next/font`, skip link e estrutura HTML.
- `page.tsx`: composicao das secoes na ordem oficial.
- `globals.css`: tokens CSS, base global, reduced motion e skip link.

Fluxo atual:

```txt
RootLayout
  -> main#conteudo
    -> HeroSection
    -> ProblemSection
    -> SolutionSection
    -> WorkSection
    -> StackSection
    -> SquadsSection
    -> SocialSection
    -> ComplianceSection
    -> CTASection
  -> Footer
```

Providers:

- Nao ha provider global ativo.
- Animacoes sao aplicadas localmente.
- GSAP e carregado sob demanda via utilitario/hook.

## Paginas

### `src/app/page.tsx`

Pagina unica da landing page.

Pontos positivos:

- Composicao limpa.
- Ordem das secoes segue o Figma.
- Hero usa barrel export `@/components/sections/hero`.

Pontos de atencao:

- As 8 secoes abaixo da Hero ainda sao placeholders.
- O `Header` global existe, mas nao e usado na pagina atual.

## Sessoes

### Secao pronta

- `HeroSection`: status funcional e implementada a partir do Figma.

### Secoes placeholder

- `ProblemSection`
- `SolutionSection`
- `WorkSection`
- `StackSection`
- `SquadsSection`
- `SocialSection`
- `ComplianceSection`
- `CTASection`

Todas usam `SectionPlaceholder`, que compoe:

- `Section`
- `Container`
- `RevealOnScroll`
- `SectionTitle`

### Oportunidade

Quando cada secao real for implementada, promover para pasta propria se houver:

- assets especificos;
- listas de dados;
- subcomponentes;
- animacoes locais;
- variacoes responsivas complexas.

## Componentes

### UI Primitives

- `Button`: botao HTML com variantes `primary`, `ghost`, `ink` e tamanhos `sm`, `md`, `lg`.
- `Container`: largura maxima e padding responsivo.
- `GlassCard`: superficie glass polimorfica via `as`.
- `Section`: wrapper semantico com spacing padrao.
- `SectionTitle`: eyebrow, titulo e descricao de secao.

Ponto positivo:

- A camada UI concentra padroes recorrentes e evita duplicacao visual.

Pontos de atencao:

- `Button` nao e polimorfico; links usam `buttonClassName`.
- `GlassCard` e polimorfico, mas usa generics simples que podem exigir cuidado em props mais complexas.
- `SectionTitle` nao permite controlar o nivel do heading; hoje sempre renderiza `h2`.

### Layout

- `Header`: header global sticky com navegacao em `NAV_ITEMS`.
- `Footer`: rodape simples com `SITE_CONFIG.name`.

Ponto de atencao:

- `Header` nao esta em uso na pagina atual e sobrepoe conceitualmente `HeroNavbar`.

### Forms

- `LeadForm`: formulario client-side com React Hook Form e Zod.

Pontos positivos:

- Schema local com Zod.
- `onSubmit` externo evita acoplamento direto a endpoint.
- Reset apos submissao bem sucedida.

Pontos de atencao:

- Ainda nao esta renderizado em nenhuma secao.
- Nao possui estado visual de sucesso/erro geral.
- Nao ha integracao real com backend, CRM ou API route.

### Animations

- `FadeIn`: entrada imediata com `fadeIn`.
- `RevealOnScroll`: reveal on viewport com `revealOnScroll`.

Pontos positivos:

- Ambos respeitam `useReducedMotion`.
- Usam `HTMLMotionProps<"div">`, mantendo flexibilidade.

Pontos de atencao:

- `FadeIn` nao aparece usado no codigo atual.
- `RevealOnScroll` e usado por placeholders.

### Hero modular

Arquivos:

- `HeroSection.tsx`
- `HeroContent.tsx`
- `HeroActions.tsx`
- `HeroMetrics.tsx`
- `HeroNavbar.tsx`
- `HeroBackground.tsx`
- `hero.data.ts`
- `index.ts`

Pontos positivos:

- Separacao clara de responsabilidades.
- `hero.data.ts` centraliza nav e metricas.
- Background decorativo fica isolado.
- CTAs ficam isolados.
- Metrics usa semantica `dl`.

Pontos de atencao:

- `HeroSection`, `HeroContent` e `HeroMetrics` sao client components por causa de Framer Motion.
- Hero tem muitos valores arbitrarios Tailwind para fidelidade visual. Isso e aceitavel para a primeira secao, mas pode virar padrao dificil de manter se repetido sem extrair helpers.

## Assets

Diretorio:

```txt
public/figma/hero/
```

Assets usados pelo codigo:

- `/figma/hero/background.png`
- `/figma/hero/logo.png`
- `/figma/hero/arrow.svg`

Uso:

- `HeroBackground` usa `background.png` com `next/image`, `fill`, `priority`, `quality={82}` e `sizes="100vw"`.
- `HeroNavbar` usa `logo.png` com `priority`.
- `HeroActions` usa `arrow.svg` decorativo.

Riscos:

- `background.png` e acima da dobra, mas pode ser pesado se nao houver versao otimizada WebP/AVIF.
- `logo.png` poderia ser SVG se o Figma permitir, reduzindo peso e melhorando nitidez.
- Assets de futuras secoes precisam seguir `public/figma/{section}/`.

## Estilos Globais

Arquivo principal:

- `src/app/globals.css`

Conteudo:

- tokens `--b2b-*`;
- base CSS;
- reset leve de midia;
- `scroll-behavior: smooth`;
- `prefers-reduced-motion`;
- `.skip-link`.

Pontos positivos:

- Tokens concentrados em `:root`.
- Reduced motion global configurado.
- `skip-link` melhora acessibilidade.

Pontos de atencao:

- Tokens sao duplicados conceitualmente entre `src/data/design-system.md`, `docs/design-system/README.md`, `globals.css` e `tailwind.config.ts`. Isso e esperado, mas exige disciplina de atualizacao.
- `--b2b-section-pad-y` existe, mas o spacing real esta em `src/lib/styles.ts` com classes Tailwind.

## Tailwind

Arquivo:

- `tailwind.config.ts`

Mapeia:

- breakpoints `tablet`, `laptop`, `desktop`, `wide`;
- container centralizado;
- cores honey, ink, slate, surfaces e semanticas;
- fontes display/body/mono;
- escalas de fonte;
- spacing `b2b-*`;
- radius `b2b-*`;
- sombras `b2b-*`;
- `maxWidth.b2b-container`.

Pontos positivos:

- Forte alinhamento ao Design System.
- Breakpoints semanticos.
- Tokens CSS usados como fonte de valores.

Pontos de atencao:

- `container.screens` usa valores literais `1280px`, por limitacao ja documentada.
- Classes arbitrarias sao frequentes na Hero. Para proximas secoes, avaliar extrair padroes recorrentes para `src/lib/styles.ts`.

## Animacoes

Arquivos:

- `src/lib/motion.ts`
- `src/components/animations/FadeIn.tsx`
- `src/components/animations/RevealOnScroll.tsx`
- `src/lib/gsap.ts`
- `src/hooks/useGsapScrollTrigger.ts`

Framer Motion:

- `fadeUp`
- `staggerContainer`
- `scaleIn`
- `revealOpacity`

GSAP:

- `loadGsapScrollTrigger()` faz import dinamico no browser.
- `useGsapScrollTrigger()` chama `ScrollTrigger.refresh()`.

Pontos positivos:

- SSR-safe para GSAP.
- Variants centralizados.
- Reduced motion respeitado nos componentes client.

Pontos de atencao:

- `scaleIn` ainda nao e usado.
- `useGsapScrollTrigger` ainda nao e usado.
- `FadeIn` ainda nao e usado.
- Se todas as secoes virarem client components por animacao, o bundle pode crescer.

## Integracoes

### Figma MCP

Estado:

- Documentado em `docs/figma-mcp.md`.
- Usado no fluxo de design-to-code.
- Assets devem ser baixados para `public/figma/{section}/`.

Risco:

- Assets temporarios do Figma precisam sempre ser persistidos localmente.

### Calendly

Estado:

- `NEXT_PUBLIC_CALENDLY_URL` existe.
- `CALENDLY_URL` existe em `src/lib/constants.ts`.
- Ainda nao ha componente Calendly renderizado.

Risco:

- Integracao futura precisa definir UX, fallback, privacidade, tracking e comportamento em mobile.

### Leads

Estado:

- `LeadForm` esta preparado.
- Ainda nao ha destino real de envio.

Risco:

- Sem backend/API/CRM, o formulario nao deve ser tratado como pronto para producao.

### GitHub e Vercel

Estado:

- Documentado.
- Fluxo esperado: GitHub -> Vercel.
- Branch principal: `main`.

## Hooks

### `useGsapScrollTrigger`

Objetivo:

- Inicializar/atualizar ScrollTrigger no browser sem quebrar SSR.

Estado:

- Preparado, mas nao usado.

Oportunidade:

- Usar apenas em secoes com scroll animation real.

## Utilitarios

### `src/lib/styles.ts`

Exports:

- `cx`
- `layoutClassNames`
- `surfaceClassNames`
- `buttonClassNames`

Pontos positivos:

- Centraliza combinacoes visuais repetidas.
- Evita duplicacao em UI primitives e Hero.

Ponto de atencao:

- `cx` apenas concatena strings e nao resolve conflitos Tailwind. Como `clsx` e `tailwind-merge` estao instalados, o projeto deve decidir se remove essas dependencias ou evolui `cx` para usa-las.

### `src/lib/constants.ts`

Exports:

- `SITE_CONFIG`
- `NAV_ITEMS`
- `CALENDLY_URL`

Pontos de atencao:

- `NAV_ITEMS` alimenta `Header`, mas `Header` nao esta em uso.
- `CALENDLY_URL` ainda nao esta em uso.

### Scripts

- `scripts/new-adr.mjs`: cria ADR numerado automaticamente.
- `scripts/changelog.mjs`: adiciona entradas e fecha versoes no changelog.

Pontos positivos:

- Automacao simples e local.
- Reduz friccao para documentacao viva.

Ponto de atencao:

- O indice de ADRs ainda precisa ser atualizado manualmente.

## Providers

Nao ha providers globais ativos no estado atual.

Historicamente, a escolha atual favorece animacoes locais e carregamento sob demanda. Isso reduz acoplamento global, mas exige disciplina para nao duplicar setup em secoes futuras.

## Documentacao e Governanca

Documentacao atual:

- `docs/README.md`
- `docs/architecture.md`
- `docs/architecture/seo-performance-strategy.md`
- `docs/design-system/README.md`
- `docs/design-system/final-tokens.md`
- `docs/components/README.md`
- `docs/components/official-animation-system.md`
- `docs/animations.md`
- `docs/figma-mcp.md`
- `docs/git-github.md`
- `docs/deploy-vercel.md`
- `docs/current-state.md`
- `CHANGELOG.md`
- `docs/architecture/decisions/`

Regras Cursor:

- `pre-change-context.mdc`
- `living-documentation.mdc`
- `component-documentation.mdc`
- `architecture-decisions.mdc`
- `changelog-updates.mdc`
- `design-system-updates.mdc`
- `integration-documentation.mdc`
- `current-state-updates.mdc`

Pontos positivos:

- O projeto ja possui uma camada forte de documentacao viva.
- Regras persistentes reforcam o fluxo.

Ponto de atencao:

- Existe `docs/adr/` legado alem de `docs/architecture/decisions/`. O local canonico esta claro, mas a existencia de dois caminhos pode confundir.

## Inconsistencias Identificadas

### Alta prioridade

1. `tsconfig.tsbuildinfo` aparece como arquivo gerado alterado.
   - Impacto: ruido em commits e risco de versionar estado local.
   - Recomendacao: adicionar `tsconfig.tsbuildinfo` ao `.gitignore` se nao houver motivo explicito para versionar.

2. `Header` global existe, mas a pagina usa `HeroNavbar`.
   - Impacto: duplicidade conceitual de navegacao.
   - Recomendacao: decidir se `Header` e legado, fallback ou componente para paginas futuras. Se nao for usado, mover para backlog, documentar como opcional ou remover em etapa propria.

3. ADRs existem em dois locais.
   - Impacto: risco de documentacao divergente.
   - Recomendacao: manter `docs/architecture/decisions/` como canonico e transformar `docs/adr/` apenas em ponte, ou remover/migrar o ADR legado.

### Media prioridade

4. `clsx` e `tailwind-merge` instalados, mas nao usados.
   - Impacto: dependencias desnecessarias ou helper `cx` menos robusto.
   - Recomendacao: escolher entre remover dependencias ou atualizar `cx` para usar `clsx` + `tailwind-merge`.

5. `CALENDLY_URL`, `LeadForm`, `FadeIn`, `useGsapScrollTrigger` e `scaleIn` estao preparados, mas sem uso real.
   - Impacto: pode parecer funcionalidade pronta quando ainda e infraestrutura.
   - Recomendacao: manter documentado como "prepared" e revisar antes do deploy.

6. `SectionTitle` sempre renderiza `h2`.
   - Impacto: pode limitar hierarquia em subcomponentes futuros.
   - Recomendacao: avaliar prop controlada para nivel de heading apenas quando houver caso real.

### Baixa prioridade

7. `--b2b-section-pad-y` existe em CSS variables, mas spacing de secao usa classes em `src/lib/styles.ts`.
   - Impacto: pequeno desalinhamento conceitual.
   - Recomendacao: documentar uso ou alinhar helper ao token.

8. Exemplos em docs usam `console.log`.
   - Impacto: aceitavel em exemplo, mas pode aparecer em buscas de qualidade.
   - Recomendacao: trocar por comentario ou handler ficticio documentado, se desejado.

## Componentes Duplicados ou Sobrepostos

### Navegacao

- `Header`
- `HeroNavbar`

Nao sao duplicados em implementacao, mas sobrepoem responsabilidade de navegacao.

Recomendacao:

- Definir uma regra clara:
  - `HeroNavbar` para landing single-page visual;
  - `Header` para paginas internas/futuras;
  - ou remover `Header` se nao houver roadmap para paginas internas.

### Animacoes

- `FadeIn`
- `RevealOnScroll`
- variants em `src/lib/motion.ts`

Duplicidade anterior removida: `src/lib/animations.ts` foi eliminado e `src/lib/motion.ts` passa a ser a unica fonte de variants.

Recomendacao:

- Em novas secoes, preferir variants de `src/lib/motion.ts`.
- Manter wrappers apenas quando melhorarem legibilidade.

### Cards e superficies

- `GlassCard`
- `surfaceClassNames.solidCard`

`solidCard` existe como classe compartilhada, mas nao ha componente `SolidCard`.

Recomendacao:

- Criar `SolidCard` somente quando houver repeticao real em secoes futuras.

## Oportunidades de Reutilizacao

- Extrair padroes de CTA da Hero para helpers quando outras secoes tiverem CTAs semelhantes.
- Promover layouts recorrentes de secao para componentes, por exemplo `SectionHeaderGrid`, somente apos duas ou mais secoes reais.
- Criar componentes de badges/chips se Social, Compliance ou Stack repetirem esse padrao.
- Criar camada `src/data/{section}.data.ts` por secao real com listas, cards, metricas e copy.
- Criar helper de asset naming por convencao em docs, mantendo `public/figma/{section}/`.
- Usar `GlassCard` em metricas, depoimentos, talentos e cards de destaque.
- Reaproveitar `RevealOnScroll` para placeholders e conteudo abaixo da dobra, mas evitar transformar toda secao em client component sem necessidade.

## Melhorias Arquiteturais Recomendadas

### Curto prazo

1. Adicionar `tsconfig.tsbuildinfo` ao `.gitignore`.
2. Decidir o papel de `Header`.
3. Consolidar caminho de ADRs e limpar legado em `docs/adr/`.
4. Remover dependencias nao usadas ou evoluir `cx`.
5. Atualizar `docs/reference/project-structure.md` quando novas pastas ficarem canonicas.

### Medio prazo

1. Criar padrao para secoes reais:

```txt
src/components/sections/{section}/
  index.ts
  {Section}Section.tsx
  {Section}Content.tsx
  {Section}Background.tsx
  {Section}Card.tsx
  {section}.data.ts
```

2. Separar animacoes em wrappers pequenos para limitar client components.
3. Criar guia operacional para formulario de leads quando o destino for definido.
4. Criar componente Calendly somente apos URL e UX aprovadas.
5. Padronizar formato de assets por secao com WebP/AVIF quando possivel.

### Longo prazo

1. Avaliar self-hosting de fontes se performance/cache exigir.
2. Criar testes basicos de render para componentes criticos.
3. Criar checks de CI para `lint`, `typecheck` e `build`.
4. Automatizar atualizacao do indice de ADRs.
5. Avaliar bundle analysis antes de implementar muitas animacoes.

## Riscos Tecnicos

### Risco: crescimento de client components

Hero e animacoes usam Framer Motion. Se todas as secoes seguirem o mesmo modelo, mais codigo sera enviado ao cliente.

Mitigacao:

- Manter secoes como server components quando possivel.
- Isolar motion em subcomponentes pequenos.
- Usar CSS transitions para microinteracoes simples.

### Risco: assets pesados acima da dobra

Hero usa imagem de background com `priority`.

Mitigacao:

- Validar peso real.
- Gerar WebP/AVIF.
- Ajustar `sizes`.
- Usar blur/placeholder se fizer sentido.

### Risco: documentacao duplicada

Design System e ADRs existem em multiplas fontes relacionadas.

Mitigacao:

- Manter fonte oficial clara.
- Atualizar links e evitar copiar conteudo completo quando referencia bastar.

### Risco: funcionalidades preparadas parecerem prontas

Calendly, leads e GSAP estao preparados, mas nao finalizados.

Mitigacao:

- Manter `docs/current-state.md` atualizado.
- Marcar claramente como infraestrutura preparada.

### Risco: placeholders chegarem a producao

Oito secoes ainda sao placeholders.

Mitigacao:

- Bloquear deploy publico final enquanto placeholders existirem.
- Usar checklist de pre-deploy.

## Gargalos de Performance

- Imagem de background da Hero acima da dobra pode dominar LCP.
- Logo PNG poderia ser SVG ou imagem menor.
- Framer Motion em muitos componentes pode aumentar JS.
- GSAP esta instalado, mas deve ser carregado apenas quando necessario.
- `next/font/google` e bom por padrao, mas self-hosting pode ser avaliado depois.
- Muitas classes arbitrarias nao impactam runtime diretamente, mas podem reduzir manutencao.

## Problemas de Escalabilidade

- O catalogo de componentes foi modularizado em `docs/components/`, permitindo crescer por categoria.
- `src/components/sections/` pode ficar dificil de navegar se todas as secoes complexas crescerem sem subpastas.
- Dados estaticos de todas as secoes nao devem ficar em um unico arquivo global quando as secoes ficarem reais.
- Changelog e ADRs exigem atualizacao manual de alguns indices.
- Sem testes/CI, o risco aumenta conforme o numero de secoes cresce.

## Plano de Acao Sugerido

### Prioridade 1

- Adicionar `tsconfig.tsbuildinfo` ao `.gitignore`.
- Decidir e documentar o papel de `Header` versus `HeroNavbar`.
- Consolidar ou remover legado de `docs/adr/`.
- Validar peso e formato dos assets da Hero.

### Prioridade 2

- Implementar a proxima secao real seguindo o padrao modular.
- Criar estrategia real para leads.
- Definir UX e URL final do Calendly.
- Rever dependencias `clsx` e `tailwind-merge`.

### Prioridade 3

- Criar CI com `typecheck`, `lint` e `build`.
- Avaliar testes de componentes.
- Automatizar indice de ADRs.
- Dividir documentacao de componentes se continuar crescendo.

## Conclusao

A arquitetura atual e adequada para a fase do projeto: uma landing page grande, incremental, guiada por Figma e com forte preocupacao de Design System. A base esta preparada para crescer, mas os proximos passos devem manter disciplina em tres pontos: evitar duplicacao de padroes visuais, limitar client components/animacoes ao necessario e manter documentacao viva sincronizada com cada nova secao implementada.
