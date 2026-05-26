# Refactoring Plan

Data: 2026-05-26

## Objetivo

Este plano converte a divida tecnica identificada em tarefas executaveis, com prioridade, ordem ideal de implementacao, criterios de aceite e padroes arquiteturais definitivos.

## Principios de Execucao

- Resolver primeiro riscos que causam ruido operacional ou risco de producao.
- Evitar refatoracoes grandes antes de implementar mais secoes reais.
- Criar abstração apenas quando houver repeticao real.
- Preservar o Design System e os contratos ja documentados.
- Registrar mudancas relevantes em `CHANGELOG.md`.
- Criar ADR quando a refatoracao alterar arquitetura, dependencias ou padrao definitivo.

## Ordem Ideal de Implementacao

1. Higiene de repositorio e artefatos gerados.
2. Governanca de documentacao e ADRs.
3. Navegacao e fontes de dados compartilhadas.
4. Infraestrutura de qualidade: CI, typecheck, lint e build.
5. Performance inicial da Hero.
6. Padrao definitivo para secoes reais.
7. Integracoes de conversao: leads e Calendly.
8. Otimizacoes e automacoes futuras.

## Plano Priorizado

### Critico

#### RF-001 - Ignorar e remover `tsconfig.tsbuildinfo`

Problema relacionado: `TD-001`

Impacto tecnico:

- Reduz ruido no Git.
- Evita conflitos de artefato gerado.

Tarefas:

- Adicionar `tsconfig.tsbuildinfo` ao `.gitignore`.
- Remover do controle de versao se estiver tracked.
- Rodar `npm run typecheck`.

Criterios de aceite:

- `git status --short` nao mostra `tsconfig.tsbuildinfo` apos typecheck.
- Build/typecheck continuam funcionando.

Padrao definitivo:

- Nenhum artefato gerado deve ser versionado.

#### RF-002 - Criar gate contra placeholders em producao

Problema relacionado: `TD-002`

Impacto tecnico:

- Evita release publica incompleta.
- Torna estado das secoes verificavel.

Tarefas:

- Criar checklist documentado de pre-deploy.
- Adicionar regra no `docs/deploy-vercel.md`: producao publica exige secoes obrigatorias sem placeholder.
- Avaliar script futuro que leia `src/data/sections.ts` e falhe se houver `status: "placeholder"` em release final.

Criterios de aceite:

- Checklist de deploy deixa claro que placeholders bloqueiam release publica.
- `docs/current-state.md` lista secoes placeholder com clareza.

Padrao definitivo:

- Status de secao e contrato operacional, nao apenas informacao visual.

#### RF-003 - Definir arquitetura de captura de leads

Problema relacionado: `TD-003`

Impacto tecnico:

- Transforma `LeadForm` de infraestrutura em fluxo funcional.

Tarefas:

- Decidir destino: API route, Supabase, CRM ou ferramenta externa.
- Criar ADR da decisao.
- Criar camada `src/lib/leads/`.
- Adicionar estados de erro/sucesso no fluxo.
- Documentar variaveis e troubleshooting.

Criterios de aceite:

- Lead enviado para destino real ou ambiente mock documentado.
- Usuario recebe feedback claro.
- Falhas sao tratadas.

Padrao definitivo:

- Formularios enviam por camada de servico, nao por endpoint hardcoded no JSX.

#### RF-004 - Definir arquitetura de Calendly

Problema relacionado: `TD-004`

Impacto tecnico:

- Completa a jornada de conversao dos CTAs.

Tarefas:

- Confirmar `NEXT_PUBLIC_CALENDLY_URL`.
- Decidir UX: link externo, popup, embed ou secao dedicada.
- Criar componente dedicado.
- Documentar fallback quando variavel estiver ausente.

Criterios de aceite:

- CTA principal leva a acao real.
- Mobile e acessibilidade validados.
- Env var documentada.

Padrao definitivo:

- Integracoes externas devem ter componente e lib dedicados quando houver logica alem de um link simples.

### Importante

#### RF-005 - Resolver navegacao `Header` vs `HeroNavbar`

Problema relacionado: `TD-005`

Impacto tecnico:

- Remove ambiguidade de arquitetura.
- Evita divergencia de links.

Tarefas:

- Decidir se `Header` permanece para paginas futuras.
- Se permanecer, documentar escopo.
- Criar `src/data/navigation.ts` se houver duas navegacoes usando a mesma fonte.
- Se nao permanecer, remover `Header` em refatoracao propria.

Criterios de aceite:

- Existe uma regra clara sobre qual navegacao usar.
- Nao ha duas fontes divergentes para os mesmos anchors.

Padrao definitivo:

- A landing usa `HeroNavbar`; paginas futuras podem usar `Header` apenas se houver necessidade real.

#### RF-006 - Consolidar ADRs canonicos

Problema relacionado: `TD-006`

Impacto tecnico:

- Reduz confusao documental.

Tarefas:

- Migrar conteudo util de `docs/adr/0001-next-app-router-tailwind-sections.md` para `docs/architecture/decisions/` se ainda nao estiver coberto.
- Manter `docs/adr/README.md` apenas como redirecionamento ou remover pasta em tarefa dedicada.
- Atualizar links.

Criterios de aceite:

- Todo link principal aponta para `docs/architecture/decisions/`.
- Nenhum novo ADR e criado em `docs/adr/`.

Padrao definitivo:

- `docs/architecture/decisions/` e o unico diretorio de ADR.

#### RF-007 - Decidir estrategia de `cx`, `clsx` e `tailwind-merge`

Problema relacionado: `TD-007`

Impacto tecnico:

- Evita dependencias ociosas ou conflitos de classe.

Tarefas:

- Escolher entre remover dependencias ou usar no helper `cx`.
- Se usar, atualizar `src/lib/styles.ts`.
- Rodar typecheck/lint.

Criterios de aceite:

- Ha uma unica forma oficial de compor classes.
- Dependencias instaladas sao usadas ou removidas.

Padrao definitivo:

- Componentes importam apenas `cx` para compor classes.

#### RF-008 - Padronizar motion sem inflar client bundle

Problema relacionado: `TD-008`

Impacto tecnico:

- Mantem performance enquanto as secoes crescem.

Tarefas:

- Definir padrao de server section + client animated block.
- Documentar no guia de animacoes.
- Aplicar na proxima secao real como prova do padrao.

Criterios de aceite:

- Nova secao real nao vira client component inteira sem necessidade.
- Motion fica isolado em subcomponentes pequenos.

Padrao definitivo:

- Server components por padrao; client components somente nas partes animadas/interativas.

#### RF-009 - Extrair padroes visuais recorrentes

Problema relacionado: `TD-009`

Impacto tecnico:

- Evita repeticao de classes arbitrarias em secoes futuras.

Tarefas:

- Implementar mais uma secao real.
- Comparar classes repetidas com Hero.
- Extrair apenas repeticoes reais para `src/lib/styles.ts` ou `src/components/ui/`.

Criterios de aceite:

- Nenhuma abstracao criada sem repeticao real.
- Novo padrao documentado em `docs/design-system/README.md`.

Padrao definitivo:

- Repetiu em duas secoes, vira helper/componente/token.

#### RF-010 - Criar CI basico

Problema relacionado: `TD-011`

Impacto tecnico:

- Garante qualidade minima por PR.

Tarefas:

- Criar `.github/workflows/ci.yml`.
- Usar `npm ci`.
- Rodar `npm run typecheck`, `npm run lint`, `npm run build`.

Criterios de aceite:

- PR falha se typecheck/lint/build falharem.
- Documentacao de Git/GitHub menciona CI.

Padrao definitivo:

- `main` sempre buildavel.

### Melhoria Futura

#### RF-011 - Evoluir `SectionTitle`

Problema relacionado: `TD-012`

Tarefas:

- Aguardar caso real de heading secundario.
- Adicionar `titleAs` se necessario.

Padrao definitivo:

- Semantica define heading; estilo nao deve forcar hierarquia errada.

#### RF-012 - Revisar infra de animacoes nao usada

Problema relacionado: `TD-013`

Tarefas:

- Apos 2 ou 3 secoes reais, verificar uso de `FadeIn`, `scaleIn` e `useGsapScrollTrigger`.
- Remover o que nao tiver uso previsto.

Padrao definitivo:

- Infra preparada deve ter uso claro ou ser removida.

#### RF-013 - Dividir documentacao de componentes

Problema relacionado: `TD-014`

Tarefas:

- Criar `docs/components/` quando o catalogo crescer.
- Separar UI, sections, forms e animations.

Padrao definitivo:

- Documentacao acompanha dominios do codigo.

#### RF-014 - Automatizar indice de ADRs

Problema relacionado: `TD-015`

Tarefas:

- Evoluir `scripts/new-adr.mjs` para atualizar `README.md`.
- Validar ordem e links.

Padrao definitivo:

- Tarefa repetitiva deve ser automatizada sem remover revisao humana.

## Riscos de Escalabilidade

- Muitas secoes complexas sem subpastas aumentam custo de navegacao.
- Dados estaticos globais podem virar arquivo central gigante.
- Documentacao monolitica pode ficar dificil de manter.
- Sem CI, cada nova secao aumenta risco de regressao.

## Riscos de Performance

- Se cada secao usar Framer Motion no topo, JS cresce rapidamente.
- Assets Figma podem chegar pesados.
- GSAP deve continuar lazy e restrito a casos reais.

## Riscos de Manutencao

- Navegacao duplicada gera divergencia.
- ADRs duplicados enfraquecem governanca.
- Classes arbitrarias repetidas dificultam leitura e refatoracao.
- Integracoes preparadas mas nao conectadas confundem status do produto.

## Sequencia Recomendada de Sprints

### Sprint 1 - Higiene e governanca

1. Resolver `tsconfig.tsbuildinfo`.
2. Consolidar ADRs.
3. Definir escopo de `Header`.
4. Criar CI basico.

### Sprint 2 - Performance e padroes

1. Otimizar assets da Hero.
2. Definir padrao de motion server/client.
3. Revisar `cx` e dependencias.
4. Preparar check de placeholders para release.

### Sprint 3 - Conversao

1. Definir leads.
2. Implementar fluxo real de `LeadForm`.
3. Definir Calendly.
4. Implementar CTA final real.

### Sprint 4 - Secoes reais

1. Implementar Problem Section.
2. Extrair padroes repetidos.
3. Atualizar Design System.
4. Repetir para as proximas secoes.
