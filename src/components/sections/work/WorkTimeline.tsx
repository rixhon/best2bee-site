import { cx } from "@/lib/styles";
import { workSteps } from "./work.data";
import { WorkRevealItem } from "./WorkReveal.client";
import { WorkStepCard } from "./WorkStepCard";

export function WorkTimeline() {
  return (
    <div className="relative mt-[clamp(3rem,5vw,4.75rem)]">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-b2b-3 top-0 w-px bg-honey-400 tablet:left-1/2 tablet:w-0.5 tablet:-translate-x-1/2"
      />
      <ol className="relative grid gap-[clamp(3.5rem,6vw,4.375rem)]">
        {workSteps.map((step) => {
          const isLeft = step.side === "left";

          return (
            <li
              className="relative grid min-h-[14.3125rem] pl-b2b-7 tablet:grid-cols-[minmax(0,1fr)_2px_minmax(0,1fr)] tablet:pl-0"
              key={step.number}
            >
              <div
                aria-hidden="true"
                className="absolute left-b2b-3 top-[6.6rem] z-20 size-6 -translate-x-1/2 rounded-b2b-pill border-4 border-surface-cool-2 bg-honey-400 p-b2b-1 tablet:left-1/2"
              >
                <div className="size-full rounded-b2b-pill bg-honey-500" />
              </div>

              <WorkRevealItem
                className={cx(
                  isLeft
                    ? "tablet:col-start-1 tablet:pr-b2b-7"
                    : "tablet:col-start-3 tablet:pl-b2b-7",
                )}
                variant="scaleIn"
              >
                <WorkStepCard step={step} />
              </WorkRevealItem>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
