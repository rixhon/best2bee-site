# ADR-0014 - Sistema final de design tokens

## Status

Aceito

## Data

2026-05-26

## Contexto

O projeto ja possui Design System aplicado por CSS variables `--b2b-*`, Tailwind configurado e um plano de tokenizacao para valores arbitrarios vindos do Figma. Com a Hero implementada e novas secoes prestes a serem criadas, era necessario consolidar oficialmente o sistema final de tokens para evitar crescimento inconsistente de spacing, tipografia, radius, shadows, z-index, containers, cores, transitions, timing e responsividade.

Tambem havia valores arbitrarios concentrados em Hero, Button, SectionTitle e helpers de estilo que precisavam de classificacao oficial entre token global, token de componente, valor local ou valor a remover.

## Decisao

Adotar `docs/design-system/final-tokens.md` como documento oficial do sistema final de Design Tokens.

Definicoes principais:

- `src/app/globals.css` permanece como fonte aplicada de CSS variables.
- `tailwind.config.ts` permanece como camada de mapeamento utilitario.
- Tokens usam prefixo `--b2b-*`.
- Tokens globais exigem repeticao ou semantica clara.
- Tokens de componente sao permitidos para fidelidade Figma.
- Valores arbitrarios nao sao padrao permanente.
- Hero deve migrar para `--b2b-hero-*` em refatoracao visual dedicada.
- Button e SectionTitle devem ser os primeiros shared components tokenizados.

## Consequencias

### Positivas

- Cria uma fonte oficial para evolucao de tokens.
- Reduz valores arbitrarios permanentes.
- Preserva fidelidade ao Figma por meio de component tokens.
- Evita inflar a escala global com valores pontuais.
- Orienta novas secoes com regras claras de promocao de tokens.

### Negativas / Trade-offs

- A tokenizacao completa da Hero deve ser feita em etapa separada para evitar regressao visual.
- O sistema exige manutencao documental quando novos tokens surgirem.
- Nem todo valor arbitrario sera removido imediatamente, pois alguns sao locais e dependem de validacao visual.

## Alternativas Consideradas

- Transformar todo valor do Figma em token global: rejeitado porque criaria um Design System inchado e dificil de manter.
- Manter valores arbitrarios como padrao: rejeitado porque enfraquece consistencia e manutencao.
- Tokenizar diretamente no codigo agora: adiado para evitar alterar a Hero sem comparacao visual dedicada.

## Referencias

- `docs/design-system/final-tokens.md`
- `docs/design-system/tokenization-plan.md`
- `docs/design-system/README.md`
- `src/app/globals.css`
- `tailwind.config.ts`
