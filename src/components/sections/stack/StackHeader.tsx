import { stackSectionContent } from "./stack.data";

export function StackHeader() {
  return (
    <header className="max-w-[80rem]">
      <p className="font-mono text-[clamp(1rem,2vw,1.875rem)] font-normal uppercase leading-none tracking-[0.15125rem] text-honey-500">
        {stackSectionContent.eyebrow}
      </p>
      <h2
        className="mt-b2b-3 max-w-[58rem] text-balance font-display text-[clamp(2.5rem,5vw,var(--b2b-fs-display-l))] font-light leading-[1.02] tracking-[var(--b2b-tracking-h2)] text-ink-900"
        id="stack-title"
      >
        <span className="font-medium">{stackSectionContent.titleLead}</span>{" "}
        {stackSectionContent.titleRest}
      </h2>
      <p className="mt-b2b-5 max-w-[42rem] font-body text-[clamp(1rem,2vw,var(--b2b-fs-body-l))] leading-[var(--b2b-lh-loose)] text-slate-700/90">
        {stackSectionContent.description}
      </p>
    </header>
  );
}
