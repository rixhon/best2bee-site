# ADR-0006 - Estrategia de animacoes

## Status

Aceito

## Data

2026-05-26

## Contexto

A landing page precisa de animacoes modernas, elegantes e responsivas, sem exagero visual e sem comprometer SSR, performance ou acessibilidade.

Existem dois tipos principais de animacao previstos:

- entradas suaves de conteudo;
- animacoes complexas de scroll em secoes futuras.

## Decisao

Usar Framer Motion para animacoes declarativas de interface e preparar GSAP ScrollTrigger para animacoes futuras de scroll.

Variants reutilizaveis ficam em:

```txt
src/lib/motion.ts
```

GSAP e ScrollTrigger sao carregados de forma SSR-safe em:

```txt
src/lib/gsap.ts
src/hooks/useGsapScrollTrigger.ts
```

## Consequencias

### Positivas

- Framer Motion cobre fade, stagger, scale e reveal com pouco codigo.
- Variants centralizados reduzem inconsistencias.
- GSAP fica disponivel sem quebrar SSR.
- Secoes podem evoluir com animacoes especificas sem afetar o layout global.

### Negativas / Trade-offs

- Framer Motion e GSAP exigem criterio de uso para nao duplicar engines no mesmo efeito.
- Componentes com Framer Motion precisam ser client components.
- ScrollTrigger deve ser usado apenas quando houver ganho claro.

## Alternativas Consideradas

- Apenas CSS transitions: simples, mas limitado para stagger e estados complexos.
- Apenas GSAP: poderoso, mas pesado para animacoes basicas.
- Sem camada central de variants: rapido no inicio, mas inconsistente em escala.

## Referencias

- `src/lib/motion.ts`
- `src/lib/gsap.ts`
- `src/hooks/useGsapScrollTrigger.ts`
- [Sistema oficial de animacoes](../../components/official-animation-system.md)
- [Animacoes](../../animations.md)
