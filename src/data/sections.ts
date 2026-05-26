import type { LandingSection } from "@/types";

export const sections = {
  hero: {
    id: "hero",
    eyebrow: "Secao 01",
    title: "Hero",
    description: "Placeholder para a abertura principal aprovada no Figma.",
    status: "placeholder",
  },
  about: {
    id: "about",
    eyebrow: "Secao 02",
    title: "Sobre",
    description: "Placeholder para contexto, posicionamento e narrativa da marca.",
    status: "placeholder",
  },
  benefits: {
    id: "benefits",
    eyebrow: "Secao 03",
    title: "Beneficios",
    description: "Placeholder para beneficios e diferenciais principais.",
    status: "placeholder",
  },
  services: {
    id: "services",
    eyebrow: "Secao 04",
    title: "Servicos",
    description: "Placeholder para oferta, solucoes e escopo comercial.",
    status: "placeholder",
  },
  process: {
    id: "process",
    eyebrow: "Secao 05",
    title: "Processo",
    description: "Placeholder para etapas do processo de trabalho.",
    status: "placeholder",
  },
  testimonials: {
    id: "testimonials",
    eyebrow: "Secao 06",
    title: "Depoimentos",
    description: "Placeholder para prova social e casos de sucesso.",
    status: "placeholder",
  },
  calendly: {
    id: "calendly",
    eyebrow: "Secao 07",
    title: "Calendly",
    description: "Placeholder para integracao futura de agendamento.",
    status: "placeholder",
  },
  contact: {
    id: "contact",
    eyebrow: "Secao 08",
    title: "Contato",
    description: "Placeholder para captacao de leads e formulario.",
    status: "placeholder",
  },
  faq: {
    id: "faq",
    eyebrow: "Secao 09",
    title: "FAQ",
    description: "Placeholder para perguntas frequentes.",
    status: "placeholder",
  },
} satisfies Record<string, LandingSection>;
