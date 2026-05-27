import { GlassCard } from "@/components/ui/GlassCard";

type SquadsCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function SquadsCard({ icon, title, description }: SquadsCardProps) {
  return (
    <GlassCard
      as="article"
      className="group relative flex h-full w-full flex-col items-center justify-center px-b2b-6 py-b2b-6 text-center transition-[transform,box-shadow,filter] duration-[var(--b2b-dur-base)] ease-[var(--b2b-ease-out)] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(148,163,184,.2),0_12px_32px_rgba(15,23,42,.08)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(152deg,rgba(255,255,255,.42)_0%,rgba(255,255,255,0)_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(147,197,253,.22),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,.14),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-80" />

      <span aria-hidden="true" className="relative text-[3rem] leading-none">
        {icon}
      </span>
      <h3 className="relative mt-b2b-4 font-display text-heading font-medium text-ink-900">
        {title}
      </h3>
      <p className="relative mt-b2b-2 font-body text-body-sm leading-[1.7] text-slate-700">
        {description}
      </p>
    </GlassCard>
  );
}
