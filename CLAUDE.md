# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page, high-conversion landing page (in Hungarian) for the Life Protocol live event.
React 18 + Vite 5 + Tailwind CSS v4. No router, no backend — one scrolling page composed of
section components in `src/App.jsx` (Hero, Problem, Audience, Topics, Speaker, EventDetails,
Urgency, Pricing, Footer). Source copy/structure brief is `docs/initial_prompt.md`. Site copy is
Hungarian; event facts (date, time, venue, prices, deadline) come from `.env` via `src/lib/config.js`.

## Commands

```bash
npm install
npm run dev        # dev server, http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

There is no test suite, linter, or formatter configured. "Verifying" a change means running a build.

### Commit conventions

- Write commit messages in **Hungarian**.
- Use **Conventional Commit prefixes** (`feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`),
  e.g. `feat: előadói szakasz hozzáadása`.
- **Do NOT add a `Co-Authored-By` trailer** (this overrides the default).

### Environment gotchas (Windows + Git Bash)

- **Do not run `npm install` from the agent tools** — installs here are unreliable and leave
  partial `node_modules`. Ask the user to run installs themselves. See memory `user-runs-installs`.
- **`npm run dev/build` fails from Git Bash** with `'vite' is not recognized` (PATH/shim issue).
  Run vite directly instead: `node node_modules/vite/bin/vite.js build`.

## Design system architecture (the important part)

The visual system is "Clinical Precision", fully specified in `docs/DESIGN.md` (the source of
truth — honor it over generic suggestions). It is implemented as **semantic design tokens** in
`src/index.css`, NOT as hard-coded Tailwind colors:

- Raw values live as CSS variables on `:root` (light) and `.dark` (dark): `--surface`,
  `--on-surface`, `--primary`, `--accent`, `--section-alt`, etc.
- `@theme inline { --color-surface: var(--surface); ... }` maps them to Tailwind utilities, so
  `bg-surface`, `text-on-surface`, `bg-accent`, `border-outline` automatically respond to theme.
- **To recolor anything, edit the variable pair in `:root`/`.dark`** — never reach for raw hex in
  components. Components should only use the semantic utilities.

Exceptions that intentionally use fixed hex (so they look identical in both themes): the
**Hero** background overlays and the **Speaker** section, which are deliberate always-dark
"feature" bands. Don't "fix" these to use tokens.

### Dark/light mode

Class-based: `.dark` on `<html>` toggled by `useTheme` (`src/hooks/useTheme.js`), persisted to
`localStorage` (`lp-theme`), defaulting to OS preference. Tailwind v4's default `dark:` is
overridden to class-based via `@custom-variant dark (&:where(.dark, .dark *))` in `index.css`.
An inline script in `index.html` sets the class before paint to avoid a flash.

### Section background rhythm

Sections alternate base `bg-surface` vs `bg-section-alt` bands (with `border-y border-outline`)
for visual separation in both modes. The Speaker section breaks the rhythm as a dark spotlight.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`: it runs `npm ci && npm run build`
and uploads `dist/` to cPanel shared hosting over **FTPS** (root domain, `base = '/'`). Required
GitHub secrets/variables are documented in `README.md`. `public/.htaccess` (HTTPS redirect,
compression, cache, security headers) ships to the web root via Vite. Note: pushing to `master`
deploys to production — branch for non-trivial work.

## Animations

`useScrollReveal` (`src/hooks/useScrollReveal.js`) is an IntersectionObserver that adds
`.is-visible` to any element with class `reveal`. Reveal is **animation-based** (`.reveal.is-visible`
runs the `rise` keyframe), deliberately NOT transition-based: this lets per-item `animationDelay`
stagger entrances without interfering with hover transitions or a card's own static transform
(e.g. the highlighted VIP pricing card's `lg:-translate-y-3`). When adding reveal to an element
that already has a meaningful static transform, wrap it in a `reveal` container instead of putting
`reveal` on the element itself (see `Pricing.jsx`). All motion respects `prefers-reduced-motion`.

## Stacking-context gotcha

The Hero uses a full-bleed `<picture>` behind text via negative z-index. The Hero `<section>`
must keep `isolate` — without it, the negative-z image escapes to the root stacking context and
the App root's opaque `bg-surface` paints over it (the image silently disappears).

## Hero image pipeline

The hero source `public/hero_bioscience.png` (~6.7 MB) is git-ignored and NOT served. The page
loads the optimized `hero_bioscience.webp` (WebP) with a `.jpg` fallback via `<picture>`.
Regenerate with `node scripts/optimize-images.mjs` (requires `sharp`, dev-only). Keep the source
PNG locally if you may re-optimize.
