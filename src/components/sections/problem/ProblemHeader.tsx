import { problemSectionContent } from "./problem.data";

export function ProblemHeader() {
  return (
    <div className="max-w-[80rem]">
      <p className="font-mono text-[30px] font-normal uppercase leading-none tracking-[0.15125rem] text-danger-500">
        {problemSectionContent.eyebrow}
      </p>
      <h2
        className="mt-b2b-3 max-w-[58rem] text-balance font-display text-[52px] font-extralight leading-[1.02] tracking-[var(--b2b-tracking-h2)] text-ink-900"
        id="problem-title"
      >
        {problemSectionContent.title}
      </h2>
    </div>
  );
}
