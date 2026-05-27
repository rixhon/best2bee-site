import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ComplianceBackground } from "./ComplianceBackground";
import { ComplianceCards } from "./ComplianceCards";
import { ComplianceHeader } from "./ComplianceHeader";
import { ComplianceHighlight } from "./ComplianceHighlight";
import { ComplianceRevealItem, ComplianceStagger } from "./ComplianceReveal.client";

export function ComplianceSection() {
  return (
    <Section
      aria-labelledby="compliance-title"
      className="relative isolate overflow-hidden border-t border-slate-200/50"
      id="compliance"
      spacing="none"
    >
      <ComplianceBackground />
      <Container className="relative z-10 py-[clamp(5.25rem,8.4vw,8.5rem)]">
        <ComplianceStagger>
          <ComplianceRevealItem>
            <ComplianceHeader />
          </ComplianceRevealItem>
          <ComplianceRevealItem>
            <ComplianceCards />
          </ComplianceRevealItem>
          <ComplianceRevealItem variant="scaleIn">
            <ComplianceHighlight />
          </ComplianceRevealItem>
        </ComplianceStagger>
      </Container>
    </Section>
  );
}

