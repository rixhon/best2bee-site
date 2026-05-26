# ADR-0008 - Planos executaveis para divida tecnica

## Status

Aceito

## Data

2026-05-26

## Contexto

A auditoria arquitetural identificou riscos de producao, manutencao, performance e escalabilidade. Sem um plano executavel, esses achados tendem a ficar dispersos em documentos longos e perdem prioridade durante a implementacao das proximas secoes.

O projeto precisa diferenciar analise, divida tecnica, refatoracao e performance para orientar entregas futuras sem misturar diagnostico com execucao.

## Decisao

Criar tres documentos canonicos para evolucao arquitetural:

- `docs/architecture/technical-debt.md`: inventario priorizado de divida tecnica.
- `docs/roadmap/refactoring-plan.md`: plano executavel de refatoracao.
- `docs/roadmap/performance-plan.md`: plano executavel de performance.

O `docs/roadmap.md` permanece como visao resumida, enquanto `docs/roadmap/` guarda planos detalhados.

## Consequencias

### Positivas

- Transforma auditoria em backlog tecnico acionavel.
- Separa prioridades criticas, importantes e melhorias futuras.
- Ajuda a planejar sprints de refatoracao sem bloquear implementacao visual.
- Cria criterios de aceite para resolver cada problema.
- Mantem performance como frente explicita antes do deploy publico.

### Negativas / Trade-offs

- Aumenta a quantidade de documentacao a manter.
- Exige disciplina para atualizar planos quando itens forem resolvidos.
- Pode gerar sobreposicao se `current-state`, roadmap e technical debt nao forem mantidos sincronizados.

## Alternativas Consideradas

- Manter tudo em `project-analysis.md`: bom para diagnostico, mas ruim para execucao diaria.
- Registrar apenas no backlog informal: menos documentacao, mas baixa rastreabilidade.
- Criar issues diretamente sem documento central: util depois, mas ainda exige uma fonte tecnica de priorizacao.

## Referencias

- `docs/architecture/project-analysis.md`
- `docs/architecture/technical-debt.md`
- `docs/roadmap/refactoring-plan.md`
- `docs/roadmap/performance-plan.md`
- `docs/roadmap.md`
