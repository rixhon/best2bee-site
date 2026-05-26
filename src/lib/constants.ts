export const SITE_CONFIG = {
  name: "B2B Landing Page",
  description: "Landing page B2B preparada para receber secoes aprovadas no Figma.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Servicos", href: "#services" },
  { label: "Contato", href: "#contact" },
] as const;

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";
