// Shared, env-driven site config (with sensible fallbacks).

export const EVENT_LOCATION = import.meta.env.VITE_EVENT_LOCATION || 'Budapest'
export const EVENT_VENUE = import.meta.env.VITE_EVENT_VENUE || 'Lurdy Conference and Event Center'

export const EVENT_MAP_URL =
  import.meta.env.VITE_EVENT_MAP_URL ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${EVENT_VENUE} ${EVENT_LOCATION}`,
  )}`

// Embeddable map (no API key needed) for the inline iframe — always derived
// from venue + location so it works even with a custom share link in EVENT_MAP_URL.
export const EVENT_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${EVENT_VENUE} ${EVENT_LOCATION}`,
)}&output=embed`

export const EVENT_DATE = new Date(
  import.meta.env.VITE_EVENT_DATE || '2026-10-15T09:00:00+02:00',
)
export const EARLY_BIRD_DEADLINE = new Date(
  import.meta.env.VITE_EARLY_BIRD_DEADLINE || '2026-09-15T23:59:59+02:00',
)

// Hungarian labels derived from the single-source dates above.
// Formatted in the event's timezone so the day never shifts for distant visitors.
const huFmt = (date, opts) =>
  new Intl.DateTimeFormat('hu-HU', { timeZone: 'Europe/Budapest', ...opts }).format(date)

const DMY = { year: 'numeric', month: 'long', day: 'numeric' }

export const EVENT_DATE_LABEL = huFmt(EVENT_DATE, DMY) // 2026. október 15.
export const EVENT_DATE_SHORT = huFmt(EVENT_DATE, { year: 'numeric', month: 'short', day: 'numeric' }) // 2026. okt. 15.
export const EVENT_TIME = huFmt(EVENT_DATE, { hour: 'numeric', minute: '2-digit', hour12: false }) // 9:00
export const EARLY_BIRD_DEADLINE_LABEL = huFmt(EARLY_BIRD_DEADLINE, DMY) // 2026. szeptember 15.

// Keep <title> and meta description in sync with the env-driven location + date.
export function applyEventMeta() {
  if (typeof document === 'undefined') return
  document.title = `Life Protocol — Élő Esemény · ${EVENT_LOCATION}, ${EVENT_DATE_LABEL}`
  const desc = document.querySelector('meta[name="description"]')
  if (desc) {
    desc.setAttribute(
      'content',
      `Life Protocol élő esemény — ${EVENT_VENUE}, ${EVENT_LOCATION}, ${EVENT_DATE_LABEL}. ` +
        `Funkcionális és biofizikai protokollok a sejtszintű regenerációért — Victor C. Fields ` +
        `és az LP szakértői csapata. Jegyek: Early Bird, Normál, VIP.`,
    )
  }
}
