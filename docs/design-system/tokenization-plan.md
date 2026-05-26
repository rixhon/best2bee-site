# Tokenization Plan

Data: 2026-05-26

## Objetivo

Este plano identifica valores arbitrarios provenientes do Figma que aparecem no codigo atual e propoe uma estrategia profissional para transforma-los em tokens reutilizaveis, mantendo fidelidade visual sem enfraquecer o Design System.

Documento oficial consolidado:

- [Tokens finais](./final-tokens.md)

## Escopo da Analise

Categorias analisadas:

- spacing;
- width;
- height;
- border-radius;
- typography;
- z-index;
- shadows;
- animacoes;
- opacidade, blur, gradients e efeitos de superficie quando influenciam tokens reutilizaveis.

Arquivos com maior concentracao de valores arbitrarios:

- `src/components/sections/hero/HeroSection.tsx`
- `src/components/sections/hero/HeroContent.tsx`
- `src/components/sections/hero/HeroMetrics.tsx`
- `src/components/sections/hero/HeroNavbar.tsx`
- `src/components/sections/hero/HeroBackground.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/SectionTitle.tsx`
- `src/lib/styles.ts`
- `src/lib/motion.ts`
- `src/app/globals.css`

## Principio de Tokenizacao

Nem todo valor vindo do Figma deve virar token global.

Use esta regra:

- `Token global`: valor repetido, semantico e esperado em varias secoes.
- `Token de componente`: valor recorrente dentro de um componente ou familia de componentes.
- `Valor local`: ajuste pontual para fidelidade visual de uma secao especifica.
- `Valor temporario`: ajuste necessario enquanto uma secao ainda nao tem padrao validado.

## Inventario de Valores Arbitrarios

### Spacing

Valores encontrados:

| Valor | Uso atual | Arquivo | Classificacao |
|---|---|---|---|
| `148px` | padding-top mobile da Hero | `HeroSection.tsx` | token de componente |
| `180px` | padding-top tablet da Hero | `HeroSection.tsx` | token de componente |
| `clamp(218px,23.5vw,302px)` | padding-top laptop da Hero | `HeroSection.tsx` | token de componente |
| `18px` | margem entre headline e subtitulo | `HeroContent.tsx` | token candidato |
| `clamp(56px,6.8vw,96px)` | margem antes dos CTAs | `HeroContent.tsx` | token de componente |
| `-34px` | sobreposicao do card de metricas | `HeroContent.tsx` | valor local |
| `clamp(28px,3.26vw,51px)` | padding-x do card de metricas | `HeroMetrics.tsx` | token de componente |
| `clamp(18px,1.6vw,25px)` | padding-y do card de metricas | `HeroMetrics.tsx` | token de componente |
| `10px` | gap de menu e padding do scroll indicator | `HeroNavbar.tsx`, `HeroMetrics.tsx`, `Button.tsx` | token candidato |
| `14px` | margin eyebrow/title e padding nav item | `SectionTitle.tsx`, `HeroNavbar.tsx` | token candidato |
| `18px`, `26px`, `32px` | padding de botoes | `Button.tsx` | token de componente |

Diagnostico:

- `10px`, `14px`, `18px` e `26px` aparecem como intervalos intermediarios fora da escala `--b2b-space-*`.
- A Hero tem spacings fluidos especificos que preservam fidelidade ao Figma e devem ser tokens de componente, nao globais.

### Width e Max Width

Valores encontrados:

| Valor | Uso atual | Arquivo | Classificacao |
|---|---|---|---|
| `1280px` | largura maxima/container | `HeroSection.tsx`, `tailwind.config.ts` | token global existente |
| `1290px` | max-width da headline | `HeroContent.tsx` | valor local |
| `766px` | max-width do subtitulo | `HeroContent.tsx` | token de componente |
| `829px` | max-width do card de metricas | `HeroMetrics.tsx` | token de componente |
| `53.1vw` | largura laptop do card de metricas | `HeroMetrics.tsx` | valor local |
| `min(1280px,calc(100vw-18vw))` | largura interna da Hero | `HeroSection.tsx` | token de componente |
| `min(1280px,calc(100vw-clamp(40px,16vw,250px)))` | largura da navbar | `HeroNavbar.tsx` | token de componente |
| `clamp(154px,16.7vw,261px)` | largura do logo | `HeroNavbar.tsx` | token de componente |
| `clamp(164px,12.58vw,196px)` | min-width CTA principal Hero | `styles.ts` | token de componente |
| `clamp(118px,9.5vw,148px)` | min-width CTA secundario Hero | `styles.ts` | token de componente |

Diagnostico:

- `1280px` ja e token global.
- Medidas como `766px`, `829px`, `261px` e larguras fluidas da Hero devem ser agrupadas em tokens de componente `--b2b-hero-*`.

### Height e Min Height

Valores encontrados:

| Valor | Uso atual | Arquivo | Classificacao |
|---|---|---|---|
| `720px` | min-height Hero mobile/laptop | `HeroSection.tsx` | token de componente |
| `780px` | min-height Hero tablet | `HeroSection.tsx` | token de componente |
| `900px` | min-height Hero desktop | `HeroSection.tsx` | token de componente |
| `960px` | min-height Hero wide | `HeroSection.tsx` | token de componente |
| `clamp(38px,3.08vw,48px)` | altura dos CTAs da Hero | `styles.ts` | token de componente |
| `clamp(50px,4.22vw,66px)` | min-height navbar Hero | `HeroNavbar.tsx` | token de componente |
| `40px`, `24px` | scroll indicator shell | `HeroMetrics.tsx` | token de componente |
| `12px`, `4px` | scroll indicator thumb | `HeroMetrics.tsx` | token de componente |

Diagnostico:

- Alturas da Hero sao especificas de composicao e nao devem entrar na escala global.
- Scroll indicator deve virar token de componente se for reutilizado.

### Border Radius

Valores encontrados:

| Valor | Uso atual | Arquivo | Classificacao |
|---|---|---|---|
| `9999px` | pills | tokens existentes | token global existente |
| `28px` | glass cards | tokens existentes | token global existente |
| `12px` | inputs/skip link | tokens existentes | token global existente |

Diagnostico:

- Border-radius esta bem coberto pelo Design System.
- Nao ha necessidade de novos radius globais neste momento.

### Typography

Valores encontrados:

| Valor | Uso atual | Arquivo | Classificacao |
|---|---|---|---|
| `clamp(42px,7vw,64px)` | H1 Hero mobile/tablet | `HeroContent.tsx` | token de componente ou utility |
| `clamp(56px,5.6vw,var(--b2b-fs-display-xl))` | H1 Hero laptop+ | `HeroContent.tsx` | token de componente ou utility |
| `.99` | line-height H1 Hero | `HeroContent.tsx` | token de componente |
| `clamp(16px,1.41vw,var(--b2b-fs-body-xl))` | subheadline Hero | `HeroContent.tsx` | token de componente |
| `1.48` | line-height subheadline | `HeroContent.tsx`, token body-xl | token global existente |
| `clamp(9px,.7vw,11px)` | label metricas | `HeroMetrics.tsx` | token de componente |
| `.18em` | tracking label metricas | `HeroMetrics.tsx` | token candidato |
| `clamp(25px,2.25vw,35.2px)` | valor metricas | `HeroMetrics.tsx` | token de componente |
| `-.04em` | tracking metricas | `HeroMetrics.tsx` | token global existente similar |
| `clamp(13px,1vw,var(--b2b-fs-body-sm))` | descricao metricas | `HeroMetrics.tsx` | token de componente |
| `13.5px`, `15px` | fonte de botoes | `Button.tsx` | token de componente |
| `clamp(32px,4.4vw,var(--b2b-fs-display-l))` | SectionTitle | `SectionTitle.tsx` | token global fluido candidato |
| `clamp(16px,1.6vw,var(--b2b-fs-body-l))` | SectionTitle description | `SectionTitle.tsx` | token global fluido candidato |

Diagnostico:

- A escala base existe, mas faltam tokens fluidos para uso real em Figma-to-code.
- `SectionTitle` e candidato forte a tokens globais fluidos porque sera usado em varias secoes.
- Tipografia da Hero deve ficar em tokens de componente `--b2b-hero-*`.

### Z-index

Valores encontrados:

| Valor | Uso atual | Arquivo | Classificacao |
|---|---|---|---|
| `z-10` | conteudo Hero | `HeroSection.tsx` | token global existente conceitual |
| `z-20` | navbar Hero | `HeroNavbar.tsx` | precisa padronizar |
| `z-50` | skip link | `globals.css` | precisa padronizar |
| `--b2b-z-nav: 100` | token global | `globals.css` | token existente |

Diagnostico:

- Existem tokens `--b2b-z-*`, mas componentes usam classes Tailwind literais.
- Falta mapear z-index no Tailwind ou usar classes arbitrarias com var.

### Shadows

Valores encontrados:

| Valor | Uso atual | Arquivo | Classificacao |
|---|---|---|---|
| `--b2b-shadow-card` | GlassCard | `styles.ts` | token global existente |
| `--b2b-shadow-button` | Button | `Button.tsx` | token global existente |
| `--b2b-shadow-menu` | HeroNavbar | `HeroNavbar.tsx` | token global existente |
| `0_14px_36px_rgba(225,113,0,.35),0_8px_18px_rgba(15,23,42,.16)` | hover button | `Button.tsx` | token global candidato |

Diagnostico:

- Sombras base estao bem tokenizadas.
- Falta token para hover de botao.

### Animacoes

Valores encontrados:

| Valor | Uso atual | Arquivo | Classificacao |
|---|---|---|---|
| `[0.2, 0.7, 0.2, 1]` | easing Framer Motion | `motion.ts` | token existente em TS |
| `0.52s` | duration variants | `motion.ts` | token alinhado a `--b2b-dur-slow` |
| `0.12s` | delay children | `motion.ts` | token candidato |
| `0.08s` | stagger children | `motion.ts` | token candidato |
| `1.6s` | scroll indicator loop | `HeroMetrics.tsx` | token de componente |
| `y: [0, 6, 0]` | scroll indicator movement | `HeroMetrics.tsx` | token de componente |
| `viewport margin -10% 0px` | reveal on scroll | `RevealOnScroll.tsx` | token/config candidato |

Diagnostico:

- Tokens CSS de duracao existem, mas os variants usam numeros TS.
- Precisamos de um espelho de tokens em TS para motion, ou documentar o contrato entre CSS vars e `src/lib/motion.ts`.

## Tokens Reutilizaveis Propostos

### Novos tokens globais recomendados

Esses tokens representam padroes com chance alta de reutilizacao.

```css
:root {
  /* Fluid typography */
  --b2b-fluid-section-title: clamp(32px, 4.4vw, var(--b2b-fs-display-l));
  --b2b-fluid-section-lede: clamp(16px, 1.6vw, var(--b2b-fs-body-l));

  /* Fine spacing steps from Figma */
  --b2b-space-2-5: 10px;
  --b2b-space-3-5: 14px;
  --b2b-space-4-5: 18px;

  /* Component interaction */
  --b2b-shadow-button-hover: 0 14px 36px rgba(225,113,0,.35), 0 8px 18px rgba(15,23,42,.16);

  /* Motion orchestration */
  --b2b-dur-stagger-fast: 80ms;
  --b2b-dur-delay-base: 120ms;

  /* Blur */
  --b2b-blur-glass: 10px;
}
```

### Tokens globais opcionais

Use somente se a repeticao aparecer em mais secoes.

```css
:root {
  --b2b-section-title-offset: 14px;
  --b2b-section-title-max: 672px;
  --b2b-nav-item-pad-x: 14px;
  --b2b-button-text-sm: 13.5px;
  --b2b-button-text-md: 15px;
}
```

## Tokens de Componente Propostos

### Hero

Esses tokens preservam fidelidade da Hero sem poluir a escala global.

```css
:root {
  /* Hero sizing */
  --b2b-hero-min-h-mobile: 720px;
  --b2b-hero-min-h-tablet: 780px;
  --b2b-hero-min-h-desktop: 900px;
  --b2b-hero-min-h-wide: 960px;

  /* Hero content */
  --b2b-hero-content-max: 1280px;
  --b2b-hero-title-max: 1290px;
  --b2b-hero-lede-max: 766px;
  --b2b-hero-title-fluid: clamp(42px, 7vw, 64px);
  --b2b-hero-title-fluid-lg: clamp(56px, 5.6vw, var(--b2b-fs-display-xl));
  --b2b-hero-title-lh: .99;
  --b2b-hero-lede-fluid: clamp(16px, 1.41vw, var(--b2b-fs-body-xl));

  /* Hero vertical rhythm */
  --b2b-hero-pt-mobile: 148px;
  --b2b-hero-pt-tablet: 180px;
  --b2b-hero-pt-laptop: clamp(218px, 23.5vw, 302px);
  --b2b-hero-title-to-lede: 18px;
  --b2b-hero-lede-to-actions: clamp(56px, 6.8vw, 96px);
  --b2b-hero-metrics-overlap: -34px;

  /* Hero nav */
  --b2b-hero-nav-top: 28px;
  --b2b-hero-nav-h: clamp(50px, 4.22vw, 66px);
  --b2b-hero-nav-w: min(1280px, calc(100vw - clamp(40px, 16vw, 250px)));
  --b2b-hero-nav-pad-x: clamp(18px, 1.66vw, 26px);
  --b2b-hero-logo-w: clamp(154px, 16.7vw, 261px);

  /* Hero actions */
  --b2b-hero-action-h: clamp(38px, 3.08vw, 48px);
  --b2b-hero-action-primary-w: clamp(164px, 12.58vw, 196px);
  --b2b-hero-action-secondary-w: clamp(118px, 9.5vw, 148px);
  --b2b-hero-action-text: clamp(13px, .9vw, 14px);

  /* Hero metrics */
  --b2b-hero-metrics-max: 829px;
  --b2b-hero-metrics-w-laptop: 53.1vw;
  --b2b-hero-metrics-pad-x: clamp(28px, 3.26vw, 51px);
  --b2b-hero-metrics-pad-y: clamp(18px, 1.6vw, 25px);
  --b2b-hero-metric-label: clamp(9px, .7vw, 11px);
  --b2b-hero-metric-value: clamp(25px, 2.25vw, 35.2px);
  --b2b-hero-metric-body: clamp(13px, 1vw, var(--b2b-fs-body-sm));

  /* Hero scroll indicator */
  --b2b-scroll-indicator-w: 24px;
  --b2b-scroll-indicator-h: 40px;
  --b2b-scroll-indicator-thumb-w: 4px;
  --b2b-scroll-indicator-thumb-h: 12px;
  --b2b-scroll-indicator-travel: 6px;
  --b2b-scroll-indicator-duration: 1600ms;
}
```

### Button

```css
:root {
  --b2b-button-sm-pad-x: 18px;
  --b2b-button-sm-pad-y: 10px;
  --b2b-button-sm-text: 13.5px;

  --b2b-button-md-pad-x: 26px;
  --b2b-button-md-pad-y: 14px;
  --b2b-button-md-text: 15px;

  --b2b-button-lg-pad-x: 32px;
  --b2b-button-lg-pad-y: 18px;
  --b2b-button-lg-text: var(--b2b-fs-body);
}
```

## Tailwind Mapping Proposto

Adicionar ao `tailwind.config.ts` somente apos validacao visual:

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

## Padronizacao Recomendada

### 1. Tokens globais primeiro

Use tokens globais para:

- escala de spacing;
- tipografia de secoes;
- shadows recorrentes;
- z-index semantico;
- duracoes e easings;
- blur glass.

### 2. Tokens de componente para fidelidade Figma

Use tokens `--b2b-hero-*` quando o valor for especifico da Hero.

Nao promova para global:

- largura exata da metrica da Hero;
- overlap negativo da Hero;
- altura especifica da Hero;
- posicao da navbar da Hero;
- medidas do scroll indicator.

### 3. Valores locais continuam permitidos

Valores locais sao aceitaveis quando:

- aparecem uma unica vez;
- existem para alinhar um detalhe do Figma;
- nao expressam um padrao reutilizavel.

Devem ser revisados se reaparecerem em outra secao.

## Sistema Escalavel de Tokenizacao

### Camadas

```txt
Foundation tokens
  -> color, type, spacing, radius, shadow, motion, z-index

Semantic tokens
  -> surface, text, border, action, feedback

Component tokens
  -> hero, navbar, button, metric-card, section-title

Local Figma values
  -> ajustes pontuais ainda nao promovidos
```

### Naming

Use este padrao:

```txt
--b2b-{domain}-{property}-{modifier}
```

Exemplos:

```txt
--b2b-hero-title-fluid
--b2b-hero-nav-h
--b2b-button-md-pad-x
--b2b-shadow-button-hover
--b2b-fluid-section-title
```

### Criterios para promover um valor

Promova para token quando:

- aparecer em duas ou mais secoes;
- tiver significado semantico;
- for necessario para consistencia visual;
- for usado por componente reutilizavel;
- estiver documentado no Design System ou validado pelo Figma.

Nao promova quando:

- for ajuste visual de uma unica arte;
- for workaround temporario;
- for valor que provavelmente mudara ao implementar a proxima secao.

## Variaveis Globais Sugeridas

Bloco consolidado para futura implementacao em `src/app/globals.css`:

```css
:root {
  /* Fluid type */
  --b2b-fluid-section-title: clamp(32px, 4.4vw, var(--b2b-fs-display-l));
  --b2b-fluid-section-lede: clamp(16px, 1.6vw, var(--b2b-fs-body-l));

  /* Fine spacing */
  --b2b-space-2-5: 10px;
  --b2b-space-3-5: 14px;
  --b2b-space-4-5: 18px;

  /* Interaction */
  --b2b-shadow-button-hover: 0 14px 36px rgba(225,113,0,.35), 0 8px 18px rgba(15,23,42,.16);

  /* Motion */
  --b2b-dur-stagger-fast: 80ms;
  --b2b-dur-delay-base: 120ms;

  /* Effects */
  --b2b-blur-glass: 10px;
}
```

Bloco de componente para futura implementacao:

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
  --b2b-hero-lede-max: 766px;
  --b2b-hero-metrics-max: 829px;
  --b2b-hero-nav-top: 28px;
  --b2b-hero-nav-h: clamp(50px, 4.22vw, 66px);
  --b2b-hero-logo-w: clamp(154px, 16.7vw, 261px);
}
```

## Ordem de Implementacao Recomendada

### Fase 1 - Tokens seguros

Implementar tokens globais com baixa chance de regressao:

- `--b2b-fluid-section-title`
- `--b2b-fluid-section-lede`
- `--b2b-space-2-5`
- `--b2b-space-3-5`
- `--b2b-space-4-5`
- `--b2b-shadow-button-hover`
- `--b2b-blur-glass`

### Fase 2 - Refatorar UI primitives

Aplicar tokens em:

- `Button`
- `SectionTitle`
- `GlassCard`
- `layoutClassNames`

### Fase 3 - Tokens da Hero

Aplicar `--b2b-hero-*` somente depois de validar que a Hero continua fiel ao Figma.

### Fase 4 - Proxima secao real

Ao implementar a proxima secao, comparar valores:

- se repetir, promover para token global ou componente;
- se nao repetir, manter local.

## Riscos e Mitigacao

### Risco: tokenizar demais

Impacto:

- Design System fica inchado e dificil de entender.

Mitigacao:

- Token global apenas com repeticao ou semantica clara.

### Risco: perder fidelidade ao Figma

Impacto:

- Refatorar valores antes de validar visualmente pode alterar a Hero.

Mitigacao:

- Aplicar tokens em pequenos lotes.
- Validar desktop, tablet e mobile apos cada lote.

### Risco: duplicar fonte de verdade

Impacto:

- `src/data/design-system.md`, `docs/design-system/README.md`, `globals.css` e `tailwind.config.ts` podem divergir.

Mitigacao:

- `src/data/design-system.md` continua fonte oficial conceitual.
- `docs/design-system/README.md` explica aplicacao tecnica.
- `globals.css` contem variaveis aplicadas.
- `tailwind.config.ts` contem mapeamento utilitario.

## Checklist para Novos Valores Figma

- [ ] O valor ja existe como token?
- [ ] O valor aparece em mais de uma secao?
- [ ] O valor tem significado semantico?
- [ ] O valor e especifico de componente?
- [ ] O valor pode ser local sem prejudicar manutencao?
- [ ] A promocao para token foi documentada?
- [ ] O Tailwind mapping foi atualizado se necessario?
- [ ] A fidelidade visual foi validada apos a alteracao?

## Decisao Recomendada

Nao aplicar todos os tokens imediatamente no codigo. Primeiro, adicionar os tokens globais seguros e refatorar apenas componentes compartilhados. Em seguida, migrar tokens da Hero em uma tarefa visual dedicada, com comparacao contra Figma.

Essa abordagem preserva a fidelidade atual e cria um sistema escalavel para as proximas secoes.
