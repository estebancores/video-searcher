import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "lg" | "md";
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const variants = {
  primary:
    "bg-primary-500 text-white hover:brightness-95 active:brightness-90 disabled:bg-primary-100 disabled:text-primary-500",
  secondary:
    "border border-primary-500 text-primary-500 bg-white hover:bg-primary-100 active:bg-primary-100 disabled:border-primary-200 disabled:text-primary-300",
  tertiary:
    "text-neutral-700 bg-transparent hover:bg-neutral-100 hover:text-neutral-900 active:bg-neutral-100 disabled:text-neutral-300",
  text:
    "text-primary-500 bg-transparent hover:underline active:text-primary-400 disabled:text-primary-300",
};

const sizes = {
  lg: "h-11 px-4 text-base",
  md: "h-11 px-3 text-sm",
};

export function Button({
  variant = "primary",
  size = "lg",
  icon,
  iconRight,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium font-body transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300",
        "disabled:cursor-not-allowed disabled:no-underline",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon ? <span className="shrink-0">{icon}</span> : null}
      {children}
      {iconRight ? <span className="shrink-0">{iconRight}</span> : null}
    </button>
  );
}
