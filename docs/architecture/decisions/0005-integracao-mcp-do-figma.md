# ADR-0005 - Integracao MCP do Figma

## Status

Aceito

## Data

2026-05-26

## Contexto

O layout da landing page vem de um arquivo Figma aprovado. O projeto precisa implementar secoes com alta fidelidade, mas sem copiar codigo gerado automaticamente de forma literal.

Tambem e necessario baixar assets temporarios da API do Figma para o projeto, garantindo estabilidade em producao.

## Decisao

Usar Figma MCP como etapa oficial do fluxo design-to-code.

Fluxo:

1. receber URL com `node-id`;
2. extrair `fileKey` e `nodeId`;
3. consultar `get_design_context`;
4. consultar `get_screenshot`;
5. salvar assets em `public/figma/{section}/`;
6. implementar com componentes e tokens locais;
7. validar visualmente em desktop, tablet e mobile.

## Consequencias

### Positivas

- Reduz ambiguidade entre design e implementacao.
- Acelera leitura de layers, assets e dimensoes.
- Ajuda a manter fidelidade visual.
- Cria fluxo repetivel para as 9 secoes.

### Negativas / Trade-offs

- Output do MCP precisa ser revisado e adaptado.
- URLs de assets sao temporarias e precisam ser baixadas.
- Requer acesso/autenticacao correta ao Figma.

## Alternativas Consideradas

- Implementar apenas olhando screenshots: maior risco de erro.
- Exportar tudo manualmente do Figma: mais lento e menos rastreavel.
- Copiar codigo gerado literalmente: baixa qualidade arquitetural.

## Referencias

- `docs/figma-mcp.md`
- `public/figma/hero/`
- `src/components/sections/hero/`
