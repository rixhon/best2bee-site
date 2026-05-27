type SocialCompanyPillProps = {
  label: string;
};

export function SocialCompanyPill({ label }: SocialCompanyPillProps) {
  return (
    <li className="shrink-0">
      <span className="inline-flex h-[3.125rem] items-center justify-center rounded-b2b-pill border border-white/55 bg-white/35 px-b2b-5 font-mono text-meta font-medium tracking-[-0.025em] text-ink-900 shadow-b2b-pill backdrop-blur-[10px] transition-[transform,box-shadow] duration-[var(--b2b-dur-base)] ease-[var(--b2b-ease-out)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(148,163,184,.14)]">
        {label}
      </span>
    </li>
  );
}
