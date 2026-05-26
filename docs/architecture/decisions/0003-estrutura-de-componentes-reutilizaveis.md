# ADR-0003 - Estrutura de componentes reutilizaveis

## Status

Aceito

## Data

2026-05-26

## Contexto

As secoes da landing compartilham padroes visuais como containers, botoes, cards glass, headings e spacing. Sem componentes base, cada secao tenderia a duplicar classes e regras do Design System.

## Decisao

Criar uma camada de componentes reutilizaveis em:

```txt
src/components/ui/
```

Componentes atuais:

- `Button`
- `Container`
- `GlassCard`
- `Section`
- `SectionTitle`

Criar tambem helpers de classe em:

```txt
src/lib/styles.ts
```

## Consequencias

### Positivas

- Menos duplicacao.
- Design System aplicado de forma consistente.
- Secoes ficam mais legiveis.
- Mudancas visuais globais ficam mais controladas.

### Negativas / Trade-offs

- Abstrair cedo demais pode engessar variacoes do Figma.
- Componentes UI devem permanecer simples para nao virar framework interno.

## Alternativas Consideradas

- Repetir classes em cada secao: rapido no inicio, mas ruim para manutencao.
- Criar biblioteca complexa de componentes: desnecessario neste momento.

## Referencias

- `src/components/ui/Button.tsx`
- `src/components/ui/Container.tsx`
- `src/components/ui/GlassCard.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/SectionTitle.tsx`
- [Componentes](../../components/README.md)
