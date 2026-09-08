import {
  CheckCircleIcon,
  ClockIcon,
  LockIcon,
  PlayCircleIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

export interface StatusProps {
  variant?: "in-progress" | "completed" | "now-playing" | "locked";
  label?: string;
  className?: string;
}

const labels = {
  "in-progress": "In Progress",
  completed: "Completed",
  "now-playing": "Now Playing",
  locked: "Locked",
};

const icons = {
  "in-progress": <ClockIcon size={18} className="text-primary-500" />,
  completed: <CheckCircleIcon size={18} className="text-emerald-600" />,
  "now-playing": <PlayCircleIcon size={18} className="text-primary-500" />,
  locked: <LockIcon size={18} className="text-neutral-500" />,
};

export function Status({ variant = "in-progress", label, className }: StatusProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-neutral-700",
        className
      )}
    >
      {icons[variant]}
      {label ?? labels[variant]}
    </div>
  );
}
