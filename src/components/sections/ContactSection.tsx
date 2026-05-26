import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { sections } from "@/data/sections";

export function ContactSection() {
  const section = sections.contact;

  return (
    <section className="border-b border-border py-b2b-8 tablet:py-b2b-9 laptop:py-b2b-10" id={section.id}>
      <Container>
        <RevealOnScroll className="grid gap-8 laptop:grid-cols-[1fr_28rem] laptop:items-start">
          <SectionTitle
            description={section.description}
            eyebrow={section.eyebrow}
            title={section.title}
          />
          <div className="rounded-md border border-dashed border-border p-6">
            <LeadForm />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
