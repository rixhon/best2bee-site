"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function SolutionBee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? undefined : { y: [0, -18, 0, 12, 0] }}
      aria-hidden="true"
      className="pointer-events-none absolute right-[-5.5rem] top-[-3.75rem] hidden aspect-[1580/1442] w-[clamp(12.75rem,20.4vw,19.125rem)] tablet:block laptop:right-[-1rem] desktop:right-[7rem]"
      transition={{
        duration: 6.4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <Image
        alt=""
        className="-scale-x-100 object-contain drop-shadow-[0_24px_34px_rgba(234,88,12,.12)]"
        fill
        quality={82}
        sizes="(min-width: 1280px) 306px, (min-width: 768px) 238px, 0px"
        src="/figma/solution/bee.png"
      />
    </motion.div>
  );
}
