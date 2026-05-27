import { Footer } from "@/components/layout/Footer";
import { ComplianceSection } from "@/components/sections/compliance";
import { CTASection } from "@/components/sections/cta";
import { HeroSection } from "@/components/sections/hero";
import { HeroNavbar } from "@/components/sections/hero/HeroNavbar";
import { ProblemSection } from "@/components/sections/problem";
import { SocialSection } from "@/components/sections/social";
import { SolutionSection } from "@/components/sections/solution";
import { SquadsSection } from "@/components/sections/squads";
import { StackSection } from "@/components/sections/stack";
import { WorkSection } from "@/components/sections/work";

export default function HomePage() {
  return (
    <>
      <HeroNavbar />
      <main id="conteudo">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WorkSection />
        <StackSection />
        <SquadsSection />
        <SocialSection />
        <ComplianceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
