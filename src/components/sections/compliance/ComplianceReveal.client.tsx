"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

type ComplianceStaggerProps = HTMLMotionProps<"div">;

type ComplianceRevealItemProps = HTMLMotionProps<"div"> & {
  variant?: "fadeUp" | "scaleIn";
};

export function ComplianceStagger({ children, ...props }: ComplianceStaggerProps) {
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

export function ComplianceRevealItem({
  children,
  variant = "fadeUp",
  ...props
}: ComplianceRevealItemProps) {
  return (
    <motion.div variants={variant === "scaleIn" ? scaleIn : fadeUp} {...props}>
      {children}
    </motion.div>
  );
}

