# ADR-0012 - Sistema oficial de animacoes

## Status

Aceito

## Data

2026-05-26

## Contexto

O projeto possui Tailwind/CSS, Framer Motion e GSAP instalados ou preparados para diferentes tipos de animacao. Antes da implementacao das proximas secoes do Figma, era necessario consolidar uma unica estrategia oficial para evitar duplicidade de engines, crescimento desnecessario de client components e inconsistencias de easing, duration, stagger e reduced motion.

Tambem existia `src/lib/animations.ts` como camada de aliases para variants ja definidas em `src/lib/motion.ts`, criando duplicidade de fonte.

## Decisao

Adotar `docs/components/official-animation-system.md` como sistema oficial de animacoes.

Definicoes principais:

- CSS/Tailwind para hover, focus, active, transitions e microinteractions simples.
- Framer Motion para entrance, reveal e stagger declarativo.
- GSAP ScrollTrigger apenas para scroll timelines complexas, scrub e pinning.
- `src/lib/motion.ts` como unica fonte oficial de variants Framer Motion.
- `src/lib/animations.ts` removido.
- Reduced motion obrigatorio.
- Nenhuma secao nova deve virar client component inteira apenas por animacao local.

## Consequencias

### Positivas

- Reduz duplicidade de engines para o mesmo efeito.
- Mantem animacoes alinhadas ao Design System.
- Reduz risco de bundle/hydration desnecessarios.
- Define regras claras para performance e acessibilidade.
- Facilita implementacao consistente das proximas secoes.

### Negativas / Trade-offs

- Exige disciplina para nao usar Framer Motion em microinteractions simples.
- GSAP permanece como dependencia reservada mesmo sem uso visual atual.
- Algumas partes da Hero ainda usam Framer Motion diretamente por fidelidade visual historica.

## Alternativas Consideradas

- Apenas CSS/Tailwind: simples, mas limitado para stagger/reveal declarativo.
- Apenas Framer Motion: bom para React, mas inadequado para scroll timelines complexas com scrub/pinning.
- Apenas GSAP: poderoso, mas excessivo para hover, reveal simples e microinteractions.
- Manter `src/lib/animations.ts`: preserva aliases, mas mantem duplicidade desnecessaria.

## Referencias

- `docs/components/official-animation-system.md`
- `docs/animations.md`
- `src/lib/motion.ts`
- `src/lib/gsap.ts`
- `src/components/animations/`
