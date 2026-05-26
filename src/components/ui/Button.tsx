import type { ButtonHTMLAttributes } from "react";
import { cx } from "@/lib/styles";

type ButtonVariant = "primary" | "ghost" | "ink";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-white/70 bg-[linear-gradient(180deg,var(--b2b-honey-500),var(--b2b-honey-600))] text-white shadow-b2b-button",
  ghost: "border border-slate-300 bg-transparent text-ink-900",
  ink: "border border-white/20 bg-[linear-gradient(180deg,var(--b2b-ink-900),#0F172B)] text-white shadow-b2b-button",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-[18px] py-[10px] text-[13.5px]",
  md: "px-[26px] py-[14px] text-[15px]",
  lg: "px-[32px] py-[18px] text-body",
};

export function buttonClassName({
  className,
  size = "md",
  variant = "primary",
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
} = {}) {
  return cx(
    "inline-flex items-center justify-center gap-[10px] rounded-b2b-pill font-medium leading-none transition-[transform,box-shadow,filter] duration-[var(--b2b-dur-fast)] ease-[var(--b2b-ease-out)] hover:-translate-y-px hover:brightness-[1.04] hover:shadow-[0_14px_36px_rgba(225,113,0,.35),0_8px_18px_rgba(15,23,42,.16)] active:translate-y-0 active:brightness-[.94] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[.55] disabled:shadow-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button({
  className,
  size = "md",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName({ className, size, variant })}
      type={type}
      {...props}
    />
  );
}
