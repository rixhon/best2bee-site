"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { heroMetrics } from "./hero.data";

export function HeroMetrics() {
  return (
    <GlassCard
      as="dl"
      className="mx-auto flex w-full max-w-[61.75rem] flex-col gap-b2b-6 bg-[linear-gradient(180deg,rgba(255,255,255,.74)_0%,rgba(255,255,255,.42)_100%)] px-[clamp(2rem,5vw,3.75rem)] py-[clamp(1.5rem,3vw,2rem)] tablet:min-h-[10.625rem] tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-[clamp(1.75rem,4vw,3.25rem)]"
    >
      {heroMetrics.map((metric) => (
        <div className="flex min-w-0 flex-1 flex-col items-start text-left" key={metric.label}>
          <dt className="order-2 mt-[0.875rem] font-mono text-[0.6875rem] font-normal uppercase leading-[1.03125rem] tracking-[0.12375rem] text-slate-700">
            {metric.label}
          </dt>
          <dd className="order-1 font-display text-[2.2rem] font-normal leading-[2.2rem] tracking-[-0.088rem] text-ink-900">
            {metric.value}
          </dd>
          <dd className="order-3 mt-[0.75rem] font-body text-[0.98rem] font-normal leading-[1.666rem] text-slate-700">
            {metric.description}
          </dd>
        </div>
      ))}
    </GlassCard>
  );
}

export function HeroScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex h-[40px] w-[24px] items-start justify-center rounded-b2b-pill border-2 border-honey-500 bg-white pt-[10px]">
      <motion.span
        animate={shouldReduceMotion ? false : { y: [0, 6, 0] }}
        className="h-[12px] w-[4px] shrink-0 rounded-b2b-pill bg-honey-500"
        transition={{
          duration: 1.6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
