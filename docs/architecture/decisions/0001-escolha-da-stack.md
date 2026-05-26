# ADR-0001 - Escolha da stack

## Status

Aceito

## Data

2026-05-26

## Contexto

O projeto precisa entregar uma landing page B2B moderna, responsiva, orientada por Figma, com alta fidelidade visual, boa performance, SEO, acessibilidade, animacoes sofisticadas e deploy automatico.

Tambem precisa ser facil de manter por um time e permitir implementacao incremental das secoes aprovadas no Figma.

## Decisao

Usar a seguinte stack principal:

- Next.js com App Router;
- React;
- TypeScript;
- Tailwind CSS;
- Framer Motion;
- GSAP com ScrollTrigger preparado para uso futuro;
- React Hook Form;
- Zod;
- GitHub;
- Vercel.

## Consequencias

### Positivas

- Next.js oferece base forte para SEO, performance e deploy na Vercel.
- TypeScript reduz risco em refatoracoes.
- Tailwind acelera implementacao fiel ao Design System.
- Framer Motion atende animacoes declarativas.
- GSAP fica disponivel para animacoes complexas de scroll.
- React Hook Form + Zod prepara formularios robustos.

### Negativas / Trade-offs

- Mais ferramentas exigem disciplina de arquitetura.
- Componentes com animacao precisam separar SSR e client-side.
- Tailwind pode gerar classes longas se nao houver padroes reutilizaveis.

## Alternativas Consideradas

- React + Vite: mais simples, mas exigiria configurar SEO/deploy/roteamento com mais decisoes manuais.
- CSS Modules puro: mais controle, mas menor velocidade para alta fidelidade ao Figma.
- Apenas GSAP: poderoso, mas excessivo para animacoes simples de entrada.

## Referencias

- `package.json`
- `src/app/layout.tsx`
- `src/lib/motion.ts`
- `src/lib/gsap.ts`
- [Stack tecnologica](../../stack.md)
