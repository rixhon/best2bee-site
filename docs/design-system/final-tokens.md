# Final Design Tokens

Status: `Oficial`

Data: 2026-05-26

## Objetivo

Este documento consolida oficialmente o sistema de Design Tokens do projeto Best2bee Site. Ele define spacing tokens, typography scale, radius, shadows, z-index, containers, colors, transitions, animation timing, responsive tokens, regras para eliminar valores arbitrarios, tokens reutilizaveis, arquitetura escalavel, CSS variables globais e alinhamento com o Design System.

Este documento complementa:

- `src/data/design-system.md`
- `docs/design-system/README.md`
- `docs/design-system/tokenization-plan.md`
- `src/app/globals.css`
- `tailwind.config.ts`

## Principios

1. CSS variables `--b2b-*` sao a fonte aplicada dos tokens.
2. Tailwind mapeia tokens, nao substitui a fonte de verdade.
3. Tokens globais precisam representar padroes reutilizaveis.
4. Tokens de componente preservam fidelidade ao Figma sem poluir a escala global.
5. Valores arbitrarios nao devem ser permanentes.
6. Valores locais sao permitidos apenas quando sao pontuais e documentados.
7. Repeticao em duas ou mais secoes exige token, helper ou componente.
8. Mudanca de token exige revisar Design System, componentes afetados e responsividade.

## Arquitetura Oficial de Tokens

```txt
Foundation tokens
  -> color, type, spacing, radius, shadow, motion, z-index, breakpoints

Semantic tokens
  -> background, foreground, muted, border, primary, success, danger, info

Component tokens
  -> hero, button, section-title, nav, metric-card

Utility mappings
  -> tailwind.config.ts

Local values
  -> ajustes Figma temporarios, com plano de promocao ou remocao
```

## Fonte de Verdade

## Conceitual

```txt
src/data/design-system.md
```

Contem a leitura original do Design System aprovado.

## Aplicada

```txt
src/app/globals.css
```

Contem CSS variables realmente usadas pelo projeto.

## Utilitaria

```txt
tailwind.config.ts
```

Mapeia tokens para classes Tailwind.

## Documental

```txt
docs/design-system/README.md
docs/design-system/final-tokens.md
docs/design-system/tokenization-plan.md
```

Explica regras, usos e evolucao.

## Naming Convention

Padrao:

```txt
--b2b-{category}-{property}-{modifier}
```

Exemplos:

```txt
--b2b-space-6
--b2b-fs-display-xl
--b2b-shadow-card
--b2b-z-nav
--b2b-hero-title-fluid
--b2b-button-md-pad-x
```

Regras:

- prefixo obrigatorio: `--b2b-`;
- nomes sem abreviacoes obscuras;
- tokens globais usam dominio generico;
- tokens de componente usam prefixo do componente;
- nao criar token com nome baseado apenas no valor, como `--b2b-18px`.

## Colors

## Brand Honey

Tokens oficiais:

```css
--b2b-honey-300: #FFD24D;
--b2b-honey-400: #FFB900;
--b2b-honey-500: #FE9A00;
--b2b-honey-600: #E17100;
```

Uso:

- CTAs;
- highlights;
- eyebrows;
- indicadores;
- detalhes decorativos.

Regra:

- Honey nao deve ser usado como background amplo de secao.

## Ink and Slate

Tokens oficiais:

```css
--b2b-ink-900: #020618;
--b2b-slate-700: #314158;
--b2b-slate-600: #45556C;
--b2b-slate-500: #64748B;
--b2b-slate-400: #94A3B8;
--b2b-slate-300: #CBD5E1;
--b2b-slate-200: #E2E8F0;
--b2b-slate-100: #EAF2F8;
--b2b-slate-50: #F8FAFC;
```

Uso:

- headings;
- body text;
- muted text;
- borders;
- cool surfaces.

## Surfaces

Tokens oficiais:

```css
--b2b-bg-base: #FFFFFF;
--b2b-bg-soft: #F8FAFC;
--b2b-bg-cool: #EEF4FA;
--b2b-bg-cool-2: #EAF2F8;
--b2b-bg-warm: #FDF6EE;
```

Uso:

- background base;
- secoes alternadas;
- blocos cool/warm.

## Feedback

Tokens oficiais:

```css
--b2b-danger-500: #FF6467;
--b2b-info-500: #3B82F6;
--b2b-success-500: #16A34A;
--b2b-success-bg: #E8F6EE;
```

Uso:

- estados;
- badges;
- compliance;
- mensagens futuras de formulario.

## Semantic Color Mapping

Mapeamento Tailwind atual:

```txt
background -> --b2b-bg-base
foreground -> --b2b-ink-900
muted -> --b2b-slate-600
border -> --b2b-slate-200
primary -> --b2b-honey-500
```

Regra:

- componentes devem preferir nomes semanticos quando o contexto for generico;
- usar escalas (`honey-500`, `slate-600`) quando houver intencao visual especifica.

## Typography Scale

## Font Families

Tokens oficiais:

```css
--b2b-font-display: var(--font-space-grotesk), system-ui, sans-serif;
--b2b-font-body: var(--font-inter), system-ui, sans-serif;
--b2b-font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
```

Uso:

```txt
display -> headings e Hero
body    -> texto e UI
mono    -> eyebrows, labels e metricas tecnicas
```

## Font Size Tokens

Tokens oficiais:

```css
--b2b-fs-display-xl: 88px;
--b2b-fs-display-l: 52px;
--b2b-fs-display-m: 37.6px;
--b2b-fs-heading: 27.2px;
--b2b-fs-subheading: 24px;
--b2b-fs-body-xl: 22px;
--b2b-fs-body-l: 19.2px;
--b2b-fs-body: 16px;
--b2b-fs-body-sm: 15.68px;
--b2b-fs-meta: 14px;
--b2b-fs-eyebrow: 13px;
--b2b-fs-caption: 11px;
```

## Line Height Tokens

Tokens oficiais:

```css
--b2b-lh-tight: 1.02;
--b2b-lh-snug: 1.10;
--b2b-lh-normal: 1.55;
--b2b-lh-loose: 1.70;
```

## Tracking Tokens

Tokens oficiais:

```css
--b2b-tracking-display: -0.045em;
--b2b-tracking-h2: -0.04em;
--b2b-tracking-h3: -0.03em;
--b2b-tracking-eyebrow: 0.22em;
```

## Responsive Type Tokens

Tokens oficiais recomendados:

```css
--b2b-fluid-section-title: clamp(32px, 4.4vw, var(--b2b-fs-display-l));
--b2b-fluid-section-lede: clamp(16px, 1.6vw, var(--b2b-fs-body-l));
```

Uso:

- `SectionTitle`;
- headings de secoes abaixo da Hero;
- ledes de secao.

Regra:

- `clamp()` usado em mais de uma secao deve virar token fluido.

## Spacing Tokens

Escala oficial baseada em 4pt:

```css
--b2b-space-1: 4px;
--b2b-space-2: 8px;
--b2b-space-3: 12px;
--b2b-space-4: 16px;
--b2b-space-5: 24px;
--b2b-space-6: 32px;
--b2b-space-7: 48px;
--b2b-space-8: 64px;
--b2b-space-9: 80px;
--b2b-space-10: 96px;
--b2b-space-11: 128px;
--b2b-space-12: 160px;
```

## Fine Spacing Tokens

Tokens oficiais recomendados para eliminar arbitrarios recorrentes do Figma:

```css
--b2b-space-2-5: 10px;
--b2b-space-3-5: 14px;
--b2b-space-4-5: 18px;
```

Justificativa:

- `10px` aparece em gaps, button gap e scroll indicator.
- `14px` aparece em nav item e offset de SectionTitle.
- `18px` aparece em spacing fino da Hero e botoes.

Regra:

- fine spacing deve ser limitado. Nao criar `--b2b-space-*` para todo valor do Figma.

## Section Spacing

Token atual:

```css
--b2b-section-pad-y: 120px;
```

Padrao aplicado:

```txt
py-b2b-8 tablet:py-b2b-9 laptop:py-b2b-10
```

Decisao:

- manter utility responsiva como padrao atual;
- usar `--b2b-section-pad-y` apenas quando houver necessidade de valor unico;
- futuras secoes devem usar `Section` e `layoutClassNames.sectionSpacing`.

## Radius

Tokens oficiais:

```css
--b2b-radius-xs: 8px;
--b2b-radius-sm: 12px;
--b2b-radius-md: 14px;
--b2b-radius-lg: 20px;
--b2b-radius-xl: 28px;
--b2b-radius-2xl: 36px;
--b2b-radius-pill: 9999px;
```

Uso:

```txt
xs      -> detalhes pequenos
sm      -> inputs, skip link
md      -> icon tiles
lg      -> cards densos
xl      -> glass cards
2xl     -> containers grandes
pill    -> botoes, chips, navbar
```

Decisao:

- radius esta completo para o estado atual;
- nao criar novo radius sem repeticao real.

## Shadows

Tokens oficiais:

```css
--b2b-shadow-card: 0 8px 24px rgba(15,23,42,.05), 0 26px 70px rgba(148,163,184,.14);
--b2b-shadow-card-sm: 0 4px 12px rgba(15,23,42,.04), 0 12px 36px rgba(148,163,184,.12);
--b2b-shadow-button: 0 10px 30px rgba(15,23,42,.18);
--b2b-shadow-menu: 0 10px 40px rgba(148,163,184,.16);
--b2b-shadow-pill: 0 4px 14px rgba(15,23,42,.06);
```

Token oficial recomendado:

```css
--b2b-shadow-button-hover: 0 14px 36px rgba(225,113,0,.35), 0 8px 18px rgba(15,23,42,.16);
```

Regra:

- sombras globais devem ser nomeadas pelo papel visual, nao pelo valor.
- shadows arbitrarias em hover devem virar token se usadas por UI shared.

## Z-index

Tokens oficiais:

```css
--b2b-z-base: 0;
--b2b-z-decor: 1;
--b2b-z-content: 10;
--b2b-z-nav: 100;
--b2b-z-overlay: 1000;
```

Uso:

```txt
base     -> fluxo normal
decor    -> backgrounds decorativos
content  -> conteudo acima de decoracao
nav      -> navegacao fixa/absoluta
overlay  -> modais/embeds/popups futuros
```

Mapeamento Tailwind recomendado:

```ts
zIndex: {
  "b2b-base": "var(--b2b-z-base)",
  "b2b-decor": "var(--b2b-z-decor)",
  "b2b-content": "var(--b2b-z-content)",
  "b2b-nav": "var(--b2b-z-nav)",
  "b2b-overlay": "var(--b2b-z-overlay)",
}
```

Regra:

- evitar `z-10`, `z-20`, `z-50` em componentes novos;
- usar tokens semanticos.

## Containers

Tokens oficiais:

```css
--b2b-container-max: 1280px;
--b2b-container-pad-m: 20px;
--b2b-container-pad-t: 48px;
--b2b-container-pad-d: 80px;
```

Token oficial recomendado:

```css
--b2b-container-pad-l: 64px;
```

Justificativa:

- `tailwind.config.ts` e `src/lib/styles.ts` ainda usam `64px` literal no laptop.

Regra:

- toda largura/padding global de container deve passar por `Container`.
- nao criar container local por secao sem justificativa.

## Responsive Tokens

Breakpoints oficiais:

```txt
tablet:  768px
laptop:  1024px
desktop: 1280px
wide:    1560px
```

CSS variables recomendadas para documentacao e calculos futuros:

```css
--b2b-breakpoint-tablet: 768px;
--b2b-breakpoint-laptop: 1024px;
--b2b-breakpoint-desktop: 1280px;
--b2b-breakpoint-wide: 1560px;
```

Decisao:

- Tailwind continua sendo a fonte operacional dos breakpoints.
- CSS variables de breakpoint sao documentais/auxiliares, nao substituem `screens`.

## Transitions

Tokens oficiais:

```css
--b2b-ease-out: cubic-bezier(.2,.7,.2,1);
--b2b-ease-in-out: cubic-bezier(.65,.05,.36,1);
--b2b-dur-fast: 150ms;
--b2b-dur-base: 260ms;
--b2b-dur-slow: 520ms;
```

Uso:

```txt
fast -> hover, active, color, nav links
base -> cards, surfaces, small transforms
slow -> entrance, reveal, large fades
```

Regra:

- transitions de UI devem usar `--b2b-dur-*` e `--b2b-ease-*`.
- nao criar duration arbitraria por componente sem documentar.

## Animation Timing

Tokens oficiais recomendados:

```css
--b2b-dur-stagger-fast: 80ms;
--b2b-dur-delay-base: 120ms;
```

Contrato atual em TS:

```txt
src/lib/motion.ts
motionEaseOut = [0.2, 0.7, 0.2, 1]
fadeUp duration = 0.52
staggerChildren = 0.08
delayChildren = 0.12
```

Decisao:

- CSS variables governam tokens visuais.
- `src/lib/motion.ts` pode manter espelho numerico quando a biblioteca exigir number.
- o valor TS deve ser documentado como equivalente ao token CSS.

## Effects and Glass

Tokens oficiais:

```css
--b2b-glass-strong: linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.52));
--b2b-glass-medium: linear-gradient(180deg, rgba(255,255,255,.74), rgba(255,255,255,.42));
--b2b-glass-soft: linear-gradient(180deg, rgba(255,255,255,.45), rgba(255,255,255,.22));
--b2b-glass-border: 1px solid rgba(255,255,255,.55);
```

Token oficial recomendado:

```css
--b2b-blur-glass: 10px;
```

Regra:

- glassmorphism deve ser aplicado por `GlassCard` ou helper compartilhado.
- `backdrop-blur-[10px]` deve migrar para token.

## Component Tokens

## Hero Tokens

Tokens de componente recomendados:

```css
--b2b-hero-min-h-mobile: 720px;
--b2b-hero-min-h-tablet: 780px;
--b2b-hero-min-h-desktop: 900px;
--b2b-hero-min-h-wide: 960px;

--b2b-hero-pt-mobile: 148px;
--b2b-hero-pt-tablet: 180px;
--b2b-hero-pt-laptop: clamp(218px, 23.5vw, 302px);

--b2b-hero-content-max: 1280px;
--b2b-hero-title-max: 1290px;
--b2b-hero-lede-max: 766px;
--b2b-hero-metrics-max: 829px;

--b2b-hero-title-fluid: clamp(42px, 7vw, 64px);
--b2b-hero-title-fluid-lg: clamp(56px, 5.6vw, var(--b2b-fs-display-xl));
--b2b-hero-title-lh: .99;
--b2b-hero-lede-fluid: clamp(16px, 1.41vw, var(--b2b-fs-body-xl));
--b2b-hero-title-to-lede: 18px;
--b2b-hero-lede-to-actions: clamp(56px, 6.8vw, 96px);
--b2b-hero-metrics-overlap: -34px;

--b2b-hero-nav-top: 28px;
--b2b-hero-nav-h: clamp(50px, 4.22vw, 66px);
--b2b-hero-nav-w: min(1280px, calc(100vw - clamp(40px, 16vw, 250px)));
--b2b-hero-nav-pad-x: clamp(18px, 1.66vw, 26px);
--b2b-hero-logo-w: clamp(154px, 16.7vw, 261px);

--b2b-hero-action-h: clamp(38px, 3.08vw, 48px);
--b2b-hero-action-primary-w: clamp(164px, 12.58vw, 196px);
--b2b-hero-action-secondary-w: clamp(118px, 9.5vw, 148px);
--b2b-hero-action-text: clamp(13px, .9vw, 14px);

--b2b-hero-metrics-w-laptop: 53.1vw;
--b2b-hero-metrics-pad-x: clamp(28px, 3.26vw, 51px);
--b2b-hero-metrics-pad-y: clamp(18px, 1.6vw, 25px);
--b2b-hero-metric-label: clamp(9px, .7vw, 11px);
--b2b-hero-metric-value: clamp(25px, 2.25vw, 35.2px);
--b2b-hero-metric-body: clamp(13px, 1vw, var(--b2b-fs-body-sm));
```

Regra:

- Hero tokens devem permanecer component tokens.
- Nao promover `--b2b-hero-*` para global sem repeticao em outra secao.

## Button Tokens

Tokens de componente recomendados:

```css
--b2b-button-sm-pad-x: 18px;
--b2b-button-sm-pad-y: 10px;
--b2b-button-sm-text: 13.5px;
--b2b-button-md-pad-x: 26px;
--b2b-button-md-pad-y: 14px;
--b2b-button-md-text: 15px;
--b2b-button-lg-pad-x: 32px;
--b2b-button-lg-pad-y: 18px;
--b2b-button-lg-text: var(--b2b-fs-body);
--b2b-button-gap: 10px;
```

Regra:

- Button e UI shared; seus valores nao devem permanecer como arbitrary classes.

## SectionTitle Tokens

Tokens recomendados:

```css
--b2b-section-title-offset: 14px;
--b2b-section-title-fluid: var(--b2b-fluid-section-title);
--b2b-section-lede-fluid: var(--b2b-fluid-section-lede);
```

Regra:

- SectionTitle sera usado por varias secoes, entao seus `clamp()` devem virar tokens globais ou de componente.

## Eliminacao de Valores Arbitrarios

## Politica Oficial

Valores arbitrarios sao permitidos apenas como etapa temporaria de Figma-to-code. Eles devem ser classificados em ate uma das categorias:

```txt
Promover para token global
Promover para token de componente
Trocar por token existente
Manter local com justificativa
Remover por nao ser necessario
```

## Arbitrarios que Devem Virar Tokens Globais

```txt
10px     -> --b2b-space-2-5
14px     -> --b2b-space-3-5
18px     -> --b2b-space-4-5
64px     -> --b2b-container-pad-l
10px blur -> --b2b-blur-glass
button hover shadow -> --b2b-shadow-button-hover
section title clamp -> --b2b-fluid-section-title
section lede clamp  -> --b2b-fluid-section-lede
stagger/delay       -> --b2b-dur-stagger-fast / --b2b-dur-delay-base
```

## Arbitrarios que Devem Virar Tokens de Componente

```txt
Hero min-height values
Hero top paddings
Hero title clamps
Hero max-width values
Hero metrics sizes
Hero nav dimensions
Hero CTA dimensions
Hero scroll indicator dimensions
Button paddings and font sizes
```

## Arbitrarios que Podem Permanecer Locais por Enquanto

```txt
complex decorative gradients
single-use radial positions
Hero metrics negative overlap until visual refactor
image scale values tied to background art
```

Regra:

- valores locais devem ser revisitados quando a segunda secao real for implementada.

## CSS Variables Globais Propostas

Bloco recomendado para futura implementacao em `src/app/globals.css`:

```css
:root {
  /* Responsive type */
  --b2b-fluid-section-title: clamp(32px, 4.4vw, var(--b2b-fs-display-l));
  --b2b-fluid-section-lede: clamp(16px, 1.6vw, var(--b2b-fs-body-l));

  /* Fine spacing */
  --b2b-space-2-5: 10px;
  --b2b-space-3-5: 14px;
  --b2b-space-4-5: 18px;

  /* Container */
  --b2b-container-pad-l: 64px;

  /* Interaction */
  --b2b-shadow-button-hover: 0 14px 36px rgba(225,113,0,.35), 0 8px 18px rgba(15,23,42,.16);

  /* Motion */
  --b2b-dur-stagger-fast: 80ms;
  --b2b-dur-delay-base: 120ms;

  /* Effects */
  --b2b-blur-glass: 10px;

  /* Responsive reference */
  --b2b-breakpoint-tablet: 768px;
  --b2b-breakpoint-laptop: 1024px;
  --b2b-breakpoint-desktop: 1280px;
  --b2b-breakpoint-wide: 1560px;
}
```

Bloco recomendado para tokens da Hero:

```css
:root {
  --b2b-hero-min-h-mobile: 720px;
  --b2b-hero-min-h-tablet: 780px;
  --b2b-hero-min-h-desktop: 900px;
  --b2b-hero-min-h-wide: 960px;
  --b2b-hero-pt-mobile: 148px;
  --b2b-hero-pt-tablet: 180px;
  --b2b-hero-pt-laptop: clamp(218px, 23.5vw, 302px);
  --b2b-hero-title-fluid: clamp(42px, 7vw, 64px);
  --b2b-hero-title-fluid-lg: clamp(56px, 5.6vw, var(--b2b-fs-display-xl));
  --b2b-hero-lede-fluid: clamp(16px, 1.41vw, var(--b2b-fs-body-xl));
  --b2b-hero-title-lh: .99;
  --b2b-hero-title-max: 1290px;
  --b2b-hero-lede-max: 766px;
  --b2b-hero-metrics-max: 829px;
  --b2b-hero-nav-top: 28px;
  --b2b-hero-nav-h: clamp(50px, 4.22vw, 66px);
  --b2b-hero-nav-w: min(1280px, calc(100vw - clamp(40px, 16vw, 250px)));
  --b2b-hero-logo-w: clamp(154px, 16.7vw, 261px);
}
```

## Tailwind Mapping Proposto

```ts
extend: {
  spacing: {
    "b2b-2-5": "var(--b2b-space-2-5)",
    "b2b-3-5": "var(--b2b-space-3-5)",
    "b2b-4-5": "var(--b2b-space-4-5)",
  },
  fontSize: {
    "section-title": ["var(--b2b-fluid-section-title)", {
      lineHeight: "1.08",
      letterSpacing: "var(--b2b-tracking-h2)",
    }],
    "section-lede": ["var(--b2b-fluid-section-lede)", {
      lineHeight: "var(--b2b-lh-loose)",
    }],
  },
  boxShadow: {
    "b2b-button-hover": "var(--b2b-shadow-button-hover)",
  },
  backdropBlur: {
    "b2b-glass": "var(--b2b-blur-glass)",
  },
  zIndex: {
    "b2b-base": "var(--b2b-z-base)",
    "b2b-decor": "var(--b2b-z-decor)",
    "b2b-content": "var(--b2b-z-content)",
    "b2b-nav": "var(--b2b-z-nav)",
    "b2b-overlay": "var(--b2b-z-overlay)",
  },
}
```

## Arquitetura Escalavel

## Camada 1 - Foundation

Tokens que raramente mudam:

- colors;
- typography base;
- spacing base;
- radius;
- shadows;
- z-index;
- motion.

## Camada 2 - Semantic

Tokens que expressam papel:

- `background`;
- `foreground`;
- `muted`;
- `border`;
- `primary`;
- `success`;
- `danger`;
- `info`.

## Camada 3 - Component

Tokens especificos:

- `--b2b-hero-*`;
- `--b2b-button-*`;
- `--b2b-section-title-*`;
- futuros `--b2b-card-*`, `--b2b-form-*`, `--b2b-nav-*`.

## Camada 4 - Local

Valores pontuais:

- permitidos durante implementacao visual;
- revisados antes de release;
- promovidos se repetirem.

## Ordem Oficial de Implementacao

## Fase 1 - Documentacao

Concluida neste documento:

```txt
docs/design-system/final-tokens.md
```

## Fase 2 - Tokens Globais Seguros

Implementar primeiro:

- fine spacing;
- section fluid type;
- container laptop padding;
- button hover shadow;
- glass blur;
- z-index mapping.

## Fase 3 - UI Shared

Refatorar:

- `Button`;
- `SectionTitle`;
- `GlassCard`;
- `Container`;
- `layoutClassNames`.

## Fase 4 - Hero Tokens

Migrar valores da Hero em tarefa visual dedicada.

Regras:

- comparar antes/depois com Figma;
- validar mobile, tablet, laptop, desktop e wide;
- nao alterar layout junto com tokenizacao.

## Fase 5 - Proximas Secoes

Ao implementar cada nova secao:

1. usar tokens existentes;
2. manter valores locais apenas se forem pontuais;
3. promover repeticoes;
4. atualizar este documento se novo padrao surgir.

## Checklist para Tokenizacao

- [ ] O valor ja existe como token?
- [ ] O valor e global, semantico, de componente ou local?
- [ ] O valor aparece em mais de uma secao?
- [ ] O token tem nome baseado em papel, nao em numero?
- [ ] O Tailwind mapping e necessario?
- [ ] A mudanca afeta responsividade?
- [ ] A mudanca afeta Hero ou LCP?
- [ ] A documentacao foi atualizada?
- [ ] O changelog foi atualizado?
- [ ] Um ADR e necessario?

## Decisoes Oficiais

1. `--b2b-*` permanece como prefixo unico.
2. `src/app/globals.css` e a fonte aplicada de CSS variables.
3. `tailwind.config.ts` mapeia tokens para utilitarios.
4. Tokens globais exigem repeticao ou semantica clara.
5. Tokens de componente sao permitidos para fidelidade Figma.
6. Valores arbitrarios nao sao padrao permanente.
7. Hero deve migrar para `--b2b-hero-*` em refatoracao visual isolada.
8. Button e SectionTitle devem ser os primeiros shared components tokenizados.
9. Motion TS deve espelhar os tokens CSS documentados.
10. Toda nova secao deve consultar este documento antes de criar valores novos.

## Conclusao

O sistema final de tokens e Design System-first, escalavel e pragmatica. Ele preserva a fidelidade ao Figma sem transformar cada valor visual em token global. Valores arbitrarios devem ser eliminados progressivamente por tokens globais, tokens de componente ou helpers reutilizaveis, com validacao visual a cada etapa.
