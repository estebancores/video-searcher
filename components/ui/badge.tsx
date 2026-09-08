import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface BadgeProps {
  variant?: "video" | "lesson" | "popular";
  children?: ReactNode;
  className?: string;
}

const variants = {
  video: "bg-primary-100 text-primary-500",
  lesson: "bg-neutral-100 text-neutral-700",
  popular: "border border-primary-500 text-primary-500 bg-white",
};

export function Badge({ variant = "video", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-1 text-xs font-medium uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
