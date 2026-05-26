# Changelog

O changelog canonico do projeto fica na raiz:

- [CHANGELOG.md](../CHANGELOG.md)

## Como Registrar Mudancas

Use:

```bash
npm run changelog:add -- --type feature --message "Descricao da mudanca"
```

Tipos aceitos:

- `feature`: nova funcionalidade.
- `improvement`: melhoria sem alterar contrato publico.
- `fix`: correcao de bug.
- `breaking`: mudanca incompativel.

## Como Fechar Versao

Use:

```bash
npm run changelog:release -- --version 0.2.0
```

O script move o bloco `Unreleased` para uma versao datada e recria um novo bloco vazio de `Unreleased`.

## Regras

- Registre mudancas relevantes no mesmo PR da alteracao.
- Use SemVer: `MAJOR.MINOR.PATCH`.
- Marque breaking changes explicitamente.
- Evite registrar mudancas internas sem impacto real para manutencao, produto ou operacao.
