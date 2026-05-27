"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

type StackStaggerProps = HTMLMotionProps<"div">;

type StackRevealItemProps = HTMLMotionProps<"div"> & {
  variant?: "fadeUp" | "scaleIn";
};

export function StackStagger({ children, ...props }: StackStaggerProps) {
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

export function StackRevealItem({ children, variant = "fadeUp", ...props }: StackRevealItemProps) {
  return (
    <motion.div variants={variant === "scaleIn" ? scaleIn : fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
