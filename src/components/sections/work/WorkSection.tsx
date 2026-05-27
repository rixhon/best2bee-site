import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WorkBackground } from "./WorkBackground";
import { WorkHeader } from "./WorkHeader";
import { WorkRevealItem, WorkStagger } from "./WorkReveal.client";
import { WorkTimeline } from "./WorkTimeline";

export function WorkSection() {
  return (
    <Section
      aria-labelledby="work-title"
      className="relative isolate overflow-hidden border-t border-slate-200/50 bg-surface-cool-2"
      id="work"
      spacing="none"
    >
      <WorkBackground />
      <Container className="relative z-10 py-[clamp(5.5rem,9vw,8.8125rem)]">
        <WorkStagger>
          <WorkRevealItem>
            <WorkHeader />
          </WorkRevealItem>
          <WorkTimeline />
        </WorkStagger>
      </Container>
    </Section>
  );
}
