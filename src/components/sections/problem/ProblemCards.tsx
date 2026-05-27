import { cx, layoutClassNames } from "@/lib/styles";
import { problemCards } from "./problem.data";
import { ProblemCard } from "./ProblemCard";
import { ProblemRevealItem, ProblemStagger } from "./ProblemReveal.client";

export function ProblemCards() {
  return (
    <ProblemStagger className={cx("mt-[clamp(2.5rem,5vw,4.5rem)]", layoutClassNames.threeCardGrid)}>
      {problemCards.map((card) => (
        <ProblemRevealItem className="w-full" key={card.title} variant="scaleIn">
          <ProblemCard {...card} />
        </ProblemRevealItem>
      ))}
    </ProblemStagger>
  );
}
