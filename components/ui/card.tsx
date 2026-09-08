import {
  BarChartIcon,
  ClockIcon,
  ExternalLinkIcon,
  FileTextIcon,
  PlayIcon,
} from "@/components/icons";
import { Badge } from "./badge";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "bordered";
}

export function Card({ children, className, variant = "default" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-white p-4 transition-shadow",
        variant === "bordered"
          ? "border border-neutral-200"
          : "shadow-sm hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

// Placeholder for the folder icon used in course cards; added inline to avoid extra dependency.
function FolderIcon({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: number;
  icon?: string;
}

export function CourseCard({
  title,
  description,
  level,
  duration,
  modules,
  icon,
}: CourseCardProps) {
  return (
    <Card className="flex gap-4">
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-neutral-900 text-2xl font-display text-white"
      >
        {icon ?? title.charAt(0).toUpperCase()}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-heading-3 font-semibold text-neutral-900">{title}</h3>
        <p className="text-body text-neutral-500">{description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-small text-neutral-500">
          <span className="inline-flex items-center gap-1">
            <BarChartIcon size={14} />
            {level}
          </span>
          <span className="inline-flex items-center gap-1">
            <ClockIcon size={14} />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <FolderIcon size={14} />
            {modules} modules
          </span>
        </div>
      </div>
    </Card>
  );
}

export interface LessonVideoCardProps {
  title: string;
  description: string;
  moduleLabel: string;
  time: string;
  startTime: string;
}

export function LessonVideoCard({
  title,
  description,
  moduleLabel,
  time,
  startTime,
}: LessonVideoCardProps) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <Badge variant="video">Video</Badge>
          <h3 className="mt-2 text-heading-3 font-semibold text-neutral-900">
            {title}
          </h3>
          <p className="mt-1 text-body text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
        <span className="text-small text-neutral-500">
          {moduleLabel} · {time}
        </span>
        <Button variant="text" size="md" icon={<PlayIcon size={14} />}>
          Watch from {startTime}
        </Button>
      </div>
    </Card>
  );
}

export interface LessonCardProps {
  title: string;
  description: string;
  moduleLabel: string;
  points?: string[];
}

export function LessonCard({
  title,
  description,
  moduleLabel,
  points,
}: LessonCardProps) {
  return (
    <Card className="flex flex-col gap-3">
      <Badge variant="lesson">Lesson</Badge>
      <h3 className="text-heading-3 font-semibold text-neutral-900">{title}</h3>
      <p className="text-body text-neutral-500">{description}</p>
      {points?.length ? (
        <ul className="list-disc space-y-1 pl-4 text-body text-neutral-600">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      ) : null}
      <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
        <span className="text-small text-neutral-500">{moduleLabel}</span>
        <Button variant="text" size="md" iconRight={<ExternalLinkIcon size={14} />}>
          View lesson
        </Button>
      </div>
    </Card>
  );
}

export interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  size: string;
}

export function ResourceCard({ title, description, type, size }: ResourceCardProps) {
  return (
    <Card className="flex gap-4">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-700"
      >
        <FileTextIcon size={24} />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <h3 className="text-heading-3 font-semibold text-neutral-900">{title}</h3>
        <p className="text-body text-neutral-500">{description}</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-small text-neutral-500">
            {type} · {size}
          </span>
          <ExternalLinkIcon size={16} className="text-primary-500" />
        </div>
      </div>
    </Card>
  );
}
