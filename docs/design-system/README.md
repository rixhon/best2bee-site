# Design System

## Objetivo

Este documento explica como o Design System Best2bee e aplicado no codigo. Ele serve como referencia tecnica e pratica para futuros desenvolvedores implementarem novas secoes vindas do Figma com consistencia visual.

## Fonte Oficial

A fonte oficial do Design System e:

```txt
src/data/design-system.md
```

Os tokens aplicados no projeto ficam em:

```txt
src/app/globals.css
tailwind.config.ts
```

Regra principal: nao altere tokens sem atualizar a fonte oficial e validar o impacto visual.

## Planos Relacionados

- [Tokens finais](./final-tokens.md)
- [Plano de tokenizacao](./tokenization-plan.md)

## Principios Visuais

O sistema visual se apoia em quatro pilares:

- `Glass + Light`: cards translúcidos, bordas suaves, blur e sombras difusas.
- `Honey accent`: laranja/honey usado em CTAs, eyebrows e detalhes pontuais.
- `Display Light`: headings grandes com Space Grotesk leve e bold seletivo.
- `Mono Eyebrow`: labels tecnicas em JetBrains Mono uppercase com tracking amplo.

## Tipografia

### Familias

| Uso | Fonte | Pesos |
|---|---|---|
| Display / headings | Space Grotesk | 300, 500 |
| Texto / UI | Inter | 400, 500 |
| Eyebrows / labels tecnicas | JetBrains Mono | 400 |

No codigo, as fontes sao carregadas em `src/app/layout.tsx` via `next/font` e expostas por CSS variables:

```css
--b2b-font-display
--b2b-font-body
--b2b-font-mono
```

### Escala Tipografica

| Token | Valor | Uso |
|---|---:|---|
| `--b2b-fs-display-xl` | `88px` | H1 da Hero |
| `--b2b-fs-display-l` | `55.2px` | H2 de secao |
| `--b2b-fs-display-m` | `37.6px` | Sub-secoes |
| `--b2b-fs-heading` | `27.2px` | H3 de cards |
| `--b2b-fs-subheading` | `24px` | Titulos menores |
| `--b2b-fs-body-xl` | `22px` | Lede da Hero |
| `--b2b-fs-body-l` | `19.2px` | Lede de secao |
| `--b2b-fs-body` | `16px` | Texto padrao |
| `--b2b-fs-body-sm` | `15.68px` | Texto de card |
| `--b2b-fs-meta` | `14px` | Navegacao e UI |
| `--b2b-fs-eyebrow` | `13px` | Eyebrows |
| `--b2b-fs-caption` | `11px` | Captions e chips |

### Line-height e tracking

| Token | Valor | Uso |
|---|---:|---|
| `--b2b-lh-tight` | `1.02` | Display XL |
| `--b2b-lh-snug` | `1.10` | Display M |
| `--b2b-lh-normal` | `1.55` | Texto intermediario |
| `--b2b-lh-loose` | `1.70` | Corpo e ledes |
| `--b2b-tracking-display` | `-0.045em` | H1 |
| `--b2b-tracking-h2` | `-0.04em` | H2 |
| `--b2b-tracking-h3` | `-0.03em` | H3 |
| `--b2b-tracking-eyebrow` | `0.22em` | Eyebrows |

### Uso pratico

```tsx
<h2 className="font-display text-display-l font-light text-ink-900">
  Talentos sob demanda
</h2>
```

Para headings altamente responsivos e fiéis ao Figma, use `clamp()` com tokens:

```tsx
<h1 className="font-display text-[clamp(42px,7vw,60px)] laptop:text-[clamp(56px,5.6vw,var(--b2b-fs-display-xl))]">
  Escale sua equipe
</h1>
```

## Cores

### Brand Honey

| Token | Hex | Uso |
|---|---|---|
| `--b2b-honey-300` | `#FFD24D` | Hover / highlight |
| `--b2b-honey-400` | `#FFB900` | Brand principal |
| `--b2b-honey-500` | `#FE9A00` | Gradiente de botao |
| `--b2b-honey-600` | `#E17100` | Gradiente profundo |

Uso Tailwind:

```tsx
<span className="text-honey-500">A Solucao</span>
```

### Ink e Slate

| Token | Hex | Uso |
|---|---|---|
| `--b2b-ink-900` | `#020618` | Headings |
| `--b2b-slate-700` | `#314158` | Body strong |
| `--b2b-slate-600` | `#45556C` | Body padrao |
| `--b2b-slate-500` | `#64748B` | Meta / labels |
| `--b2b-slate-400` | `#94A3B8` | Muted |
| `--b2b-slate-300` | `#CBD5E1` | Bordas suaves |
| `--b2b-slate-200` | `#E2E8F0` | Hairlines |
| `--b2b-slate-100` | `#EAF2F8` | Fundo cool |
| `--b2b-slate-50` | `#F8FAFC` | Fundo soft |

### Superficies

| Token | Hex | Uso |
|---|---|---|
| `--b2b-bg-base` | `#FFFFFF` | Fundo base |
| `--b2b-bg-soft` | `#F8FAFC` | Secoes suaves |
| `--b2b-bg-cool` | `#EEF4FA` | Problem / Compliance |
| `--b2b-bg-cool-2` | `#EAF2F8` | Variacao cool |
| `--b2b-bg-warm` | `#FDF6EE` | CTA |

### Semanticas

| Token | Hex | Uso |
|---|---|---|
| `--b2b-danger-500` | `#FF6467` | Problem / alertas |
| `--b2b-info-500` | `#3B82F6` | Glows informativos |
| `--b2b-success-500` | `#16A34A` | Compliance / sucesso |
| `--b2b-success-bg` | `#E8F6EE` | Fundo de badge |

## Glassmorphism

Tokens:

```css
--b2b-glass-strong
--b2b-glass-medium
--b2b-glass-soft
--b2b-glass-border
```

Uso recomendado:

```tsx
<GlassCard className="p-b2b-6">
  Conteudo
</GlassCard>
```

Use glass para:

- cards de metricas;
- cards de depoimentos;
- cards de talentos;
- navbar pill;
- chips e badges especiais.

Evite glass em blocos com muito texto, pois pode reduzir legibilidade.

## Spacing

Sistema baseado em 4pt.

| Token | Valor | Uso |
|---|---:|---|
| `--b2b-space-1` | `4px` | Detalhes |
| `--b2b-space-2` | `8px` | Gap minimo |
| `--b2b-space-3` | `12px` | Titulo -> descricao |
| `--b2b-space-4` | `16px` | Padding pequeno |
| `--b2b-space-5` | `24px` | Gap entre cards |
| `--b2b-space-6` | `32px` | Padding interno de card |
| `--b2b-space-7` | `48px` | Lede -> conteudo |
| `--b2b-space-8` | `64px` | Padding mobile |
| `--b2b-space-9` | `80px` | Padding tablet |
| `--b2b-space-10` | `96px` | Padding laptop |
| `--b2b-space-11` | `128px` | Padding desktop |
| `--b2b-space-12` | `160px` | Padding wide |

Uso Tailwind:

```tsx
<section className="py-b2b-8 tablet:py-b2b-9 laptop:py-b2b-10">
  ...
</section>
```

## Grid e Containers

### Container

Token principal:

```css
--b2b-container-max: 1280px;
```

Paddings:

| Breakpoint | Padding |
|---|---:|
| Mobile | `20px` |
| Tablet | `48px` |
| Laptop | `64px` |
| Desktop | `80px` |

Uso recomendado:

```tsx
<Container>
  Conteudo
</Container>
```

### Grid

Padrao geral:

- Mobile: 1 coluna.
- Tablet: 2 colunas quando fizer sentido.
- Laptop/Desktop: 3 ou 4 colunas.
- Gutter desktop recomendado: `24px`.

Exemplo:

```tsx
<div className="grid gap-b2b-4 tablet:grid-cols-2 laptop:grid-cols-3 laptop:gap-b2b-5">
  ...
</div>
```

## Breakpoints

| Nome | Min-width |
|---|---:|
| `tablet` | `768px` |
| `laptop` | `1024px` |
| `desktop` | `1280px` |
| `wide` | `1560px` |

Sempre implemente mobile-first:

```tsx
className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3"
```

## Radius

| Token | Valor | Uso |
|---|---:|---|
| `--b2b-radius-xs` | `8px` | Detalhes |
| `--b2b-radius-sm` | `12px` | Inputs |
| `--b2b-radius-md` | `14px` | Icon tiles |
| `--b2b-radius-lg` | `20px` | Cards densos |
| `--b2b-radius-xl` | `28px` | Glass cards |
| `--b2b-radius-2xl` | `36px` | Containers grandes |
| `--b2b-radius-pill` | `9999px` | Botoes, chips, navbar |

Uso Tailwind:

```tsx
<div className="rounded-b2b-xl" />
```

## Sombras

| Token | Uso |
|---|---|
| `--b2b-shadow-card` | Card padrao |
| `--b2b-shadow-card-sm` | Card secundario |
| `--b2b-shadow-button` | Botoes primary/ink |
| `--b2b-shadow-menu` | Navbar pill |
| `--b2b-shadow-pill` | Chips e pills |

Uso Tailwind:

```tsx
<div className="shadow-b2b-card" />
```

## Variaveis CSS

As variaveis seguem o prefixo `--b2b-*`.

Categorias:

- `--b2b-honey-*`
- `--b2b-ink-*`
- `--b2b-slate-*`
- `--b2b-bg-*`
- `--b2b-danger-*`
- `--b2b-info-*`
- `--b2b-success-*`
- `--b2b-glass-*`
- `--b2b-shadow-*`
- `--b2b-font-*`
- `--b2b-fs-*`
- `--b2b-lh-*`
- `--b2b-tracking-*`
- `--b2b-space-*`
- `--b2b-radius-*`
- `--b2b-container-*`
- `--b2b-section-*`
- `--b2b-ease-*`
- `--b2b-dur-*`
- `--b2b-z-*`

## Tailwind Tokens

`tailwind.config.ts` mapeia as variaveis para utilitarios.

Exemplos:

| Token Tailwind | Origem |
|---|---|
| `text-honey-500` | `--b2b-honey-500` |
| `text-ink-900` | `--b2b-ink-900` |
| `bg-surface-soft` | `--b2b-bg-soft` |
| `font-display` | `--b2b-font-display` |
| `text-display-l` | `--b2b-fs-display-l` |
| `p-b2b-6` | `--b2b-space-6` |
| `rounded-b2b-xl` | `--b2b-radius-xl` |
| `shadow-b2b-card` | `--b2b-shadow-card` |

## Botoes

Componente oficial:

```txt
src/components/ui/Button.tsx
```

Variantes:

| Variante | Uso |
|---|---|
| `primary` | CTA principal honey |
| `ghost` | CTA secundario |
| `ink` | CTA escuro |

Tamanhos:

| Size | Padding | Fonte |
|---|---|---|
| `sm` | `10px 18px` | `13.5px` |
| `md` | `14px 26px` | `15px` |
| `lg` | `18px 32px` | `16px` |

Uso como botao:

```tsx
<Button>Agendar conversa</Button>
<Button variant="ghost">Ver solucao</Button>
<Button variant="ink" size="lg">Comecar agora</Button>
```

Uso como link:

```tsx
<a className={buttonClassName()} href="#cta">
  Agendar conversa
</a>
```

Estados:

- hover: `translateY(-1px)` + brightness.
- active: volta para `translateY(0)`.
- disabled: opacidade reduzida e sem sombra.
- focus: outline global em `globals.css`.

## Inputs

O estado atual usa inputs dentro de `LeadForm`.

Padrao visual atual:

```tsx
className="min-h-11 rounded-md border border-border bg-background px-3 py-2 text-sm"
```

Diretriz para evolucao:

- migrar `rounded-md` para `rounded-b2b-sm`;
- usar `text-body-sm` ou `text-meta`;
- manter `border-border` para bordas padrao;
- adicionar estados `focus`, `invalid` e `disabled` com tokens;
- extrair um `FormField` reutilizavel quando houver mais formularios.

Exemplo recomendado:

```tsx
<input className="min-h-11 rounded-b2b-sm border border-border bg-background px-b2b-4 py-b2b-3 text-body-sm text-ink-900" />
```

## Componentes Reutilizaveis

### `Container`

Use para toda secao ou bloco que precisa respeitar largura maxima.

```tsx
<Container>
  ...
</Container>
```

### `Section`

Wrapper semantico com spacing padrao.

```tsx
<Section id="problem">
  ...
</Section>
```

### `SectionTitle`

Compoe eyebrow, titulo e descricao com tipografia oficial.

```tsx
<SectionTitle
  eyebrow="02 Problem Section"
  title="Problem"
  description="Descricao da secao"
/>
```

### `GlassCard`

Card base com glassmorphism.

```tsx
<GlassCard className="p-b2b-6">
  ...
</GlassCard>
```

## Padroes Visuais

### Glass Card

Use para elementos flutuantes, metricas, depoimentos e cards visuais.

```tsx
<GlassCard className="p-b2b-6">
  <h3 className="font-display text-heading">Titulo</h3>
  <p className="text-body-sm text-slate-600">Texto</p>
</GlassCard>
```

### Eyebrow

Use JetBrains Mono, uppercase e Honey.

```tsx
<p className="font-mono text-eyebrow uppercase text-honey-500">
  03 Solution Section
</p>
```

### Bold seletivo

Em headings display, use peso `500` apenas em palavras-chave.

```tsx
<h1 className="font-display font-light">
  Escale sua <strong className="font-medium">equipe</strong>
</h1>
```

### Honey com moderacao

Use Honey em:

- botoes;
- eyebrows;
- indicadores;
- contornos;
- detalhes decorativos.

Nao use Honey como fundo amplo de secao.

## Regras de Responsividade

- Comece sempre por mobile.
- Use `Container` para padding lateral.
- Use `clamp()` para headings de alta fidelidade visual.
- Evite larguras fixas sem `max-width`.
- Cards devem empilhar em mobile.
- Imagens decorativas devem ser `aria-hidden` e nao podem causar overflow.
- CTAs importantes devem ter area de toque confortavel.

Checklist:

- [ ] Sem overflow horizontal em `390px`.
- [ ] Layout bom em `768px`.
- [ ] Layout bom em `1024px`.
- [ ] Layout fiel em `1280px+`.
- [ ] Textos continuam legiveis sobre glass/background.

## Padroes de Animacao

Fonte tecnica:

```txt
src/lib/motion.ts
```

Variants disponiveis:

| Variant | Comportamento |
|---|---|
| `fadeUp` | opacity `0 -> 1`, y `24 -> 0` |
| `staggerContainer` | stagger `80ms`, delay `120ms` |
| `scaleIn` | opacity + scale `0.96 -> 1` |
| `revealOpacity` | fade simples |

Uso:

```tsx
<motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
  ...
</motion.div>
```

Regras:

- Duracao padrao: `520ms`.
- Easing: `cubic-bezier(.2,.7,.2,1)`.
- Respeitar `prefers-reduced-motion`.
- Animar `opacity`, `transform` e `scale`.
- Evitar animar layout.

## Como Implementar uma Nova Secao

1. Consulte o Figma via MCP.
2. Salve assets em `public/figma/{section}/`.
3. Crie a secao em `src/components/sections/{section}/` se ela for complexa.
4. Use `Container`, `Section`, `SectionTitle`, `Button` e `GlassCard`.
5. Use tokens existentes antes de valores arbitrarios.
6. Use `fadeUp` e `staggerContainer` para entrada.
7. Valide desktop, tablet e mobile.
8. Rode `typecheck`, `lint` e `build`.

## Quando Criar ou Alterar Tokens

Crie ou altere tokens somente quando:

- houver repeticao real em mais de uma secao;
- o valor representar uma decisao de sistema;
- a mudanca for validada contra o Figma;
- a documentacao em `src/data/design-system.md` tambem for atualizada.

Evite criar tokens para ajustes pontuais de uma unica secao. Para fidelidade visual localizada, valores arbitrarios do Tailwind sao aceitaveis.
