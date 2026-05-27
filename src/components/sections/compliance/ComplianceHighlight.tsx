import { complianceHighlight } from "./compliance.data";

export function ComplianceHighlight() {
  return (
    <div className="mt-b2b-6 flex justify-start laptop:justify-center">
      <div className="inline-flex items-center gap-b2b-2 rounded-b2b-pill border border-success-500/30 bg-success-bg/80 px-b2b-4 py-[0.625rem] text-left shadow-b2b-pill">
        <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-success-500 shadow-[0_0_0_4px_rgba(22,163,74,0.18)]" />
        <p className="font-mono text-[0.8rem] font-normal uppercase tracking-[0.18em] text-success-500">
          {complianceHighlight}
        </p>
      </div>
    </div>
  );
}

