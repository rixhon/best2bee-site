import type { LandingSection } from "@/types";

export const sections = {
  hero: {
    id: "hero",
    eyebrow: "01 Hero Section",
    title: "Hero",
    description: "Abertura principal aprovada no Figma.",
    status: "ready",
  },
  problem: {
    id: "problem",
    eyebrow: "02 Problem Section",
    title: "Os desafios da contratação tech",
    description: "Sessao de desafios da contratação tech implementada a partir do Figma.",
    status: "ready",
  },
  solution: {
    id: "solution",
    eyebrow: "03 Solution Section",
    title: "Talentos sob demanda",
    description: "Sessao de solucao com pool de talentos implementada a partir do Figma.",
    status: "ready",
  },
  work: {
    id: "work",
    eyebrow: "04 Work Section",
    title: "Como funciona",
    description: "Sessao de processo com timeline implementada a partir do Figma.",
    status: "ready",
  },
  stack: {
    id: "stack",
    eyebrow: "05 Stack Section",
    title: "Domínio das principais tecnologias",
    description: "Sessao de stack tecnologica implementada a partir do Figma.",
    status: "ready",
  },
  squads: {
    id: "squads",
    eyebrow: "06 Squads Section",
    title: "Escale do developer individual ao time completo",
    description: "Sessao de squads completos com grid de beneficios e visual lateral implementada a partir do Figma.",
    status: "ready",
  },
  social: {
    id: "social",
    eyebrow: "07 Social Section",
    title: "Resultados que falam por si",
    description: "Sessao de prova social com logos de empresas e depoimentos implementada a partir do Figma.",
    status: "ready",
  },
  compliance: {
    id: "compliance",
    eyebrow: "08 Compliance Section",
    title: "Seguranca e compliance total",
    description: "Sessao de compliance com grid de garantias e destaque de conformidade implementada a partir do Figma.",
    status: "ready",
  },
  cta: {
    id: "cta",
    eyebrow: "09 CTA Section",
    title: "Pronto para escalar sua equipe",
    description: "Sessao final de CTA com foco em conversao, beneficios e motion reveal implementada a partir do Figma.",
    status: "ready",
  },
} satisfies Record<string, LandingSection>;
