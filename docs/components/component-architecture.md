# Component Architecture

Status: `Oficial`

Data: 2026-05-26

## Objetivo

Este documento padroniza a arquitetura de componentes do projeto Best2bee Site. Ele define a estrategia de Atomic Design, componentes base, UI compartilhada, section components, layout components, animation wrappers, naming conventions, folder conventions, props patterns, composition patterns, boundaries e oportunidades de reorganizacao.

Este documento complementa:

- `docs/architecture/final-architecture.md`
- `docs/components/README.md`
- `docs/design-system/README.md`
- `docs/design-system/tokenization-plan.md`

## Principios

1. Componentes devem ter responsabilidade unica.
2. Server Components por padrao.
3. Client Components apenas para interatividade, forms, browser APIs ou motion real.
4. UI shared nao conhece dominio de secao.
5. Section components compoem UI, dados, assets e animacoes.
6. Dados repetidos saem do JSX para `*.data.ts`.
7. Props devem ser pequenas, explicitas e previsiveis.
8. Abstracao nasce de repeticao real, nao de antecipacao.
9. Design System governa estilos reutilizaveis.
10. Documentacao acompanha cada componente reutilizavel novo.

## Atomic Design Strategy

O projeto usa Atomic Design de forma pragmatica, adaptada a landing pages em Next.js.

```txt
Atoms
  -> primitives visuais sem dominio

Molecules
  -> composicoes pequenas e reutilizaveis

Organisms
  -> blocos maiores reutilizaveis ou especificos de secao

Templates
  -> estrutura de secao/pagina

Pages
  -> composicao App Router
```

## Mapeamento Atomic Design

### Atoms

Componentes pequenos, sem conhecimento de dominio.

Atual:

- `Button`
- `Container`

Permitidos futuramente:

- `Badge`
- `Chip`
- `IconTile`
- `VisuallyHidden`

Regras:

- nao importam dados de secao;
- nao importam assets especificos;
- nao acessam env vars;
- devem usar tokens do Design System.

### Molecules

Composicoes pequenas que combinam atoms ou aplicam padroes visuais recorrentes.

Atual:

- `GlassCard`
- `SectionTitle`
- `FadeIn`
- `RevealOnScroll`

Permitidos futuramente:

- `MetricCard`
- `StatGroup`
- `AvatarStack`
- `FormField`
- `SectionEyebrow`

Regras:

- podem receber conteudo por props ou `children`;
- nao devem carregar copy fixa de marketing;
- devem ser reutilizaveis em mais de uma secao.

### Organisms

Blocos maiores com responsabilidade de uma area visual.

Atual:

- `Header`
- `Footer`
- `LeadForm`
- `HeroNavbar`
- `HeroMetrics`

Permitidos futuramente:

- `CalendlyEmbed`
- `TestimonialGrid`
- `TalentCardGrid`
- `ComplianceBadgeGroup`

Regras:

- podem ser especificos de secao quando estiverem dentro de `sections/{section}`;
- se forem compartilhados, devem ir para `components/ui`, `components/forms`, `components/layout` ou `components/integrations`.

### Templates

Estruturas de secao ou pagina.

Atual:

- `Section`
- `SectionPlaceholder`
- `HeroSection`

Permitidos futuramente:

- `SectionShell`
- `SectionGrid`
- `SplitSection`

Regras:

- devem compor atoms, molecules e organisms;
- devem manter semantica HTML;
- devem controlar spacing estrutural, nao conteudo de negocio.

### Pages

Composicao final no App Router.

Atual:

- `src/app/page.tsx`
- `src/app/layout.tsx`

Regras:

- pages nao implementam UI detalhada;
- pages ordenam secoes;
- pages permanecem Server Components sempre que possivel.

## Componentes Base

Componentes base oficiais atuais:

```txt
src/components/ui/Button.tsx
src/components/ui/Container.tsx
src/components/ui/GlassCard.tsx
src/components/ui/Section.tsx
src/components/ui/SectionTitle.tsx
```

## Shared UI

Pasta:

```txt
src/components/ui/
```

Responsabilidade:

- primitives e molecules reutilizaveis;
- padroes visuais do Design System;
- componentes sem dependencia de dominio.

Pode importar:

- `src/lib/styles`;
- tipos React;
- tokens via classes Tailwind/CSS variables.

Nao pode importar:

- `src/components/sections`;
- `src/data/sections`;
- assets especificos de Figma;
- env vars;
- services de integracao.

## Section Components

Pasta:

```txt
src/components/sections/
```

Responsabilidade:

- representar blocos da landing;
- compor shared UI;
- aplicar copy, dados, assets e variacoes de layout;
- manter semantica da jornada da pagina.

## Padrao de Secao Simples

Use arquivo unico quando for placeholder ou baixa complexidade:

```txt
src/components/sections/ProblemSection.tsx
```

## Padrao de Secao Complexa

Use pasta propria quando houver assets, dados, subcomponentes ou animacoes:

```txt
src/components/sections/problem/
  index.ts
  ProblemSection.tsx
  ProblemContent.tsx
  ProblemBackground.tsx
  ProblemCard.tsx
  problem.data.ts
```

Arquivos opcionais:

```txt
ProblemActions.tsx
ProblemMetrics.tsx
ProblemReveal.client.tsx
useProblemAnimation.ts
```

## Layout Components

Pasta:

```txt
src/components/layout/
```

Responsabilidade:

- estruturas globais ou reutilizaveis entre paginas;
- elementos fora do fluxo interno de uma unica secao.

Atual:

- `Header`
- `Footer`

Regra definitiva:

- `HeroNavbar` pertence a Hero, nao a `layout`.
- `Header` fica reservado para paginas internas futuras.
- Nao renderizar `Header` e `HeroNavbar` juntos na landing principal sem ADR/decisao de UX.

## Animation Wrappers

Pasta:

```txt
src/components/animations/
```

Atual:

- `FadeIn`
- `RevealOnScroll`

Responsabilidade:

- concentrar wrappers client de animacao;
- manter reduced motion;
- esconder detalhes de Framer Motion quando reutilizavel.

Padrao futuro:

```txt
src/components/animations/
  RevealOnScroll.tsx
  FadeIn.tsx
  StaggerGroup.client.tsx
  AnimatedBlock.client.tsx
```

Regras:

- wrappers com Framer Motion devem ser client components;
- nao envolver uma secao inteira se apenas um bloco precisa animar;
- variants ficam em `src/lib/motion.ts`;
- GSAP fica em `src/lib/gsap.ts` e hooks dedicados.

## Naming Conventions

### Componentes

```txt
PascalCase.tsx
```

Exemplos:

```txt
Button.tsx
GlassCard.tsx
HeroSection.tsx
ProblemCard.tsx
```

### Client Components

```txt
Component.client.tsx
```

Use quando o arquivo precisa declarar `"use client"` por estado, efeitos, Framer Motion, GSAP ou browser API.

### Dados

```txt
{domain}.data.ts
```

Exemplos:

```txt
hero.data.ts
problem.data.ts
navigation.data.ts
```

### Hooks

```txt
useThing.ts
```

Hooks locais podem ficar dentro da secao ate haver reutilizacao.

### Services

```txt
verbNoun.ts
```

Exemplos:

```txt
submitLead.ts
loadCalendly.ts
```

### Props Types

Use:

```txt
ComponentNameProps
```

Exemplo:

```ts
type SectionPlaceholderProps = {
  section: LandingSection;
  withBorder?: boolean;
};
```

## Folder Conventions

## Estrutura Oficial

```txt
src/components/
  animations/
  forms/
  integrations/
  layout/
  sections/
  ui/
```

## Regras

- `ui`: componentes sem dominio.
- `layout`: estruturas globais.
- `sections`: blocos da landing.
- `forms`: componentes de formulario.
- `animations`: wrappers client de motion.
- `integrations`: UI de servicos externos.

## Regras de Import

Alias para camadas externas:

```ts
import { Button } from "@/components/ui/Button";
```

Import relativo dentro da mesma secao:

```ts
import { HeroContent } from "./HeroContent";
```

Evitar barrel global:

```txt
src/components/index.ts
```

Permitido:

```txt
src/components/sections/hero/index.ts
```

## Props Patterns

## Props Pequenas e Claras

Prefira:

```ts
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost" | "ink";
};
```

Evite:

```ts
type Props = {
  config: Record<string, unknown>;
};
```

## HTML Props

Componentes primitives podem herdar props HTML:

```ts
type ContainerProps = ComponentPropsWithoutRef<"div">;
```

Use quando:

- o componente representa claramente um elemento HTML;
- extensibilidade faz sentido;
- nao abre contrato visual ambiguo.

## Polimorfismo

Permitido com criterio:

```ts
type GlassCardProps<TElement extends ElementType = "div"> = {
  as?: TElement;
} & ComponentPropsWithoutRef<TElement>;
```

Use quando semantica HTML varia de forma real, como `div`, `article`, `dl`.

Evite polimorfismo em componentes que precisam de comportamento proprio complexo.

## Booleans

Booleans devem ser claros:

```ts
withBorder?: boolean;
```

Evitar:

```ts
active?: boolean;
special?: boolean;
mode?: boolean;
```

## Variants

Use unions para variantes visuais:

```ts
type ButtonVariant = "primary" | "ghost" | "ink";
```

Nao usar string solta para variante visual.

## Children

Use `children` quando o componente representa composicao:

```tsx
<GlassCard>
  <Metric />
</GlassCard>
```

Use props explicitas quando o componente tem estrutura fixa:

```tsx
<SectionTitle title="Problem" description="..." />
```

## Composition Patterns

## Page Composition

`src/app/page.tsx` deve apenas ordenar secoes:

```tsx
<main id="conteudo">
  <HeroSection />
  <ProblemSection />
  <SolutionSection />
</main>
```

## Section Composition

Secao complexa compoe subcomponentes:

```tsx
export function ProblemSection() {
  return (
    <Section id="problem" aria-labelledby="problem-title">
      <Container>
        <ProblemContent />
      </Container>
    </Section>
  );
}
```

## Data Composition

Listas devem vir de `*.data.ts`:

```tsx
{problemCards.map((card) => (
  <ProblemCard key={card.title} {...card} />
))}
```

## Animation Composition

Padrao recomendado:

```tsx
<AnimatedBlock>
  <SectionTitle title="Problem" />
</AnimatedBlock>
```

Evitar:

```tsx
"use client";

export function EntireSection() {
  return <motion.section>...</motion.section>;
}
```

## Component Boundaries

### UI Component Boundary

Pode:

- aplicar tokens;
- expor variantes;
- aceitar `className`;
- herdar props HTML quando seguro.

Nao pode:

- conter copy de secao;
- importar dados;
- conhecer Figma assets.

### Section Component Boundary

Pode:

- conter copy;
- usar assets;
- importar dados locais;
- compor UI shared;
- orquestrar layout.

Nao pode:

- chamar endpoints diretamente;
- conter service externo;
- criar tokens globais inline sem documentar.

### Form Boundary

Pode:

- controlar estado;
- validar;
- emitir submit via prop/service.

Nao pode:

- hardcodar URL de envio;
- conhecer CRM diretamente;
- esconder falha de envio.

### Integration Boundary

Pode:

- encapsular script/embed/link externo;
- tratar fallback;
- ler config segura.

Nao pode:

- misturar multiplas integracoes;
- carregar script externo acima da dobra sem necessidade.

## Inconsistencias Identificadas

### 1. `docs/components.md` estava monolitico

Impacto:

- dificultava adicionar documentos especificos de arquitetura de componentes.

Padrao adotado:

```txt
docs/components/
  README.md
  component-architecture.md
```

### 2. `Header` e `HeroNavbar` sobrepoem navegacao

Impacto:

- risco de duplicidade visual e links divergentes.

Padrao definitivo:

- `HeroNavbar` e especifico da Hero.
- `Header` e reservado para paginas internas futuras.

### 3. Hero usa client components amplos

Impacto:

- aumenta JS e hydration.

Padrao definitivo:

- novas secoes devem ser server-first;
- motion isolado em wrappers client.

### 4. Placeholders usam `RevealOnScroll`

Impacto:

- placeholders trazem Framer Motion para secoes nao finais.

Padrao definitivo:

- aceitavel no desenvolvimento;
- remover ou substituir antes de release publica.

### 5. `Button` nao e polimorfico, mas links usam `buttonClassName`

Impacto:

- existe um padrao separado para links com aparencia de botao.

Padrao definitivo:

- manter `Button` para `<button>`;
- manter `buttonClassName` para `<a>`;
- nao criar polimorfismo sem necessidade real.

### 6. `SectionTitle` sempre renderiza `h2`

Impacto:

- bom para secoes principais, limitado para sub-blocos.

Padrao definitivo:

- manter simples agora;
- adicionar `titleAs` apenas quando houver caso real.

## Proposta de Reorganizacao

### Fase 1 - Documentacao

Concluida neste documento:

```txt
docs/components/
  README.md
  component-architecture.md
```

### Fase 2 - Proxima secao real

Aplicar arquitetura em `ProblemSection`:

```txt
src/components/sections/problem/
  index.ts
  ProblemSection.tsx
  ProblemContent.tsx
  ProblemCard.tsx
  ProblemBackground.tsx
  problem.data.ts
```

### Fase 3 - Shared UI por repeticao

Criar novos shared components apenas se aparecerem em pelo menos duas secoes:

- `MetricCard`
- `Badge`
- `Chip`
- `IconTile`
- `SectionHeaderGrid`

### Fase 4 - Animation boundary

Criar wrapper client pequeno:

```txt
src/components/animations/AnimatedBlock.client.tsx
```

Usar em secoes novas em vez de transformar a secao inteira em client component.

### Fase 5 - Forms e Integrations

Quando leads/Calendly forem reais:

```txt
src/components/forms/FormField.tsx
src/components/integrations/CalendlyLink.tsx
src/lib/leads/
src/lib/calendly.ts
```

## Sistema Reutilizavel Escalavel

## Fluxo para Criar Novo Componente

1. Verificar se ja existe componente equivalente.
2. Verificar se e atom, molecule, organism, template ou section.
3. Definir se e server ou client.
4. Definir pasta correta.
5. Definir props pequenas.
6. Usar tokens do Design System.
7. Evitar abstracao prematura.
8. Documentar em `docs/components/README.md`.
9. Atualizar `component-architecture.md` se criar novo padrao.
10. Registrar ADR se mudar arquitetura.

## Decision Tree

```txt
E uma pagina/rota?
  -> src/app

E uma secao da landing?
  -> src/components/sections

E visual reutilizavel sem dominio?
  -> src/components/ui

E estrutura global de pagina?
  -> src/components/layout

E formulario?
  -> src/components/forms

E wrapper de animacao?
  -> src/components/animations

E UI de servico externo?
  -> src/components/integrations

E helper/service/schema?
  -> src/lib

E hook compartilhado?
  -> src/hooks
```

## Checklist de Revisao de Componentes

- [ ] O componente tem uma responsabilidade unica?
- [ ] Esta na pasta correta?
- [ ] Pode ser Server Component?
- [ ] Se e Client Component, o motivo e claro?
- [ ] Usa tokens do Design System?
- [ ] Evita hardcoded repetido?
- [ ] Props sao pequenas e tipadas?
- [ ] Nome e descritivo?
- [ ] Acessibilidade foi considerada?
- [ ] Performance foi considerada?
- [ ] Documentacao foi atualizada?

## Padroes Definitivos

1. Atomic Design pragmatica, nao dogmatica.
2. `ui` e shared e sem dominio.
3. `sections` contem dominio da landing.
4. `layout` e global ou multi-page.
5. `animations` encapsula wrappers client.
6. `forms` encapsula UI e estado de formulario.
7. `integrations` encapsula UI externa.
8. `lib` encapsula logica sem UI.
9. Server Components por padrao.
10. Client Components precisam de justificativa clara.

## Conclusao

A arquitetura de componentes do projeto deve crescer por composicao, nao por heranca ou abstracoes prematuras. Novas secoes devem reutilizar UI primitives existentes, criar subcomponentes locais primeiro e promover componentes para shared UI somente quando houver repeticao real.

Este documento passa a ser a referencia oficial para organizacao e evolucao de componentes.
