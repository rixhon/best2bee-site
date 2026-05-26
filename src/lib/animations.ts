import type { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.2, 0.7, 0.2, 1],
    },
  },
};

export const revealOnScroll: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.2, 0.7, 0.2, 1],
    },
  },
};
