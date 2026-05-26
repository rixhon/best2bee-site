import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProblemBackground } from "./ProblemBackground";
import { ProblemCards } from "./ProblemCards";
import { ProblemHeader } from "./ProblemHeader";
import { ProblemRevealItem, ProblemStagger } from "./ProblemReveal.client";

export function ProblemSection() {
  return (
    <Section
      aria-labelledby="problem-title"
      className="relative isolate min-h-[38.75rem] overflow-hidden border-t border-slate-200/50"
      id="problem"
      spacing="none"
    >
      <ProblemBackground />
      <Container className="relative z-10 py-[clamp(5.5rem,9vw,8.8125rem)]">
        <ProblemStagger>
          <ProblemRevealItem>
            <ProblemHeader />
          </ProblemRevealItem>
          <ProblemCards />
        </ProblemStagger>
      </Container>
    </Section>
  );
}
