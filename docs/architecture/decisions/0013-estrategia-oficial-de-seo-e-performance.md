# ADR-0013 - Estrategia oficial de SEO e performance

## Status

Aceito

## Data

2026-05-26

## Contexto

O projeto ja possui App Router, metadata basica, `next/font`, `next/image`, Hero acima da dobra e planos de performance. Antes da implementacao das proximas secoes do Figma, era necessario consolidar uma estrategia oficial para SEO e performance, cobrindo metadata, OpenGraph, schema.org, renderizacao, hydration, imagens, fontes, lazy loading, scripts, analytics, Hero, LCP e CLS.

Sem uma regra oficial, novas secoes poderiam adicionar imagens pesadas, scripts terceiros, client components ou metadata divergente sem criterio comum.

## Decisao

Adotar `docs/architecture/seo-performance-strategy.md` como a estrategia oficial de SEO e performance do projeto.

Definicoes principais:

- Landing static-first.
- Server Components por padrao.
- Metadata em `src/app/layout.tsx` e `src/lib/constants.ts`.
- OpenGraph, Twitter metadata e icons obrigatorios antes de producao publica.
- Schema.org somente com dados reais aprovados.
- `next/image` obrigatorio para raster em componentes React.
- Imagens acima da dobra precisam ser otimizadas e medidas.
- Scripts terceiros e analytics devem ser lazy e isolados.
- LCP, CLS e Lighthouse mobile devem ser medidos antes de release publica.

## Consequencias

### Positivas

- Cria uma regra unica para SEO tecnico e performance.
- Reduz risco de regressao em LCP, CLS, hydration e bundle.
- Orienta implementacao das proximas secoes.
- Alinha metadata, assets, scripts e analytics ao App Router.
- Define checklist objetivo antes de producao.

### Negativas / Trade-offs

- Aumenta a disciplina exigida por secao.
- Algumas melhorias dependem de assets finais, dominio final e conteudo aprovado.
- Hero atual ainda possui riscos conhecidos ate a refatoracao/otimizacao de assets.

## Alternativas Consideradas

- Manter apenas a auditoria de performance: util, mas menos normativa para futuras secoes.
- Otimizar apenas depois de todas as secoes: aumenta risco de retrabalho e regressao acumulada.
- Adicionar schema.org imediatamente: rejeitado porque os dados finais da empresa/oferta ainda nao estao aprovados.
- Carregar analytics desde ja: rejeitado porque ainda nao ha estrategia de tracking e consentimento.

## Referencias

- `docs/architecture/seo-performance-strategy.md`
- `docs/architecture/frontend-performance.md`
- `docs/roadmap/performance-plan.md`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/sections/hero/`
