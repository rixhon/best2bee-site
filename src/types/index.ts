export type SectionStatus = "placeholder" | "ready";

export type LandingSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  status: SectionStatus;
};

export type LeadFormValues = {
  name: string;
  email: string;
  company: string;
  phone?: string;
};
