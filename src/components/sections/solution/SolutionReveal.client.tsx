"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

type SolutionStaggerProps = HTMLMotionProps<"div">;

type SolutionRevealItemProps = HTMLMotionProps<"div"> & {
  variant?: "fadeUp" | "scaleIn";
};

export function SolutionStagger({ children, ...props }: SolutionStaggerProps) {
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

export function SolutionRevealItem({
  children,
  variant = "fadeUp",
  ...props
}: SolutionRevealItemProps) {
  return (
    <motion.div variants={variant === "scaleIn" ? scaleIn : fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
