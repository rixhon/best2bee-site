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
    title: "Solution",
    description: "Placeholder para a secao de solucao aprovada no Figma.",
    status: "placeholder",
  },
  work: {
    id: "work",
    eyebrow: "04 Work Section",
    title: "Work",
    description: "Placeholder para a secao de processo de trabalho aprovada no Figma.",
    status: "placeholder",
  },
  stack: {
    id: "stack",
    eyebrow: "05 Stack Section",
    title: "Stack",
    description: "Placeholder para a secao de tecnologias e stack aprovada no Figma.",
    status: "placeholder",
  },
  squads: {
    id: "squads",
    eyebrow: "06 Squads Section",
    title: "Squads",
    description: "Placeholder para a secao de squads aprovada no Figma.",
    status: "placeholder",
  },
  social: {
    id: "social",
    eyebrow: "07 Social Section",
    title: "Social",
    description: "Placeholder para a secao de prova social aprovada no Figma.",
    status: "placeholder",
  },
  compliance: {
    id: "compliance",
    eyebrow: "08 Compliance Section",
    title: "Compliance",
    description: "Placeholder para a secao de compliance aprovada no Figma.",
    status: "placeholder",
  },
  cta: {
    id: "cta",
    eyebrow: "09 CTA Section",
    title: "CTA",
    description: "Placeholder para a chamada final aprovada no Figma.",
    status: "placeholder",
  },
} satisfies Record<string, LandingSection>;
