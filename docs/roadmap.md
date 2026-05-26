# Roadmap Tecnico

## Agora

- Implementar secoes restantes a partir do Figma.
- Manter cada secao complexa em pasta propria.
- Preservar fidelidade visual e responsividade premium.
- Conectar variaveis reais de ambiente para producao.

## Proximas etapas

- Implementar integracao real com Calendly.
- Definir destino de leads: API route, CRM, Supabase ou ferramenta externa.
- Criar suite minima de testes visuais ou snapshots.
- Otimizar imagens do Figma para WebP/AVIF.
- Avaliar self-hosting das fontes.

## Planos Executaveis

- [Plano de refatoracao](./roadmap/refactoring-plan.md)
- [Plano de performance](./roadmap/performance-plan.md)
- [Divida tecnica](./architecture/technical-debt.md)

## Performance

- Revisar LCP da Hero apos deploy.
- Medir Lighthouse mobile.
- Reduzir peso de assets acima da dobra.
- Adicionar `sizes` precisos para imagens por secao.

## Design System

- Promover padroes repetidos para componentes UI.
- Criar componentes para cards, chips, stats e badges conforme surgirem nas secoes.
- Evitar abstrair antes de haver repeticao real.

## Operacao

- Confirmar deploy automatico GitHub -> Vercel.
- Configurar dominio final.
- Configurar variaveis de ambiente de producao.
- Documentar processo de rollback apos primeiro deploy publico.
