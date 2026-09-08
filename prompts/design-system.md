# Implement Vertex design system tokens and components

## Goal
Turn the `design/vertext-designsystem.png` reference into a working Tailwind CSS v4 theme and reusable UI primitives so the catalog, course, lesson, and search pages can be built from the same design language.

## Context
- Stack: Next.js 16 (App Router), React 19, Tailwind CSS v4 with `@tailwindcss/postcss`, TypeScript.
- Current `app/globals.css` only has the starter `--background` / `--foreground` variables and Geist fonts.
- Current `app/layout.tsx` imports Geist; `app/page.tsx` is the starter Next.js landing page.
- No `components/` directory exists yet.
- No new runtime dependencies should be added. Use `next/font/google` for fonts and inline SVGs for icons.

## Code inspected
- `package.json` – confirms Tailwind v4 and Next.js 16.
- `app/globals.css` – minimal theme; will be replaced/extended with `@theme inline`.
- `app/layout.tsx` – font loading setup to update.
- `app/page.tsx` – placeholder page; leave untouched unless a temporary visual check is needed.
- `design/vertext-designsystem.png` – source of truth for colors, typography, spacing, radius, shadows, buttons, inputs, badges, status indicators, progress bar, cards, and icons.

## Decisions and assumptions
- The design is the source of truth. Match colors, type scale, spacing, radius, and shadows exactly.
- Use the sampled swatch colors from the image (they are the closest available reference).
- `Playfair Display` is used for display/headings; `Inter` is used for body and UI text.
- Tailwind v4 theme is configured entirely in `app/globals.css` with `@theme inline`.
- No icon library is installed; create `components/icons.tsx` with the SVGs needed for the primitives (search, chevron, play, external link, check, clock, lock, file).
- Existing pages are not changed. No dedicated `/design-system` reference page is created.

## Colors (sampled from the reference PNG)
Primary:
- 500: `#F4601A`
- 400: `#FC7D37`
- 300: `#FDAA6D`
- 200: `#FDC596`
- 100: `#FEF0E9`

Neutral:
- 900: `#161C28`
- 700: `#343F4E`
- 500: `#636F7F`
- 300: `#C7CFD8`
- 200: `#E2E7EC`
- 100: `#F1F4F7`
- 50: `#F8FAFC`
- White: `#FFFFFF`

## Type scale
- Display 1: `48px / 56px`, `Playfair Display`, bold
- Display 2: `36px / 44px`, `Playfair Display`, bold
- Heading 1: `28px / 36px`, `Inter`, semi-bold (600)
- Heading 2: `22px / 30px`, `Inter`, semi-bold
- Heading 3: `18px / 26px`, `Inter`, medium
- Body Large: `16px / 24px`, `Inter`, regular
- Body: `14px / 20px`, `Inter`, regular
- Small: `12px / 16px`, `Inter`, regular

## Spacing
Base unit `4px`. Expose `4, 8, 12, 16, 24, 32, 40, 48, 64`.

## Radius
`4px (xs), 8px (sm), 12px (md), 16px (lg), 24px (xl), full`.

## Shadows
Use the neutral-900 RGB (`22, 28, 40`) for all shadows:
- `sm`: `0 1px 2px 0 rgba(22, 28, 40, 0.05)`
- `md`: `0 4px 12px -2px rgba(22, 28, 40, 0.08)`
- `lg`: `0 12px 24px -4px rgba(22, 28, 40, 0.10)`
- `xl`: `0 20px 40px -8px rgba(22, 28, 40, 0.12)`

## Files to touch
1. `app/globals.css` – Tailwind v4 `@theme inline` tokens.
2. `app/layout.tsx` – load `Playfair Display` and `Inter` via `next/font/google`.
3. `components/icons.tsx` – reusable inline SVG icons.
4. `components/ui/button.tsx` – primary / secondary / tertiary / text variants; `lg` and `md` sizes; default / hover / disabled; optional left/right icon.
5. `components/ui/input.tsx` – search/text input with leading icon, optional trailing kbd shortcut, focus border color `primary-500`.
6. `components/ui/select.tsx` – styled native select with chevron.
7. `components/ui/badge.tsx` – `video`, `lesson`, `popular` variants.
8. `components/ui/status.tsx` – `in-progress`, `completed`, `now-playing`, `locked` indicators.
9. `components/ui/progress.tsx` – progress bar with orange fill, gray track, percentage label.
10. `components/ui/card.tsx` – generic card wrapper.
11. `components/ui/course-card.tsx`, `lesson-video-card.tsx`, `lesson-card.tsx`, `resource-card.tsx` – the four card examples from the design system.

## Component requirements
- `Button`: `variant` (`primary`, `secondary`, `tertiary`, `text`), `size` (`lg`, `md`), `disabled`, `icon` (left SVG element), `iconRight`.
- `Input`: `placeholder`, `type`, `icon` (optional leading SVG), `kbd` (optional trailing text like `⌘K`).
- `Select`: `options` array, `placeholder`, `value/defaultValue`.
- `Badge`: `variant` (`video`, `lesson`, `popular`).
- `Status`: `variant` (`in-progress`, `completed`, `now-playing`, `locked`), `label`.
- `Progress`: `value` (0-100), `label`.
- `Card`: `children`, optional `variant` (`default`, `bordered`, `ghost`).
- Card examples: prop-driven, using `Badge`, `Button` text variant, etc.

## Security considerations
- No secrets, API keys, or authentication in this work.
- No client-side tokens or external calls.

## Acceptance criteria
- `npm run lint` passes with no errors.
- `npx tsc --noEmit` passes.
- `npm run build` succeeds.
- Color, font, spacing, radius, and shadow tokens are present in the generated CSS.
- All UI primitives render without runtime errors when temporarily imported into `app/page.tsx`.

## Checks to run
```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Manual test steps
1. `npm run dev`.
2. Temporarily render one of each primitive in `app/page.tsx` (e.g. a Button, Input, Select, Badge, Status, Progress, and a Card) to confirm colors, fonts, and spacing match the image.
3. Revert `app/page.tsx` before finishing.
4. Confirm there are no console errors and the build is clean.
