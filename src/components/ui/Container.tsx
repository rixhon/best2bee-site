import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-b2b-container px-[var(--b2b-container-pad-m)] tablet:px-[var(--b2b-container-pad-t)] laptop:px-[64px] desktop:px-[var(--b2b-container-pad-d)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
