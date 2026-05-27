import { GlassCard } from "@/components/ui/GlassCard";
import { socialStarCount } from "./social.data";

type SocialTestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  initial: string;
};

export function SocialTestimonialCard({ quote, name, role, initial }: SocialTestimonialCardProps) {
  return (
    <GlassCard
      as="article"
      className="group relative flex h-full min-h-[17.955rem] w-full flex-col px-b2b-6 py-b2b-6 transition-[transform,box-shadow,filter] duration-[var(--b2b-dur-base)] ease-[var(--b2b-ease-out)] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(148,163,184,.2),0_12px_32px_rgba(15,23,42,.08)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,.42)_0%,rgba(255,255,255,0)_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(147,197,253,.22),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,.14),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-80" />

      <div aria-label="5 estrelas" className="relative flex gap-1" role="img">
        {Array.from({ length: socialStarCount }, (_, index) => (
          <span aria-hidden="true" className="text-[1.125rem] leading-none text-honey-400" key={index}>
            ★
          </span>
        ))}
      </div>

      <blockquote className="relative mt-b2b-4 flex-1">
        <p className="font-body text-body-sm italic leading-[1.7] text-slate-700">&ldquo;{quote}&rdquo;</p>
      </blockquote>

      <footer className="relative mt-b2b-5 flex items-center gap-b2b-3">
        <div
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-b2b-pill border border-honey-400 bg-gradient-to-br from-surface-cool to-surface-soft font-body text-meta font-medium text-ink-900"
        >
          {initial}
        </div>
        <div>
          <p className="font-body text-meta font-medium tracking-[-0.025em] text-ink-900">{name}</p>
          <p className="mt-0.5 font-body text-body-sm leading-[1.7] text-slate-600">{role}</p>
        </div>
      </footer>
    </GlassCard>
  );
}
