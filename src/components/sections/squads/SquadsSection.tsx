import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SquadsBackground } from "./SquadsBackground";
import { SquadsCards } from "./SquadsCards";
import { SquadsHeader } from "./SquadsHeader";
import { SquadsImage } from "./SquadsImage";
import { SquadsRevealItem, SquadsStagger } from "./SquadsReveal.client";

export function SquadsSection() {
  return (
    <Section
      aria-labelledby="squads-title"
      className="relative isolate overflow-hidden border-t border-slate-200/50"
      id="squads"
      spacing="none"
    >
      <SquadsBackground />

      <SquadsRevealItem
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden h-full w-[36.15%] max-w-[35.3125rem] desktop:left-[66.57%] desktop:right-auto desktop:block"
        variant="revealOpacity"
      >
        <SquadsImage />
      </SquadsRevealItem>

      <Container className="relative z-10 py-[clamp(5.5rem,9vw,8.8125rem)] desktop:min-h-[63.0625rem]">
        <SquadsStagger className="relative z-10">
          <SquadsRevealItem>
            <SquadsHeader />
          </SquadsRevealItem>
          <SquadsCards />
        </SquadsStagger>

        <SquadsRevealItem className="mt-b2b-8 desktop:hidden" variant="revealOpacity">
          <div className="relative mx-auto aspect-[565/1009] w-full max-w-[35.3125rem] overflow-hidden rounded-b2b-xl">
            <SquadsImage />
          </div>
        </SquadsRevealItem>
      </Container>
    </Section>
  );
}
