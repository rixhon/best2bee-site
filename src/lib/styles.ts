type ClassValue = string | false | null | undefined;

export function cx(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

export const layoutClassNames = {
  sectionSpacing: "py-b2b-8 tablet:py-b2b-9 laptop:py-b2b-10",
  responsiveContainer:
    "mx-auto w-full max-w-b2b-container px-[var(--b2b-container-pad-m)] tablet:px-[var(--b2b-container-pad-t)] laptop:px-[64px] desktop:px-[var(--b2b-container-pad-d)]",
  threeCardGrid:
    "grid justify-center gap-[clamp(1.25rem,2vw,1.75rem)] tablet:grid-cols-2 laptop:grid-cols-[repeat(3,minmax(0,25.375rem))]",
};

export const surfaceClassNames = {
  glassCard:
    "overflow-hidden rounded-b2b-xl border border-white/55 bg-[var(--b2b-glass-medium)] shadow-b2b-card backdrop-blur-[10px]",
  solidCard: "rounded-b2b-xl bg-white p-b2b-6 shadow-b2b-card",
};

export const buttonClassNames = {
  heroPrimary:
    "min-h-[clamp(38px,3.08vw,48px)] min-w-[clamp(164px,12.58vw,196px)] px-[clamp(22px,1.66vw,26px)] py-0 text-[clamp(13px,.9vw,14px)]",
  heroSecondary:
    "min-h-[clamp(38px,3.08vw,48px)] min-w-[clamp(118px,9.5vw,148px)] border-white/70 bg-white/35 px-[clamp(18px,1.66vw,26px)] py-0 text-[clamp(13px,.9vw,14px)] backdrop-blur-md",
};
