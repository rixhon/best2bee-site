# Padroes de Codigo

## TypeScript

- Use tipos explicitos para contratos compartilhados.
- Evite `any`.
- Prefira tipos locais quando o contrato nao e reutilizado.
- Promova tipos para `src/types/` somente quando forem compartilhados.

## React

- Componentes devem ser pequenos e nomeados por responsabilidade.
- Use `use client` apenas quando necessario.
- Separe dados estaticos em `*.data.ts`.
- Evite efeitos colaterais em componentes visuais.

## Tailwind

- Prefira tokens do Design System.
- Evite valores arbitrarios quando ja existir token equivalente.
- Valores arbitrarios sao aceitaveis para fidelidade pontual ao Figma.
- Classes repetidas devem migrar para `src/lib/styles.ts` ou componente UI.

## CSS e estilos

- Tokens globais ficam em `src/app/globals.css`.
- Nao altere tokens sem validar com o Design System.
- Evite CSS inline.
- Para backgrounds complexos, use classes Tailwind arbitrarias ou componente dedicado.

## Assets

- Assets do Figma ficam em `public/figma/{section}/`.
- Use `next/image` para imagens relevantes.
- Use `priority` apenas para imagens acima da dobra.
- SVGs decorativos devem ter `alt=""` e `aria-hidden`.

## Acessibilidade

- Toda secao relevante deve ter estrutura semantica.
- Use `aria-labelledby` quando uma secao tiver heading principal.
- Links devem ter texto claro.
- Imagens informativas precisam de `alt`.
- Imagens decorativas devem ser escondidas de tecnologias assistivas.

## Validacao

Antes de finalizar uma mudanca:

```bash
npm run typecheck
npm run lint
npm run build
```

## Regras do Cursor

Regras persistentes do agente ficam em:

```txt
.cursor/rules/
```

Elas orientam leitura de contexto antes de alteracoes, arquitetura, componentes, TypeScript, responsividade, animacoes, SEO, acessibilidade, performance, naming, imports, Design Tokens, documentacao viva, ADRs, changelog, integracoes e estado atual durante o desenvolvimento.
