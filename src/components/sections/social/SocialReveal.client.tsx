"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

type SocialStaggerProps = HTMLMotionProps<"div">;

type SocialRevealItemProps = HTMLMotionProps<"div"> & {
  variant?: "fadeUp" | "scaleIn";
};

export function SocialStagger({ children, ...props }: SocialStaggerProps) {
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

export function SocialRevealItem({
  children,
  variant = "fadeUp",
  ...props
}: SocialRevealItemProps) {
  return (
    <motion.div variants={variant === "scaleIn" ? scaleIn : fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
