import type { ComponentPropsWithoutRef } from "react";
import { cx, layoutClassNames } from "@/lib/styles";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: "default" | "none";
};

export function Section({ className, spacing = "default", ...props }: SectionProps) {
  return (
    <section
      className={cx(spacing === "default" && layoutClassNames.sectionSpacing, className)}
      {...props}
    />
  );
}
