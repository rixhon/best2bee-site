# ADR-0001 - Next.js App Router com Tailwind e secoes modulares

## Status

Aceito

## Contexto

O projeto e uma landing page grande, visualmente guiada por Figma, com necessidade de alta fidelidade, responsividade premium, animacoes e manutencao incremental por secoes.

Um unico arquivo para cada secao complexa tende a crescer rapidamente, dificultando revisao, ajustes de fidelidade visual e evolucao futura.

## Decisao

Usar:

- Next.js App Router para estrutura de aplicacao.
- TypeScript para seguranca de tipos.
- Tailwind CSS com tokens do Design System.
- Framer Motion para animacoes declarativas.
- GSAP ScrollTrigger preparado via import dinamico SSR-safe.
- Secoes complexas em pastas proprias com subcomponentes.

Exemplo aplicado:

```txt
src/components/sections/hero/
  HeroSection.tsx
  HeroContent.tsx
  HeroActions.tsx
  HeroMetrics.tsx
  HeroBackground.tsx
  HeroNavbar.tsx
  hero.data.ts
  index.ts
```

## Consequencias

### Positivas

- Arquivos menores e responsabilidades claras.
- Melhor reaproveitamento de padroes visuais.
- Mais facilidade para comparar cada bloco com o Figma.
- Animacoes podem ser isoladas por subcomponente.
- Menor risco de quebrar secoes nao relacionadas.

### Trade-offs

- Mais arquivos por secao.
- Requer disciplina de naming e organizacao.
- Pode ser excessivo para secoes muito simples; nesses casos, um arquivo unico continua aceitavel.
