type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="font-mono text-eyebrow uppercase text-honey-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-[14px] font-display text-[clamp(32px,4.4vw,var(--b2b-fs-display-l))] font-light leading-[1.08] tracking-[var(--b2b-tracking-h2)] text-ink-900">
        {title}
      </h2>
      {description ? (
        <p className="mt-b2b-5 font-body text-[clamp(16px,1.6vw,var(--b2b-fs-body-l))] leading-[var(--b2b-lh-loose)] text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
