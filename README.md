# B2B Landing Page

Base Next.js para uma landing page B2B responsiva, preparada para receber as secoes aprovadas no Figma de forma incremental.

## Scripts

- `npm run dev`: inicia o ambiente local.
- `npm run build`: gera o build de producao.
- `npm run lint`: executa ESLint.
- `npm run typecheck`: valida TypeScript sem emitir arquivos.

## Estrutura

- `src/app`: rotas App Router, layout global, pagina inicial e estilos globais.
- `src/components/layout`: componentes estruturais da pagina.
- `src/components/sections`: placeholders e futuras secoes da landing page.
- `src/components/ui`: componentes base reutilizaveis.
- `src/components/forms`: estrutura de formulario com React Hook Form e Zod.
- `src/components/animations`: providers e utilitarios visuais com Framer Motion e GSAP.
- `src/lib`: funcoes utilitarias e integracoes.
- `src/hooks`: hooks compartilhados.
- `src/data`: configuracoes e dados estaticos da landing.
- `src/styles`: tokens globais de design.
- `src/types`: tipos compartilhados.
