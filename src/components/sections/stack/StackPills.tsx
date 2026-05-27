import { stackTechnologyRows } from "./stack.data";
import { StackRevealItem } from "./StackReveal.client";
import { StackPill } from "./StackPill";

export function StackPills() {
  return (
    <div
      aria-label="Tecnologias dominadas pela equipe"
      className="mt-[clamp(3rem,5vw,4.5rem)] flex flex-col items-center gap-b2b-5"
    >
      {stackTechnologyRows.map((row) => (
        <ul
          className="flex max-w-full flex-wrap justify-center gap-b2b-3 tablet:gap-b2b-4"
          key={row.join("-")}
          role="list"
        >
          {row.map((technology) => (
            <li key={technology} role="listitem">
              <StackRevealItem variant="scaleIn">
                <StackPill label={technology} />
              </StackRevealItem>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
