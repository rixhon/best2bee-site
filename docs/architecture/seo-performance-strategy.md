# SEO and Performance Strategy

Status: `Oficial`

Data: 2026-05-26

## Objetivo

Este documento define a arquitetura oficial de SEO e performance do projeto Best2bee Site. Ele consolida metadata, OpenGraph, schema.org, renderizacao, hydration, imagens, fontes, lazy loading, App Router, scripts, analytics, Hero performance, LCP e CLS.

Este documento complementa:

- `docs/architecture/final-architecture.md`
- `docs/architecture/frontend-performance.md`
- `docs/roadmap/performance-plan.md`
- `docs/components/official-animation-system.md`
- `src/app/layout.tsx`
- `src/app/page.tsx`

## Diagnostico Atual

## Metadata

Arquivo:

```txt
src/app/layout.tsx
```

Estado atual:

- `metadataBase` usa `SITE_CONFIG.url`.
- `title` usa `SITE_CONFIG.name`.
- `description` usa `SITE_CONFIG.description`.
- `robots` permite `index` e `follow`.
- `openGraph` basico esta configurado.
- `viewport` define `width`, `initialScale` e `themeColor`.

Pontos de atencao:

- `SITE_CONFIG.name` e generico: `B2B Landing Page`.
- `SITE_CONFIG.description` ainda descreve o projeto como preparado para secoes do Figma.
- Falta `alternates.canonical`.
- Falta `openGraph.images`.
- Falta metadata de Twitter.
- Falta favicon/app icons finais.

## OpenGraph

Estado atual:

```txt
title
description
url
siteName
type: website
```

Pontos de atencao:

- Sem imagem OG final.
- Sem dimensoes de imagem.
- Sem `locale`.
- Sem Twitter Card.

Padrao futuro:

```txt
public/social/og-image.png
public/icons/favicon.ico
public/icons/apple-touch-icon.png
```

## Schema.org

Estado atual:

- Nenhum structured data implementado.

Decisao:

- Nao adicionar schema.org enquanto nome final, dominio, empresa, ofertas e contatos nao estiverem aprovados.
- Structured data falso, incompleto ou especulativo e pior que ausencia de schema.

Schemas candidatos futuros:

- `Organization`
- `WebSite`
- `WebPage`
- `Service`
- `FAQPage`, apenas quando FAQ real existir.

## Renderizacao

Estado atual:

- `src/app/page.tsx` e Server Component.
- `src/app/layout.tsx` e Server Component.
- Rota `/` permanece estatica.
- Nao ha data fetching dinamico.
- Secoes sao compostas em ordem no `main`.

Ponto positivo:

- A base e adequada para SEO e performance de landing page.

Risco:

- Se futuras secoes dependerem de client state ou fetch dinamico sem necessidade, a pagina pode perder simplicidade e previsibilidade.

## Hydration

Estado atual:

- Hero usa Framer Motion diretamente em subcomponentes client.
- Placeholders usam `RevealOnScroll`.
- `LeadForm` esta preparado como client component, mas nao renderizado na pagina atual.
- GSAP esta preparado de forma lazy, mas nao usado visualmente.

Risco:

- Repetir o padrao de section client inteira nas proximas secoes aumenta JS, CPU e risco de pior INP.

Padrao definitivo:

```txt
Server section
  -> Static content
  -> Optional small client wrapper for animation/interactivity
```

## Imagens

Estado atual:

- Hero background usa `next/image`, `fill`, `priority`, `quality={82}` e `sizes="100vw"`.
- Hero logo usa `next/image`, dimensoes explicitas e `priority`.
- Hero arrow usa SVG com dimensoes explicitas.

Riscos:

- Background PNG acima da dobra pode dominar LCP.
- Logo PNG poderia ser SVG se houver export vetorial.
- Duas imagens acima da dobra usam `priority`.
- Ainda faltam assets sociais e icons publicos.

## Fontes

Estado atual:

- `next/font/google`.
- Space Grotesk: pesos `300`, `500`.
- Inter: pesos `400`, `500`.
- JetBrains Mono: peso `400`.
- `display: "swap"`.
- CSS variables expostas no layout.

Riscos:

- Tres familias aumentam custo de fontes.
- Novos pesos podem crescer sem controle.
- Font swap pode afetar CLS se fallback divergir muito.

## Lazy Loading

Estado atual:

- `next/image` usa lazy loading por padrao quando `priority` nao esta definido.
- Hero usa `priority`.
- Ainda nao ha imagens reais abaixo da dobra.
- Calendly e analytics ainda nao estao implementados.

Padrao:

- Abaixo da dobra, manter lazy loading default.
- Embeds e scripts externos devem carregar sob demanda.

## App Router

Estado atual:

- App Router usado corretamente.
- Metadata centralizada em `layout.tsx`.
- Pagina principal compoe secoes em `page.tsx`.
- Sem providers globais desnecessarios.

Padrao:

- Manter a landing estatica enquanto possivel.
- Usar route-level metadata quando houver novas rotas.
- Nao transformar `page.tsx` em `"use client"`.

## Scripts

Estado atual:

- Nenhum script terceiro carregado.
- Nenhum `next/script` usado.

Padrao futuro:

- Scripts terceiros devem usar `next/script`.
- Script nao critico deve usar `afterInteractive` ou `lazyOnload`.
- Script de embed deve ser local ao componente que precisa dele.
- Script acima da dobra exige justificativa.

## Analytics

Estado atual:

- Analytics nao implementado.

Opcoes futuras:

- Vercel Analytics.
- Vercel Speed Insights.
- Google Analytics/Tag Manager apenas se houver necessidade de marketing.

Padrao:

- Analytics nao deve bloquear renderizacao inicial.
- Tracking precisa respeitar privacidade, consentimento e LGPD quando aplicavel.
- Eventos devem ser nomeados em uma camada central antes de escalar.

## Hero Performance

Estado atual:

- Hero e a regiao acima da dobra.
- H1 e provavel candidato a LCP textual.
- Background pode ser candidato a LCP visual se o navegador escolher a imagem.
- Hero usa Framer Motion e client components.
- Hero define `min-height` por breakpoint, reduzindo risco de CLS.

Riscos:

- PNG decorativo com `priority`.
- H1 dentro de arvore client.
- Fontes display acima da dobra.
- Bloco de metricas usa overlap negativo.

Decisao:

- Manter visual atual ate proxima refatoracao de performance.
- Antes de producao publica, otimizar assets da Hero e medir LCP/CLS em preview.

## LCP

Budget:

```txt
LCP mobile: < 2.5s
```

Possiveis candidatos:

- H1 da Hero.
- Hero background.
- Logo, dependendo do viewport/waterfall.

Regras:

- Candidato a LCP deve ter HTML inicial estatico sempre que possivel.
- Imagem candidata a LCP deve estar em formato moderno.
- Apenas recurso realmente critico acima da dobra deve usar `priority`.
- Medicao decide, nao opiniao.

## CLS

Budget:

```txt
CLS: < 0.1
```

Regras:

- Toda imagem deve reservar espaco.
- Imagem `fill` precisa de wrapper com dimensao/aspect ratio previsivel.
- Conteudo assincrono acima da dobra deve reservar altura.
- Fontes novas precisam ser avaliadas por impacto visual.
- Elementos com overlap devem ser testados em mobile, tablet e desktop.

## Estrategia SEO Definitiva

## 1. Metadata como Fonte Oficial

Metadata publica da landing fica em:

```txt
src/app/layout.tsx
src/lib/constants.ts
```

Regras:

- `SITE_CONFIG.url` deve vir de `NEXT_PUBLIC_SITE_URL`.
- Producao precisa ter dominio real.
- `title` e `description` devem refletir a copy final.
- Metadata de produto nao deve usar texto de placeholder.

## 2. Canonical

Quando dominio final estiver definido, adicionar canonical:

```ts
alternates: {
  canonical: SITE_CONFIG.url,
}
```

Regra:

- Uma URL canonica por pagina.
- Rotas futuras devem declarar canonical proprio quando necessario.

## 3. OpenGraph e Twitter

Padrao minimo antes de producao publica:

```txt
openGraph.title
openGraph.description
openGraph.url
openGraph.siteName
openGraph.locale
openGraph.type
openGraph.images
twitter.card
twitter.title
twitter.description
twitter.images
```

Imagem:

```txt
public/social/og-image.png
```

Recomendacao:

- `1200x630`.
- Peso otimizado.
- Texto legivel em preview social.
- Visual alinhado ao Design System.

## 4. Icons

Antes de producao publica:

```txt
public/icons/favicon.ico
public/icons/icon.svg
public/icons/apple-touch-icon.png
```

Metadata deve apontar para os icons finais.

## 5. Schema.org

Adicionar apenas quando os dados forem reais.

Padrao recomendado:

```txt
Organization
  -> nome legal/comercial
  -> url final
  -> logo final
  -> sameAs, se existir

WebSite
  -> name
  -> url

WebPage
  -> name
  -> description
  -> isPartOf

Service
  -> somente quando oferta estiver aprovada

FAQPage
  -> somente quando FAQ final existir
```

Local:

```txt
src/app/page.tsx ou componente server dedicado
```

Regra:

- JSON-LD deve ser gerado a partir de dados reais e tipados.
- Nao duplicar informacoes divergentes da metadata.
- Nao adicionar schema para conteudo que nao esta visivel na pagina.

## 6. Semantica e Conteudo

Regras:

- Uma unica tag `h1`.
- Cada secao principal deve ter `section` com `id`.
- Secoes devem usar `aria-labelledby` quando tiverem titulo.
- CTA deve usar texto claro.
- Imagens informativas precisam de `alt`.
- Imagens decorativas usam `alt=""` e `aria-hidden`.
- Links de navegacao devem apontar para anchors existentes.

## 7. Indexacao

Padrao:

- `index: true` e `follow: true` apenas quando conteudo publico estiver pronto.
- Em previews privados, indexacao deve ser controlada pela Vercel/protecao de ambiente quando necessario.
- Nao publicar placeholders como conteudo final.

## Estrategia Performance Definitiva

## 1. Static-first

Regra:

- A landing deve permanecer estatica enquanto nao houver necessidade real de dados dinamicos.

Permitido:

- dados estaticos em `*.data.ts`;
- metadata estatica;
- assets locais;
- forms client isolados.

Evitar:

- fetch dinamico na rota principal;
- providers globais para necessidades locais;
- client state para conteudo estatico.

## 2. Server Components por Padrao

Padrao:

```txt
Section.tsx        # server
SectionContent.tsx # server
SectionMedia.tsx   # server quando possivel
SectionReveal.client.tsx # apenas se motion real
```

Client components apenas para:

- forms;
- animations com Framer Motion;
- GSAP/ScrollTrigger;
- browser APIs;
- embeds externos;
- interacao com estado real.

## 3. Hydration Budget

Regras:

- Nova secao nao deve virar client component inteira por padrao.
- Motion deve ser isolado.
- Placeholder nao deve definir arquitetura final.
- Interatividade deve ser local.
- Dependencia client nova exige justificativa.

## 4. Image Budget

Regras:

- Imagens acima da dobra: AVIF/WebP preferencial.
- Logos e icones: SVG preferencial.
- PNG apenas quando necessario.
- `priority` apenas para candidatos reais a LCP.
- `sizes` obrigatorio em imagens responsivas.
- `width` e `height` obrigatorios quando nao usar `fill`.
- `fill` exige wrapper previsivel.

Padrao de assets:

```txt
public/figma/{section}/
  asset-name.avif
  asset-name.webp
  asset-name.png
  asset-name.svg
```

## 5. Font Budget

Regras:

- Manter pesos atuais enquanto atenderem ao Design System.
- Novo peso exige justificativa.
- Nova familia exige decisao documentada.
- `display: "swap"` permanece padrao.
- Avaliar `adjustFontFallback` apenas com evidencia de CLS.
- Self-hosting apenas se medicao indicar ganho.

## 6. Script Budget

Regras:

- Nenhum script terceiro no caminho critico sem justificativa.
- Usar `next/script`.
- Preferir `afterInteractive` ou `lazyOnload`.
- Embeds abaixo da dobra devem ser lazy.
- Calendly deve carregar sob demanda.
- Analytics deve ser leve e respeitar privacidade.

## 7. Animation Budget

Referencia oficial:

```txt
docs/components/official-animation-system.md
```

Regras:

- CSS/Tailwind para microinteractions.
- Framer Motion para entrance/reveal/stagger.
- GSAP apenas para scroll timelines complexas.
- Reduced motion obrigatorio.
- Above-the-fold prioriza LCP antes de animacao.

## 8. Measurement-first

Toda release publica deve medir:

- Lighthouse mobile.
- Lighthouse desktop.
- LCP element.
- CLS.
- INP quando houver interacoes reais.
- waterfall de imagens acima da dobra.
- crescimento de JS por rota.

Baseline atual documentado:

```txt
/ firstLoadUncompressedJsBytes: 658787
```

Esse valor deve ser tratado como referencia inicial, nao como meta final.

## Checklist Tecnico

## Checklist por Mudanca

- [ ] A rota continua estatica?
- [ ] `page.tsx` continua server component?
- [ ] A nova secao pode ser server component?
- [ ] Client component foi justificado?
- [ ] Motion foi isolado?
- [ ] Imagens possuem dimensoes ou wrapper previsivel?
- [ ] Imagens abaixo da dobra mantem lazy loading?
- [ ] Apenas candidato real a LCP usa `priority`?
- [ ] `sizes` esta correto?
- [ ] `alt` esta correto?
- [ ] Links apontam para anchors existentes?
- [ ] Metadata foi atualizada se a copy publica mudou?
- [ ] Changelog foi atualizado?

## Checklist Antes de Producao Publica

- [ ] `NEXT_PUBLIC_SITE_URL` aponta para dominio final.
- [ ] `SITE_CONFIG.name` esta final.
- [ ] `SITE_CONFIG.description` esta final.
- [ ] Canonical configurado.
- [ ] OG image criada.
- [ ] Twitter metadata configurada.
- [ ] Favicon e apple icon criados.
- [ ] Schema.org real implementado ou decisao de nao implementar registrada.
- [ ] Hero background otimizado.
- [ ] Logo em SVG ou PNG otimizado.
- [ ] Lighthouse mobile acima de `90`.
- [ ] LCP abaixo de `2.5s`.
- [ ] CLS abaixo de `0.1`.
- [ ] Placeholders removidos.
- [ ] CTAs apontam para destinos reais.

## Checklist por Secao Futura

- [ ] A secao tem `id` estavel.
- [ ] A secao usa `aria-labelledby` quando aplicavel.
- [ ] Titulo segue hierarquia correta.
- [ ] Dados repetidos ficam em `*.data.ts`.
- [ ] Imagens ficam em `public/figma/{section}/`.
- [ ] Assets estao otimizados.
- [ ] A secao e server-first.
- [ ] Animacoes seguem o sistema oficial.
- [ ] Nenhum script externo e carregado sem necessidade.
- [ ] SEO nao depende de conteudo carregado apenas no cliente.

## Padroes para Futuras Secoes

## Estrutura de Secao Performant

```txt
src/components/sections/problem/
  index.ts
  ProblemSection.tsx
  ProblemContent.tsx
  ProblemMedia.tsx
  ProblemReveal.client.tsx
  problem.data.ts
```

Padrao:

- `ProblemSection.tsx`: server.
- `ProblemContent.tsx`: server.
- `ProblemMedia.tsx`: server quando usar `next/image` sem browser API.
- `ProblemReveal.client.tsx`: client apenas se houver motion.
- `problem.data.ts`: copy/listas/cards.

## Padrao de Imagem por Secao

Acima da dobra:

```tsx
<Image
  alt="Descricao real"
  priority
  sizes="..."
  src="/figma/hero/image.webp"
/>
```

Abaixo da dobra:

```tsx
<Image
  alt="Descricao real"
  sizes="..."
  src="/figma/problem/image.webp"
/>
```

Regra:

- Nao adicionar `priority` abaixo da primeira viewport.

## Padrao de Conteudo SEO

Cada secao final deve ter:

- titulo claro;
- subtitulo quando necessario;
- copy indexavel no HTML inicial;
- CTA com destino real ou documentado;
- imagens com semantica correta;
- anchors consistentes com navegacao.

## Padrao de Scripts por Secao

```txt
Secao estatica
  -> nenhum script

Secao com embed externo
  -> componente client local
  -> next/script
  -> lazy/sob demanda

Secao com analytics event
  -> helper central
  -> evento nomeado
  -> sem bloquear UI
```

## Padrao de Analytics

Eventos futuros devem seguir nomes previsiveis:

```txt
cta_click
lead_form_submit
calendly_click
section_view
```

Regras:

- Nao espalhar chamadas de analytics diretamente em muitos componentes.
- Criar helper em `src/lib/analytics.ts` apenas quando analytics real for escolhido.
- Documentar eventos em guia proprio se o volume crescer.

## Prioridades

## Critico Antes de Producao

1. Definir dominio final em `NEXT_PUBLIC_SITE_URL`.
2. Atualizar `SITE_CONFIG`.
3. Criar OG image e icons.
4. Otimizar Hero background.
5. Validar LCP e CLS em preview.
6. Remover placeholders.

## Importante Antes das Proximas Secoes

1. Aplicar server-first nas secoes novas.
2. Otimizar assets antes de commit.
3. Evitar scripts externos.
4. Isolar motion.
5. Atualizar metadata quando copy final mudar.

## Melhoria Continua

1. Adicionar Vercel Speed Insights quando houver deploy publico.
2. Avaliar Vercel Analytics se fizer sentido.
3. Criar baseline Lighthouse por release.
4. Avaliar bundle analyzer.
5. Avaliar schema.org apos conteudo final.

## Decisoes Oficiais

1. SEO tecnico vive em `src/app/layout.tsx` e `src/lib/constants.ts`.
2. Schema.org so entra com dados reais aprovados.
3. A landing permanece static-first.
4. Server Components sao default.
5. `next/image` e obrigatorio para imagens raster em componentes React.
6. Logos/icones devem preferir SVG.
7. Scripts terceiros devem ser lazy e isolados.
8. Analytics nao deve bloquear carregamento inicial.
9. Hero deve ser medida antes de otimizar por opiniao.
10. Toda secao futura deve seguir checklist SEO/performance.

## Conclusao

A estrategia oficial combina SEO tecnico previsivel com performance static-first. A prioridade e manter HTML inicial indexavel, reduzir hydration desnecessaria, otimizar imagens acima da dobra, controlar scripts externos e medir LCP/CLS antes de producao publica.

O maior risco imediato e a Hero, especialmente background PNG acima da dobra e client-side motion. O maior risco de escala e cada nova secao adicionar imagens, scripts ou client components sem budget claro.
