import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CalendlySection } from "@/components/sections/CalendlySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CalendlySection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
