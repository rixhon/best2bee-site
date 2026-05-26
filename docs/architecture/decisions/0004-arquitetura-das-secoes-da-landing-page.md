# ADR-0004 - Arquitetura das secoes da landing page

## Status

Aceito

## Data

2026-05-26

## Contexto

A landing page possui 9 secoes vindas do Figma. Algumas secoes, como a Hero, possuem subpartes visuais, assets, dados e animacoes. Manter tudo em um unico arquivo dificultaria manutencao, revisao e fidelidade visual.

## Decisao

Organizar secoes simples em arquivos unicos e secoes complexas em pastas proprias.

Secoes oficiais:

1. `01 Hero Section`
2. `02 Problem Section`
3. `03 Solution Section`
4. `04 Work Section`
5. `05 Stack Section`
6. `06 Squads Section`
7. `07 Social Section`
8. `08 Compliance Section`
9. `09 CTA Section`

Padrao para secoes complexas:

```txt
src/components/sections/{section}/
  index.ts
  {Section}Section.tsx
  {Section}Content.tsx
  {Section}Background.tsx
  {Section}Actions.tsx
  {section}.data.ts
```

A Hero ja usa esse modelo em:

```txt
src/components/sections/hero/
```

## Consequencias

### Positivas

- Arquivos menores.
- Responsabilidades mais claras.
- Facilita comparar cada bloco com o Figma.
- Facilita animacoes por subcomponente.
- Melhor manutencao quando novas secoes forem implementadas.

### Negativas / Trade-offs

- Mais arquivos e imports.
- Requer disciplina de naming.
- Secoes simples nao devem ser modularizadas sem necessidade.

## Alternativas Consideradas

- Todas as secoes em um unico arquivo: inviavel para escala.
- Uma pasta para toda secao, mesmo simples: organizado, mas mais verboso nesta fase.

## Referencias

- `src/app/page.tsx`
- `src/components/sections/hero/`
- `src/data/sections.ts`
- [Arquitetura](../../architecture.md)
