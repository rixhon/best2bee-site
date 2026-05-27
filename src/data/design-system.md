# Best2bee — Design System

> Sistema completo derivado das 9 seções da landingpage
> Versão **1.0** · Maio 2026

---

## Sumário

1. [Fundamentos](#1-fundamentos)
2. [Cores](#2-cores)
3. [Tipografia](#3-tipografia)
4. [Espaçamento](#4-espaçamento)
5. [Radii & Sombras](#5-radii--sombras)
6. [Grid & Containers](#6-grid--containers)
7. [Breakpoints](#7-breakpoints)
8. [Botões](#8-botões)
9. [Componentes](#9-componentes)
10. [Padrões de Animação](#10-padrões-de-animação)
11. [Arquitetura das Seções](#11-arquitetura-das-seções)
12. [Organização de Código](#12-organização-de-código)
13. [Padrões Responsivos](#13-padrões-responsivos)
14. [Performance](#14-performance)
15. [Naming Conventions](#15-naming-conventions)
16. [CSS Variables](#16-css-variables)

---

## 1. Fundamentos

A linguagem visual é construída sobre **quatro princípios** que se repetem em todas as seções:

| Princípio | Descrição |
|---|---|
| **Glass + Light** | Cards com fundo branco translúcido (`rgba(255,255,255,.92→.42)`), bordas tênues e sombras difusas em camadas duplas (`8/24 + 26/70`). |
| **Honey accent** | Gradiente `#FE9A00 → #E17100` aplicado em botões, eyebrows e contornos de avatar. Pontual, nunca em fundos amplos. |
| **Display Light** | Space Grotesk **300** em tamanhos grandes (88/55px) com **bold seletivo** em 1–2 palavras-chave por linha. |
| **Mono Eyebrow** | JetBrains Mono **uppercase** com tracking `0.22em` precede todos os títulos de seção. |

---

## 2. Cores

### 2.1 Honey · Brand

| Token | Hex | Uso |
|---|---|---|
| `--b2b-honey-300` | `#FFD24D` | Hover / gradient highlight |
| `--b2b-honey-400` | `#FFB900` | **Primary brand** |
| `--b2b-honey-500` | `#FE9A00` | Gradient mid (botões) |
| `--b2b-honey-600` | `#E17100` | Gradient deep (botões) |

### 2.2 Ink & Slate · Texto e estrutura

| Token | Hex | Uso |
|---|---|---|
| `--b2b-ink-900`   | `#020618` | Headings, ink puro |
| `--b2b-slate-700` | `#314158` | Body strong |
| `--b2b-slate-600` | `#45556C` | Body padrão |
| `--b2b-slate-500` | `#64748B` | Meta / labels |
| `--b2b-slate-400` | `#94A3B8` | Muted |
| `--b2b-slate-300` | `#CBD5E1` | Bordas suaves |
| `--b2b-slate-200` | `#E2E8F0` | Hairlines |
| `--b2b-slate-100` | `#EAF2F8` | Fundo cool |
| `--b2b-slate-50`  | `#F8FAFC` | Fundo soft |

### 2.3 Surfaces · Fundos de seção

| Token | Hex | Uso |
|---|---|---|
| `--b2b-bg-base`   | `#FFFFFF` | Solution, Stack |
| `--b2b-bg-soft`   | `#F8FAFC` | Squads, Social |
| `--b2b-bg-cool`   | `#EEF4FA` | Problem, Compliance |
| `--b2b-bg-cool-2` | `#EAF2F8` | Problem (low) |
| `--b2b-bg-warm`   | `#FDF6EE` | CTA |

### 2.4 Semantic · Estados e ênfase

| Token | Hex | Uso |
|---|---|---|
| `--b2b-danger-500`  | `#FF6467` | Eyebrow "O Desafio", icon tile Problem |
| `--b2b-info-500`    | `#3B82F6` | Radial glow decorativo |
| `--b2b-success-500` | `#16A34A` | Badge Compliance |
| `--b2b-success-bg`  | `#E8F6EE` | Fundo badge |

### 2.5 Glass · Camadas translúcidas

```css
--b2b-glass-strong: linear-gradient(180deg, rgba(255,255,255,.92) 0%, rgba(255,255,255,.52) 100%);
--b2b-glass-medium: linear-gradient(180deg, rgba(255,255,255,.74) 0%, rgba(255,255,255,.42) 100%);
--b2b-glass-soft  : linear-gradient(180deg, rgba(255,255,255,.45) 0%, rgba(255,255,255,.22) 100%);
--b2b-glass-border: 1px solid rgba(255,255,255,.55);
```

> **Uso de cor:** nunca aplique honey em fundos amplos; mantenha-o em ações, eyebrows e contornos. Tons frios (Sky) sustentam fundos; tons quentes (Warm) ficam reservados à CTA final.

---

## 3. Tipografia

Três famílias:

- **Space Grotesk** — display (300 / 500)
- **Inter** — body (400 / 500)
- **JetBrains Mono** — eyebrows e labels técnicas (400)

### 3.1 Escala completa

| Estilo | Família | Peso | Tamanho | Line-height | Tracking | Uso |
|---|---|---|---|---|---|---|
| **Display XL** | Space Grotesk | 300 | `88px` | 1.02 | `-0.045em` | H1 do hero |
| **Display L**  | Space Grotesk | 300 | `52px` | 1.08 | `-0.04em` | H2 de seção |
| **Display M**  | Space Grotesk | 300 | `37.6px` | 1.10 | `-0.035em` | Sub-seção |
| **Heading**    | Space Grotesk | 500 | `27.2px` | 1.08 | `-0.03em`  | H3 de cards |
| **Subheading** | Space Grotesk | 500 | `24px` | 1.20 | `-0.025em` | Nomes / títulos de talento |
| **Body XL**    | Inter | 400 | `22px` | 1.48 | 0 | Lede do hero |
| **Body L**     | Inter | 400 | `19.2px` | 1.70 | 0 | Lede de seção |
| **Body**       | Inter | 400 | `16px` | 1.70 | 0 | Texto padrão |
| **Body SM**    | Inter | 400 | `15.68px` | 1.70 | 0 | Corpo de card |
| **Meta**       | Inter | 500 | `14px` | 1.50 | 0 | Navegação |
| **Eyebrow**    | JetBrains Mono | 400 | `13px` | 1.0 | `0.22em` UPPERCASE | Title de seção |
| **Caption**    | JetBrains Mono | 400 | `11px` | 1.5 | `0.16em` UPPERCASE | Chips de skill |

### 3.2 Regra do bold seletivo

Em títulos Display, aplique `font-weight: 500` apenas em **1–2 palavras-chave** por linha (ex: *equipe*, *alta performance*, *developer*). O contraste cria ritmo sem inflar visualmente o título.

```html
<h1>Escale sua equipe com developers de <b>alta performance</b></h1>
```

---

## 4. Espaçamento

Sistema **4-pt**. Múltiplos de 8 para layouts, múltiplos de 4 para detalhes finos.

| Token | Valor | Uso típico |
|---|---|---|
| `--b2b-space-1`  | `4px`  | Detalhes finos |
| `--b2b-space-2`  | `8px`  | Gap mínimo entre chips |
| `--b2b-space-3`  | `12px` | Title → descrição |
| `--b2b-space-4`  | `16px` | Padding small / gap geral |
| `--b2b-space-5`  | `24px` | Gap entre cards |
| `--b2b-space-6`  | `32px` | Padding interno de card |
| `--b2b-space-7`  | `48px` | Lede → conteúdo |
| `--b2b-space-8`  | `64px` | Padding seção mobile |
| `--b2b-space-9`  | `80px` | Padding seção tablet |
| `--b2b-space-10` | `96px` | Padding seção laptop |
| `--b2b-space-11` | `128px` | Padding seção desktop |
| `--b2b-space-12` | `160px` | Padding seção wide |

### 4.1 Padrões de uso

| Contexto | Valor |
|---|---|
| Section padding-y (desktop) | `120px` |
| Section padding-y (mobile) | `64px` |
| Card padding interno | `32px` |
| Ícone → título | `20px` |
| Título → descrição | `12px` |
| Eyebrow → H2 | `14px` |
| H2 → lede | `20px` |
| Lede → conteúdo | `48px` |

---

## 5. Radii & Sombras

### 5.1 Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--b2b-radius-xs`   | `8px`    | Detalhes |
| `--b2b-radius-sm`   | `12px`   | Inputs |
| `--b2b-radius-md`   | `14px`   | **Icon tiles** |
| `--b2b-radius-lg`   | `20px`   | Cards densos |
| `--b2b-radius-xl`   | `28px`   | **Glass cards** |
| `--b2b-radius-2xl`  | `36px`   | Containers grandes |
| `--b2b-radius-pill` | `9999px` | **Botões, chips, navbar** |

### 5.2 Sombras (camadas duplas)

```css
/* Card padrão */
--b2b-shadow-card    : 0 8px 24px rgba(15,23,42,.05),
                       0 26px 70px rgba(148,163,184,.14);

/* Card secundário */
--b2b-shadow-card-sm : 0 4px 12px rgba(15,23,42,.04),
                       0 12px 36px rgba(148,163,184,.12);

/* Botão honey */
--b2b-shadow-button  : 0 10px 30px rgba(15,23,42,.18);

/* Menu / navbar */
--b2b-shadow-menu    : 0 10px 40px rgba(148,163,184,.16);

/* Pill / chip */
--b2b-shadow-pill    : 0 4px 14px rgba(15,23,42,.06);
```

---

## 6. Grid & Containers

Layout sobre **12 colunas** com gutter `24px` em desktop. Container máximo **1280px**, padding lateral fluido.

| Token | Desktop | Laptop | Tablet | Mobile |
|---|---|---|---|---|
| `--b2b-container-max`    | `1280px` | `1120px` | `100%` | `100%` |
| container padding-x      | `80px`   | `64px`   | `48px` | `20px` |
| column gutter            | `24px`   | `24px`   | `20px` | `16px` |
| section padding-y        | `120px`  | `96px`   | `80px` | `64px` |

```css
.b2b-container{
  width: 100%;
  max-width: var(--b2b-container-max);
  margin-inline: auto;
  padding-inline: var(--b2b-container-pad-d);
}
```

---

## 7. Breakpoints

Aplicar **mobile-first** em CSS custom.

| Nome | Min-width | Cols hero / feature | Escala H1 |
|---|---|---|---|
| **Mobile**    | `0–767px`      | 1 col | −40% |
| **Tablet**    | `768–1023px`   | 2 col | −25% |
| **Laptop**    | `1024–1279px`  | 3 col | −10% |
| **Desktop**   | `1280–1559px`  | 3–4 col | base |
| **Wide**      | `≥1560px`      | 4 col + max-width | base · centralizar |

```css
@custom-media --bp-tablet  (min-width: 768px);
@custom-media --bp-laptop  (min-width: 1024px);
@custom-media --bp-desktop (min-width: 1280px);
@custom-media --bp-wide    (min-width: 1560px);
```

---

## 8. Botões

Três variantes (**primary**, **ghost**, **ink**) em três tamanhos (**sm**, **md**, **lg**). Todos com `border-radius: pill` e ícone opcional à direita.

### 8.1 Variantes

| Variante | Background | Color | Border | Shadow |
|---|---|---|---|---|
| **Primary** | `linear-gradient(180deg, #FE9A00, #E17100)` | `#FFF` | `1px solid rgba(255,255,255,.7)` | `--b2b-shadow-button` |
| **Ghost** | `transparent` | `--b2b-ink-900` | `1px solid --b2b-slate-300` | none |
| **Ink** | `linear-gradient(180deg, #020618, #0F172B)` | `#FFF` | `1px solid rgba(255,255,255,.18)` | `--b2b-shadow-button` |

### 8.2 Tamanhos

| Size | Padding | Font-size |
|---|---|---|
| `sm` | `10px 18px` | `13.5px` |
| `md` | `14px 26px` | `15px`   |
| `lg` | `18px 32px` | `16px`   |

### 8.3 Estados

| Estado | Comportamento |
|---|---|
| `:hover`   | `translateY(-1px)` + `filter: brightness(1.04)` + sombra honey 35% |
| `:active`  | `translateY(0)` + `filter: brightness(.94)` |
| `:focus`   | `outline: 3px solid rgba(59,130,246,.45)` + offset 2px |
| `:disabled`| `opacity: .55` + `cursor: not-allowed` + remove sombra |

### 8.4 CSS de referência

```css
.b2b-btn{
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 26px;
  border-radius: var(--b2b-radius-pill);
  background: linear-gradient(180deg, var(--b2b-honey-500), var(--b2b-honey-600));
  color: #fff;
  font: 500 15px/1 var(--b2b-font-body);
  border: 1px solid rgba(255,255,255,.7);
  box-shadow: var(--b2b-shadow-button);
  transition: transform var(--b2b-dur-fast) var(--b2b-ease-out),
              box-shadow var(--b2b-dur-base) var(--b2b-ease-out),
              filter    var(--b2b-dur-fast) var(--b2b-ease-out);
}
.b2b-btn:hover{
  transform: translateY(-1px);
  box-shadow: 0 14px 36px rgba(225,113,0,.35),
              0 8px  18px rgba(15,23,42,.16);
  filter: brightness(1.04);
}
```

---

## 9. Componentes

Biblioteca de **11 padrões** reutilizáveis. Todos seguem o mesmo glass-card como base.

### 9.1 `b2b-card` · Card base (glass)

```css
.b2b-card{
  background: var(--b2b-glass-strong);
  border: var(--b2b-glass-border);
  border-radius: var(--b2b-radius-xl);
  box-shadow: var(--b2b-shadow-card);
  padding: 32px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}
/* Glow radial decorativo */
.b2b-card::after{
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(280px 200px at 80% 110%, rgba(147,197,253,.22), transparent 60%),
    radial-gradient(220px 160px at 20% -10%, rgba(59,130,246,.10), transparent 60%);
  pointer-events: none;
}
```

### 9.2 `b2b-icon-tile` · Tile de ícone (64×64)

| Modifier | Background |
|---|---|
| `--danger` (default Problem) | `linear-gradient(180deg, rgba(251,44,54,.20), rgba(231,0,11,.20))` |
| `--brand` | `linear-gradient(180deg, rgba(255,185,0,.22), rgba(225,113,0,.20))` |
| `--info` | `linear-gradient(180deg, rgba(147,197,253,.22), rgba(59,130,246,.14))` |
| `--success` | `linear-gradient(180deg, rgba(34,197,94,.20), rgba(22,163,74,.18))` |

```css
.b2b-icon-tile{
  width: 56px; height: 56px;
  border-radius: var(--b2b-radius-md);
  display: flex; align-items: center; justify-content: center;
}
```

### 9.3 `b2b-eyebrow` · Eyebrow de seção

```css
.b2b-eyebrow{
  font: 400 13px/1 var(--b2b-font-mono);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--b2b-honey-500);
}
.b2b-eyebrow--danger { color: var(--b2b-danger-500); }
```

### 9.4 `b2b-chip` · Chip de tecnologia / brand

```css
.b2b-chip{
  display: inline-flex; align-items: center;
  padding: 10px 18px;
  border-radius: var(--b2b-radius-pill);
  background: var(--b2b-glass-strong);
  border: var(--b2b-glass-border);
  box-shadow: var(--b2b-shadow-pill);
  font: 500 13.5px/1 var(--b2b-font-body);
  color: var(--b2b-ink-900);
}
.b2b-chip--mono{
  font: 400 11px/1 var(--b2b-font-mono);
  letter-spacing: .16em;
  text-transform: uppercase;
}
```

### 9.5 `b2b-stat` · Stat (trio do hero)

```html
<div class="b2b-stat">
  <div class="b2b-stat__value">95%</div>
  <div class="b2b-stat__label">Match Rate</div>
  <div class="b2b-stat__desc">Fit cultural e técnico</div>
</div>
```

| Elemento | Estilo |
|---|---|
| `__value` | Space Grotesk 500 · `34px` · ink-900 · LH 1 |
| `__label` | JetBrains Mono · `10px` · tracking `.22em` · uppercase · slate-500 |
| `__desc`  | Inter · `13px` · slate-600 |

### 9.6 `b2b-card--talent` · Card de talento

```html
<div class="b2b-card b2b-card--talent">
  <div class="b2b-avatar">A</div>
  <h4 class="b2b-card__title">Ana Silva</h4>
  <div class="b2b-card__role">Senior Full Stack</div>
  <ul class="b2b-card__skills">
    <li class="b2b-chip b2b-chip--mono">React</li>
    <li class="b2b-chip b2b-chip--mono">Node.js</li>
    <li class="b2b-chip b2b-chip--mono">AWS</li>
  </ul>
  <p class="b2b-card__years">8 anos de experiência</p>
</div>
```

- Avatar: 60×60, círculo, borda `2px solid honey-400`
- Nome: Subheading (24px)
- Role: honey-500 · weight 500 · 14px
- Skills: row de chips mono

### 9.7 `b2b-card--testimonial` · Card de depoimento

```html
<div class="b2b-card b2b-card--testimonial">
  <div class="b2b-rating">★★★★★</div>
  <blockquote>"Conseguimos escalar nosso time tech em 3 meses."</blockquote>
  <footer>
    <div class="b2b-avatar b2b-avatar--sm">C</div>
    <div>
      <div class="b2b-cite-name">Carlos Mendes</div>
      <div class="b2b-cite-role">CTO, TechCorp</div>
    </div>
  </footer>
</div>
```

- Rating: honey-400 · letter-spacing `4px`
- Quote: Inter italic · `15.5px` · LH 1.7

### 9.8 `b2b-navbar-pill` · Navbar principal

```css
.b2b-navbar-pill{
  border-radius: var(--b2b-radius-pill);
  background: linear-gradient(90deg, rgba(255,255,255,0) 6%, rgba(255,255,255,.85) 32%);
  box-shadow: var(--b2b-shadow-menu);
  padding: 14px 26px;
  display: flex; align-items: center; gap: 32px;
  border: 1px solid rgba(255,255,255,.6);
}
```

### 9.9 `b2b-badge-success` · Badge de compliance

```css
.b2b-badge-success{
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 18px;
  border-radius: var(--b2b-radius-pill);
  background: var(--b2b-success-bg);
  color: var(--b2b-success-500);
  font: 500 13.5px/1 var(--b2b-font-body);
}
.b2b-badge-success::before{
  content: ""; width: 8px; height: 8px;
  border-radius: 50%;
  background: currentColor;
}
```

### 9.10 `b2b-timeline-step` · Step da seção Works

```html
<div class="b2b-card b2b-timeline-step">
  <div class="b2b-timeline-step__num">01</div>
  <h4>Entendimento</h4>
  <p>Conversamos sobre suas necessidades, stack técnica e cultura.</p>
</div>
```

- Número: JetBrains Mono · `22px` · weight 500 · honey-500

### 9.11 `b2b-section-head` · Header de seção (eyebrow + h2 + lede)

```html
<header class="b2b-section-head">
  <p class="b2b-eyebrow">A Solução</p>
  <h2 class="b2b-h2">Talentos sob demanda</h2>
  <p class="b2b-lede">Pool de developers brasileiros de alta performance…</p>
</header>
```

---

## 10. Padrões de Animação

Movimentos sutis, sempre com **ease-out** e duração curta. Nenhuma animação ultrapassa `520ms`. Respeitar `prefers-reduced-motion`.

| Padrão | Propriedade | Duração | Easing |
|---|---|---|---|
| **Fade-up scroll** | `opacity 0→1` + `translateY(24px→0)` | `520ms` | ease-out · stagger `80ms` |
| **Card hover**     | `translateY(-2px)` + shadow expand    | `260ms` | ease-out |
| **Button hover**   | `translateY(-1px)` + `brightness(1.04)` | `150ms` | ease-out |
| **Honey orb pulse** | mouse indicator: Y ±6px loop | `1.6s` | ease-in-out |
| **Hex grid glow**  | opacity `0.03 ↔ 0.08`           | `8s` loop | ease-in-out |
| **Chip hover**     | glass alpha `.74 → .92` + `scale(1.02)` | `200ms` | ease-out |

```css
:root{
  --b2b-ease-out   : cubic-bezier(.2,.7,.2,1);
  --b2b-ease-in-out: cubic-bezier(.65,.05,.36,1);
  --b2b-dur-fast   : 150ms;
  --b2b-dur-base   : 260ms;
  --b2b-dur-slow   : 520ms;
}

@media (prefers-reduced-motion: reduce){
  *, *::before, *::after{
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

---

## 11. Arquitetura das Seções

Cada seção tem um **propósito de jornada**, um **fundo característico** e uma **combinação de componentes** recorrente.

| # | Seção | Componentes | Fundo |
|---|---|---|---|
| **01** | **Hero** | H1 · lede · CTA primary · stat-trio glass · navbar pill · mouse indicator | Honeycomb + ink overlay |
| **02** | **Problem** | Eyebrow danger · H2 · 3 cards (icon-tile danger) | `#EEF4FA` · gradient |
| **03** | **Solution** | Eyebrow honey · H2 · lede · 3 talent cards · ilustração lateral | `#FFFFFF → #F8FAFC` |
| **04** | **Works** | Eyebrow · H2 · timeline vertical com 4 steps glass | `#FFFFFF` · linha honey |
| **05** | **Stack** | Eyebrow · H2 · lede · grid de 14 chips em 2 fileiras escalonadas | `#F8FAFC` · hex bg |
| **06** | **Squads** | Split 50/50 · H2 esquerda + 4 cards feature 2×2 · imagem time | `#F8FAFC` |
| **07** | **Social** | Eyebrow · H2 · row de chips logos · 3 testimonial cards | `#FAFAF8` · imagem |
| **08** | **Compliance** | Eyebrow · H2 · lede · 4 cards 2×2 com icon · success badge | `#EEF4FA` · suave |
| **09** | **CTA** | Eyebrow centralizado · H2 XXL · lede · CTA grande · 3 trust stats | `#FDF6EE` · honey orbs |

---

## 12. Organização de Código

### 12.1 Estrutura de pastas recomendada

```
/src/
├── styles/
│   ├── tokens.css            // :root vars (ver §16)
│   ├── reset.css             // normalize + box-sizing
│   ├── components.css        // .b2b-card, .b2b-btn, .b2b-chip…
│   ├── utilities.css         // .u-eyebrow, .u-stack-*, .u-grid-*
│   └── main.css              // entry: importa todos acima
│
├── components/
│   ├── Button/
│   ├── Card/
│   ├── Chip/
│   ├── Eyebrow/
│   ├── IconTile/
│   ├── NavbarPill/
│   ├── Stat/
│   └── TalentCard/
│
├── sections/
│   ├── 01-Hero/
│   ├── 02-Problem/
│   ├── 03-Solution/
│   ├── 04-Works/
│   ├── 05-Stack/
│   ├── 06-Squads/
│   ├── 07-Social/
│   ├── 08-Compliance/
│   └── 09-CTA/
│
├── assets/
│   ├── fonts/                // self-host woff2
│   ├── images/               // WebP / AVIF otimizados
│   └── icons/                // SVG inline
│
└── index.html                // landing principal
```

### 12.2 Ordem de importação CSS

```css
/* main.css */
@import "tokens.css";       /* 1. variáveis */
@import "reset.css";        /* 2. normalize */
@import "components.css";   /* 3. componentes */
@import "utilities.css";    /* 4. helpers (sempre por último) */
```

### 12.3 Estrutura de uma seção

```html
<section class="b2b-section b2b-problem" id="problem">
  <div class="b2b-container">
    <header class="b2b-section-head">
      <p class="b2b-eyebrow b2b-eyebrow--danger">O Desafio</p>
      <h2 class="b2b-h2">Os desafios da contratação tech</h2>
    </header>

    <div class="b2b-grid-3">
      <article class="b2b-card">…</article>
      <article class="b2b-card">…</article>
      <article class="b2b-card">…</article>
    </div>
  </div>
</section>
```

Convenção: **todo `<section>` tem um modifier `.b2b-{nome-da-seção}` + `<div class="b2b-container">` interno**.

---

## 13. Padrões Responsivos

### 13.1 Regras gerais

- ✅ **Mobile-first** — escreva CSS para mobile e escale para cima com `min-width`.
- ✅ **Tipografia fluida** — use `clamp(min, vw, max)` em todos os Display.
- ✅ **Stack vertical** — em mobile, qualquer grid 2/3/4 colunas vira 1 coluna.
- ✅ **Padding-y de seção** — reduz de `120 → 64px` conforme o viewport encolhe.
- ✅ **Imagens decorativas** — `aria-hidden` e somem no mobile.
- ✅ **Navbar pill** — vira hamburger fixo no topo abaixo de `768px`.

### 13.2 Tipografia fluida

```css
.b2b-h1{
  font-size: clamp(40px, 6.4vw, 88px);
  line-height: 1.02;
  letter-spacing: -0.045em;
}
.b2b-h2{
  font-size: clamp(32px, 4.4vw, 52px);
  line-height: 1.08;
  letter-spacing: -0.04em;
}
.b2b-h3{
  font-size: clamp(22px, 2.4vw, 27.2px);
  line-height: 1.08;
}
.b2b-body-l{
  font-size: clamp(16px, 1.6vw, 19.2px);
  line-height: 1.70;
}
```

### 13.3 Grid responsivo

```css
.b2b-grid-3{
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--b2b-space-4);
}
@media (min-width: 768px){
  .b2b-grid-3{ grid-template-columns: repeat(2, 1fr); gap: var(--b2b-space-5); }
}
@media (min-width: 1024px){
  .b2b-grid-3{ grid-template-columns: repeat(3, 1fr); }
}
```

### 13.4 Section padding fluido

```css
.b2b-section{
  padding-block: clamp(64px, 8vw, 120px);
  padding-inline: clamp(20px, 5vw, 80px);
}
```

---

## 14. Performance

As imagens das seções **01/03/06/07** são pesadas (1–6 MB no original). Tratar isso é o ganho **#1 de LCP**.

### 14.1 Imagens

- ✅ Converter tudo para **WebP/AVIF** com qualidade `78–82`.
- ✅ **Hero image:** gerar 4 sizes (`640/1024/1440/1920`) e usar `srcset`.
- ✅ **Lazy-load** em todas as imagens abaixo do fold (`loading="lazy"`).
- ✅ **Preload** só a imagem do hero: `<link rel="preload" as="image">`.
- ✅ **Bee illustration** (PNG transparente 6 MB) → re-exportar em SVG ou WebP `< 200 KB`.

### 14.2 Fontes

- ✅ **Self-host** as 3 famílias em `/assets/fonts/` com `woff2`.
- ✅ Importar só os pesos usados: **Space Grotesk 300/500**, **Inter 400/500**, **JetBrains Mono 400**.
- ✅ `font-display: swap` em todas.
- ✅ **Preload** apenas Space Grotesk 300 e Inter 400 (críticas para o LCP).
- ✅ Definir `size-adjust` ou `@font-face` com fallback metric overrides para evitar CLS.

### 14.3 CSS & JS

- ✅ Manter CSS abaixo de **50 KB minificado** — o sistema cabe nisso.
- ✅ **Critical CSS** inline no `<head>` (tokens + acima da dobra).
- ✅ JS apenas para `IntersectionObserver` (fade-up) e nav mobile.
- ✅ `defer` em todos os scripts não críticos.
- ✅ Sem bibliotecas de animação — usar CSS transitions nativas.

### 14.4 Métricas-alvo

| Métrica | Alvo |
|---|---|
| **LCP** | `< 2.5s` |
| **CLS** | `< 0.05` |
| **INP** | `< 200ms` |
| **Total weight (above-fold)** | `< 1.5 MB` |
| **Lighthouse mobile (performance)** | `≥ 90` |

---

## 15. Naming Conventions

### 15.1 Padrão BEM com prefixo `b2b-`

```css
/* Block */
.b2b-card                       /* componente raiz */

/* Element */
.b2b-card__icon                 /* elemento dentro do block */
.b2b-card__title
.b2b-card__body

/* Modifier */
.b2b-card--danger               /* variante temática */
.b2b-card--talent
.b2b-card--testimonial
.b2b-btn--ghost
.b2b-btn--lg

/* Utility (prefixo u-) */
.u-eyebrow
.u-eyebrow--danger
.u-stack-md                     /* gap 24px vertical */
.u-grid-3
```

### 15.2 Tokens CSS

```
--b2b-{categoria}-{token}-{escala}

--b2b-color-honey-400
--b2b-color-ink-900
--b2b-fs-display-l
--b2b-space-6
--b2b-radius-xl
--b2b-shadow-card
--b2b-dur-base
```

### 15.3 Seções e arquivos

```
{NN}-{slug}              →   NN = ordem na landingpage

01-Hero/
02-Problem/
03-Solution/
```

---

## 16. CSS Variables

Cole este bloco em `tokens.css` e importe em `main.css`. Todas as variáveis são consumidas pelos componentes.

```css
:root{
  /* ─── Brand · Honey ─── */
  --b2b-honey-300: #FFD24D;
  --b2b-honey-400: #FFB900;
  --b2b-honey-500: #FE9A00;
  --b2b-honey-600: #E17100;

  /* ─── Neutrals ─── */
  --b2b-ink-900:   #020618;
  --b2b-slate-700: #314158;
  --b2b-slate-600: #45556C;
  --b2b-slate-500: #64748B;
  --b2b-slate-400: #94A3B8;
  --b2b-slate-300: #CBD5E1;
  --b2b-slate-200: #E2E8F0;
  --b2b-slate-100: #EAF2F8;
  --b2b-slate-50:  #F8FAFC;

  /* ─── Surfaces ─── */
  --b2b-bg-base: #FFFFFF;
  --b2b-bg-soft: #F8FAFC;
  --b2b-bg-cool: #EEF4FA;
  --b2b-bg-warm: #FDF6EE;

  /* ─── Semantic ─── */
  --b2b-danger-500:  #FF6467;
  --b2b-info-500:    #3B82F6;
  --b2b-success-500: #16A34A;
  --b2b-success-bg:  #E8F6EE;

  /* ─── Glass ─── */
  --b2b-glass-strong: linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.52));
  --b2b-glass-medium: linear-gradient(180deg, rgba(255,255,255,.74), rgba(255,255,255,.42));
  --b2b-glass-soft:   linear-gradient(180deg, rgba(255,255,255,.45), rgba(255,255,255,.22));
  --b2b-glass-border: 1px solid rgba(255,255,255,.55);

  /* ─── Shadow ─── */
  --b2b-shadow-card:    0 8px 24px rgba(15,23,42,.05),
                        0 26px 70px rgba(148,163,184,.14);
  --b2b-shadow-card-sm: 0 4px 12px rgba(15,23,42,.04),
                        0 12px 36px rgba(148,163,184,.12);
  --b2b-shadow-button:  0 10px 30px rgba(15,23,42,.18);
  --b2b-shadow-menu:    0 10px 40px rgba(148,163,184,.16);
  --b2b-shadow-pill:    0 4px 14px rgba(15,23,42,.06);

  /* ─── Type ─── */
  --b2b-font-display: "Space Grotesk", system-ui, sans-serif;
  --b2b-font-body:    "Inter", system-ui, sans-serif;
  --b2b-font-mono:    "JetBrains Mono", ui-monospace, monospace;

  --b2b-fs-display-xl: 88px;
  --b2b-fs-display-l:  52px;
  --b2b-fs-display-m:  37.6px;
  --b2b-fs-heading:    27.2px;
  --b2b-fs-subheading: 24px;
  --b2b-fs-body-xl:    22px;
  --b2b-fs-body-l:     19.2px;
  --b2b-fs-body:       16px;
  --b2b-fs-body-sm:    15.68px;
  --b2b-fs-meta:       14px;
  --b2b-fs-eyebrow:    13px;
  --b2b-fs-caption:    11px;

  --b2b-lh-tight:  1.02;
  --b2b-lh-snug:   1.10;
  --b2b-lh-normal: 1.55;
  --b2b-lh-loose:  1.70;

  --b2b-tracking-display: -0.045em;
  --b2b-tracking-h2:      -0.04em;
  --b2b-tracking-h3:      -0.03em;
  --b2b-tracking-eyebrow: 0.22em;

  /* ─── Spacing (4-pt) ─── */
  --b2b-space-1:  4px;
  --b2b-space-2:  8px;
  --b2b-space-3:  12px;
  --b2b-space-4:  16px;
  --b2b-space-5:  24px;
  --b2b-space-6:  32px;
  --b2b-space-7:  48px;
  --b2b-space-8:  64px;
  --b2b-space-9:  80px;
  --b2b-space-10: 96px;
  --b2b-space-11: 128px;
  --b2b-space-12: 160px;

  /* ─── Radius ─── */
  --b2b-radius-xs:   8px;
  --b2b-radius-sm:   12px;
  --b2b-radius-md:   14px;
  --b2b-radius-lg:   20px;
  --b2b-radius-xl:   28px;
  --b2b-radius-2xl:  36px;
  --b2b-radius-pill: 9999px;

  /* ─── Layout ─── */
  --b2b-container-max:   1280px;
  --b2b-container-pad-d: 80px;
  --b2b-container-pad-t: 48px;
  --b2b-container-pad-m: 20px;
  --b2b-section-pad-y:   120px;

  /* ─── Motion ─── */
  --b2b-ease-out:    cubic-bezier(.2,.7,.2,1);
  --b2b-ease-in-out: cubic-bezier(.65,.05,.36,1);
  --b2b-dur-fast: 150ms;
  --b2b-dur-base: 260ms;
  --b2b-dur-slow: 520ms;

  /* ─── Z-index ─── */
  --b2b-z-base:    0;
  --b2b-z-decor:   1;
  --b2b-z-content: 10;
  --b2b-z-nav:     100;
  --b2b-z-overlay: 1000;
}
```

---

### Componentes mínimos para shipar

`.b2b-card` · `.b2b-btn` (3 variantes) · `.b2b-chip` · `.b2b-eyebrow` · `.b2b-stat` · `.b2b-icon-tile` · `.b2b-badge-success` · `.b2b-navbar-pill`

Tudo abaixo é variação por modifier.

---

**Best2bee Design System** · v1.0 · Maio 2026
