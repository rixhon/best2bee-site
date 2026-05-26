# ADR-0007 - Regras de documentacao viva no Cursor

## Status

Aceito

## Data

2026-05-26

## Contexto

O projeto possui documentacao viva, ADRs, changelog, Design System documentado e um arquivo de estado atual. Sem orientacao persistente, existe risco de novas features, componentes, integracoes e mudancas estruturais evoluirem sem atualizar esses registros.

Como o desenvolvimento acontece no Cursor, regras de projeto em `.cursor/rules/` podem orientar automaticamente o agente durante tarefas futuras.

## Decisao

Criar regras persistentes em `.cursor/rules/` para lembrar o agente de atualizar documentacao, ADR, changelog, Design System, documentacao de componentes, integracoes e estado atual do projeto.

As regras foram separadas por responsabilidade:

- `living-documentation.mdc`
- `component-documentation.mdc`
- `architecture-decisions.mdc`
- `changelog-updates.mdc`
- `design-system-updates.mdc`
- `integration-documentation.mdc`
- `current-state-updates.mdc`
- `pre-change-context.mdc`

## Consequencias

### Positivas

- Reduz risco de documentacao ficar desatualizada.
- Torna o fluxo de desenvolvimento mais previsivel.
- Reforca o uso de ADRs para decisoes estruturais.
- Mantem changelog e current-state proximos da evolucao real.
- Reforca leitura de contexto antes de qualquer alteracao.
- Ajuda novos desenvolvedores a seguir os padroes do projeto.

### Negativas / Trade-offs

- Requer disciplina para nao transformar pequenas mudancas em excesso de documentacao.
- Algumas regras dependem de julgamento para diferenciar mudanca relevante de ruido.
- Regras persistentes precisam ser revisadas se o fluxo do projeto mudar.

## Alternativas Consideradas

- Manter apenas documentacao manual: simples, mas mais sujeito a esquecimento.
- Criar uma regra unica grande: mais facil de encontrar, mas menos clara e mais dificil de manter.
- Automatizar tudo por scripts: util para changelog e ADRs, mas insuficiente para decisoes de contexto e documentacao tecnica.

## Referencias

- `.cursor/rules/`
- `CHANGELOG.md`
- `docs/current-state.md`
- `docs/architecture/decisions/`
- `docs/design-system/README.md`
- `docs/components/README.md`
