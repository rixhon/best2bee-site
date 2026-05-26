"use client";

import { useEffect } from "react";
import { loadGsapScrollTrigger } from "@/lib/gsap";

export function useGsapScrollTrigger() {
  useEffect(() => {
    let isMounted = true;

    loadGsapScrollTrigger()?.then(({ ScrollTrigger }) => {
      if (isMounted) {
        ScrollTrigger.refresh();
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);
}
