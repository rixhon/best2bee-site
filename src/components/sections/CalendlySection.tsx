import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { sections } from "@/data/sections";
import { CALENDLY_URL } from "@/lib/constants";

export function CalendlySection() {
  const section = sections.calendly;

  return (
    <section className="border-b border-border py-b2b-8 tablet:py-b2b-9 laptop:py-b2b-10" id={section.id}>
      <Container>
        <RevealOnScroll>
          <SectionTitle
            description={section.description}
            eyebrow={section.eyebrow}
            title={section.title}
          />
          <div className="mt-8 rounded-md border border-dashed border-border p-6 text-sm text-muted">
            {CALENDLY_URL
              ? "Placeholder para embed ou popup do Calendly configurado."
              : "Placeholder para futura integracao com Calendly."}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
