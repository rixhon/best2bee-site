import { Footer } from "@/components/layout/Footer";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SocialSection } from "@/components/sections/SocialSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { SquadsSection } from "@/components/sections/SquadsSection";
import { StackSection } from "@/components/sections/StackSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function HomePage() {
  return (
    <>
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
