# Guia: Adicionando uma Nova Secao

## 1. Comece pelo Figma

- Obtenha a URL com `node-id`.
- Consulte o Figma MCP.
- Salve assets em `public/figma/{section}/`.

## 2. Escolha a estrutura

Para secao simples:

```txt
src/components/sections/NewSection.tsx
```

Para secao complexa:

```txt
src/components/sections/new-section/
  NewSection.tsx
  NewSectionContent.tsx
  NewSectionBackground.tsx
  new-section.data.ts
  index.ts
```

## 3. Use componentes base

- `Container`
- `Section`
- `SectionTitle`
- `Button`
- `GlassCard`

## 4. Aplique animacoes

Use variants de `src/lib/motion.ts`.

## 5. Registre a secao na pagina

Atualize `src/app/page.tsx` respeitando a ordem da landing.

## 6. Valide

```bash
npm run typecheck
npm run lint
npm run build
```

## 7. Atualize docs quando necessario

- Atualize `docs/changelog.md`.
- Crie ADR se houver decisao arquitetural nova.
