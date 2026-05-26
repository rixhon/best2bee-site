# ADR-0009 - Documentacao modular do Design System

## Status

Aceito

## Data

2026-05-26

## Contexto

O Design System deixou de ser apenas um guia unico e passou a precisar de documentos especializados, como o plano de tokenizacao dos valores arbitrarios vindos do Figma. O caminho solicitado para o novo plano foi `docs/design-system/tokenization-plan.md`, mas ja existia `docs/design-system.md` como arquivo.

Manter tudo em um unico Markdown aumentaria o tamanho do documento e dificultaria evolucao por temas.

## Decisao

Transformar a documentacao tecnica do Design System em uma pasta:

```txt
docs/design-system/
  README.md
  tokenization-plan.md
```

`README.md` passa a ser o guia principal e `tokenization-plan.md` registra o plano de tokenizacao e padronizacao de valores Figma.

## Consequencias

### Positivas

- Permite crescer a documentacao por assunto.
- Mantem o caminho pedido para o plano de tokenizacao.
- Evita que o guia principal vire um documento monolitico.
- Facilita adicionar futuros documentos sobre tokens, componentes visuais e auditorias.

### Negativas / Trade-offs

- Exige atualizar links antigos para `docs/design-system/README.md`.
- Pode quebrar referencias externas caso alguem use o caminho antigo.
- Requer disciplina para manter a fonte oficial em `src/data/design-system.md` sincronizada.

## Alternativas Consideradas

- Criar `docs/design-system-tokenization-plan.md`: evitaria migracao, mas nao atenderia ao caminho solicitado e escalaria pior.
- Manter tudo em `docs/design-system.md`: simples no curto prazo, mas ruim para documentacao viva.
- Criar pasta com outro nome: evitaria conflito, mas criaria nomenclatura menos direta.

## Referencias

- `docs/design-system/README.md`
- `docs/design-system/tokenization-plan.md`
- `src/data/design-system.md`
- `src/app/globals.css`
- `tailwind.config.ts`
