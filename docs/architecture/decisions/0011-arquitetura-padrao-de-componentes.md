# ADR-0011 - Arquitetura padrao de componentes

## Status

Aceito

## Data

2026-05-26

## Contexto

O projeto possui componentes UI, layout, forms, animations e secoes, mas ainda precisava de uma estrategia formal para organizacao, naming, composicao, props e boundaries antes da implementacao das proximas secoes do Figma.

Sem uma arquitetura de componentes oficial, novas secoes poderiam criar padroes diferentes para pastas, client components, props, dados, animation wrappers e UI compartilhada.

## Decisao

Adotar `docs/components/component-architecture.md` como documento oficial de arquitetura de componentes.

Tambem modularizar a documentacao de componentes:

```txt
docs/components/
  README.md
  component-architecture.md
```

A estrategia adotada e Atomic Design pragmatica:

- atoms;
- molecules;
- organisms;
- templates;
- pages.

Essa classificacao orienta, mas nao deve gerar abstracoes prematuras.

## Consequencias

### Positivas

- Define boundaries claros entre UI, layout, sections, forms, animations e integrations.
- Reduz risco de duplicacao entre secoes.
- Reforca Server Components por padrao.
- Cria padroes de props, naming e pastas.
- Facilita evolucao enterprise-level sem overengineering.

### Negativas / Trade-offs

- Aumenta a quantidade de documentacao a manter.
- Atomic Design pode ser usado de forma excessiva se aplicado dogmaticamente.
- Alguns componentes atuais ainda precisam ser ajustados no futuro para aderir totalmente ao padrao server/client ideal.

## Alternativas Consideradas

- Manter apenas `docs/components/README.md`: bom como catalogo, mas insuficiente para governar arquitetura.
- Criar pastas atom/molecule/organism no codigo: mais teorico, mas menos alinhado com Next.js e landing pages orientadas por secoes.
- Decidir padroes secao a secao: flexivel, mas arriscado para consistencia.

## Referencias

- `docs/components/component-architecture.md`
- `docs/components/README.md`
- `docs/architecture/final-architecture.md`
- `src/components/`
