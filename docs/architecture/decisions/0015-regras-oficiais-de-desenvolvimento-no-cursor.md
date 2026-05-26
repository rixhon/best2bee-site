# ADR-0015 - Regras oficiais de desenvolvimento no Cursor

## Status

Aceito

## Data

2026-05-26

## Contexto

O projeto consolidou documentos oficiais para arquitetura, componentes, animacoes, SEO/performance e Design Tokens. Para garantir que esses padroes sejam usados automaticamente durante o desenvolvimento futuro, as regras persistentes do Cursor precisam cobrir tambem implementacao diaria, nao apenas documentacao viva.

Sem regras especificas, novas sessoes de desenvolvimento poderiam esquecer padroes de Server Components, responsividade, tokens, imports, naming, acessibilidade, SEO, performance ou TypeScript.

## Decisao

Criar regras oficiais em `.cursor/rules/` para governar desenvolvimento futuro.

As regras cobrem:

- arquitetura;
- App Router;
- componentes;
- TypeScript;
- responsividade;
- animacoes;
- SEO, acessibilidade e performance;
- naming e imports;
- Design Tokens;
- documentacao.

## Consequencias

### Positivas

- Aumenta consistencia entre novas secoes e componentes.
- Reduz risco de regressao arquitetural.
- Mantem Design System, performance e documentacao vivos.
- Ajuda o agente a aplicar automaticamente as decisoes oficiais do projeto.

### Negativas / Trade-offs

- Mais regras exigem manutencao quando a arquitetura oficial evoluir.
- Regras excessivamente rigidas podem precisar de ajuste se o projeto mudar de escopo.
- Algumas regras sao file-scoped e dependem do contexto de arquivos abertos/editados.

## Alternativas Consideradas

- Manter apenas regras de documentacao viva: insuficiente para orientar implementacao diaria.
- Criar uma unica regra grande: rejeitado porque seria dificil de manter e menos acionavel.
- Nao criar regras e depender apenas dos docs: rejeitado porque aumenta chance de padroes serem ignorados.

## Referencias

- `.cursor/rules/`
- `docs/architecture/final-architecture.md`
- `docs/components/component-architecture.md`
- `docs/components/official-animation-system.md`
- `docs/architecture/seo-performance-strategy.md`
- `docs/design-system/final-tokens.md`
