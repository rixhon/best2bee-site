import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTABackground } from "./CTABackground";
import { CTAContent } from "./CTAContent";
import { CtaRevealItem, CtaStagger } from "./CTAReveal.client";

export function CTASection() {
  return (
    <Section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden border-t border-slate-200/50"
      id="cta"
      spacing="none"
    >
      <CTABackground />
      <Container className="relative z-10 py-[clamp(5.5rem,10vw,9rem)]">
        <CtaStagger>
          <CtaRevealItem>
            <CTAContent />
          </CtaRevealItem>
        </CtaStagger>
      </Container>
    </Section>
  );
}

