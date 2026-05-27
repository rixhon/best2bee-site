import { GlassCard } from "@/components/ui/GlassCard";
import { complianceCards } from "./compliance.data";

export function ComplianceCards() {
  return (
    <div className="mt-[clamp(2.5rem,4vw,3.75rem)] grid gap-b2b-4 tablet:grid-cols-2 tablet:gap-b2b-4 laptop:gap-b2b-5">
      {complianceCards.map((card) => (
        <GlassCard
          as="article"
          className="flex min-h-[10.5rem] flex-col justify-between rounded-b2b-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.76)_45%,rgba(255,255,255,0.68)_100%)] px-b2b-6 py-b2b-5 shadow-b2b-card backdrop-blur-[22px]"
          key={card.title}
        >
          <div>
            <h3 className="font-display text-subheading font-medium tracking-[var(--b2b-tracking-h3)] text-ink-900">
              {card.title}
            </h3>
            <p className="mt-b2b-3 font-body text-body-sm text-slate-600">
              {card.description}
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}

