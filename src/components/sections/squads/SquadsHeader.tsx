import { squadsSectionContent } from "./squads.data";

export function SquadsHeader() {
  return (
    <header className="relative z-10 max-w-[42rem] desktop:max-w-[57rem] wide:max-w-[72rem]">
      <p className="font-mono text-[clamp(1rem,2vw,1.8rem)] font-normal uppercase leading-none tracking-[0.15125rem] text-honey-500">
        {squadsSectionContent.eyebrow}
      </p>
      <h2
        className="mt-b2b-3 text-balance font-display text-[clamp(2.5rem,5vw,3.45rem)] font-light leading-[1.02] tracking-[var(--b2b-tracking-h2)] text-ink-900"
        id="squads-title"
      >
        {squadsSectionContent.titleLead}
        <span className="font-medium">{squadsSectionContent.titleHighlight}</span>
        {squadsSectionContent.titleTrail}
        <br />
        {squadsSectionContent.titleLine2}
      </h2>
      <p className="mt-b2b-5 max-w-[42rem] font-body text-[clamp(1rem,2vw,var(--b2b-fs-body-l))] leading-[var(--b2b-lh-loose)] text-slate-700/90">
        {squadsSectionContent.description}
      </p>
    </header>
  );
}
