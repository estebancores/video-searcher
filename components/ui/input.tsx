import { cn } from "@/lib/utils";
import { SearchIcon } from "@/components/icons";
import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  kbd?: string;
}

export function Input({
  icon = <SearchIcon size={20} />,
  kbd,
  className,
  ...props
}: InputProps) {
  return (
    <div className="relative flex w-full items-center">
      {icon ? (
        <span className="pointer-events-none absolute left-3 text-neutral-500">
          {icon}
        </span>
      ) : null}
      <input
        className={cn(
          "h-11 w-full rounded-md border border-neutral-200 bg-white px-4 text-sm placeholder:text-neutral-500",
          "focus:border-primary-500 focus:outline-none",
          icon ? "pl-10" : "",
          kbd ? "pr-14" : "",
          className
        )}
        {...props}
      />
      {kbd ? (
        <kbd className="absolute right-3 rounded border border-neutral-200 px-1.5 py-0.5 text-xs text-neutral-500">
          {kbd}
        </kbd>
      ) : null}
    </div>
  );
}
