# Official Animation System

Status: `Oficial`

Data: 2026-05-26

## Objetivo

Este documento consolida a estrategia definitiva de animacoes do projeto Best2bee Site. Ele define a arquitetura oficial, elimina duplicidade de engines para o mesmo tipo de efeito, estabelece quando usar CSS, Tailwind, Framer Motion, transitions e scroll animations, e documenta padroes de easing, duration, stagger, entrance, hover, microinteractions, performance e acessibilidade.

Este documento complementa:

- `docs/architecture/final-architecture.md`
- `docs/components/component-architecture.md`
- `docs/animations.md`
- `src/lib/motion.ts`
- `src/lib/gsap.ts`
- `src/components/animations/`

## Diagnostico Atual

Libs instaladas:

- `framer-motion`: engine oficial para animacoes declarativas em React.
- `gsap`: engine reservada para scroll timelines complexas com ScrollTrigger.
- Tailwind/CSS: camada padrao para transitions, hover, focus e microinteractions simples.

Implementacoes existentes:

- `src/lib/motion.ts`: fonte oficial de variants Framer Motion.
- `src/components/animations/FadeIn.tsx`: wrapper client para entrada por opacidade.
- `src/components/animations/RevealOnScroll.tsx`: wrapper client para entrada em viewport.
- `src/lib/gsap.ts`: loader SSR-safe para GSAP + ScrollTrigger.
- `src/hooks/useGsapScrollTrigger.ts`: hook client para refresh controlado de ScrollTrigger.
- Hero Section: usa Framer Motion diretamente para stagger e entrance.
- UI primitives: usam transitions Tailwind/CSS para hover e active.

Duplicidade eliminada:

- `src/lib/animations.ts` foi removido.
- `src/lib/motion.ts` passa a ser a unica fonte oficial de variants Framer Motion.

## Arquitetura Oficial

```txt
CSS variables
  -> easing, duration e tokens base

Tailwind utilities
  -> transitions, hover, focus, active e microinteractions simples

src/lib/motion.ts
  -> variants oficiais do Framer Motion

src/components/animations/
  -> wrappers client reutilizaveis

src/lib/gsap.ts
  -> loader SSR-safe para GSAP/ScrollTrigger

src/hooks/
  -> hooks client para scroll timelines complexas
```

## Regra Principal

Use a ferramenta mais simples que resolve o comportamento:

```txt
Estado CSS simples
  -> CSS/Tailwind transition

Entrada/reveal declarativo em React
  -> Framer Motion

Stagger declarativo de elementos React
  -> Framer Motion

Scroll scrub, pinning ou timeline complexa
  -> GSAP ScrollTrigger
```

Nao usar duas engines para o mesmo efeito no mesmo componente.

## Engine Ownership

### CSS

Use CSS puro quando:

- a regra e global;
- envolve `prefers-reduced-motion`;
- envolve `scroll-behavior`;
- envolve focus/skip link;
- nao depende de estado React.

Exemplos atuais:

- `scroll-behavior: smooth`;
- reset de reduced motion;
- `.skip-link`.

### Tailwind

Use Tailwind quando:

- o efeito e local ao componente;
- o efeito e uma transition simples;
- a animacao responde a `hover`, `focus-visible`, `active` ou `disabled`;
- nao ha timeline, stagger ou viewport.

Exemplos:

- `transition-colors`;
- `duration-[var(--b2b-dur-fast)]`;
- `ease-[var(--b2b-ease-out)]`;
- `hover:-translate-y-px`;
- `active:translate-y-0`.

### Framer Motion

Use Framer Motion quando:

- houver entrance animation;
- houver reveal on scroll simples;
- houver stagger entre elementos React;
- houver animacao declarativa dependente de componente;
- a animacao precisa respeitar `useReducedMotion`.

Fonte oficial:

```txt
src/lib/motion.ts
```

Wrappers oficiais:

```txt
src/components/animations/FadeIn.tsx
src/components/animations/RevealOnScroll.tsx
```

### Transitions

Transitions sao o padrao para microinteractions.

Use para:

- botoes;
- links;
- cards;
- nav items;
- focus states;
- estados active/disabled.

Nao use Framer Motion para hover simples se Tailwind resolve com `transition-*`.

### Scroll Animations

Use scroll animations em dois niveis:

1. Reveal simples em viewport:

```txt
RevealOnScroll
```

2. Scroll timeline complexa:

```txt
GSAP + ScrollTrigger
```

GSAP so deve ser usado quando houver:

- scrub;
- pinning;
- sequencias sincronizadas ao scroll;
- timeline com multiplos elementos;
- controle fino que Framer Motion nao resolve bem.

## Fonte Oficial de Motion

Arquivo:

```txt
src/lib/motion.ts
```

Variants oficiais:

- `fadeUp`
- `staggerContainer`
- `scaleIn`
- `revealOpacity`

Easing oficial:

```ts
export const motionEaseOut = [0.2, 0.7, 0.2, 1] as const;
```

Esse easing corresponde semanticamente ao token:

```txt
--b2b-ease-out: cubic-bezier(.2,.7,.2,1)
```

## Padroes de Easing

## Easing Base

Use `--b2b-ease-out` / `motionEaseOut` para:

- entrance;
- reveal;
- hover elevated;
- cards;
- elementos de marketing.

Use `--b2b-ease-in-out` para:

- loops sutis;
- transicoes ida/volta;
- indicadores repetidos;
- menus futuros que abrem/fecham.

Evite easings aleatorios por componente.

## Padroes de Duration

Tokens oficiais:

```txt
--b2b-dur-fast: 150ms
--b2b-dur-base: 260ms
--b2b-dur-slow: 520ms
```

Uso:

- `150ms`: hover, active, color, nav links.
- `260ms`: cards, surfaces, pequenos deslocamentos.
- `520ms`: entrance, reveal, fade/scale principal.

Limite:

- Animacoes de UI nao devem passar de `520ms` sem justificativa documentada.
- Loops decorativos podem ser mais longos, desde que sutis e pausaveis por reduced motion.

## Padroes de Stagger

Padrao oficial:

```ts
delayChildren: 0.12
staggerChildren: 0.08
```

Use stagger quando:

- existe hierarquia clara;
- os elementos aparecem como grupo;
- o atraso melhora leitura.

Evite stagger quando:

- ha muitos itens;
- o conteudo fica lento para aparecer;
- o usuario precisa agir rapidamente;
- a secao ja tem scroll ou media pesada.

## Padroes de Entrance

Variants oficiais:

```txt
fadeUp
revealOpacity
scaleIn
```

Uso:

- `fadeUp`: headlines, textos, blocos principais.
- `revealOpacity`: fades simples sem deslocamento.
- `scaleIn`: cards, badges, elementos destacados.

Entrada padrao:

```txt
opacity: 0 -> 1
y: 24px -> 0
duration: 520ms
ease: motionEaseOut
```

Evite:

- grandes deslocamentos;
- rotacoes fortes;
- blur pesado;
- animacoes que atrasam o LCP.

## Padroes de Hover

Hover deve ser feito com Tailwind/CSS por padrao.

Permitido:

- `transition-colors`;
- `transition-transform`;
- `transition-[transform,box-shadow,filter]`;
- `hover:-translate-y-px`;
- `hover:brightness-[1.04]`;
- `hover:shadow-*`.

Evite:

- hover com Framer Motion para botoes simples;
- hover que altera layout;
- hover que muda tamanho real do elemento;
- hover essencial para entender a interface.

## Padroes de Microinteractions

Microinteractions devem ser:

- rapidas;
- reversiveis;
- nao bloqueantes;
- baseadas em transform/opacity/filter;
- consistentes com tokens de duration/easing.

Use para:

- botao primario;
- nav item;
- card clicavel;
- feedback visual de focus/active.

Nao use para:

- decorar conteudo sem proposito;
- mascarar loading;
- atrasar CTA.

## Regras de Performance

1. Animar apenas `opacity`, `transform`, `scale` e, com cautela, `filter`.
2. Nao animar `width`, `height`, `top`, `left`, `margin`, `padding` ou `box-shadow` pesado em loop.
3. Nao transformar uma section inteira em client component apenas por motion local.
4. Isolar Framer Motion em wrappers client pequenos quando possivel.
5. GSAP deve ser importado apenas via `loadGsapScrollTrigger`.
6. GSAP/ScrollTrigger deve ser lazy e nunca importado em Server Component.
7. Above-the-fold deve priorizar LCP antes de animacao.
8. Evitar reveal em conteudo critico para SEO/leitura inicial.
9. Loops infinitos devem ser raros e baratos.
10. Medir bundle e Lighthouse antes de release publica.

## Regras de Acessibilidade

1. Respeitar `prefers-reduced-motion`.
2. Usar `useReducedMotion` em wrappers Framer Motion.
3. Reduced motion deve desativar deslocamento, loops e scroll motion.
4. Animacao nao pode ser a unica forma de comunicar estado.
5. Focus states devem permanecer visiveis.
6. Hover nao pode ser necessario para acessar conteudo.
7. Evitar parallax forte, zoom agressivo e movimento lateral longo.
8. Nao animar texto de forma que prejudique leitura.
9. Nao usar flashes ou pulsos rapidos.
10. Skip link e navegacao por teclado nao podem depender de motion.

## Server e Client Components

Padrao correto:

```txt
Server Section
  -> Client Animation Wrapper
    -> Conteudo estatico
```

Evitar:

```txt
Client Section inteira
  -> Todo o conteudo hidratado sem necessidade
```

Excecao atual:

- A Hero ainda usa Framer Motion diretamente em subcomponentes client para preservar a fidelidade visual implementada.

Padrao para novas secoes:

- section principal server;
- subcomponentes server sempre que possivel;
- wrappers client apenas nos blocos animados.

## ScrollTrigger Policy

GSAP e aprovado, mas nao e engine padrao.

Fluxo obrigatorio:

```txt
Componente client
  -> hook local ou compartilhado
  -> loadGsapScrollTrigger()
  -> register/refresh controlado
```

Proibido:

```ts
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
```

em qualquer Server Component ou componente compartilhado sem boundary client.

## Folder Conventions

```txt
src/lib/motion.ts
  variants e constantes Framer Motion

src/components/animations/
  wrappers client reutilizaveis

src/lib/gsap.ts
  loader SSR-safe

src/hooks/
  hooks compartilhados de animacao

src/components/sections/{section}/
  animacoes locais quando ainda nao reutilizaveis
```

## Naming Conventions

Wrappers reutilizaveis:

```txt
FadeIn.tsx
RevealOnScroll.tsx
AnimatedBlock.client.tsx
StaggerGroup.client.tsx
```

Variants:

```txt
camelCase
```

Exemplos:

```txt
fadeUp
scaleIn
revealOpacity
staggerContainer
```

Hooks:

```txt
useGsapScrollTrigger.ts
useSectionScrollTimeline.ts
```

## Decision Tree

```txt
E hover/focus/active simples?
  -> Tailwind/CSS transition

E entrada simples ao carregar?
  -> FadeIn ou Framer Motion com revealOpacity

E reveal simples em viewport?
  -> RevealOnScroll

E grupo com stagger?
  -> Framer Motion + staggerContainer

E scroll scrub/pinning/timeline?
  -> GSAP ScrollTrigger

E so decorativo e pesado?
  -> nao implementar
```

## Checklist Antes de Criar Animacao

- [ ] A animacao tem funcao clara?
- [ ] Tailwind/CSS resolveria?
- [ ] Respeita `prefers-reduced-motion`?
- [ ] Usa duration/easing oficiais?
- [ ] Anima transform/opacity?
- [ ] Evita layout shift?
- [ ] Nao aumenta client JS sem necessidade?
- [ ] Nao atrasa CTA ou conteudo acima da dobra?
- [ ] Nao usa duas engines no mesmo efeito?
- [ ] Esta documentada se criar novo padrao?

## Inconsistencias Identificadas

### 1. Aliases duplicados em `src/lib/animations.ts`

Problema:

- O arquivo apenas reexportava `fadeUp` e `revealOpacity` com nomes alternativos.

Decisao:

- Remover `src/lib/animations.ts`.
- Usar `src/lib/motion.ts` como fonte unica.

### 2. Hero com Framer Motion direto em subcomponentes

Problema:

- A Hero possui mais client components do que o padrao ideal para novas secoes.

Decisao:

- Manter por enquanto para preservar fidelidade visual.
- Usar como caso historico, nao como padrao para novas secoes.

### 3. GSAP preparado, mas ainda sem uso real

Problema:

- A dependencia existe para requisito arquitetural, mas ainda nao ha timeline real.

Decisao:

- Manter `gsap` como engine reservada.
- Proibir uso para reveals simples.
- Usar apenas quando houver necessidade clara de ScrollTrigger.

### 4. Placeholders animados

Problema:

- Placeholders usam `RevealOnScroll`, adicionando motion em conteudo temporario.

Decisao:

- Aceitavel em desenvolvimento.
- Antes de deploy publico, placeholders devem ser removidos ou substituidos por secoes finais.

## Sistema Oficial

Padrao final:

1. CSS/Tailwind para microinteractions e transitions simples.
2. Framer Motion para entrance, reveal e stagger declarativo.
3. GSAP ScrollTrigger apenas para scroll timelines complexas.
4. `src/lib/motion.ts` como unica fonte de variants.
5. `src/components/animations/` como boundary client reutilizavel.
6. Reduced motion obrigatorio.
7. Nenhuma animacao deve justificar piora relevante de LCP, CLS ou INP.

## Conclusao

A estrategia oficial prioriza simplicidade, performance e consistencia visual. CSS/Tailwind resolvem interacoes pequenas, Framer Motion resolve animacoes declarativas em React, e GSAP fica reservado para casos avancados de scroll. O projeto nao deve misturar engines para o mesmo efeito nem promover secoes inteiras a client components sem necessidade clara.
