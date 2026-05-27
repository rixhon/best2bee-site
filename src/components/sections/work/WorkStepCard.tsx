import { GlassCard } from "@/components/ui/GlassCard";
import { cx } from "@/lib/styles";
import type { WorkStep } from "./work.data";

type WorkStepCardProps = {
  step: WorkStep;
};

export function WorkStepCard({ step }: WorkStepCardProps) {
  const isLeft = step.side === "left";

  return (
    <GlassCard
      as="article"
      className={cx(
        "group relative min-h-[14.3125rem] w-full max-w-[33.875rem] bg-white/40 p-b2b-6 transition-[transform,box-shadow,filter] duration-[var(--b2b-dur-base)] ease-[var(--b2b-ease-out)] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(148,163,184,.2),0_12px_32px_rgba(15,23,42,.08)] tablet:p-b2b-7",
        isLeft && "tablet:text-right",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 to-white/50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(147,197,253,.22),rgba(74,99,127,.11)_14%,transparent_28%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,.14),rgba(30,65,123,.07)_16%,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(157deg,rgba(255,255,255,.42)_0%,rgba(255,255,255,0)_48%)]" />

      <div
        className={cx(
          "relative flex h-full min-h-[10.3125rem] flex-col gap-b2b-3",
          isLeft && "tablet:items-end",
        )}
      >
        <p className="font-display text-display-m font-medium text-honey-400">{step.number}</p>
        <h3 className="font-display text-heading font-medium text-ink-900">{step.title}</h3>
        <p className="max-w-[29.875rem] font-body text-body-sm leading-[1.7] text-slate-600">
          {step.description}
        </p>
      </div>
    </GlassCard>
  );
}
