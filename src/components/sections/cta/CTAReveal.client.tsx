"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

type CtaStaggerProps = HTMLMotionProps<"div">;
type CtaRevealItemProps = HTMLMotionProps<"div">;

export function CtaStagger({ children, ...props }: CtaStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      variants={staggerContainer}
      viewport={{ once: true, margin: "-12% 0px" }}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CtaRevealItem({ children, ...props }: CtaRevealItemProps) {
  return (
    <motion.div variants={fadeUp} {...props}>
      {children}
    </motion.div>
  );
}

