# Responsividade

## Breakpoints

O projeto usa breakpoints semanticos no Tailwind:

```txt
tablet:  768px
laptop:  1024px
desktop: 1280px
wide:    1560px
```

## Estrategia

O CSS deve ser mobile-first:

1. Definir experiencia base para mobile.
2. Melhorar layout em `tablet`.
3. Expandir grids e composicoes em `laptop`.
4. Refinar proporcoes em `desktop` e `wide`.

## Containers

Use `Container` em vez de repetir paddings e largura maxima.

```tsx
<Container>
  Conteudo
</Container>
```

## Tipografia fluida

Para headings de alta fidelidade ao Figma, use `clamp()` com tokens existentes.

Exemplo:

```tsx
className="text-[clamp(42px,7vw,64px)] laptop:text-[clamp(56px,5.6vw,var(--b2b-fs-display-xl))]"
```

## Grids

Padrao recomendado:

```txt
mobile: 1 coluna
tablet: 2 colunas quando fizer sentido
laptop+: 3 ou 4 colunas
```

## Checklist responsivo

- [ ] Mobile sem overflow horizontal.
- [ ] CTA facil de tocar.
- [ ] Texto sem linhas curtas demais.
- [ ] Imagens decorativas nao prejudicam leitura.
- [ ] Cards mantem contraste suficiente.
- [ ] Layout funciona em tablet entre mobile e desktop.
