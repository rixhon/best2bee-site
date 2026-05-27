import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SocialBackground } from "./SocialBackground";
import { SocialCompanies } from "./SocialCompanies";
import { SocialHeader } from "./SocialHeader";
import { SocialRevealItem, SocialStagger } from "./SocialReveal.client";
import { SocialTestimonials } from "./SocialTestimonials";

export function SocialSection() {
  return (
    <Section
      aria-labelledby="social-title"
      className="relative isolate overflow-hidden border-t border-slate-200/50"
      id="social"
      spacing="none"
    >
      <SocialBackground />
      <Container className="relative z-10 py-[clamp(5.5rem,9vw,8.8125rem)]">
        <SocialStagger>
          <SocialRevealItem>
            <SocialHeader />
          </SocialRevealItem>
          <SocialRevealItem>
            <SocialCompanies />
          </SocialRevealItem>
        </SocialStagger>
        <SocialTestimonials />
      </Container>
    </Section>
  );
}
