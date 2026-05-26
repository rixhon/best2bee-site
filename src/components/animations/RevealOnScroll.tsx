"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type RevealOnScrollProps = HTMLMotionProps<"div">;

export function RevealOnScroll({ children, ...props }: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      variants={fadeUp}
      viewport={{ once: true, margin: "-10% 0px" }}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      {...props}
    >
      {children}
    </motion.div>
  );
}
