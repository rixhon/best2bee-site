# Stack Tecnologica

## Runtime e framework

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS

## UI e animacoes

- Tailwind CSS para estilos utilitarios e tokens.
- Framer Motion para animacoes declarativas de entrada e microinteracoes.
- GSAP com ScrollTrigger preparado para futuras animacoes de scroll.

## Formularios

- React Hook Form para estado e validacao de formularios.
- Zod para schemas de validacao.
- `@hookform/resolvers` para integrar Zod ao React Hook Form.

## Deploy e operacao

- GitHub como repositorio remoto.
- Vercel como plataforma de deploy automatico.
- Branch principal: `main`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Observacoes

O projeto usa `next/font` para carregar as familias do Design System:

- Space Grotesk
- Inter
- JetBrains Mono

Em uma etapa futura, pode-se avaliar self-hosting de fontes em `public/fonts/` para maior controle de performance e cache.
