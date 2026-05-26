import type { LandingSection } from "@/types";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

type SectionPlaceholderProps = {
  section: LandingSection;
  withBorder?: boolean;
};

export function SectionPlaceholder({ section, withBorder = true }: SectionPlaceholderProps) {
  return (
    <Section
      aria-labelledby={`${section.id}-title`}
      className={withBorder ? "border-b border-border" : undefined}
      id={section.id}
    >
      <Container>
        <RevealOnScroll>
          <SectionTitle
            description={section.description}
            eyebrow={section.eyebrow}
            title={section.title}
          />
          <div className="mt-b2b-7 rounded-b2b-sm border border-dashed border-border p-b2b-6 text-body-sm text-muted">
            Placeholder reservado para implementar a secao do Figma.
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
