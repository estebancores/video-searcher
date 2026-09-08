# Implement the Vertex home page

## Goal
Replace the starter `app/page.tsx` with the Vertex marketing home page shown in `design/vertex-home.png`, using the existing design system tokens and components.

## Context
- Stack: Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.
- Design tokens and reusable UI primitives are already implemented in `app/globals.css`, `app/layout.tsx`, `components/ui/*`, and `components/icons.tsx`.
- The home page design is the source of truth for layout, spacing, typography, and colors.

## Code inspected
- `app/page.tsx` — still the starter Next.js landing page; to be replaced.
- `app/layout.tsx` — loads `Inter` and `Playfair Display`; sets `font-body` on `body`.
- `app/globals.css` — color, type, spacing, radius, and shadow tokens are defined.
- `components/ui/button.tsx`, `input.tsx`, `card.tsx` — primitives to use for the hero CTA, search input, and course cards.
- `components/icons.tsx` — `SearchIcon`, `ArrowRightIcon`, `BellIcon` are available.
- `components/ui/card.tsx` — `CourseCard` already matches the course-card component in the design.
- `design/vertex-home.png` — reference for the full page.

## Decisions and assumptions
- The page is presentational and uses static sample data for the three course cards, matching the reference image.
- The "Explore Courses" button navigates to `/courses` (placeholder link).
- The search input is presentational; it displays the `⌘K` shortcut and a search icon.
- "View all courses" links to `/courses`.
- The decorative orange bar chart at the bottom is rendered as inline SVG to avoid adding image assets.
- Header navigation uses the existing `Button` `text` variant style and plain links.
- User avatar is rendered with a placeholder div (no Clerk integration in this step).
- The page is responsive: the hero and course grid stack on mobile, and the desktop layout matches the reference.

## Files to touch
1. `app/page.tsx` — full page implementation.
2. `components/icons.tsx` — add a `SparkleStarIcon` for the "New courses..." banner if not already present.
3. `components/ui/card.tsx` — minor adjustment to `CourseCard` so the icon can accept a React node (e.g., the Docker whale emoji/image) instead of only a single letter.

## Requirements
- Header: Vertex logo with orange chevron icon + "Vertex" wordmark, "Courses" and "My Learning" nav, notification bell, user avatar.
- Hero: "INTELLIGENT LEARNING" tag, "Search your learning in plain English." display heading, supporting body text, "Explore Courses" primary button, large search input with `⌘K` shortcut.
- "All Courses" section: section title, "View all courses" text link with arrow, 3-column grid of `CourseCard` components.
- Banner: star icon + "New courses and lessons added every week."
- Footer decoration: orange gradient bar-chart / wave SVG spanning full width.
- Use the design system tokens: `--font-display`, `--font-body`, primary/neutral colors, and the existing type scale classes.

## Security considerations
- No secrets, API keys, or authentication work in this step.
- Links are internal placeholders; no external tracking or third-party calls.

## Acceptance criteria
- `app/page.tsx` renders the home page matching the reference image.
- `npm run lint` passes with no errors.
- `npx tsc --noEmit` passes.
- `npm run build` succeeds.
- The page is responsive and has no runtime errors.

## Checks to run
```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Manual test steps
1. `npm run dev`.
2. Open `http://localhost:3000`.
3. Verify the header, hero text, search input, "Explore Courses" button, "All Courses" grid, banner, and footer decoration render as in `design/vertex-home.png`.
4. Resize the viewport to confirm mobile stacking.
5. Confirm there are no console errors.
