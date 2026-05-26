# Performance Plan

Data: 2026-05-26

## Objetivo

Definir uma estrategia executavel para manter a landing page performatica conforme novas secoes do Figma forem implementadas.

## Relatorio Relacionado

- [Auditoria de performance frontend](../architecture/frontend-performance.md)
- [Estrategia SEO e performance](../architecture/seo-performance-strategy.md)

## Metas Iniciais

Metas recomendadas para validacao em mobile:

- LCP abaixo de `2.5s` em ambiente de producao.
- CLS abaixo de `0.1`.
- INP abaixo de `200ms`.
- Lighthouse Performance acima de `90` antes do deploy publico.
- Imagens acima da dobra revisadas antes de release.

## Principais Riscos de Performance

### PF-001 - Background da Hero pode dominar LCP

Prioridade: `Critico`

Impacto tecnico:

- `HeroBackground` carrega uma imagem PNG acima da dobra com `priority`.
- Essa imagem pode ser o maior recurso visual da primeira viewport.

Risco futuro:

- LCP alto em redes moveis.
- Experiencia inicial lenta.

Solucao profissional:

- Medir peso real do asset.
- Gerar `AVIF` e `WebP`.
- Manter PNG apenas como fallback se necessario.
- Revisar dimensoes exportadas.

Refatoracao recomendada:

```txt
public/figma/hero/background.avif
public/figma/hero/background.webp
```

Padrao definitivo:

- Todo asset acima da dobra deve ter formato otimizado e dimensao adequada.

Tarefas:

- [ ] Medir tamanho de `public/figma/hero/background.png`.
- [ ] Exportar versoes otimizadas.
- [ ] Atualizar `HeroBackground`.
- [ ] Rodar Lighthouse mobile em preview.

### PF-002 - Logo PNG pode ser substituido por SVG

Prioridade: `Importante`

Impacto tecnico:

- Logo em PNG pode ter peso maior e nitidez inferior.

Risco futuro:

- Carregamento desnecessario acima da dobra.
- Perda de qualidade em telas densas.

Solucao profissional:

- Preferir SVG se o arquivo vier vetorial do Figma.
- Caso nao seja possivel, gerar PNG em dimensao precisa.

Padrao definitivo:

- Logos e icones devem ser vetoriais sempre que possivel.

Tarefas:

- [ ] Verificar se o Figma permite export SVG do logo.
- [ ] Substituir `/figma/hero/logo.png` por SVG se viavel.
- [ ] Validar contraste e nitidez.

### PF-003 - Framer Motion em secoes inteiras aumenta JS

Prioridade: `Importante`

Impacto tecnico:

- Componentes com Framer Motion viram client components.
- O custo cresce se cada secao real seguir esse modelo.

Risco futuro:

- Bundle maior.
- Hidracao mais cara.
- Pior INP em mobile.

Solucao profissional:

- Manter secoes como server components.
- Isolar animacao em wrappers client pequenos.
- Preferir CSS transitions para microinteracoes simples.

Refatoracao recomendada:

```txt
Section.tsx              # server
SectionReveal.client.tsx # client apenas para motion
```

Padrao definitivo:

- Motion deve ser localizado, nao globalizado.

Tarefas:

- [ ] Criar padrao documentado para blocks animados.
- [ ] Aplicar na proxima secao real.
- [ ] Comparar bundle antes/depois.

### PF-004 - GSAP deve continuar lazy

Prioridade: `Importante`

Impacto tecnico:

- GSAP e poderoso, mas pode adicionar custo relevante se importado de forma ampla.

Risco futuro:

- Bundle inicial maior.
- Scroll animations pesadas em mobile.

Solucao profissional:

- Manter `loadGsapScrollTrigger()` com import dinamico.
- Usar GSAP apenas para pinning, scrub ou timelines complexas.

Padrao definitivo:

- Framer Motion para reveals e microinteracoes.
- GSAP apenas para scroll animations que Framer Motion nao resolve bem.

Tarefas:

- [ ] Nao importar `gsap` diretamente em componentes.
- [ ] Documentar cada uso real de GSAP na secao correspondente.
- [ ] Validar reduced motion em todo efeito de scroll.

### PF-005 - Placeholders com `RevealOnScroll`

Prioridade: `Importante`

Impacto tecnico:

- Mesmo secoes placeholder carregam wrappers client via Framer Motion.

Risco futuro:

- JS desnecessario durante fase de desenvolvimento ou preview.

Solucao profissional:

- Aceitar no curto prazo para demonstrar comportamento.
- Remover placeholders antes de producao.
- Ao implementar secoes reais, avaliar server component + animated child.

Padrao definitivo:

- Placeholder nao deve definir o custo final da arquitetura.

Tarefas:

- [ ] Remover ou substituir placeholders conforme secoes reais forem criadas.
- [ ] Evitar motion em blocos que nao precisam animar.

### PF-006 - Ausencia de medicao automatizada

Prioridade: `Importante`

Impacto tecnico:

- Sem medicao, otimizacoes viram opiniao.

Risco futuro:

- Regressao de performance nao detectada.

Solucao profissional:

- Usar Lighthouse local em momentos de release.
- Avaliar Vercel Speed Insights ou Web Vitals no futuro.

Padrao definitivo:

- Toda release publica deve ter medicao de performance.

Tarefas:

- [ ] Registrar baseline apos Hero atual.
- [ ] Registrar baseline apos cada nova secao real.
- [ ] Medir mobile e desktop.

## Plano de Medicao

### Local

```bash
npm run build
npm run start
```

Depois medir com Lighthouse em:

```txt
http://localhost:3000
```

### Preview

Usar Preview Deploy da Vercel para:

- Lighthouse mobile.
- Validacao de imagens.
- Validacao de fontes.
- Validacao de interacao e scroll.

### Producao

Antes de release publica:

- Lighthouse mobile.
- Lighthouse desktop.
- Checar LCP element.
- Checar waterfall de imagens.
- Validar CLS ao carregar fontes/imagens.

## Orcamento de Performance

### Imagens

- Imagem acima da dobra deve ser otimizada.
- Evitar PNG grande quando AVIF/WebP atender.
- Usar `priority` apenas em asset realmente critico.
- Usar `sizes` especifico por viewport.

### JavaScript

- Server component por padrao.
- Client component apenas para:
  - forms;
  - motion real;
  - browser APIs;
  - interatividade.
- Evitar importar GSAP no bundle inicial.

### CSS/Tailwind

- Tokens e classes reutilizaveis devem evitar duplicacao conceitual.
- Classes arbitrarias sao aceitaveis para fidelidade, mas devem ser extraidas quando repetidas.

### Fontes

- `next/font` ja esta em uso.
- Avaliar self-hosting apenas se medicao indicar ganho real.

## Ordem Recomendada

1. Medir baseline atual.
2. Otimizar assets da Hero.
3. Validar LCP/CLS apos otimizacao.
4. Definir padrao server/client para animacoes.
5. Implementar proxima secao real medindo impacto.
6. Repetir medicao a cada secao.
7. Avaliar bundle analysis antes de adicionar GSAP real.

## Riscos de Escalabilidade

- Cada nova secao pode adicionar imagens grandes.
- Cada nova secao pode adicionar client JS se usar Framer Motion no topo.
- Cada nova integracao pode adicionar script externo.

Mitigacao:

- Asset budget por secao.
- Motion localizado.
- Scripts externos carregados sob demanda.

## Riscos de Manutencao

- Otimizacoes pontuais sem padrao podem criar comportamento inconsistente.
- `priority` usado em muitas imagens perde sentido.
- Falta de baseline dificulta saber se uma mudanca melhorou ou piorou.

Mitigacao:

- Registrar metricas por release.
- Documentar decisoes de performance.
- Criar ADR para mudancas grandes de estrategia.

## Checklist de Performance por Secao

- [ ] A secao pode ser server component?
- [ ] Animacoes estao isoladas?
- [ ] Imagens usam formato e dimensao corretos?
- [ ] Imagens possuem `sizes` adequado?
- [ ] Apenas imagens acima da dobra usam `priority`?
- [ ] Reduced motion foi respeitado?
- [ ] Lighthouse foi medido apos a mudanca?
- [ ] `docs/current-state.md` e `CHANGELOG.md` foram atualizados?
