import {
  ArrowRightIcon,
  BarChartIcon,
  BellIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  FileTextIcon,
  PlayIcon,
  SearchIcon,
  UserIcon,
} from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CourseCard,
  LessonCard,
  LessonVideoCard,
  ResourceCard,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select } from "@/components/ui/select";
import { Status } from "@/components/ui/status";

const primaryColors = [
  { name: "Primary 500", hex: "#F4601A" },
  { name: "Primary 400", hex: "#FC7D37" },
  { name: "Primary 300", hex: "#FDAA6D" },
  { name: "Primary 200", hex: "#FDC596" },
  { name: "Primary 100", hex: "#FEF0E9" },
];

const neutralColors = [
  { name: "Neutral 900", hex: "#161C28" },
  { name: "Neutral 700", hex: "#343F4E" },
  { name: "Neutral 500", hex: "#636F7F" },
  { name: "Neutral 300", hex: "#C7CFD8" },
  { name: "Neutral 200", hex: "#E2E7EC" },
  { name: "Neutral 100", hex: "#F1F4F7" },
  { name: "Neutral 50", hex: "#F8FAFC" },
  { name: "White", hex: "#FFFFFF" },
];

const spacing = [4, 8, 12, 16, 24, 32, 40, 48, 64];

const typeScale = [
  { name: "Display 1", size: "48 / 56", font: "Playfair Display", weight: "Bold", use: "Page titles" },
  { name: "Display 2", size: "36 / 44", font: "Playfair Display", weight: "Bold", use: "Section titles" },
  { name: "Heading 1", size: "28 / 36", font: "Inter", weight: "Semi Bold", use: "Card titles" },
  { name: "Heading 2", size: "22 / 30", font: "Inter", weight: "Semi Bold", use: "Sub section" },
  { name: "Heading 3", size: "18 / 26", font: "Inter", weight: "Medium", use: "Small titles" },
  { name: "Body Large", size: "16 / 24", font: "Inter", weight: "Regular", use: "Body copy" },
  { name: "Body", size: "14 / 20", font: "Inter", weight: "Regular", use: "Supporting text" },
  { name: "Small", size: "12 / 16", font: "Inter", weight: "Regular", use: "Captions, meta" },
];

const shadowSpecs = [
  { name: "Sm", value: "0 1px 2px 0" },
  { name: "Md", value: "0 4px 12px -2px" },
  { name: "Lg", value: "0 12px 24px -4px" },
  { name: "Xl", value: "0 20px 40px -8px" },
];

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-white p-8 text-neutral-900 md:p-12">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary-500">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-500 text-white">
                <span className="font-display text-lg font-bold">V</span>
              </div>
              <span className="text-heading-3 font-semibold">Vertex</span>
            </div>
            <h1 className="font-display text-display-1 font-bold leading-display-1">
              Design System
            </h1>
            <p className="max-w-md text-body-lg leading-body-lg text-neutral-500">
              A unified design language for Vertex learning platform. Clean,
              modern and focused on clarity, consistency and intuitive learning
              experiences.
            </p>
            <p className="text-small text-neutral-500">
              VERSION 1.0 · MAY 2025
            </p>
          </div>

          {/* Colors */}
          <div className="space-y-6">
            <h2 className="text-small font-semibold uppercase tracking-wide text-primary-500">
              01 Colors
            </h2>
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium">Primary</p>
                <div className="flex flex-wrap gap-4">
                  {primaryColors.map((c) => (
                    <div key={c.name} className="space-y-1">
                      <div
                        className="h-14 w-20 rounded-md"
                        style={{ backgroundColor: c.hex }}
                      />
                      <p className="text-xs font-medium text-neutral-700">{c.name}</p>
                      <p className="text-xs text-neutral-500">{c.hex}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Neutral</p>
                <div className="flex flex-wrap gap-4">
                  {neutralColors.map((c) => (
                    <div key={c.name} className="space-y-1">
                      <div
                        className="h-14 w-20 rounded-md border border-neutral-200"
                        style={{ backgroundColor: c.hex }}
                      />
                      <p className="text-xs font-medium text-neutral-700">{c.name}</p>
                      <p className="text-xs text-neutral-500">{c.hex}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="mb-6 text-small font-semibold uppercase tracking-wide text-primary-500">
            02 Typography
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-display text-display-2">Ag</p>
                <h3 className="text-heading-2 font-semibold">Playfair Display</h3>
                <p className="text-body text-neutral-500">
                  Elegant · Readable · Timeless
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-body text-display-2">Ag</p>
                <h3 className="text-heading-2 font-semibold">Inter</h3>
                <p className="text-body text-neutral-500">
                  Clean · Modern · Highly legible
                </p>
              </div>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500">
                  <th className="py-2 pr-4">Style</th>
                  <th className="py-2 pr-4">Font</th>
                  <th className="py-2 pr-4">Size / Line Height</th>
                  <th className="py-2 pr-4">Weight</th>
                  <th className="py-2">Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {typeScale.map((row) => (
                  <tr key={row.name}>
                    <td className="py-2 pr-4 font-medium">{row.name}</td>
                    <td className="py-2 pr-4 text-neutral-500">{row.font}</td>
                    <td className="py-2 pr-4 text-neutral-500">{row.size}</td>
                    <td className="py-2 pr-4 text-neutral-500">{row.weight}</td>
                    <td className="py-2 text-neutral-500">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
            04 Spacing System
          </h2>
          <p className="mb-4 text-sm text-neutral-500">Base unit: 4px</p>
          <div className="flex flex-wrap items-end gap-6">
            {spacing.map((s) => (
              <div key={s} className="flex flex-col items-center gap-1">
                <div
                  className="rounded-sm bg-primary-200"
                  style={{ width: s, height: s }}
                />
                <span className="text-xs font-medium">{s}</span>
                <span className="text-xs text-neutral-500">({s / 16}rem)</span>
              </div>
            ))}
          </div>
        </section>

        {/* Radius & Shadows */}
        <section className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
              05 Radius & Shadows
            </h2>
            <p className="mb-4 text-sm font-medium">Radius</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-xs border border-neutral-200 bg-white" />
                <span className="text-xs">4px</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-sm border border-neutral-200 bg-white" />
                <span className="text-xs">8px</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-md border border-neutral-200 bg-white" />
                <span className="text-xs">12px</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-lg border border-neutral-200 bg-white" />
                <span className="text-xs">16px</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-xl border border-neutral-200 bg-white" />
                <span className="text-xs">24px</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-full border border-neutral-200 bg-white" />
                <span className="text-xs">Full</span>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-medium">Shadows</p>
            <div className="flex flex-wrap gap-4">
              {shadowSpecs.map((s) => (
                <div key={s.name} className="flex flex-col items-center gap-1">
                  <div className={`h-20 w-24 rounded-md bg-white shadow-${s.name.toLowerCase()}`} />
                  <span className="text-xs font-medium">{s.name}</span>
                  <span className="max-w-[6rem] text-center text-xs text-neutral-500">
                    {s.value} rgba(22, 28, 40, …)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Icons */}
        <section>
          <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
            06 Icons
          </h2>
          <p className="mb-2 text-sm font-medium">Outline Style</p>
          <div className="mb-6 flex flex-wrap gap-4 text-neutral-700">
            <BellIcon />
            <SearchIcon />
            <PlayIcon />
            <FileTextIcon />
            <ClockIcon />
            <BarChartIcon />
            <UserIcon />
            <ArrowRightIcon />
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
            07 Buttons
          </h2>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Explore Courses</Button>
              <Button variant="tertiary" icon={<FileTextIcon size={16} />}>
                View Lesson
              </Button>
              <Button variant="text" icon={<PlayIcon size={14} />}>
                Watch Video
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" disabled>Get Started</Button>
              <Button variant="secondary" disabled>Explore Courses</Button>
              <Button variant="tertiary" disabled icon={<FileTextIcon size={16} />}>
                View Lesson
              </Button>
              <Button variant="text" disabled icon={<PlayIcon size={14} />}>
                Watch Video
              </Button>
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
              08 Inputs
            </h2>
            <p className="mb-2 text-sm font-medium">Search / Text Input</p>
            <Input placeholder="Search anything..." kbd="⌘K" />
          </div>
          <div>
            <p className="mb-2 mt-6 text-sm font-medium">Select</p>
            <Select
              options={[
                { value: "relevant", label: "Most Relevant" },
                { value: "newest", label: "Newest" },
                { value: "popular", label: "Most Popular" },
              ]}
              defaultValue="relevant"
            />
          </div>
        </section>

        {/* Badges, Status, Progress */}
        <section className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
              09 Badges / Tags
            </h2>
            <div className="flex flex-wrap gap-3">
              <Badge variant="video">Video</Badge>
              <Badge variant="lesson">Lesson</Badge>
              <Badge variant="popular">Popular</Badge>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
              10 Status / Indicators
            </h2>
            <div className="space-y-2">
              <Status variant="in-progress" />
              <Status variant="completed" />
              <Status variant="now-playing" />
              <Status variant="locked" />
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
              11 Progress Bar
            </h2>
            <Progress value={35} />
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
            12 Cards
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CourseCard
              title="Next.js for Production"
              description="Build scalable, high-performance web applications with Next.js."
              level="Intermediate"
              duration="18h 24m"
              modules={12}
              icon="N"
            />
            <LessonVideoCard
              title="Data Fetching in Server Components"
              description="Learn how to fetch data on the server using async/await and Next.js best practices."
              moduleLabel="Lesson 5.1"
              time="12:45"
              startTime="12:45"
            />
            <LessonCard
              title="Data Fetching & Caching"
              description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
              moduleLabel="Module 5"
            />
            <ResourceCard
              title="Caching and Revalidation Guide"
              description="Deep dive into Next.js caching strategies."
              type="PDF"
              size="1.2 MB"
            />
          </div>
        </section>

        {/* Navigation */}
        <section>
          <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
            13 Navigation
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-4">
              <p className="mb-2 text-sm font-medium">Breadcrumbs</p>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span>All Courses</span>
                <ChevronDownIcon size={14} className="rotate-[-90deg]" />
                <span>Next.js for Production</span>
                <ChevronDownIcon size={14} className="rotate-[-90deg]" />
                <span className="text-neutral-900">Data Fetching & Caching</span>
              </div>
            </Card>
            <Card className="p-4">
              <p className="mb-2 text-sm font-medium">Pagination</p>
              <div className="flex items-center gap-2">
                <button className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100">
                  <ChevronDownIcon size={16} className="rotate-90" />
                </button>
                <button className="h-8 w-8 rounded-md bg-primary-500 text-sm font-medium text-white">
                  1
                </button>
                <button className="h-8 w-8 rounded-md text-sm text-neutral-700 hover:bg-neutral-100">
                  2
                </button>
                <button className="h-8 w-8 rounded-md text-sm text-neutral-700 hover:bg-neutral-100">
                  3
                </button>
                <span className="text-neutral-500">…</span>
                <button className="h-8 w-8 rounded-md text-sm text-neutral-700 hover:bg-neutral-100">
                  8
                </button>
                <button className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100">
                  <ChevronDownIcon size={16} className="rotate-[-90deg]" />
                </button>
              </div>
            </Card>
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="mb-4 text-small font-semibold uppercase tracking-wide text-primary-500">
            14 Principles
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="flex items-start gap-3">
              <SearchIcon size={24} className="shrink-0 text-primary-500" />
              <div>
                <p className="font-semibold text-neutral-900">Clarity First</p>
                <p className="text-sm text-neutral-500">
                  Every element should communicate clearly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon size={24} className="shrink-0 text-primary-500" />
              <div>
                <p className="font-semibold text-neutral-900">Consistency</p>
                <p className="text-sm text-neutral-500">
                  Use components and patterns consistently across the platform.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ClockIcon size={24} className="shrink-0 text-primary-500" />
              <div>
                <p className="font-semibold text-neutral-900">Focus & Calm</p>
                <p className="text-sm text-neutral-500">
                  Remove noise and help learners focus on what matters.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <UserIcon size={24} className="shrink-0 text-primary-500" />
              <div>
                <p className="font-semibold text-neutral-900">Accessible</p>
                <p className="text-sm text-neutral-500">
                  Design with accessibility and inclusivity in mind.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
