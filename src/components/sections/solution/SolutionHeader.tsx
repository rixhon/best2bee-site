import { solutionSectionContent } from "./solution.data";

export function SolutionHeader() {
  return (
    <header className="relative z-10 max-w-[80rem]">
      <p className="font-mono text-[clamp(1rem,2vw,1.875rem)] font-normal uppercase leading-none tracking-[0.15125rem] text-honey-500">
        {solutionSectionContent.eyebrow}
      </p>
      <h2
        className="mt-b2b-3 text-balance font-display text-[clamp(2.5rem,5vw,var(--b2b-fs-display-l))] font-light leading-[1.02] tracking-[var(--b2b-tracking-h2)] text-ink-900"
        id="solution-title"
      >
        {solutionSectionContent.title}
      </h2>
      <p className="mt-b2b-5 max-w-[32rem] font-body text-[clamp(1rem,2vw,var(--b2b-fs-body-l))] leading-[var(--b2b-lh-loose)] text-slate-700/90 laptop:max-w-[42rem]">
        {solutionSectionContent.description}
      </p>
    </header>
  );
}
