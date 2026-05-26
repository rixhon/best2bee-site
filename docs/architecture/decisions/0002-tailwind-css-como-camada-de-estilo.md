# ADR-0002 - Tailwind CSS como camada de estilo

## Status

Aceito

## Data

2026-05-26

## Contexto

A landing page exige alta fidelidade visual ao Figma e uso consistente do Design System Best2bee. O projeto precisa permitir ajustes finos de spacing, tipografia, glassmorphism, responsividade e estados visuais sem criar CSS global descontrolado.

## Decisao

Usar Tailwind CSS como camada principal de estilos, com tokens mapeados a partir de CSS variables `--b2b-*`.

Os tokens ficam em:

```txt
src/app/globals.css
tailwind.config.ts
```

Classes reutilizaveis e combinacoes comuns ficam em:

```txt
src/lib/styles.ts
```

## Consequencias

### Positivas

- Implementacao rapida e previsivel.
- Facilidade para aplicar tokens do Design System.
- Responsividade mobile-first simples.
- Menos CSS global especifico por secao.
- Boa integracao com componentes React.

### Negativas / Trade-offs

- Classes podem ficar longas em componentes complexos.
- Valores arbitrarios precisam ser usados com criterio.
- Exige disciplina para nao duplicar padroes visuais.

## Alternativas Consideradas

- CSS Modules: bom isolamento, mas menos eficiente para iterar visualmente com Figma.
- Styled Components: adicionaria runtime e complexidade desnecessaria.
- CSS global/BEM puro: consistente, mas mais lento para prototipar e refinar.

## Referencias

- `tailwind.config.ts`
- `src/app/globals.css`
- `src/lib/styles.ts`
- [Design System](../../design-system/README.md)
