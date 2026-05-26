# Documentacao Viva

Esta pasta centraliza a documentacao tecnica do projeto Best2bee Site. O objetivo e manter arquitetura, decisoes, padroes e operacao sempre proximos do codigo.

## Indice

- [Arquitetura do projeto](./architecture.md)
- [Arquitetura definitiva](./architecture/final-architecture.md)
- [Analise tecnica do projeto](./architecture/project-analysis.md)
- [Estrategia SEO e performance](./architecture/seo-performance-strategy.md)
- [Auditoria de performance frontend](./architecture/frontend-performance.md)
- [Divida tecnica](./architecture/technical-debt.md)
- [Stack tecnologica](./stack.md)
- [Design System](./design-system/README.md)
- [Tokens finais](./design-system/final-tokens.md)
- [Plano de tokenizacao](./design-system/tokenization-plan.md)
- [Setup local](./setup-local.md)
- [Git e GitHub](./git-github.md)
- [Deploy na Vercel](./deploy-vercel.md)
- [Integracao MCP do Figma](./figma-mcp.md)
- [Componentes](./components/README.md)
- [Arquitetura de componentes](./components/component-architecture.md)
- [Sistema oficial de animacoes](./components/official-animation-system.md)
- [Animacoes](./animations.md)
- [Padroes de codigo](./code-standards.md)
- [Responsividade](./responsive.md)
- [Estado atual](./current-state.md)
- [Roadmap tecnico](./roadmap.md)
- [Plano de refatoracao](./roadmap/refactoring-plan.md)
- [Plano de performance](./roadmap/performance-plan.md)
- [Changelog](../CHANGELOG.md)
- [Guia de changelog](./changelog.md)
- [ADRs](./architecture/decisions/README.md)

## Como manter

- Atualize a documentacao no mesmo PR de mudancas arquiteturais ou de padrao.
- Registre decisoes relevantes como ADR antes que o contexto se perca.
- Mantenha exemplos curtos e ligados aos arquivos reais do projeto.
- Evite duplicar o Design System completo; use este diretorio para explicar como ele e aplicado no codigo.

## Status atual

O projeto esta em fase inicial de implementacao da landing page. A Hero Section ja foi implementada a partir do Figma e modularizada em `src/components/sections/hero/`. As demais secoes ainda estao como placeholders estruturais.
