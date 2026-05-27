"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { fadeUp, revealOpacity, scaleIn, staggerContainer } from "@/lib/motion";

type SquadsStaggerProps = HTMLMotionProps<"div">;

type SquadsRevealItemProps = HTMLMotionProps<"div"> & {
  variant?: "fadeUp" | "scaleIn" | "revealOpacity";
};

export function SquadsStagger({ children, ...props }: SquadsStaggerProps) {
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

export function SquadsRevealItem({
  children,
  variant = "fadeUp",
  ...props
}: SquadsRevealItemProps) {
  const variants =
    variant === "scaleIn" ? scaleIn : variant === "revealOpacity" ? revealOpacity : fadeUp;

  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
