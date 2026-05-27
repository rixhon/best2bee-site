import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StackBackground } from "./StackBackground";
import { StackHeader } from "./StackHeader";
import { StackPills } from "./StackPills";
import { StackRevealItem, StackStagger } from "./StackReveal.client";

export function StackSection() {
  return (
    <Section
      aria-labelledby="stack-title"
      className="relative isolate overflow-hidden border-t border-slate-200/50"
      id="stack"
      spacing="none"
    >
      <StackBackground />
      <Container className="relative z-10 py-[clamp(5.5rem,9vw,8.8125rem)]">
        <StackStagger>
          <StackRevealItem>
            <StackHeader />
          </StackRevealItem>
          <StackPills />
        </StackStagger>
      </Container>
    </Section>
  );
}
