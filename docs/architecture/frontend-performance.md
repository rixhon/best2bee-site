# Frontend Performance Audit

Data: 2026-05-26

## Objetivo

Este documento audita a performance frontend atual da landing page e define uma estrategia profissional para otimizar LCP, CLS, bundle JavaScript, hydration, imagens, lazy loading, animacoes, fontes, App Router, client components, renderizacao, Vercel e SEO.

## Evidencias Coletadas

Build executado:

```bash
npm run build
```

Resultado:

- Build de producao concluido com sucesso.
- Rota `/` gerada como conteudo estatico.
- Rota `/_not-found` gerada como conteudo estatico.
- Next.js `16.2.6` com Turbopack.

Diagnostico de bundle em `.next/diagnostics/route-bundle-stats.json`:

```txt
/ firstLoadUncompressedJsBytes: 658787
/_not-found firstLoadUncompressedJsBytes: 514502
```

Leitura:

- A rota principal ja tem um custo de JS inicial relevante para uma landing ainda parcial.
- Parte do custo vem da arvore client da Hero e de Framer Motion.
- O valor e "uncompressed", portanto nao representa exatamente o payload transferido com compressao, mas e util como baseline.

## Estado Atual

### Renderizacao

- `src/app/page.tsx` e server component por padrao.
- A pagina e pre-renderizada como static content.
- `HeroSection`, `HeroContent`, `HeroMetrics`, `RevealOnScroll`, `FadeIn`, `LeadForm` e `useGsapScrollTrigger` sao client-side.
- O restante da composicao de pagina e majoritariamente server-side.

### Imagens

Uso atual de `next/image`:

- `HeroBackground` usa `/figma/hero/background.png` com `fill`, `priority`, `quality={82}` e `sizes="100vw"`.
- `HeroNavbar` usa `/figma/hero/logo.png` com `priority`.
- `HeroActions` usa `/figma/hero/arrow.svg` com `width={16}` e `height={16}`.

### Animacoes

- Hero usa Framer Motion para stagger e `fadeUp`.
- Placeholders usam `RevealOnScroll`, tambem com Framer Motion.
- GSAP esta preparado via import dinamico, mas ainda nao e usado na UI.
- `prefers-reduced-motion` e respeitado nos wrappers atuais.

### Fontes

- `next/font/google` carrega:
  - Space Grotesk `300`, `500`;
  - Inter `400`, `500`;
  - JetBrains Mono `400`.
- `display: "swap"` esta configurado.

## Auditoria por Area

## LCP

### Diagnostico

O candidato mais provavel a LCP e a regiao visual acima da dobra da Hero:

- texto H1 grande;
- background image da Hero;
- logo e navbar.

Pontos de risco:

- `HeroBackground` usa PNG com `priority` e `sizes="100vw"`.
- A imagem cobre a viewport inteira com `fill` e `object-cover`.
- O background e decorativo, mas carregado como imagem prioritaria.
- O H1 esta dentro de uma arvore client com Framer Motion.

### Impacto tecnico

- Um background pesado pode atrasar LCP.
- A hidracao da Hero nao bloqueia o HTML inicial, mas aumenta JS inicial e pode afetar interatividade.
- Se o LCP for a imagem, formato/tamanho importam mais que animacao.
- Se o LCP for o H1, fontes e renderizacao textual importam mais.

### Otimizacoes propostas

1. Gerar `AVIF` e `WebP` para `background.png`.
2. Revisar dimensoes reais exportadas do Figma.
3. Ajustar `sizes` do background se a imagem nao precisa sempre de `100vw` em todos os breakpoints.
4. Manter `priority` apenas se a imagem for confirmada como LCP ou essencial acima da dobra.
5. Garantir que o H1 tenha HTML estatico renderizado sem depender de JS para aparecer.

### Padrao definitivo

- Apenas uma imagem acima da dobra deve receber `priority` por secao.
- Todo candidato a LCP deve ter formato otimizado, dimensao correta e `sizes` revisado.

## CLS

### Diagnostico

O risco atual de CLS e moderado/baixo porque:

- Hero define `min-height` por breakpoint.
- `next/image` com `fill` ocupa container posicionado.
- Logo possui `width` e `height`.
- Fontes usam `next/font` com variaveis.

Pontos de atencao:

- `HeroMetrics` usa overlap negativo `mt-[-34px]`.
- Font swap pode alterar metricas se fallback divergir muito.
- Futuras imagens de secoes podem causar shift se nao tiverem dimensoes.

### Impacto tecnico

- Overlaps e elementos glass podem causar mudancas visuais se a altura da Hero variar.
- Imagens sem dimensao em secoes futuras podem causar shift.

### Otimizacoes propostas

1. Manter dimensoes explicitas em toda imagem informativa.
2. Para imagens `fill`, garantir wrapper com altura/aspect ratio previsivel.
3. Validar CLS em mobile apos cada secao real.
4. Evitar inserir conteudo assincrono acima da dobra sem reservar espaco.

### Padrao definitivo

- Toda imagem deve ter dimensao, aspect ratio ou container com altura definida.
- Componentes acima da dobra nao devem depender de conteudo tardio para definir altura.

## JS Bundle

### Diagnostico

Baseline atual:

```txt
/ firstLoadUncompressedJsBytes: 658787
```

Client components encontrados:

- `HeroSection`
- `HeroContent`
- `HeroMetrics`
- `RevealOnScroll`
- `FadeIn`
- `LeadForm`
- `useGsapScrollTrigger`

Principais fontes de JS:

- React/Next runtime.
- Framer Motion na Hero.
- Framer Motion nos placeholders.
- Infra preparada de forms e GSAP existe no projeto, mas nao e carregada pela pagina se nao importada.

### Impacto tecnico

- Para uma landing page, o JS inicial deve ser mantido baixo.
- Se cada nova secao virar client component, o bundle inicial vai crescer rapidamente.
- Framer Motion e valioso, mas deve ser aplicado com criterio.

### Otimizacoes propostas

1. Transformar a Hero em server component de composicao e isolar apenas os blocos animados em client components.
2. Remover Framer Motion de placeholders ou aceitar apenas enquanto estiver em desenvolvimento.
3. Criar um componente `AnimatedReveal.client.tsx` pequeno e reutilizavel.
4. Evitar importar Framer Motion em componentes que poderiam ser server components.
5. Usar CSS transitions para hover/microinteracoes simples.

### Padrao definitivo

- Server component por padrao.
- Client component apenas para:
  - form;
  - motion real;
  - browser API;
  - estado/interatividade.

## Hydration

### Diagnostico

Hero e parcialmente client-side porque:

- `HeroSection` usa `useReducedMotion`.
- `HeroContent` renderiza `motion.h1`, `motion.p` e wrappers.
- `HeroMetrics` usa `motion.span` para scroll indicator.

Placeholders tambem hidratam por `RevealOnScroll`.

### Impacto tecnico

- Mais componentes hidratados aumentam custo de CPU.
- Mobile sofre mais com hydration desnecessaria.
- Conteudo textual da Hero nao precisa ser client para existir.

### Otimizacoes propostas

1. Separar conteudo estatico da Hero em server components.
2. Criar wrapper client apenas para orquestrar `motion`.
3. Tornar scroll indicator opcional ou CSS-only.
4. Remover motion de placeholders antes de producao.

### Divisao ideal Server/Client

```txt
src/components/sections/hero/
  HeroSection.tsx              # server
  HeroBackground.tsx           # server
  HeroNavbar.tsx               # server
  HeroContent.tsx              # server
  HeroActions.tsx              # server
  HeroMetrics.tsx              # server
  HeroReveal.client.tsx        # client motion wrapper
  HeroScrollIndicator.client.tsx # client se mantiver Framer Motion
```

Alternativa ainda mais leve:

```txt
HeroScrollIndicator.tsx # server com CSS animation + reduced motion global
```

## Imagens

### Diagnostico

Assets atuais da Hero:

- `background.png`: decorativo, acima da dobra, `priority`.
- `logo.png`: informativo/brand, acima da dobra, `priority`.
- `arrow.svg`: decorativo, pequeno.

### Riscos

- PNG decorativo pode aumentar LCP.
- Logo PNG poderia ser SVG.
- `sizes="100vw"` no background pode solicitar imagem maior que o necessario em alguns layouts.

### Estrategia de imagens

#### Hero background

- Exportar `background.avif` e `background.webp`.
- Manter PNG apenas se necessario.
- Validar se o background precisa ser imagem ou poderia ser camada CSS/gradient + imagem menor.
- Se o background for puramente decorativo, considerar reduzir qualidade visual em mobile.

#### Logo

- Preferir SVG.
- Se PNG for mantido, exportar no tamanho exato usado e com peso reduzido.
- Manter `priority` apenas se o logo for essencial para a primeira pintura.

#### Icones

- SVG inline ou arquivo SVG leve.
- `alt=""` e `aria-hidden` quando decorativo.

#### Futuras secoes

Padrao:

```txt
public/figma/{section}/
  image-name.avif
  image-name.webp
  image-name.png # fallback se necessario
```

Checklist:

- [ ] dimensoes conhecidas;
- [ ] formato moderno;
- [ ] `sizes` correto;
- [ ] `priority` apenas acima da dobra;
- [ ] lazy loading default abaixo da dobra;
- [ ] alt definido conforme semantica.

## Lazy Loading

### Diagnostico

- Imagens sem `priority` usam lazy loading default do `next/image`.
- Atualmente apenas Hero usa imagens reais.
- Futuras secoes abaixo da dobra ainda nao possuem assets reais.

### Recomendacoes

1. Nunca usar `priority` abaixo da primeira viewport.
2. Usar lazy default do `next/image` para imagens das secoes abaixo da Hero.
3. Para embeds externos como Calendly, carregar sob demanda:
   - ao clicar no CTA;
   - ao entrar na viewport;
   - ou em secao dedicada abaixo da dobra.
4. Evitar scripts terceiros no carregamento inicial.

## Animacoes

### Diagnostico

Pontos positivos:

- Variants centralizados em `src/lib/motion.ts`.
- Reduced motion respeitado.
- GSAP e SSR-safe e lazy.

Pontos de risco:

- Hero inteira vira client component por causa de motion.
- Placeholders carregam `RevealOnScroll`.
- Scroll indicator usa animacao infinita com Framer Motion.

### Otimizacoes propostas

1. Isolar Framer Motion em wrappers client pequenos.
2. Usar CSS animation para scroll indicator.
3. Manter GSAP apenas para casos com scrub, pinning ou timeline complexa.
4. Evitar animar layout; manter `opacity` e `transform`.
5. Remover animacoes de placeholders antes de release publica.

## Fontes

### Diagnostico

- `next/font/google` com `display: "swap"`.
- Familias e pesos alinhados ao Design System.
- Fontes sao expostas via CSS variables.

### Riscos

- Tres familias aumentam numero de fontes carregadas.
- Font swap pode alterar metricas e afetar CLS se fallback divergir.

### Otimizacoes propostas

1. Manter apenas pesos usados.
2. Avaliar self-hosting apenas se medicao indicar ganho.
3. Usar `adjustFontFallback` se necessario.
4. Evitar adicionar novos pesos sem justificativa.

### Padrao definitivo

- Fonte nova ou peso novo exige justificativa no Design System.

## App Router

### Diagnostico

- App Router esta usado corretamente.
- Rota `/` e estatica.
- Metadata e viewport estao em `layout.tsx`.
- Nao ha data fetching dinamico.

### Otimizacoes propostas

1. Manter landing estatica enquanto possivel.
2. Evitar transformar a pagina em client component.
3. Usar Server Components para secoes estaticas.
4. Isolar forms/embeds em componentes client.
5. Se alguma secao precisar de dados externos, avaliar cache e revalidacao.

## Client Components

### Diagnostico atual

Client components necessarios:

- `LeadForm`: precisa de estado e validacao.
- Motion wrappers: precisam de Framer Motion.
- `useGsapScrollTrigger`: precisa de browser.

Client components que podem ser reduzidos:

- `HeroSection`
- `HeroContent`
- `HeroMetrics`
- `SectionPlaceholder` indiretamente por `RevealOnScroll`.

### Estrategia recomendada

```txt
Server:
  page.tsx
  layout.tsx
  Footer
  Hero shell
  Hero text
  Hero background
  Hero nav
  Static sections

Client:
  Animated wrappers
  LeadForm
  Calendly embed/popup
  GSAP section effects
```

## Renderizacao

### Diagnostico

- HTML inicial da rota e estatico.
- O maior risco esta no custo de hidratar a Hero e reveals.
- Nao ha providers globais ou contextos pesados.

### Otimizacoes propostas

1. Preservar static rendering.
2. Evitar providers globais para recursos locais.
3. Evitar estado global para conteudo estatico.
4. Usar dados estaticos em `*.data.ts`.
5. Evitar listas interativas quando listas estaticas bastarem.

## Otimizacoes para Vercel

### Build e install

Recomendacao:

- Usar `npm ci` em CI/Vercel quando `package-lock.json` for fonte de verdade.
- Manter `npm run build` como build command.

### Observabilidade

Adicionar quando houver deploy real:

- Vercel Speed Insights.
- Vercel Analytics se fizer sentido para produto.
- Lighthouse em Preview Deploy antes de release publica.

### Cache e assets

Recomendacoes:

- Servir assets locais em formatos otimizados.
- Evitar imagens remotas sem configurar `images.remotePatterns`.
- Manter assets versionados em `public/figma/{section}/`.

### Headers

O estado atual nao exige headers customizados. No futuro, considerar:

- cache headers para assets estaticos se necessario;
- security headers em `next.config.ts`;
- redirects/canonical quando dominio final estiver definido.

## SEO

### Estado atual

Pontos positivos:

- `metadataBase` configurado via `SITE_CONFIG.url`.
- `title`, `description`, `robots` e `openGraph` basicos definidos.
- `lang="pt-BR"`.
- Skip link para acessibilidade.
- Estrutura semantica com `main` e `section`.

Pontos a melhorar:

- Falta OG image final.
- Falta favicon/app icons documentados no codigo atual.
- Falta canonical explicito se dominio final for definido.
- Conteudo real das secoes abaixo da Hero ainda nao existe.
- CTAs ainda apontam para placeholder `#cta`.

### Melhorias SEO propostas

1. Criar `public/og-image.png`.
2. Criar favicon e apple icon.
3. Expandir metadata:
   - `openGraph.images`;
   - `twitter.card`;
   - canonical quando dominio final estiver definido.
4. Garantir apenas um `h1` por pagina.
5. Implementar conteudo real nas secoes para melhorar indexacao.
6. Revisar copy final com palavras-chave B2B.
7. Adicionar structured data apenas quando houver conteudo/empresa final validado.

## Plano de Otimizacao Priorizado

### Critico antes de producao publica

1. Otimizar `background.png` para AVIF/WebP.
2. Validar LCP mobile em preview.
3. Remover placeholders ou bloquear release publica.
4. Definir CTA real para Calendly/leads.
5. Criar OG image e favicon.

### Importante antes das proximas secoes

1. Definir padrao server/client para secoes animadas.
2. Isolar Framer Motion em wrappers client.
3. Remover motion dos placeholders ou aceitar apenas em dev.
4. Revisar `priority` em imagens.
5. Criar baseline de bundle por rota.

### Melhoria continua

1. Adicionar bundle analyzer.
2. Adicionar Lighthouse CI ou medicao manual documentada por release.
3. Avaliar Vercel Speed Insights.
4. Revisar self-hosting de fontes se necessario.
5. Automatizar budget de imagens por secao.

## Budgets Recomendados

### JavaScript

- Monitorar `firstLoadUncompressedJsBytes`.
- Evitar crescimento relevante a cada nova secao.
- Toda nova dependencia client-side precisa de justificativa.

### Imagens

- Imagem acima da dobra deve ser otimizada.
- Imagens abaixo da dobra devem usar lazy loading.
- SVG para logos e icones sempre que possivel.

### Animacoes

- Duracao padrao ate `520ms`.
- Evitar animacoes infinitas com JS quando CSS resolver.
- Respeitar reduced motion.

## Checklist por PR

- [ ] A rota continua estatica quando possivel?
- [ ] O componente novo pode ser server component?
- [ ] Client component foi justificado?
- [ ] Imagens usam formato moderno e `sizes` correto?
- [ ] Apenas imagens acima da dobra usam `priority`?
- [ ] Animacoes respeitam reduced motion?
- [ ] Nao ha import direto de GSAP em componente server?
- [ ] Metadata/SEO foi atualizada se conteudo publico mudou?
- [ ] `npm run build` passou?
- [ ] `CHANGELOG.md` foi atualizado?

## Conclusao

A base atual e boa para uma landing estatica e escalavel, mas a performance futura depende de disciplina em tres pontos:

1. manter Server Components como padrao;
2. otimizar imagens acima da dobra;
3. isolar animacoes e scripts externos.

O principal risco imediato e o LCP da Hero por causa do background acima da dobra. O principal risco de escala e o crescimento de JS se as proximas secoes repetirem o padrao de client component amplo usado pela Hero.
