import { workSectionContent } from "./work.data";

export function WorkHeader() {
  return (
    <header className="max-w-[80rem]">
      <p className="font-mono text-[clamp(1rem,2vw,1.875rem)] font-normal uppercase leading-none tracking-[0.15125rem] text-honey-500">
        {workSectionContent.eyebrow}
      </p>
      <h2
        className="mt-b2b-3 text-balance font-display text-[clamp(2.5rem,5vw,var(--b2b-fs-display-l))] font-light leading-[1.02] tracking-[var(--b2b-tracking-h2)] text-ink-900"
        id="work-title"
      >
        {workSectionContent.title}
      </h2>
    </header>
  );
}
