import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { sections } from "@/data/sections";

export function AboutSection() {
  const section = sections.about;

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
            Placeholder do AboutSection.
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
