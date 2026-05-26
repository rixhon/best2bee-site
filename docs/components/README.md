# Componentes

Esta documentacao funciona como um mini Storybook tecnico do projeto. Ela descreve objetivo, props, comportamento, responsividade, animacoes, dependencias, boas praticas e exemplos de uso dos componentes existentes.

## Organizacao

```txt
src/components/
  animations/
  forms/
  layout/
  sections/
  sections/hero/
  ui/
```

## Arquitetura

- [Arquitetura de componentes](./component-architecture.md)
- [Sistema oficial de animacoes](./official-animation-system.md)

## Regras Gerais

- Componentes devem ter uma responsabilidade clara.
- Props devem ser explicitas e pequenas.
- Reutilize `Container`, `Section`, `SectionTitle`, `Button` e `GlassCard` antes de criar novos wrappers visuais.
- Dados estaticos de secoes complexas devem ficar em arquivos `*.data.ts`.
- Componentes com Framer Motion, hooks ou browser APIs devem declarar `"use client"`.
- Alteracoes estruturais em componentes compartilhados devem atualizar ADRs quando criarem novo padrao.
- Novo componente reutilizavel deve ser adicionado a este documento.

## UI Primitives

### `Button`

Arquivo: `src/components/ui/Button.tsx`

Objetivo:

- Renderizar botoes HTML com estilos do Design System.
- Centralizar variantes, tamanhos, estados de hover, active e disabled.
- Expor `buttonClassName` para aplicar visual de botao em elementos que nao sao `<button>`, como links.

Props:

- Herda `ButtonHTMLAttributes<HTMLButtonElement>`.
- `variant?: "primary" | "ghost" | "ink"`.
- `size?: "sm" | "md" | "lg"`.
- `className?: string`.
- `type?: "button" | "submit" | "reset"`, com default `button`.

Comportamento:

- `primary` usa gradiente honey e sombra de botao.
- `ghost` usa fundo transparente e texto ink.
- `ink` usa gradiente escuro.
- Estados disabled removem interacao e reduzem opacidade.
- `buttonClassName` compoe classes com `cx`.

Responsividade:

- Os tamanhos base sao fixos por variante `sm`, `md` e `lg`.
- Ajustes fluidos devem ser adicionados via `className`, como ocorre nos CTAs da Hero.

Animacoes:

- Usa transicoes CSS para `transform`, `box-shadow` e `filter`.
- Aplica hover com leve translate e brightness.

Dependencias:

- `cx` de `src/lib/styles.ts`.
- Tokens `--b2b-*` de `src/app/globals.css`.
- Classes Tailwind configuradas em `tailwind.config.ts`.

Boas praticas:

- Use `Button` para acoes de formulario.
- Use `buttonClassName` para links com aparencia de botao.
- Nao use `Button` para navegacao se o elemento correto for `<a>`.

Exemplo:

```tsx
import { Button } from "@/components/ui/Button";

export function ExampleFormAction() {
  return <Button type="submit">Enviar lead</Button>;
}
```

Exemplo com link:

```tsx
import { buttonClassName } from "@/components/ui/Button";

export function ExampleLinkAction() {
  return (
    <a className={buttonClassName({ variant: "ghost" })} href="#solution">
      Ver solucao
    </a>
  );
}
```

### `Container`

Arquivo: `src/components/ui/Container.tsx`

Objetivo:

- Padronizar largura maxima e padding horizontal responsivo.
- Evitar repeticao de classes de layout nas secoes.

Props:

- Herda `ComponentPropsWithoutRef<"div">`.
- Aceita `className`, `children` e atributos HTML de `div`.

Comportamento:

- Renderiza uma `div`.
- Combina `layoutClassNames.responsiveContainer` com `className`.

Responsividade:

- Usa padding mobile, tablet, laptop e desktop definido por tokens.
- Usa `max-w-b2b-container`.

Animacoes:

- Nao possui animacao propria.

Dependencias:

- `cx` e `layoutClassNames` de `src/lib/styles.ts`.

Boas praticas:

- Use dentro de secoes para alinhar conteudo ao grid global.
- Evite recriar containers com paddings manuais.

Exemplo:

```tsx
import { Container } from "@/components/ui/Container";

export function ExampleSectionContent() {
  return <Container>Conteudo alinhado ao grid.</Container>;
}
```

### `GlassCard`

Arquivo: `src/components/ui/GlassCard.tsx`

Objetivo:

- Aplicar o padrao glassmorphism do Design System.
- Permitir renderizacao polimorfica com a prop `as`.

Props:

- `as?: ElementType`, com default `div`.
- Herda as props do elemento informado em `as`.
- Aceita `className` para ajustes locais.

Comportamento:

- Renderiza o elemento definido por `as`.
- Aplica borda, background glass, radius, sombra e blur.

Responsividade:

- Nao define grid ou tamanho por conta propria.
- Responsividade deve ser composta via `className`.

Animacoes:

- Nao possui animacao propria.

Dependencias:

- `cx` e `surfaceClassNames.glassCard` de `src/lib/styles.ts`.
- Tokens de glass, radius e shadow do Design System.

Boas praticas:

- Use para cards com superficie translucida.
- Escolha `as` semanticamente, por exemplo `as="dl"` para metricas.

Exemplo:

```tsx
import { GlassCard } from "@/components/ui/GlassCard";

export function ExampleMetricCard() {
  return (
    <GlassCard as="dl" className="grid gap-b2b-4 p-b2b-6">
      <dt>Match Rate</dt>
      <dd>95%</dd>
    </GlassCard>
  );
}
```

### `Section`

Arquivo: `src/components/ui/Section.tsx`

Objetivo:

- Padronizar wrapper semantico de secoes.
- Aplicar spacing vertical do Design System quando desejado.

Props:

- Herda `ComponentPropsWithoutRef<"section">`.
- `spacing?: "default" | "none"`, com default `default`.
- Aceita `className`, `id`, `aria-labelledby` e demais atributos de `section`.

Comportamento:

- Renderiza uma `section`.
- Quando `spacing` e `default`, aplica `layoutClassNames.sectionSpacing`.
- Quando `spacing` e `none`, nao aplica padding vertical padrao.

Responsividade:

- O spacing default cresce por breakpoint: base, tablet e laptop.

Animacoes:

- Nao possui animacao propria.

Dependencias:

- `cx` e `layoutClassNames` de `src/lib/styles.ts`.

Boas praticas:

- Use `aria-labelledby` quando a secao tiver titulo.
- Use `spacing="none"` apenas quando a secao tiver composicao visual propria, como Hero.

Exemplo:

```tsx
import { Section } from "@/components/ui/Section";

export function ExampleSection() {
  return (
    <Section id="example" aria-labelledby="example-title">
      <h2 id="example-title">Titulo</h2>
    </Section>
  );
}
```

### `SectionTitle`

Arquivo: `src/components/ui/SectionTitle.tsx`

Objetivo:

- Renderizar o bloco textual padrao de abertura de uma secao.
- Unificar eyebrow, titulo e descricao.

Props:

- `eyebrow?: string`.
- `title: string`.
- `description?: string`.

Comportamento:

- Renderiza eyebrow opcional em mono uppercase.
- Renderiza titulo em `h2`.
- Renderiza descricao opcional abaixo do titulo.

Responsividade:

- Usa `clamp()` para titulo e descricao.
- Mantem largura maxima de texto em `max-w-2xl`.

Animacoes:

- Nao possui animacao propria.
- Pode ser envolvido por `RevealOnScroll`.

Dependencias:

- Tokens de tipografia, cor, spacing e tracking.

Boas praticas:

- Use em secoes de conteudo abaixo da Hero.
- Garanta que a secao use `aria-labelledby` apontando para um heading quando acessibilidade exigir.

Exemplo:

```tsx
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ExampleTitle() {
  return (
    <SectionTitle
      eyebrow="02 Problem Section"
      title="Problema"
      description="Descricao curta da secao."
    />
  );
}
```

## Layout

### `Header`

Arquivo: `src/components/layout/Header.tsx`

Objetivo:

- Fornecer um header global simples para navegacao.
- Servir como estrutura base caso a landing use navegacao global fora da Hero.

Props:

- Nao recebe props.

Comportamento:

- Renderiza header sticky.
- Mostra nome do site a partir de `SITE_CONFIG`.
- Renderiza links de `NAV_ITEMS`.
- Renderiza CTA visual usando `buttonClassName`.

Responsividade:

- Navegacao fica oculta no mobile.
- Links aparecem a partir de `tablet`.
- Usa `Container` para alinhamento.

Animacoes:

- Usa transicao de cor nos links.
- Nao usa Framer Motion.

Dependencias:

- `SITE_CONFIG` e `NAV_ITEMS` de `src/lib/constants.ts`.
- `Container`.
- `buttonClassName`.

Boas praticas:

- Evite usar junto com `HeroNavbar` sem revisar duplicidade de navegacao.
- Mantenha links sincronizados com IDs reais das secoes.

Exemplo:

```tsx
import { Header } from "@/components/layout/Header";

export function ExampleLayout() {
  return <Header />;
}
```

### `Footer`

Arquivo: `src/components/layout/Footer.tsx`

Objetivo:

- Renderizar rodape simples da landing.
- Mostrar nome do projeto e nota estrutural.

Props:

- Nao recebe props.

Comportamento:

- Renderiza `footer` com borda superior.
- Usa `SITE_CONFIG.name`.

Responsividade:

- Conteudo empilha em mobile.
- Em `tablet`, alinha em linha com distribuicao entre extremidades.

Animacoes:

- Nao possui animacao.

Dependencias:

- `SITE_CONFIG`.
- `Container`.

Boas praticas:

- Atualize o texto quando houver conteudo final de marca/legal.
- Mantenha informacoes legais futuras aqui ou em subcomponentes dedicados.

Exemplo:

```tsx
import { Footer } from "@/components/layout/Footer";

export function ExamplePage() {
  return <Footer />;
}
```

## Animacoes

### `FadeIn`

Arquivo: `src/components/animations/FadeIn.tsx`

Objetivo:

- Aplicar animacao simples de entrada em elementos.
- Respeitar preferencia de reducao de movimento.

Props:

- Herda `HTMLMotionProps<"div">`.
- Aceita props de `motion.div`, como `className`, `children`, `transition` e eventos.

Comportamento:

- Usa `initial="hidden"` e `animate="visible"`.
- Quando `useReducedMotion()` retorna true, desativa initial e animate.

Responsividade:

- Nao altera layout responsivo.

Animacoes:

- Usa variant `revealOpacity` de `src/lib/motion.ts`.

Dependencias:

- `framer-motion`.
- `revealOpacity` de `src/lib/motion.ts`.

Boas praticas:

- Use para animacoes imediatas ao montar.
- Para animacao ao entrar na viewport, prefira `RevealOnScroll`.

Exemplo:

```tsx
import { FadeIn } from "@/components/animations/FadeIn";

export function ExampleFade() {
  return <FadeIn>Conteudo com entrada suave.</FadeIn>;
}
```

### `RevealOnScroll`

Arquivo: `src/components/animations/RevealOnScroll.tsx`

Objetivo:

- Revelar conteudo quando ele entra na viewport.
- Padronizar comportamento de scroll reveal.

Props:

- Herda `HTMLMotionProps<"div">`.
- Aceita props de `motion.div`.

Comportamento:

- Usa `initial="hidden"`.
- Usa `whileInView="visible"`.
- Configura `viewport={{ once: true, margin: "-10% 0px" }}`.
- Respeita `prefers-reduced-motion`.

Responsividade:

- Nao define layout responsivo.

Animacoes:

- Usa variant `fadeUp` de `src/lib/motion.ts`.

Dependencias:

- `framer-motion`.
- `fadeUp` de `src/lib/motion.ts`.

Boas praticas:

- Use em secoes abaixo da dobra.
- Evite envolver grandes arvores quando apenas um bloco precisa animar.

Exemplo:

```tsx
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function ExampleReveal() {
  return <RevealOnScroll>Conteudo revelado no scroll.</RevealOnScroll>;
}
```

## Formularios

### `LeadForm`

Arquivo: `src/components/forms/LeadForm.tsx`

Objetivo:

- Capturar dados iniciais de lead.
- Validar campos com React Hook Form e Zod.
- Preparar integracao futura com backend, CRM ou endpoint.

Props:

- `onSubmit?: (values: LeadFormValues) => Promise<void> | void`.

Campos:

- `name`: obrigatorio, minimo 2 caracteres.
- `email`: obrigatorio, formato de email.
- `company`: obrigatorio, minimo 2 caracteres.
- `phone`: opcional.

Comportamento:

- Usa `zodResolver`.
- Mostra mensagens de erro abaixo dos campos invalidos.
- Desabilita o botao enquanto `isSubmitting`.
- Chama `onSubmit` se informado.
- Reseta o formulario para `defaultValues` apos submissao.

Responsividade:

- Layout em grid vertical simples.
- Nao possui variacoes por breakpoint no estado atual.

Animacoes:

- Nao possui animacoes.

Dependencias:

- `react-hook-form`.
- `zod`.
- `@hookform/resolvers/zod`.
- `Button`.
- `LeadFormValues` de `src/types`.

Boas praticas:

- Nao acople endpoint diretamente no componente.
- Passe `onSubmit` vindo de uma camada de servico/API.
- Ao conectar backend, documente destino, variaveis e tratamento de erro.
- Adicione estados visuais de sucesso e erro antes de usar em producao.

Exemplo:

```tsx
import { LeadForm } from "@/components/forms/LeadForm";

export function ExampleLeadCapture() {
  return (
    <LeadForm
      onSubmit={async (values) => {
        console.log(values);
      }}
    />
  );
}
```

## Secoes

### `SectionPlaceholder`

Arquivo: `src/components/sections/SectionPlaceholder.tsx`

Objetivo:

- Reservar espaco semantico para secoes ainda nao implementadas.
- Permitir que a landing tenha a ordem oficial do Figma antes do design final.

Props:

- `section: LandingSection`.
- `withBorder?: boolean`, com default `true`.

Comportamento:

- Renderiza `Section` com `id` da secao.
- Usa `aria-labelledby` baseado em `section.id`.
- Renderiza `Container`, `RevealOnScroll` e `SectionTitle`.
- Exibe card tracejado informando que a secao ainda sera implementada.
- Remove borda inferior quando `withBorder={false}`.

Responsividade:

- Herda spacing de `Section`.
- Herda container responsivo de `Container`.

Animacoes:

- Usa `RevealOnScroll`.

Dependencias:

- `LandingSection`.
- `RevealOnScroll`.
- `Container`.
- `Section`.
- `SectionTitle`.

Boas praticas:

- Use apenas enquanto a secao real nao existe.
- Substitua por componente real assim que o design Figma for implementado.
- Mantenha `section.id` sincronizado com navegacao.

Exemplo:

```tsx
import { SectionPlaceholder } from "@/components/sections/SectionPlaceholder";
import { sections } from "@/data/sections";

export function ExamplePlaceholder() {
  return <SectionPlaceholder section={sections.problem} />;
}
```

### Secoes placeholder oficiais

Arquivos:

- `src/components/sections/ProblemSection.tsx`
- `src/components/sections/SolutionSection.tsx`
- `src/components/sections/WorkSection.tsx`
- `src/components/sections/StackSection.tsx`
- `src/components/sections/SquadsSection.tsx`
- `src/components/sections/SocialSection.tsx`
- `src/components/sections/ComplianceSection.tsx`
- `src/components/sections/CTASection.tsx`

Objetivo:

- Representar a estrutura oficial de secoes vindas do Figma.
- Encapsular cada entrada da landing em um componente nomeado.

Props:

- Nao recebem props.

Comportamento:

- Cada componente renderiza `SectionPlaceholder` com sua entrada em `sections`.
- `CTASection` passa `withBorder={false}` para encerrar a pagina sem borda inferior.

Responsividade:

- Herdam responsividade de `SectionPlaceholder`.

Animacoes:

- Herdam `RevealOnScroll` via `SectionPlaceholder`.

Dependencias:

- `SectionPlaceholder`.
- `sections` de `src/data/sections.ts`.

Boas praticas:

- Ao implementar uma secao real, mantenha o nome publico do componente.
- Promova para pasta propria quando houver subcomponentes, assets, dados ou animacoes relevantes.
- Atualize `docs/current-state.md` quando uma secao deixar de ser placeholder.

Exemplo:

```tsx
import { ProblemSection } from "@/components/sections/ProblemSection";

export function ExampleLandingSlice() {
  return <ProblemSection />;
}
```

## Hero Section

### `HeroSection`

Arquivo: `src/components/sections/hero/HeroSection.tsx`

Objetivo:

- Renderizar a Hero real baseada no Figma.
- Orquestrar background, navbar e conteudo principal.

Props:

- Nao recebe props.

Comportamento:

- Renderiza `section` com `id="hero"` e `aria-labelledby="hero-title"`.
- Define altura minima por breakpoint.
- Usa `HeroBackground`, `HeroNavbar` e `HeroContent`.
- Usa `motion.div` com `staggerContainer`.
- Respeita `prefers-reduced-motion` via `useReducedMotion`.

Responsividade:

- Altura minima muda entre mobile, tablet, laptop, desktop e wide.
- Padding superior e largura interna usam `clamp()` e breakpoints.

Animacoes:

- Stagger dos elementos filhos com Framer Motion.
- Desativa animacoes quando reduced motion esta ativo.

Dependencias:

- `framer-motion`.
- `Container`.
- `staggerContainer`.
- `HeroBackground`.
- `HeroNavbar`.
- `HeroContent`.

Boas praticas:

- Mantenha a Hero como componente de composicao.
- Ajustes de texto ficam em `HeroContent`.
- Ajustes de navegacao ficam em `HeroNavbar`.
- Ajustes de assets/overlays ficam em `HeroBackground`.

Exemplo:

```tsx
import { HeroSection } from "@/components/sections/hero";

export function ExamplePageHero() {
  return <HeroSection />;
}
```

### `HeroContent`

Arquivo: `src/components/sections/hero/HeroContent.tsx`

Objetivo:

- Renderizar headline, subheadline, CTAs, indicador de scroll e metricas da Hero.

Props:

- Nao recebe props.

Comportamento:

- Renderiza `h1` com `id="hero-title"`.
- Usa `strong` para palavras com maior peso visual.
- Compoe `HeroActions`, `HeroScrollIndicator` e `HeroMetrics`.
- Posiciona `HeroScrollIndicator` sobre a borda superior do card de metricas.
- Mantem espacamento positivo entre o CTA e o indicador para que o botao fique visualmente acima do icone.

Responsividade:

- Headline e subheadline usam `clamp()`.
- CTAs empilham no mobile e alinham em linha a partir de `tablet`.
- Spacing entre blocos usa `clamp()` e tokens.

Animacoes:

- Cada bloco usa variant `fadeUp`.
- Recebe stagger do container em `HeroSection`.

Dependencias:

- `framer-motion`.
- `fadeUp`.
- `HeroActions`.
- `HeroMetrics`.
- `HeroScrollIndicator`.

Boas praticas:

- Mantenha texto e hierarquia semantica claros.
- Evite adicionar logica aqui; extraia para subcomponentes.
- Preserve apenas um `h1` principal na pagina.

Exemplo:

```tsx
import { HeroContent } from "@/components/sections/hero/HeroContent";

export function ExampleHeroContent() {
  return <HeroContent />;
}
```

### `HeroActions`

Arquivo: `src/components/sections/hero/HeroActions.tsx`

Objetivo:

- Renderizar CTAs principais da Hero.

Props:

- Nao recebe props.

Comportamento:

- Renderiza o CTA principal `Agendar conversa` apontando para `#cta`.
- Usa visual de botao por meio de `buttonClassName`.
- Inclui icone decorativo no CTA principal.

Responsividade:

- Herda layout flex do container em `HeroContent`.
- Usa classes fluidas de `buttonClassNames.heroPrimary`.

Animacoes:

- Nao usa Framer Motion diretamente.
- Herda animacao do wrapper em `HeroContent`.
- Usa transicoes CSS do botao.

Dependencias:

- `next/image`.
- `buttonClassName`.
- `buttonClassNames` de `src/lib/styles.ts`.
- Asset `/figma/hero/arrow.svg`.

Boas praticas:

- Use `<a>` para navegacao por ancora.
- Mantenha `href` sincronizado com IDs das secoes.
- Imagens decorativas devem usar `alt=""` e `aria-hidden`.

Exemplo:

```tsx
import { HeroActions } from "@/components/sections/hero/HeroActions";

export function ExampleHeroActions() {
  return <HeroActions />;
}
```

### `HeroMetrics`

Arquivo: `src/components/sections/hero/HeroMetrics.tsx`

Objetivo:

- Exibir metricas principais da Hero em card glass.

Props:

- Nao recebe props.

Comportamento:

- Renderiza `GlassCard` como `dl`.
- Itera sobre `heroMetrics`.
- Usa `dt` para labels e `dd` para valores/descricoes.

Responsividade:

- Mobile empilha as metricas em coluna.
- A partir de `tablet`, usa flex row com tres blocos de mesma largura.
- Largura maxima visual usa `61.75rem`.
- Padding e gap sao fluidos para manter espacamento lateral confortavel.
- O card permanece centralizado no mesmo eixo da Hero, sem padding assimetrico.

Animacoes:

- Nao usa Framer Motion diretamente.
- Herda animacao do wrapper em `HeroContent`.

Dependencias:

- `GlassCard`.
- `heroMetrics` de `hero.data.ts`.

Boas praticas:

- Mantenha metricas em `hero.data.ts`.
- Preserve semantica de lista de definicao para pares label/valor.

Exemplo:

```tsx
import { HeroMetrics } from "@/components/sections/hero/HeroMetrics";

export function ExampleHeroMetrics() {
  return <HeroMetrics />;
}
```

### `HeroScrollIndicator`

Arquivo: `src/components/sections/hero/HeroMetrics.tsx`

Objetivo:

- Exibir indicador visual de scroll abaixo dos CTAs.

Props:

- Nao recebe props.

Comportamento:

- Renderiza um pequeno controle visual com borda honey.
- Anima o marcador interno em loop quando reduced motion nao esta ativo.

Responsividade:

- Tamanho fixo e compacto.

Animacoes:

- Usa `motion.span`.
- Anima `y: [0, 6, 0]` com repeat infinito.
- Respeita `useReducedMotion`.

Dependencias:

- `framer-motion`.

Boas praticas:

- Use apenas em contexto visual da Hero.
- Deve ficar sobreposto ao topo do card de metricas.
- Nao dependa dele como unico indicativo de navegacao.

Exemplo:

```tsx
import { HeroScrollIndicator } from "@/components/sections/hero/HeroMetrics";

export function ExampleScrollIndicator() {
  return <HeroScrollIndicator />;
}
```

### `HeroNavbar`

Arquivo: `src/components/sections/hero/HeroNavbar.tsx`

Objetivo:

- Renderizar navegacao visual especifica da Hero com logo Best2bee.

Props:

- Nao recebe props.

Comportamento:

- Renderiza `nav` fixo no topo da viewport durante o scroll.
- Linka o logo para `#hero`.
- Renderiza itens de `heroNavItems`.
- Oculta lista de links em mobile.

Responsividade:

- Largura do menu usa `w-full` com `max-w-[80rem]`.
- Altura visual segue o Figma com `4.125rem`.
- Logo usa largura fluida.
- Links aparecem a partir de `tablet`.

Animacoes:

- Transicao de cor em hover.
- Nao usa Framer Motion.

Dependencias:

- `next/image`.
- `Container`.
- `heroNavItems`.
- Asset `/figma/hero/logo.png`.
- Gradiente local da Hero baseado no Figma.

Boas praticas:

- Mantenha `heroNavItems` em `hero.data.ts`.
- Garanta `aria-label` para o `nav`.
- Evite duplicar com `Header` sem decisao explicita.

Exemplo:

```tsx
import { HeroNavbar } from "@/components/sections/hero/HeroNavbar";

export function ExampleHeroNav() {
  return <HeroNavbar />;
}
```

### `HeroBackground`

Arquivo: `src/components/sections/hero/HeroBackground.tsx`

Objetivo:

- Renderizar imagem e overlays decorativos da Hero.

Props:

- Nao recebe props.

Comportamento:

- Renderiza wrapper com `aria-hidden="true"`.
- Aplica gradiente base, imagem de background e radiais honey.
- Usa `next/image` com `fill`, `priority`, `sizes="100vw"` e `quality={82}`.

Responsividade:

- Imagem cobre toda a secao com `object-cover`.
- Escala muda em `laptop`.

Animacoes:

- Nao possui animacao.

Dependencias:

- `next/image`.
- Asset `/figma/hero/background.png`.

Boas praticas:

- Mantenha imagens decorativas com `alt=""`.
- Use `priority` apenas para assets acima da dobra.
- Nao coloque conteudo semantico dentro deste componente.

Exemplo:

```tsx
import { HeroBackground } from "@/components/sections/hero/HeroBackground";

export function ExampleBackground() {
  return <HeroBackground />;
}
```

## Dados Relacionados

### `hero.data.ts`

Arquivo: `src/components/sections/hero/hero.data.ts`

Objetivo:

- Centralizar dados estaticos da Hero.

Exports:

- `heroNavItems`: links da navegacao da Hero.
- `heroMetrics`: metricas exibidas em `HeroMetrics`.

Boas praticas:

- Mantenha textos estaticos fora de JSX quando forem listas ou dados repetidos.
- Atualize navegacao quando IDs de secoes mudarem.

## Problem Section

### `ProblemSection`

Arquivo: `src/components/sections/problem/ProblemSection.tsx`

Objetivo:

- Renderizar a secao `02 Problem Section` implementada a partir do Figma.
- Compor background, header e cards de desafios.

Comportamento:

- Renderiza `Section` sem spacing padrao para preservar a altura visual do Figma.
- Usa `ProblemBackground`, `ProblemHeader` e `ProblemCards`.
- Mantem `id="problem"` e `aria-labelledby="problem-title"`.

Responsividade:

- Usa `Container` e grid responsivo.
- Cards usam duas colunas em `tablet` e tres colunas fixas em `laptop+`.
- O gap e fluido para preservar espacamento equilibrado entre cards.

Animacoes:

- Usa wrappers locais `ProblemStagger` e `ProblemRevealItem`.
- Aplica reveal on scroll com stagger e scale-in nos cards.

Dependencias:

- `Container`.
- `Section`.
- Assets em `public/figma/problem/`.

### `ProblemCard`

Arquivo: `src/components/sections/problem/ProblemCard.tsx`

Objetivo:

- Exibir cada desafio em card glass com icone, titulo e descricao.

Comportamento:

- Aplica largura maxima `25.375rem` e altura `14.418rem`, alinhadas ao Figma.
- Usa overlay local com `linear-gradient(135deg, rgba(255,255,255,.42) 0%, rgba(0,0,0,0) 48%)`.

Boas praticas:

- Mantenha dados em `problem.data.ts`.
- Preserve icones decorativos com `alt=""` e `aria-hidden`.
- Evite promover o card para `ui` ate haver reutilizacao real em outra secao.

### `ProblemReveal.client`

Arquivo: `src/components/sections/problem/ProblemReveal.client.tsx`

Objetivo:

- Isolar Framer Motion em boundary client local da secao.

Boas praticas:

- Mantenha a section principal como Server Component.
- Promova wrappers para `src/components/animations/` apenas se forem reutilizados.

### `sections`

Arquivo: `src/data/sections.ts`

Objetivo:

- Centralizar metadados das 9 secoes oficiais da landing.

Uso:

- Alimenta metadados globais e placeholders das secoes ainda nao implementadas.
- Define `status` como `ready` ou `placeholder`.

Boas praticas:

- Atualize o status quando uma secao for implementada.
- Mantenha `id` sincronizado com anchors e navegacao.
