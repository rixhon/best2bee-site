# Architecture Decision Records

Este diretorio e o registro canonico de decisoes arquiteturais do projeto.

## Objetivo

ADRs documentam decisoes tecnicas relevantes, o contexto que motivou cada escolha e as consequencias esperadas. Eles ajudam o time a entender por que o sistema evoluiu de determinada forma.

## Como criar um ADR

Use o script:

```bash
npm run adr:new -- "Titulo da decisao"
```

O script:

1. le os ADRs existentes;
2. calcula o proximo numero;
3. cria um arquivo `NNNN-slug-do-titulo.md`;
4. preenche o template base com status `Proposto`.

## Convencao de nomes

```txt
0001-escolha-da-stack.md
0002-tailwind-com-design-system.md
```

## Status possiveis

- `Proposto`
- `Aceito`
- `Substituido`
- `Obsoleto`

## ADRs Registrados

- [ADR-0001 - Escolha da stack](./0001-escolha-da-stack.md)
- [ADR-0002 - Tailwind CSS como camada de estilo](./0002-tailwind-css-como-camada-de-estilo.md)
- [ADR-0003 - Estrutura de componentes reutilizaveis](./0003-estrutura-de-componentes-reutilizaveis.md)
- [ADR-0004 - Arquitetura das secoes da landing page](./0004-arquitetura-das-secoes-da-landing-page.md)
- [ADR-0005 - Integracao MCP do Figma](./0005-integracao-mcp-do-figma.md)
- [ADR-0006 - Estrategia de animacoes](./0006-estrategia-de-animacoes.md)
- [ADR-0007 - Regras de documentacao viva no Cursor](./0007-regras-de-documentacao-viva-no-cursor.md)
- [ADR-0008 - Planos executaveis para divida tecnica](./0008-planos-executaveis-para-divida-tecnica.md)
- [ADR-0009 - Documentacao modular do Design System](./0009-documentacao-modular-do-design-system.md)
- [ADR-0010 - Arquitetura definitiva do frontend](./0010-arquitetura-definitiva-do-frontend.md)
- [ADR-0011 - Arquitetura padrao de componentes](./0011-arquitetura-padrao-de-componentes.md)
- [ADR-0012 - Sistema oficial de animacoes](./0012-sistema-oficial-de-animacoes.md)
- [ADR-0013 - Estrategia oficial de SEO e performance](./0013-estrategia-oficial-de-seo-e-performance.md)
- [ADR-0014 - Sistema final de design tokens](./0014-sistema-final-de-design-tokens.md)
- [ADR-0015 - Regras oficiais de desenvolvimento no Cursor](./0015-regras-oficiais-de-desenvolvimento-no-cursor.md)

## Quando criar um ADR

Crie um ADR quando a decisao:

- muda a arquitetura;
- define padrao de projeto;
- introduz dependencia relevante;
- altera processo de deploy ou operacao;
- afeta performance, acessibilidade ou manutencao;
- envolve trade-offs que precisam ser lembrados.
