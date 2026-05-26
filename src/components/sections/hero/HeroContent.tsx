"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { HeroActions } from "./HeroActions";
import { HeroMetrics, HeroScrollIndicator } from "./HeroMetrics";

export function HeroContent() {
  return (
    <>
      <motion.h1
        className="max-w-[1290px] text-balance font-display text-[clamp(42px,7vw,60px)] font-light leading-[.99] tracking-[var(--b2b-tracking-display)] text-ink-900 laptop:text-[clamp(56px,5.6vw,var(--b2b-fs-display-xl))]"
        id="hero-title"
        variants={fadeUp}
      >
        <span className="block">
          Escale sua <strong className="font-medium">equipe</strong> com
        </span>
        <span className="block">
          developers de <strong className="font-medium">alta performance</strong>
        </span>
      </motion.h1>

      <motion.p
        className="mt-[18px] max-w-[766px] font-body text-body-xl text-slate-700/90"
        variants={fadeUp}
      >
        Talentos do Brasil, impacto na Europa. Processos ágeis, compliance total e developers
        prontos para entregar resultados.
      </motion.p>

      <motion.div
        className="mt-[clamp(56px,6.8vw,96px)] flex flex-col items-stretch gap-b2b-3 tablet:flex-row tablet:items-center laptop:justify-center"
        variants={fadeUp}
      >
        <HeroActions />
      </motion.div>

      <motion.div className="relative mt-[clamp(2.75rem,4vw,3.5rem)]" variants={fadeUp}>
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <HeroScrollIndicator />
        </div>
        <HeroMetrics />
      </motion.div>
    </>
  );
}
