import { squadsFeatures } from "./squads.data";
import { SquadsCard } from "./SquadsCard";
import { SquadsRevealItem, SquadsStagger } from "./SquadsReveal.client";

export function SquadsCards() {
  return (
    <SquadsStagger className="relative z-10 mt-b2b-7">
      <ul
        aria-label="Benefícios dos squads completos"
        className="grid max-w-[48.8125rem] grid-cols-1 gap-b2b-4 tablet:grid-cols-2 tablet:grid-rows-2 tablet:gap-[clamp(1rem,1.5vw,1.25rem)]"
      >
        {squadsFeatures.map((feature) => (
          <li className="h-[12.375rem]" key={feature.title}>
            <SquadsRevealItem className="h-full w-full" variant="scaleIn">
              <SquadsCard {...feature} />
            </SquadsRevealItem>
          </li>
        ))}
      </ul>
    </SquadsStagger>
  );
}
