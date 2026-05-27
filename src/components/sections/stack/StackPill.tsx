type StackPillProps = {
  label: string;
};

export function StackPill({ label }: StackPillProps) {
  return (
    <span className="group relative inline-flex min-h-[3.625rem] items-center justify-center rounded-b2b-xl border border-white/55 bg-white/40 px-b2b-5 shadow-b2b-card backdrop-blur-[10px] transition-[transform,box-shadow,filter] duration-[var(--b2b-dur-base)] ease-[var(--b2b-ease-out)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(148,163,184,.18),0_8px_24px_rgba(15,23,42,.06)]">
      <span className="pointer-events-none absolute inset-0 rounded-b2b-xl bg-[linear-gradient(146deg,rgba(255,255,255,.45)_0%,rgba(255,255,255,0)_55%)]" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-80" />
      <span className="relative whitespace-nowrap font-mono text-meta font-medium tracking-[-0.025em] text-ink-900">
        {label}
      </span>
    </span>
  );
}
