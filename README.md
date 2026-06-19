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

## Deploy (cPanel shared hosting, GitHub Actions)

A `master` ágra pusholva a [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
lebuildeli az oldalt és FTPS-en feltölti a `dist/` tartalmát a tárhelyre. Manuálisan is
indítható az Actions fülről.

A repo **Settings → Secrets and variables → Actions** alatt be kell állítani:

| Típus | Név | Érték |
|-------|-----|-------|
| Secret | `FTP_SERVER` | az FTP host (pl. `ftp.lifeprotocol.eu`) |
| Secret | `FTP_USERNAME` | cPanel FTP felhasználó |
| Secret | `FTP_PASSWORD` | cPanel FTP jelszó |
| Variable | `FTP_SERVER_DIR` | _(opcionális)_ célmappa, alapért. `public_html/`. Ha az FTP-user már a webgyökérbe lép, állítsd `./`-re |
| Variable | `FTP_PORT` | _(opcionális)_ alapért. `21` |

Az `.htaccess` (HTTPS-kényszerítés, tömörítés, cache, security headerek) a `public/`-ból
automatikusan a webgyökérbe kerül.
