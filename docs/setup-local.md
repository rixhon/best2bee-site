# Setup Local

## Requisitos

- Node.js compativel com a versao atual do Next.js.
- npm.
- Acesso ao repositorio GitHub.

## Instalacao

```bash
npm install
```

## Ambiente

Copie `.env.example` para `.env.local` quando precisar configurar variaveis locais.

Variaveis atuais:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CALENDLY_URL=
```

## Rodando localmente

```bash
npm run dev
```

Aplicacao local:

```txt
http://localhost:3000
```

## Validacoes antes de entregar

```bash
npm run typecheck
npm run lint
npm run build
```

## Troubleshooting

### Imagens do Figma nao aparecem

Verifique se os assets foram salvos em `public/figma/{section}/` e se o caminho usado no componente comeca com `/figma/...`.

### Tailwind nao gera classe

Confirme se o arquivo esta dentro de `src/`. O campo `content` do Tailwind escaneia `./src/**/*.{js,ts,jsx,tsx,md,mdx}`.

### Erro de SSR com bibliotecas browser-only

Use `use client`, `useEffect` ou import dinamico protegido por `typeof window !== "undefined"`.
