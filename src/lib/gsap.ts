type GsapScrollTrigger = {
  gsap: typeof import("gsap").gsap;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
};

let gsapScrollTriggerPromise: Promise<GsapScrollTrigger> | null = null;

export function loadGsapScrollTrigger() {
  if (typeof window === "undefined") {
    return null;
  }

  gsapScrollTriggerPromise ??= Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]).then(([gsapModule, scrollTriggerModule]) => {
    const gsap = gsapModule.gsap;
    const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    return {
      gsap,
      ScrollTrigger,
    };
  });

  return gsapScrollTriggerPromise;
}
