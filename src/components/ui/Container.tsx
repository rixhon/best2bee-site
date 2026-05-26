import type { ComponentPropsWithoutRef } from "react";
import { cx, layoutClassNames } from "@/lib/styles";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cx(layoutClassNames.responsiveContainer, className)}
      {...props}
    />
  );
}
