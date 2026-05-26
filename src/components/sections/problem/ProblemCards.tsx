import { problemCards } from "./problem.data";
import { ProblemCard } from "./ProblemCard";
import { ProblemRevealItem, ProblemStagger } from "./ProblemReveal.client";

export function ProblemCards() {
  return (
    <ProblemStagger className="mt-[clamp(2.5rem,5vw,4.5rem)] grid justify-center gap-[clamp(1.25rem,2vw,1.75rem)] tablet:grid-cols-2 laptop:grid-cols-[repeat(3,minmax(0,25.375rem))]">
      {problemCards.map((card) => (
        <ProblemRevealItem className="w-full" key={card.title} variant="scaleIn">
          <ProblemCard {...card} />
        </ProblemRevealItem>
      ))}
    </ProblemStagger>
  );
}
