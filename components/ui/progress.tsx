import { cn } from "@/lib/utils";

export interface ProgressProps {
  value: number;
  label?: string;
  className?: string;
}

export function Progress({ value, label, className }: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const text = label ?? `${clamped}% complete`;

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
        <div
          className="h-full rounded-full bg-primary-500 transition-all"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className="shrink-0 text-sm text-neutral-700">{text}</span>
    </div>
  );
}
