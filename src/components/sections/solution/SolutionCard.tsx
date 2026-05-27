import { GlassCard } from "@/components/ui/GlassCard";

type SolutionCardProps = {
  name: string;
  role: string;
  initial: string;
  skills: string[];
  experience: string;
};

export function SolutionCard({ name, role, initial, skills, experience }: SolutionCardProps) {
  return (
    <GlassCard
      as="article"
      className="group relative flex min-h-[18.9375rem] w-full max-w-[25.375rem] flex-col items-center bg-white/40 px-b2b-6 pb-b2b-6 pt-b2b-6 text-center transition-[transform,box-shadow,filter] duration-[var(--b2b-dur-base)] ease-[var(--b2b-ease-out)] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(148,163,184,.2),0_12px_32px_rgba(15,23,42,.08)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.45)_0%,rgba(255,255,255,0)_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-80" />

      <div className="relative flex size-20 items-center justify-center rounded-b2b-pill border-2 border-honey-400 bg-gradient-to-br from-surface-cool to-surface-soft font-display text-subheading font-medium text-ink-900 transition-transform duration-[var(--b2b-dur-base)] ease-[var(--b2b-ease-out)] group-hover:scale-[1.04]">
        {initial}
      </div>

      <h3 className="relative mt-b2b-4 font-display text-heading font-medium text-ink-900">
        {name}
      </h3>
      <p className="relative mt-b2b-1 font-body text-meta font-medium tracking-[-0.025em] text-honey-500">
        {role}
      </p>

      <ul className="relative mt-b2b-4 flex flex-wrap justify-center gap-b2b-2" aria-label={`Skills de ${name}`}>
        {skills.map((skill) => (
          <li
            className="rounded-b2b-pill border border-slate-600/80 bg-white/65 px-b2b-3 py-[0.3125rem] font-mono text-[0.625rem] uppercase leading-none tracking-[0.16em] text-slate-600"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>

      <p className="relative mt-b2b-4 font-body text-body-sm leading-[1.7] text-slate-700">
        {experience}
      </p>
    </GlassCard>
  );
}
