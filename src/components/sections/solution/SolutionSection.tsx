import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SolutionBee } from "./SolutionBee";
import { SolutionCards } from "./SolutionCards";
import { SolutionHeader } from "./SolutionHeader";
import { SolutionRevealItem, SolutionStagger } from "./SolutionReveal.client";

export function SolutionSection() {
  return (
    <Section
      aria-labelledby="solution-title"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-slate-200/50 bg-gradient-to-b from-surface-base via-surface-base to-surface-soft"
      id="solution"
      spacing="none"
    >
      <Container className="relative min-h-[42rem] py-b2b-8 tablet:min-h-[44rem] tablet:py-b2b-9 laptop:min-h-[48.75rem] laptop:py-[8.75rem]">
        <SolutionStagger>
          <div className="relative">
            <SolutionRevealItem>
              <SolutionHeader />
            </SolutionRevealItem>
            <SolutionRevealItem variant="scaleIn">
              <SolutionBee />
            </SolutionRevealItem>
          </div>
          <SolutionCards />
        </SolutionStagger>
      </Container>
    </Section>
  );
}
