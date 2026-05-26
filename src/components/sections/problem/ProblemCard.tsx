import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";

type ProblemCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function ProblemCard({ title, description, icon }: ProblemCardProps) {
  return (
    <GlassCard
      as="article"
      className="group relative h-[14.418rem] w-full max-w-[25.375rem] bg-white/40 p-b2b-6 transition-[transform,box-shadow,filter] duration-[var(--b2b-dur-base)] ease-[var(--b2b-ease-out)] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(148,163,184,.2),0_12px_32px_rgba(15,23,42,.08)] laptop:p-b2b-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(147,197,253,.22),rgba(74,99,127,.11)_14%,transparent_28%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,.14),rgba(30,65,123,.07)_16%,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.42)_0%,rgba(0,0,0,0)_48%)]" />

      <div className="relative flex size-16 items-center justify-center rounded-b2b-md bg-[linear-gradient(135deg,rgba(251,44,54,.2)_0%,rgba(231,0,11,.2)_100%)] transition-transform duration-[var(--b2b-dur-base)] ease-[var(--b2b-ease-out)] group-hover:scale-[1.04]">
        <Image alt="" aria-hidden height={32} src={icon} width={32} />
      </div>

      <h3 className="relative mt-[0.875rem] font-display text-heading font-medium text-ink-900">
        {title}
      </h3>
      <p className="relative mt-b2b-3 max-w-[21.375rem] font-body text-body-sm text-slate-700">
        {description}
      </p>
    </GlassCard>
  );
}
