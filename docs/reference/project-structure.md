# Estrutura de Pastas

```txt
.
├── CHANGELOG.md
├── docs/
│   ├── architecture/
│   │   └── decisions/
│   ├── components/
│   ├── design-system/
│   ├── guides/
│   └── reference/
├── public/
│   └── figma/
├── scripts/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── animations/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   └── types/
└── tailwind.config.ts
```

## Responsabilidades

- `CHANGELOG.md`: historico versionado de mudancas relevantes.
- `docs/`: documentacao viva do projeto.
- `docs/architecture/decisions/`: ADRs canonicos do projeto.
- `docs/architecture/seo-performance-strategy.md`: estrategia oficial de SEO e performance.
- `docs/components/`: catalogo, arquitetura de componentes e sistema oficial de animacoes.
- `docs/design-system/`: guia tecnico do Design System, tokens finais e planos de tokenizacao.
- `public/figma/`: assets exportados ou baixados do Figma.
- `scripts/`: automacoes locais para ADRs e changelog.
- `src/app/`: App Router, layout global e estilos globais.
- `src/components/ui/`: primitives reutilizaveis.
- `src/components/sections/`: secoes da landing.
- `src/components/forms/`: formularios e campos.
- `src/lib/`: utilitarios, motion, estilos compartilhados e integracoes.
- `src/hooks/`: hooks client-side compartilhados.
- `src/data/`: dados estaticos e Design System fonte.
- `src/types/`: tipos compartilhados.
