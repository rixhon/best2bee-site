# ADR-0010 - Arquitetura definitiva do frontend

## Status

Aceito

## Data

2026-05-26

## Contexto

O projeto chegou a um ponto em que a base estrutural, Design System, Hero Section, documentacao viva, planos de performance e divida tecnica ja foram definidos. Antes de continuar implementando novas secoes vindas do Figma, era necessario congelar uma arquitetura oficial para evitar crescimento inconsistente.

Sem uma base definitiva, novas secoes poderiam divergir em organizacao, client/server boundaries, tokens, assets, animacoes e integracoes.

## Decisao

Adotar `docs/architecture/final-architecture.md` como documento oficial da arquitetura frontend do projeto.

Esse documento define:

- App Router;
- estrutura de pastas;
- componentes;
- secoes;
- UI shared;
- animacoes;
- hooks;
- providers;
- utils;
- tokens;
- assets;
- imagens;
- fontes;
- integracoes;
- responsividade;
- SEO;
- performance;
- server/client components;
- limites entre camadas;
- convencoes definitivas.

## Consequencias

### Positivas

- Cria uma fonte oficial para novas implementacoes.
- Reduz divergencia arquitetural entre secoes.
- Reforca Server Components como padrao.
- Define limites claros entre `app`, `components`, `lib`, `hooks`, `data` e `providers`.
- Melhora previsibilidade para performance, SEO e manutencao.
- Facilita onboarding e revisao tecnica.

### Negativas / Trade-offs

- Mudancas futuras que contrariem a arquitetura exigem ADR.
- A documentacao oficial precisa ser mantida atualizada.
- Algumas decisoes atuais ainda exigem execucao futura, como CI, otimizacao de imagens e consolidacao de ADR legado.

## Alternativas Consideradas

- Manter apenas `docs/architecture.md`: bom como explicacao historica, mas menos normativo.
- Seguir apenas os planos de refatoracao/performance: util para execucao, mas insuficiente como base arquitetural.
- Decidir arquitetura secao por secao: flexivel, mas arriscado para consistencia e escala.

## Referencias

- `docs/architecture/final-architecture.md`
- `docs/architecture/project-analysis.md`
- `docs/architecture/frontend-performance.md`
- `docs/architecture/technical-debt.md`
- `docs/roadmap/refactoring-plan.md`
- `docs/design-system/README.md`
