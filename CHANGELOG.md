# Changelog

Todas as mudancas relevantes deste projeto sao documentadas neste arquivo.

O formato segue uma adaptacao do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o versionamento segue [SemVer](https://semver.org/lang/pt-BR/).

## Padrao de Versionamento

```txt
MAJOR.MINOR.PATCH
```

- `MAJOR`: mudancas incompativeis ou breaking changes.
- `MINOR`: novas features compativeis.
- `PATCH`: correcoes e melhorias internas compativeis.

## Como Registrar Mudancas

Use o script:

```bash
npm run changelog:add -- --type feature --message "Descricao da mudanca"
```

Tipos aceitos:

- `feature`
- `improvement`
- `fix`
- `breaking`

Para fechar uma versao:

```bash
npm run changelog:release -- --version 0.1.0
```

## [Unreleased]

### Breaking Changes

- Nenhuma mudanca registrada.

### Features

- Sistema profissional de changelog com registro automatico por script
- Problem Section implementada a partir do Figma com cards glass, background e animacoes
- Solution Section implementada a partir do Figma com cards de talentos e asset decorativo
- Work Section implementada a partir do Figma com timeline responsiva
- Stack Section implementada a partir do Figma com pills de tecnologias
- Implement Squads Section from Figma with split layout and motion
- Implement Social Section from Figma with testimonials and company pills
- Implement CTA Section from Figma with modular structure and motion reveal

### Melhorias

- Arquivo de current-state criado para acompanhar entregas, backlog, bugs conhecidos e proximas etapas
- Regras persistentes do Cursor criadas para manter documentacao viva durante o desenvolvimento
- Documentacao tecnica dos componentes expandida em formato de mini Storybook
- Regra pre-change adicionada para exigir leitura de contexto antes de alteracoes
- Relatorio tecnico completo do projeto criado com mapeamento arquitetural e riscos
- Planos executaveis de divida tecnica, refatoracao e performance adicionados ao roadmap
- Plano de tokenizacao de valores Figma criado e Design System modularizado
- Auditoria de performance frontend adicionada com baseline de build e plano de otimizacao
- Arquitetura definitiva do frontend congelada como base oficial do projeto
- Arquitetura de componentes padronizada com Atomic Design pragmatico e boundaries oficiais
- Sistema oficial de animacoes definido e variants consolidadas em src/lib/motion.ts
- Estrategia oficial de SEO e performance definida para App Router, Hero, imagens e scripts
- Sistema final de Design Tokens consolidado com arquitetura global, semantica e por componente
- Regras oficiais de desenvolvimento adicionadas para arquitetura, componentes, TypeScript, SEO, performance e Design Tokens
- HeroNavbar ajustado para dimensoes e gradiente do menu aprovado no Figma
- HeroMetrics ajustado para dimensoes, padding e gradiente do card de metricas do Figma
- CTA secundario Ver solucao removido da Hero
- HeroMetrics reorganizado em tres blocos proporcionais alinhados a esquerda
- Tipografia dos valores de HeroMetrics ajustada conforme referencia do Figma
- Tipografia dos labels de HeroMetrics ajustada conforme referencia do Figma
- Tipografia das descricoes de HeroMetrics ajustada conforme referencia do Figma
- HeroMetrics deslocado sutilmente para a direita dentro do card glass
- Eixo central da Hero normalizado entre navbar, conteudo e metricas
- Indicador de scroll da Hero reposicionado sobre o card de metricas
- CTA da Hero reposicionado acima do indicador de scroll
- Cards da Problem Section ajustados para dimensoes e gradiente do Figma
- Grid de cards da Problem Section alinhado com espacamento proporcional da referencia
- Problem Section fixa tres cards na mesma linha em desktop
- Tipografia do cabecalho da Problem Section ajustada conforme preview aprovado
- Tipografia da Hero alinhada aos tokens oficiais de fonte e lede
- Conteudo da Hero deslocado para mais proximo do menu
- HeroNavbar fixado no topo durante o scroll
- Tipografia da Hero ajustada para limitar o H1 a 60px no preview mobile/tablet
- Alinhamento horizontal das secoes Problem e Solution padronizado pelo mesmo grid
- Abelha da Solution reposicionada fora do texto com flutuacao suave
- Abelha da Solution reduzida e deslocada para fora da area de texto

### Correcoes

- Marcador central do indicador de scroll da Hero restaurado
- HeroNavbar permanece flutuante sobre todas as secoes durante o scroll

## [0.1.0] - 2026-05-26

### Breaking Changes

- Nenhuma mudanca registrada.

### Features

- Estrutura inicial Next.js com App Router, TypeScript e Tailwind CSS.
- Design System Best2bee aplicado via tokens CSS e Tailwind.
- Hero Section implementada a partir do Figma.
- Hero Section modularizada em `src/components/sections/hero/`.
- Preparacao SSR-safe para GSAP ScrollTrigger.
- Documentacao viva criada em `docs/`.
- Sistema de ADR criado em `docs/architecture/decisions/`.

### Melhorias

- `page.tsx` passou a compor as secoes oficiais vindas do Figma.
- Padroes reutilizaveis criados para container, botoes, cards glass, spacing e motion variants.
- Documentacao tecnica expandida para arquitetura, design system, Figma MCP, Git/GitHub e deploy Vercel.

### Correcoes

- Ajustada compatibilidade do Tailwind container com valores literais em `container.screens`.
- Ajustada tipagem de componentes com Framer Motion.
- Ajustada integracao SSR-safe de animacoes dependentes de browser.
