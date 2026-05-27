"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

type WorkStaggerProps = HTMLMotionProps<"div">;

type WorkRevealItemProps = HTMLMotionProps<"div"> & {
  variant?: "fadeUp" | "scaleIn";
};

export function WorkStagger({ children, ...props }: WorkStaggerProps) {
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

export function WorkRevealItem({ children, variant = "fadeUp", ...props }: WorkRevealItemProps) {
  return (
    <motion.div variants={variant === "scaleIn" ? scaleIn : fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
