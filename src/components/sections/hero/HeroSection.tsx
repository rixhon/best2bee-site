"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { staggerContainer } from "@/lib/motion";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroNavbar } from "./HeroNavbar";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-[720px] overflow-hidden border-b border-border bg-background tablet:min-h-[780px] laptop:min-h-[720px] desktop:min-h-[900px] wide:min-h-[960px]"
      id="hero"
    >
      <HeroBackground />
      <HeroNavbar />

      <Container className="relative z-10 min-h-[720px] pb-b2b-8 pt-[48px] tablet:min-h-[780px] tablet:pt-[80px] laptop:min-h-[720px] laptop:pt-[clamp(118px,calc(23.5vw-100px),202px)] desktop:min-h-[900px] desktop:px-0 wide:min-h-[960px]">
        <motion.div
          animate={shouldReduceMotion ? false : "visible"}
          className="mx-auto w-full max-w-[80rem]"
          initial={shouldReduceMotion ? false : "hidden"}
          variants={staggerContainer}
        >
          <HeroContent />
        </motion.div>
      </Container>
    </section>
  );
}
