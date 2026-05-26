# Technical Debt

Data: 2026-05-26

## Objetivo

Este documento transforma a auditoria arquitetural em uma visao executavel da divida tecnica atual. Cada item descreve impacto tecnico, risco futuro, prioridade, solucao profissional, refatoracao recomendada e padrao definitivo para o projeto.

## Classificacao

- `Critico`: pode bloquear deploy, criar regressao relevante, confundir arquitetura ou comprometer producao.
- `Importante`: nao bloqueia a fase atual, mas aumenta custo de manutencao, performance ou escalabilidade se postergado.
- `Melhoria futura`: evolucao desejavel quando houver mais secoes, trafego ou maturidade operacional.

## Resumo por Prioridade

### Critico

- `TD-001`: `tsconfig.tsbuildinfo` como artefato gerado no Git.
- `TD-002`: secoes placeholder podem chegar a producao.
- `TD-003`: integracao de leads sem destino real.
- `TD-004`: Calendly preparado, mas nao conectado.

### Importante

- `TD-005`: sobreposicao entre `Header` e `HeroNavbar`.
- `TD-006`: ADRs em dois caminhos.
- `TD-007`: dependencias `clsx` e `tailwind-merge` nao usadas.
- `TD-008`: crescimento de client components por animacoes.
- `TD-009`: classes Tailwind arbitrarias podem virar padrao dificil de manter.
- `TD-010`: assets da Hero podem impactar LCP.
- `TD-011`: ausencia de CI/testes.

### Melhoria Futura

- `TD-012`: `SectionTitle` sempre renderiza `h2`.
- `TD-013`: wrappers/variants de animacao preparados mas pouco usados.
- `TD-014`: documentacao de componentes tende a crescer demais.
- `TD-015`: automacao parcial de ADR/changelog.
- `TD-016`: metadados de producao ainda sem OG image/icons dedicados.

## Itens Detalhados

### TD-001 - `tsconfig.tsbuildinfo` versionado

Prioridade: `Critico`

Impacto tecnico:

- Gera ruido constante no working tree.
- Mistura artefato local de TypeScript com codigo fonte.
- Pode causar conflitos desnecessarios em commits e PRs.

Risco futuro:

- Commits com mudancas irrelevantes.
- Dificuldade para revisar alteracoes reais.
- Dependencia acidental de estado local.

Solucao profissional:

- Adicionar `tsconfig.tsbuildinfo` ao `.gitignore`.
- Remover o arquivo do controle de versao se ja estiver tracked.

Refatoracao recomendada:

```bash
git rm --cached tsconfig.tsbuildinfo
```

Padrao definitivo:

- Artefatos gerados por build, typecheck ou framework nao devem ser versionados.
- Antes de commit, revisar `git status --short` e remover ruido gerado.

### TD-002 - Secoes placeholder podem chegar a producao

Prioridade: `Critico`

Impacto tecnico:

- A pagina renderiza 8 secoes estruturais sem layout final.
- A navegacao aponta para anchors que ainda nao entregam conteudo real.

Risco futuro:

- Deploy publico com experiencia incompleta.
- Perda de confianca do usuario.
- Revisao visual confusa em ambiente de preview/producao.

Solucao profissional:

- Criar checklist de pre-deploy bloqueando producao enquanto `sections.*.status === "placeholder"` para secoes obrigatorias.
- Atualizar `docs/current-state.md` a cada secao implementada.

Refatoracao recomendada:

- Manter `SectionPlaceholder` apenas em desenvolvimento.
- Quando uma secao for implementada, promover para:

```txt
src/components/sections/{section}/
  index.ts
  {Section}Section.tsx
  {section}.data.ts
```

Padrao definitivo:

- Nenhuma secao placeholder deve ser considerada pronta para deploy publico.
- O status em `src/data/sections.ts` deve refletir a realidade da UI.

### TD-003 - Integracao de leads sem destino real

Prioridade: `Critico`

Impacto tecnico:

- `LeadForm` valida dados, mas nao envia para backend, CRM ou API.
- O componente pode ser confundido com funcionalidade pronta.

Risco futuro:

- Leads perdidos.
- Falta de rastreabilidade operacional.
- Experiencia ruim sem feedback real de sucesso/erro.

Solucao profissional:

- Definir destino de leads: API route, Supabase, CRM ou servico externo.
- Criar camada de envio desacoplada do componente visual.
- Adicionar estados de sucesso, erro e loading.

Refatoracao recomendada:

```txt
src/lib/leads/
  submitLead.ts
  lead.schema.ts
```

Padrao definitivo:

- Formularios nao devem chamar endpoints diretamente no JSX.
- Validacao deve ser compartilhavel entre UI e camada de envio quando houver backend.

### TD-004 - Calendly preparado, mas nao conectado

Prioridade: `Critico`

Impacto tecnico:

- Existe `NEXT_PUBLIC_CALENDLY_URL` e `CALENDLY_URL`, mas a UI nao consome a integracao.
- CTAs apontam para `#cta`, que ainda e placeholder.

Risco futuro:

- Call-to-action sem conversao real.
- Deploy com jornada incompleta.
- Integracao feita as pressas sem revisar privacidade, mobile e fallback.

Solucao profissional:

- Definir URL oficial do Calendly.
- Criar componente dedicado para embed/link.
- Documentar variaveis, setup, troubleshooting e fallback.

Refatoracao recomendada:

```txt
src/components/integrations/CalendlyLink.tsx
src/lib/calendly.ts
```

Padrao definitivo:

- Integracoes externas devem ter arquivo dedicado em `src/lib` ou `src/components/integrations`.
- Toda nova env var deve atualizar `.env.example` e docs.

### TD-005 - Sobreposicao entre `Header` e `HeroNavbar`

Prioridade: `Importante`

Impacto tecnico:

- Existem duas navegacoes conceituais.
- `Header` usa `NAV_ITEMS`; `HeroNavbar` usa `heroNavItems`.

Risco futuro:

- Links divergentes.
- Duplicidade visual se `Header` for ativado sem remocao da Hero nav.
- Manutencao duplicada de itens de menu.

Solucao profissional:

- Definir papel oficial:
  - `HeroNavbar`: navegacao visual da landing single-page.
  - `Header`: reservado para paginas internas futuras ou removido se nao houver uso.

Refatoracao recomendada:

- Centralizar links em `src/data/navigation.ts` se ambas forem mantidas.
- Ou remover `Header` em tarefa propria se for legado.

Padrao definitivo:

- Uma unica fonte de dados para navegacao.
- Um unico componente de navegacao ativo por pagina, exceto se houver decisao de UX documentada.

### TD-006 - ADRs em dois caminhos

Prioridade: `Importante`

Impacto tecnico:

- `docs/architecture/decisions/` e canonico.
- `docs/adr/` ainda existe como legado.

Risco futuro:

- Decisoes novas registradas no lugar errado.
- Links divergentes.
- Historico arquitetural fragmentado.

Solucao profissional:

- Manter `docs/architecture/decisions/` como unico destino.
- Transformar `docs/adr/` em ponte temporaria ou remover apos migracao.

Refatoracao recomendada:

- Migrar ADR legado para o caminho canonico ou manter apenas README redirecionando.

Padrao definitivo:

- Todo ADR novo deve ser criado via:

```bash
npm run adr:new -- "Titulo da decisao"
```

### TD-007 - Dependencias de classe nao usadas

Prioridade: `Importante`

Impacto tecnico:

- `clsx` e `tailwind-merge` estao instalados.
- `src/lib/styles.ts` usa `cx` proprio que apenas concatena strings.

Risco futuro:

- Dependencias desnecessarias.
- Conflitos Tailwind nao resolvidos quando `className` sobrescrever variantes.

Solucao profissional:

- Escolher uma direcao:
  - remover `clsx` e `tailwind-merge`;
  - ou evoluir `cx` para usar ambos.

Refatoracao recomendada:

```ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
```

Padrao definitivo:

- O projeto deve ter um unico helper de classes.
- Componentes nao devem importar `clsx`/`twMerge` diretamente se `cx` existir.

### TD-008 - Crescimento de client components por animacoes

Prioridade: `Importante`

Impacto tecnico:

- Componentes com Framer Motion precisam de `"use client"`.
- Se secoes inteiras virarem client components, o JS enviado aumenta.

Risco futuro:

- Bundle maior.
- Pior TTI/INP em mobile.
- Mais complexidade de hidracao.

Solucao profissional:

- Manter secoes como server components por padrao.
- Isolar motion em wrappers client pequenos.

Refatoracao recomendada:

```txt
SectionServer.tsx
AnimatedBlock.client.tsx
```

Padrao definitivo:

- Animação nao deve promover uma secao inteira a client component sem necessidade.
- Use CSS transitions para microinteracoes simples.

### TD-009 - Tailwind arbitrario em excesso

Prioridade: `Importante`

Impacto tecnico:

- A Hero usa muitos valores arbitrarios para fidelidade ao Figma.
- Isso e aceitavel em refinamento visual, mas nao deve virar padrao dominante.

Risco futuro:

- Dificuldade de manutencao.
- Padrões visuais divergentes.
- Design System perde forca pratica.

Solucao profissional:

- Extrair padroes recorrentes para `src/lib/styles.ts` ou componentes UI apos repeticao real.
- Documentar novos padroes em `docs/design-system/README.md`.

Refatoracao recomendada:

- Criar helpers como `sectionShell`, `metricGrid`, `pillNav`, apenas quando repetidos em outras secoes.

Padrao definitivo:

- Valores arbitrarios sao permitidos para fidelidade pontual ao Figma.
- Repeticao em duas ou mais secoes deve virar token, helper ou componente.

### TD-010 - Assets da Hero podem impactar LCP

Prioridade: `Importante`

Impacto tecnico:

- Background acima da dobra usa PNG com `priority`.
- Logo tambem usa PNG.

Risco futuro:

- LCP alto em mobile.
- Maior trafego de assets.
- Imagem menos nitida em densidades variadas.

Solucao profissional:

- Medir peso dos assets.
- Gerar WebP/AVIF para background.
- Preferir SVG para logo quando possivel.
- Revisar `sizes`.

Refatoracao recomendada:

```txt
public/figma/hero/background.avif
public/figma/hero/background.webp
public/figma/hero/logo.svg
```

Padrao definitivo:

- Assets acima da dobra devem ter formato, dimensao e prioridade revisados antes do deploy publico.

### TD-011 - Ausencia de CI/testes

Prioridade: `Importante`

Impacto tecnico:

- Validacoes dependem de execucao manual.
- Nao ha garantia automatica de `lint`, `typecheck` e `build` em PR.

Risco futuro:

- Regressao em `main`.
- Deploy quebrado.
- Refatoracoes mais arriscadas conforme secoes crescem.

Solucao profissional:

- Criar workflow GitHub Actions com `npm ci`, `npm run typecheck`, `npm run lint`, `npm run build`.
- Adicionar testes de smoke/render quando componentes criticos crescerem.

Refatoracao recomendada:

```txt
.github/workflows/ci.yml
```

Padrao definitivo:

- `main` deve estar sempre buildavel.
- Toda PR deve passar em validacoes automaticas.

### TD-012 - `SectionTitle` sempre usa `h2`

Prioridade: `Melhoria futura`

Impacto tecnico:

- Serve bem para secoes principais.
- Pode limitar composicoes com subtitulos ou seções internas.

Risco futuro:

- Hierarquia de headings inconsistente em componentes complexos.

Solucao profissional:

- Adicionar prop controlada somente quando houver caso real.

Refatoracao recomendada:

```ts
type SectionTitleProps = {
  titleAs?: "h2" | "h3";
};
```

Padrao definitivo:

- Headings devem seguir hierarquia semantica, nao apenas estilo visual.

### TD-013 - Animacoes preparadas mas pouco usadas

Prioridade: `Melhoria futura`

Impacto tecnico:

- `FadeIn`, `scaleIn` e `useGsapScrollTrigger` existem sem uso atual.

Risco futuro:

- Codigo morto ou falsa expectativa de funcionalidade.

Solucao profissional:

- Manter enquanto roadmap de secoes animadas existir.
- Remover se nao forem usados apos implementacao das proximas secoes.

Refatoracao recomendada:

- Revisar apos 2 ou 3 secoes reais.

Padrao definitivo:

- Infraestrutura preparada deve ser marcada em docs como "prepared", nao "ready".

### TD-014 - documentacao de componentes tende a crescer demais

Prioridade: `Melhoria futura`

Impacto tecnico:

- O mini Storybook tecnico ja e extenso, mas foi modularizado para `docs/components/`.

Risco futuro:

- Dificuldade de navegacao.
- Maior chance de documentacao desatualizada.

Solucao profissional:

- Dividir por categoria quando houver mais componentes reais.

Refatoracao recomendada:

```txt
docs/components/
  README.md
  ui.md
  sections.md
  forms.md
  animations.md
```

Padrao definitivo:

- Documentacao deve crescer por dominio, nao em um arquivo unico indefinidamente.

### TD-015 - Automacao parcial de ADR/changelog

Prioridade: `Melhoria futura`

Impacto tecnico:

- Scripts criam entradas, mas indices ainda podem exigir edicao manual.

Risco futuro:

- ADR criado sem link no indice.
- Changelog atualizado fora de padrao se script nao for usado.

Solucao profissional:

- Automatizar atualizacao de indices.
- Considerar Conventional Commits apenas quando houver fluxo de PR maduro.

Refatoracao recomendada:

- Evoluir `scripts/new-adr.mjs` para atualizar `docs/architecture/decisions/README.md`.

Padrao definitivo:

- Automacoes devem reduzir passos manuais repetitivos, sem esconder decisoes importantes.

### TD-016 - Metadados de producao incompletos

Prioridade: `Melhoria futura`

Impacto tecnico:

- Metadata base existe.
- Ainda faltam assets dedicados como favicon e OG image final.

Risco futuro:

- Compartilhamento social com preview generico.
- Identidade visual incompleta em producao.

Solucao profissional:

- Gerar favicon, apple icon e OG image.
- Atualizar `metadata` em `src/app/layout.tsx`.

Refatoracao recomendada:

```txt
public/favicon.ico
public/og-image.png
```

Padrao definitivo:

- Toda release publica deve incluir metadados e assets sociais revisados.

## Riscos Transversais

### Escalabilidade

- Muitas secoes complexas em um unico nivel de `src/components/sections/`.
- Dados estaticos globais podem crescer demais.
- Documentacao monolitica pode ficar dificil de manter.

### Performance

- LCP pode ser dominado pelo background da Hero.
- Framer Motion pode aumentar JS se aplicado em secoes inteiras.
- GSAP deve continuar sob demanda.

### Manutencao

- Navegacao duplicada.
- Fontes de documentacao duplicadas.
- Helpers visuais pouco padronizados se valores arbitrarios se espalharem.

## Padroes Definitivos Propostos

1. Server component por padrao; client component apenas para interatividade, form ou motion real.
2. Secao complexa sempre em pasta propria.
3. Dados repetidos sempre em `*.data.ts`.
4. `docs/architecture/decisions/` e o unico caminho canonico para ADRs.
5. Assets do Figma sempre em `public/figma/{section}/`.
6. Tokens oficiais ficam em `src/data/design-system.md`; aplicacao tecnica em `globals.css` e `tailwind.config.ts`.
7. Changelog deve ser atualizado via script sempre que houver entrega relevante.
8. Nenhum placeholder deve ir para producao publica.
