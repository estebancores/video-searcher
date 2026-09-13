import { AuthControls } from "@/components/auth-controls";
import { ArrowRightIcon, BellIcon, SparkleIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function VertexLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 28L4 6H28L16 28Z" fill="#F4601A" />
    </svg>
  );
}

function DockerWhale({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22.2 13.4c0 1.6-1.3 2.9-2.9 2.9H5.1C2.8 16.3.9 14.4.9 12.1c0-1.6.9-3 2.4-3.6.3-1.3 1.5-2.3 2.9-2.3.3 0 .6 0 .9.1.4-1.9 2-3.2 3.8-3.2 1.7 0 3.1 1 3.7 2.4.6-.4 1.3-.7 2-.7 2.2 0 4 1.8 4 4 0 .3 0 .5-.1.8 1.6.4 2.7 1.8 2.7 3.4v.4z"
        fill="#2496ED"
      />
      <rect x="6" y="13" width="2.5" height="2.5" rx="0.3" fill="white" />
      <rect x="9" y="13" width="2.5" height="2.5" rx="0.3" fill="white" />
      <rect x="12" y="13" width="2.5" height="2.5" rx="0.3" fill="white" />
      <rect x="15" y="13" width="2.5" height="2.5" rx="0.3" fill="white" />
      <rect x="6" y="16" width="2.5" height="2.5" rx="0.3" fill="white" />
      <rect x="9" y="16" width="2.5" height="2.5" rx="0.3" fill="white" />
      <rect x="12" y="16" width="2.5" height="2.5" rx="0.3" fill="white" />
      <rect x="15" y="16" width="2.5" height="2.5" rx="0.3" fill="white" />
      <rect x="18" y="16" width="2.5" height="2.5" rx="0.3" fill="white" />
    </svg>
  );
}

function FooterDecoration() {
  const bars = Array.from({ length: 24 }, (_, i) => {
    const t = i / 23;
    let height =
      50 +
      Math.sin(t * Math.PI * 3) * 40 +
      Math.cos(t * Math.PI * 5) * 20 +
      Math.sin(t * Math.PI * 1.5) * 20;
    height = Math.max(30, Math.min(160, height));
    return {
      x: i * 50,
      top: 180 - height,
      width: 45,
      radius: 8,
      opacity: 0.35 + ((i % 4) * 0.12),
    };
  });

  function barPath(x: number, top: number, w: number, r: number) {
    return `M ${x} ${top + r} Q ${x} ${top} ${x + r} ${top} H ${x + w - r} Q ${x + w} ${top} ${x + w} ${top + r} V 180 H ${x} Z`;
  }

  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 1200 180"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="footerGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDAA6D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F4601A" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {bars.map((bar, i) => (
        <path
          key={i}
          d={barPath(bar.x, bar.top, bar.width, bar.radius)}
          fill="url(#footerGradient)"
          fillOpacity={bar.opacity}
        />
      ))}
    </svg>
  );
}

const courses = [
  {
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: 12,
    iconClassName: "bg-black text-white",
    icon: <span className="font-display italic">N</span>,
  },
  {
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: 8,
    iconClassName: "bg-[#E5F0F9]",
    icon: <DockerWhale />,
  },
  {
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: 10,
    iconClassName: "bg-[#3178C6] text-white",
    icon: <span className="font-body text-2xl font-bold">TS</span>,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col bg-[#FFFBF7]">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2" aria-label="Vertex home">
              <VertexLogo />
              <span className="text-xl font-semibold text-neutral-900">Vertex</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/courses"
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
              >
                Courses
              </Link>
              <Link
                href="/my-learning"
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
              >
                My Learning
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100"
              aria-label="Notifications"
            >
              <BellIcon size={20} />
            </button>
            <AuthControls />
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="bg-[#FFFBF7] px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="video">Intelligent Learning</Badge>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-neutral-900 md:text-display-1 md:leading-display-1">
              Search your learning in plain English.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-body-lg leading-body-lg text-neutral-500">
              Vertex understands what you want to learn and finds the exact lessons across all your
              courses.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" iconRight={<ArrowRightIcon size={16} />}>
                Explore Courses
              </Button>
            </div>
            <div className="mx-auto mt-8 max-w-2xl">
              <Input placeholder="Ask anything about your learning..." kbd="⌘K" />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-3xl font-bold leading-tight text-neutral-900 md:text-display-2 md:leading-display-2">
                All Courses
              </h2>
              <Link
                href="/courses"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:underline"
              >
                View all courses
                <ArrowRightIcon size={16} />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard
                  key={course.title}
                  title={course.title}
                  description={course.description}
                  level={course.level}
                  duration={course.duration}
                  modules={course.modules}
                  icon={course.icon}
                  iconClassName={course.iconClassName}
                  variant="vertical"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBF7] px-4 py-12">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
            <SparkleIcon size={20} className="text-primary-500" />
            <p className="text-body font-medium text-neutral-900">
              New courses and lessons added every week.
            </p>
          </div>
        </section>

        <div className="mt-auto bg-[#FFFBF7]">
          <FooterDecoration />
        </div>
      </main>
    </div>
  );
}
