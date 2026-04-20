# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev        # Start dev server on port 8080
bun run build      # Production build
bun run build:dev  # Development build
bun run lint       # ESLint checks
bun run preview    # Preview production build
```

## Tech Stack

- **React 18** + **TypeScript** (strict mode off — `noImplicitAny`, `strictNullChecks` disabled)
- **Vite** with SWC, path alias `@` → `./src`
- **Tailwind CSS** with class-based dark mode; all colors are HSL CSS variables defined in `src/index.css`
- **Radix UI** primitives wrapped as shadcn-style components in `src/components/ui/`
- **React Router v6** — two routes: `/` and `*` (404)
- **TanStack Query** and **React Hook Form + Zod** are installed but not yet used on the main page

## Architecture

### Pages & Routing

`src/App.tsx` wraps the app with `QueryClientProvider`, `TooltipProvider`, and toast components. The main content lives entirely in `src/pages/Index.tsx`, which is a single long-scroll portfolio page.

### Styling System

The dark theme is defined entirely through CSS custom properties in `src/index.css`. The accent green is `#71C55D`. Custom animations (`fadeInUp` with staggered delays) and a 4-column grid overlay (`--grid-line`, `--grid-line-subtle`) are central visual elements. Border radius is 0 by default (`--radius: 0px`). Fonts: Inter (sans), JetBrains Mono (mono).

Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class composition.

### Custom Components

- `GridBackground` — fixed-position vertical grid overlay rendered behind all content
- `Terminal` — terminal-style UI component with bash-like animated output
- `CodeBlock` — custom regex-based Rust syntax highlighter (no external parser)
- `ProjectCard` / `GridCard` — card components with optional external link wrapping
- `StatusBadge` — animated "Available" indicator with pulsing dot
- `TechBadge`, `StatCard`, `NavLink`, `SocialLinks` — small presentational atoms

### UI Components

`src/components/ui/` contains 50+ Radix-based shadcn components. Many are installed but unused on the current page — add imports only when needed rather than assuming they're wired up.
