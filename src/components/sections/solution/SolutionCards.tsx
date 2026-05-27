import { cx, layoutClassNames } from "@/lib/styles";
import { solutionTalents } from "./solution.data";
import { SolutionCard } from "./SolutionCard";
import { SolutionRevealItem, SolutionStagger } from "./SolutionReveal.client";

export function SolutionCards() {
  return (
    <SolutionStagger className={cx("relative z-10 mt-b2b-7", layoutClassNames.threeCardGrid)}>
      {solutionTalents.map((talent) => (
        <SolutionRevealItem className="w-full" key={talent.name} variant="scaleIn">
          <SolutionCard {...talent} />
        </SolutionRevealItem>
      ))}
    </SolutionStagger>
  );
}
