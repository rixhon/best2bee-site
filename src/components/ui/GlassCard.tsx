import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx, surfaceClassNames } from "@/lib/styles";

type GlassCardProps<TElement extends ElementType = "div"> = {
  as?: TElement;
} & ComponentPropsWithoutRef<TElement>;

export function GlassCard<TElement extends ElementType = "div">({
  as,
  className,
  ...props
}: GlassCardProps<TElement>) {
  const Component = as ?? "div";

  return <Component className={cx(surfaceClassNames.glassCard, className)} {...props} />;
}
