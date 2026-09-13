# Implement Vertex Sanity content model, Studio, and server-side data layer

## Goal
Set up the Sanity content model and authoring environment for Vertex, plus the read-only data access layer the Next.js site will use for catalog, course, lesson, instructor, and category pages.

## Context
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, `next-sanity`, Sanity v5, `@sanity/image-url`.
- The repo currently bootstraps Sanity as an embedded Studio mounted at `app/studio/[[...tool]]/page.tsx` with `sanity.config.ts` at the repo root.
- `AGENTS.md` requires two standalone workspaces (Studio and web), so the embedded Studio must be removed and replaced by a separate `studio/` workspace.
- Current `sanity/lib/client.ts` is a basic unauthenticated client; the data layer needs a server-only read client that uses a Sanity API read token for a private dataset.
- `sanity/schemaTypes/index.ts` is empty.
- `sanity/structure.ts` is the default auto-generated structure.
- Existing prompts: `prompts/design-system.md` already built the Tailwind primitives.

## Code inspected
- `package.json` – has `sanity`, `@sanity/vision`, `styled-components`, `next-sanity`, `@sanity/image-url`.
- `sanity.config.ts` / `sanity.cli.ts` – root-level Studio config for the embedded route.
- `app/studio/[[...tool]]/page.tsx` – mounts `NextStudio`.
- `sanity/env.ts` – asserts `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.
- `sanity/lib/client.ts` – bare `createClient` from `next-sanity`, no token.
- `sanity/lib/live.ts` – `defineLive` with default config.
- `sanity/lib/image.ts` – `urlFor` helper.
- `sanity/schemaTypes/index.ts` – empty types array.
- `sanity/structure.ts` – default structure.
- `tsconfig.json` – path alias `@/*` maps to `./*`.

## Decisions and assumptions
- Split the repo into two standalone workspaces per `AGENTS.md`:
  - `studio/` – Sanity Studio with schemas and structure.
  - Root (web) – Next.js app with the read client, image helper, and GROQ data layer.
- Remove the embedded Studio route and root Studio config.
- Implement only the five requested content types: `course`, `module` (embedded object inside `course`), `lesson`, `instructor`, and `category`.
- `video` and `agentContext` documents are out of scope for this step; they will be added when video ingestion and search are built.
- Use `reference` for `instructor` and `category` (reusable taxonomies) and embed `module` inside `course`.
- Use Portable Text for lesson notes and structured objects for learning outcomes, key points, and resources.
- Store duration as a number of seconds; the UI can format it later.
- Lesson numbering (e.g. Lesson 5.1) is derived from array order in GROQ projections, not stored.
- The server read client lives in `sanity/lib/server.ts` (server-only) and uses `SANITY_API_READ_TOKEN`.
- Keep `sanity/lib/client.ts` and `sanity/lib/live.ts` for now but configure them so the browser does not receive the read token.
- Add `defineQuery` GROQ strings in `sanity/lib/queries.ts`.
- Add TypeGen config and generated types file so the data layer is typed.

## Files to touch

### Studio workspace (new `studio/` directory)
1. `studio/package.json` – Sanity Studio deps (`sanity`, `@sanity/vision`, `styled-components`, `typescript`).
2. `studio/tsconfig.json` – standalone Studio TypeScript config.
3. `studio/sanity.config.ts` – Studio config pointing to `src/schemaTypes` and `src/structure`.
4. `studio/sanity.cli.ts` – CLI config using `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.
5. `studio/src/env.ts` – assert Studio env vars.
6. `studio/src/schemaTypes/index.ts` – export all document and object types.
7. `studio/src/schemaTypes/documents/category.ts` – `category` document.
8. `studio/src/schemaTypes/documents/instructor.ts` – `instructor` document.
9. `studio/src/schemaTypes/documents/lesson.ts` – `lesson` document.
10. `studio/src/schemaTypes/documents/course.ts` – `course` document with embedded `module` object.
11. `studio/src/schemaTypes/objects/module.ts` – embedded `module` object.
12. `studio/src/schemaTypes/objects/learningOutcome.ts` – reusable object for course outcomes.
13. `studio/src/schemaTypes/objects/keyPoint.ts` – reusable object for lesson key points.
14. `studio/src/schemaTypes/objects/resource.ts` – reusable object for lesson resources.
15. `studio/src/structure.ts` – custom Studio structure grouping courses, lessons, instructors, and categories.

### Web workspace (root)
16. `package.json` – remove `sanity`, `@sanity/vision`, `styled-components`; keep `next-sanity`, `@sanity/image-url`; add `@portabletext/react` and `groq`.
17. `sanity/env.ts` – add `SANITY_API_READ_TOKEN` assertion.
18. `sanity/lib/server.ts` – new server-only read client with token and `useCdn: true`.
19. `sanity/lib/client.ts` – adjust to be a public read client without token (or proxy through `server.ts` if possible); ensure no private token leak.
20. `sanity/lib/live.ts` – remove or reconfigure so no browser token is exposed.
21. `sanity/lib/fetch.ts` – `sanityFetch` helper wrapping the server client with Next.js caching tags.
22. `sanity/lib/queries.ts` – typed GROQ queries for catalog, course, lesson, instructor, and category pages.
23. `sanity/lib/types.ts` – re-export generated types for components.
24. `sanity-typegen.json` – TypeGen configuration pointing at the new Studio source files and query files.
25. `app/studio/[[...tool]]/page.tsx` – delete.
26. `sanity.config.ts` – delete.
27. `sanity.cli.ts` – delete.
28. `sanity/schemaTypes/` – delete.
29. `sanity/structure.ts` – delete.

### Environment variables expected
- Web: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`.
- Studio: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`.

## Schema requirements

### `category` document
- `title` (string, required)
- `slug` (slug, required, unique)
- `description` (text)

### `instructor` document
- `name` (string, required)
- `slug` (slug, required, unique)
- `photo` (image with hotspot)
- `expertise` (string)
- `bio` (Portable Text)

### `lesson` document
- `title` (string, required)
- `slug` (slug, required, unique)
- `videoUrl` (url, required)
- `poster` (image with hotspot)
- `duration` (number, seconds, required)
- `freePreview` (boolean, default false)
- `studentCount` (number)
- `notes` (Portable Text)
- `keyPoints` (array of `keyPoint` objects)
- `proTip` (text)
- `resources` (array of `resource` objects)

### `course` document
- `title` (string, required)
- `slug` (slug, required, unique)
- `summary` (text)
- `coverImage` (image with hotspot)
- `level` (string with list: beginner, intermediate, advanced, all-levels)
- `price` (number)
- `popular` (boolean, default false)
- `studentCount` (number)
- `learningOutcomes` (array of `learningOutcome` objects, each with `icon`, `title`, `description`)
- `instructor` (reference to `instructor`, required)
- `category` (reference to `category`, required)
- `modules` (array of `module` objects, required)

### `module` embedded object
- `title` (string, required)
- `summary` (text)
- `lessons` (array of references to `lesson`)

### `learningOutcome` object
- `icon` (string, e.g. an icon name from the design system)
- `title` (string)
- `description` (text)

### `keyPoint` object
- `title` (string)
- `description` (text)

### `resource` object
- `type` (string with list: article, video, file, link)
- `title` (string)
- `description` (text)
- `url` (url)

### Validation rules
- All slugs required and lowercase hyphenated; async uniqueness check is optional but nice-to-have.
- `module.lessons` must reference `lesson` documents.
- `course.modules` must contain at least one module.
- `lesson.duration` must be a positive number.

## Data layer requirements

### Server read client
- `sanity/lib/server.ts`:
  - Use `createClient` from `next-sanity`.
  - Include `projectId`, `dataset`, `apiVersion`, `useCdn: true`, and `token: process.env.SANITY_API_READ_TOKEN`.
  - Export `serverClient`.

### Fetch helper
- `sanity/lib/fetch.ts`:
  - Export `sanityFetch({ query, params, tags, revalidate })` that uses `serverClient.fetch` with Next.js cache options.
  - Default revalidate 60s; when `tags` are provided, set `revalidate` to `false`.

### Queries in `sanity/lib/queries.ts`
Use `defineQuery` from `groq`. Include:
1. `COURSES_QUERY` – all courses with slug, title, summary, level, price, popular, studentCount, coverImage, instructor (name, slug, photo), category (title, slug), module count, lesson count.
2. `COURSE_BY_SLUG_QUERY` – single course by slug, fully expanded with modules, lessons (title, slug, duration, freePreview, poster), instructor, category, learning outcomes.
3. `COURSE_SLUGS_QUERY` – all course slugs for `generateStaticParams`.
4. `LESSON_BY_SLUG_QUERY` – single lesson by slug with notes, key points, resources, pro tip, video URL, poster, duration, plus its parent course and module position via reverse lookup.
5. `LESSON_SLUGS_QUERY` – all lesson slugs for `generateStaticParams`.
6. `INSTRUCTORS_QUERY` – all instructors with slug, name, photo, expertise.
7. `INSTRUCTOR_BY_SLUG_QUERY` – instructor by slug with courses they teach.
8. `CATEGORIES_QUERY` – all categories.
9. `CATEGORY_BY_SLUG_QUERY` – category by slug with courses.

Derive module/lesson labels in GROQ projections (e.g. `"moduleIndex": count(...)` and `"lessonIndex": count(...)`).

## Security considerations
- `SANITY_API_READ_TOKEN` is server-only; never prefix it with `NEXT_PUBLIC_`.
- The browser must never receive the read token or call Sanity directly with credentials.
- Remove the embedded Studio route so the Studio is not exposed through the Next.js app.
- Do not commit `.env.local`; `.gitignore` already ignores it.

## Acceptance criteria
- `studio/` workspace exists with its own `package.json` and runs `npm install && npm run dev` on `localhost:3333`.
- `npm run dev` in root still runs the Next.js app on `localhost:3000`.
- Sanity schemas compile and the Studio shows the five document types in the custom structure.
- `npm run lint` passes.
- `npx tsc --noEmit` passes in both workspaces.
- `npm run build` in root succeeds.
- Generated Sanity types file exists and the query result types are used in `sanity/lib/queries.ts`.
- `serverClient` is only imported in server contexts (Server Components and API routes).

## Checks to run
```bash
# Root web workspace
cd "C:\Users\Esteban\Desktop\code projects\vertex"
npm install
npm run lint
npx tsc --noEmit
npm run build

# Studio workspace
cd "C:\Users\Esteban\Desktop\code projects\vertex\studio"
npm install
npm run build  # or npx tsc --noEmit if build is too heavy
```

## Manual test steps
1. In `studio/`, copy `.env.local` from root and adjust env var names to `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.
2. Run `npm run dev` in `studio/` and open `http://localhost:3333`.
3. Create a category, an instructor, a few lessons, and a course with modules and lessons.
4. In root, ensure `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `SANITY_API_READ_TOKEN` are set.
5. Temporarily render fetched courses in `app/page.tsx` to confirm data returns (then revert).
6. Verify that the embedded Studio route (`/studio`) no longer exists or redirects to 404.
7. Confirm no console warnings about missing token or invalid GROQ syntax.
