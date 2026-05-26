# Animacoes

Status: `Complementar`

Documento oficial detalhado: `docs/components/official-animation-system.md`.

## Principios

As animacoes devem ser sutis, rapidas e funcionais. Elas devem reforcar hierarquia e fluidez, nao competir com a mensagem.

Regras:

- Duracao maxima recomendada: `520ms`.
- Respeitar `prefers-reduced-motion`.
- Usar stagger com moderacao.
- Evitar animar propriedades que causam layout shift.
- Preferir `opacity`, `transform`, `scale`.

## Framer Motion

Variants reutilizaveis ficam em `src/lib/motion.ts`.

Disponiveis:

- `fadeUp`
- `staggerContainer`
- `scaleIn`
- `revealOpacity`

Uso recomendado:

```tsx
<motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
  Conteudo
</motion.div>
```

## GSAP ScrollTrigger

GSAP esta preparado de forma SSR-safe em:

- `src/lib/gsap.ts`
- `src/hooks/useGsapScrollTrigger.ts`

Use GSAP apenas quando Framer Motion nao for suficiente, por exemplo:

- timelines complexas;
- animacoes sincronizadas ao scroll;
- pinning;
- efeitos com scrub.

## SSR safety

Nunca importe `gsap/ScrollTrigger` diretamente em componente server. Use o loader em `src/lib/gsap.ts`, que protege `window` e faz import dinamico.

## Checklist

- [ ] A animacao respeita reduced motion.
- [ ] A animacao usa transform/opacity.
- [ ] A duracao segue o Design System.
- [ ] Nao ha dependencias browser-only em server components.
- [ ] O efeito melhora a experiencia em vez de distrair.
