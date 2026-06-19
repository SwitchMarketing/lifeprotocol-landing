# Life Protocol — Landing Page

Magas konverziójú landing oldal a Life Protocol budapesti, október közepi élő eseményéhez.
Funkcionális / biofizikai megközelítés, sejtszintű regeneráció — Victor C. Fields és az LP
szakértői csapata.

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- Sötét/világos mód kapcsoló (localStorage + OS-preferencia, villanásmentes betöltés)

## Fejlesztés

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build a dist/ mappába
npm run preview    # a build előnézete
```

## Felépítés

- `src/components/` — szekciók: Hero, Problem, Audience, Topics, Speaker, Urgency, Pricing, Footer
- `src/hooks/` — `useTheme` (téma), `useScrollReveal` (görgetés-animációk)
- `src/index.css` — design tokenek (Clinical Precision rendszer, light/dark CSS-változók)
- `docs/DESIGN.md` — a teljes design rendszer leírása

## Hero kép optimalizálása

A hero forrásképből (`public/hero_bioscience.png`, nincs verziókövetve) WebP + JPG készül:

```bash
npm install -D sharp           # egyszer
node scripts/optimize-images.mjs
```

Az oldal a `hero_bioscience.webp`-et tölti (JPG fallbackkel).
