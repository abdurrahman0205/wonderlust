# wonderlust

A small Next.js (App Router) app in `src/app`. Mostly a fresh `create-next-app` scaffold — keep additions consistent with that.

## Commands

- Dev server: `npm run dev` (Turbopack; re-adds the `nextjs-agent-rules` block below)
- Lint: `npm run lint` → `biome check` (no ESLint/Prettier — Biome is the only linter/formatter; import sorting is in Biome assist, not a separate tool)
- Format: `npm run format` → `biome format --write` (use `npx biome check --write` to also apply lint fixes)
- Typecheck: `npx tsc --noEmit` (there is no typecheck script; verify against `biome.json`/`tsconfig.json` if behavior differs)
- No test framework, CI workflows, or env files exist yet.

## Toolchain quirks

- **Tailwind v4, CSS-first config**: there is no `tailwind.config.*`. Theme tokens are defined in `src/app/globals.css` via `@theme`. Tailwind is wired through a Turbopack loader in `next.config.ts`, not standard PostCSS.
- **React Compiler is enabled** (`reactCompiler: true`): don't add manual `useMemo`/`useCallback`/`React.memo` optimizations; the compiler handles them, and `babel-plugin-react-compiler` is a direct dependency.
- **Path alias**: `@/*` maps to `./src/*`.
- `README.md` is the stale create-next-app template (e.g. it says `app/page.tsx`, but the real app root is `src/app/`). Trust config over README.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
