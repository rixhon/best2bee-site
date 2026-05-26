"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { revealOpacity } from "@/lib/motion";

type FadeInProps = HTMLMotionProps<"div">;

export function FadeIn({ children, ...props }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? false : "visible"}
      initial={shouldReduceMotion ? false : "hidden"}
      variants={revealOpacity}
      {...props}
    >
      {children}
    </motion.div>
  );
}
