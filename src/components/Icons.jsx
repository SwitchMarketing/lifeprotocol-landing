// Lightweight inline SVG icon set (Lucide-style, 24x24 viewBox).
// stroke="currentColor" so icons inherit text color in both themes.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const Sun = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)

export const Moon = (p) => (
  <svg {...base} {...p}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export const Shield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export const Atom = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="1.6" />
    <path d="M20.2 20.2c1.6-1.6-.6-7.1-5-11.4C10.9 4.4 5.4 2.2 3.8 3.8 2.2 5.4 4.4 10.9 8.8 15.2c4.3 4.3 9.8 6.6 11.4 5z" />
    <path d="M20.2 3.8c1.6 1.6-.6 7.1-5 11.4-4.3 4.3-9.8 6.6-11.4 5-1.6-1.6.6-7.1 5-11.4C13.1 4.4 18.6 2.2 20.2 3.8z" />
  </svg>
)

export const Waves = (p) => (
  <svg {...base} {...p}>
    <path d="M2 6c.6-.5 1.2-1 2.5-1 2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1" />
    <path d="M2 12c.6-.5 1.2-1 2.5-1 2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1" />
    <path d="M2 18c.6-.5 1.2-1 2.5-1 2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1" />
  </svg>
)

export const Check = (p) => (
  <svg {...base} {...p}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Spark = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
  </svg>
)

export const Battery = (p) => (
  <svg {...base} {...p}>
    <path d="M13 4l-7 9h5l-1 7 7-9h-5l1-7z" />
  </svg>
)

export const Compass = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
  </svg>
)

export const Heart = (p) => (
  <svg {...base} {...p}>
    <path d="M20.8 6.6a5 5 0 0 0-7.1 0L12 8.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-7.3a5 5 0 0 0 0-7.1z" />
  </svg>
)

export const Clock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const MapPin = (p) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const Crown = (p) => (
  <svg {...base} {...p}>
    <path d="M3 7l4 4 5-6 5 6 4-4-2 12H5L3 7z" />
    <path d="M5 19h14" />
  </svg>
)

export const Ticket = (p) => (
  <svg {...base} {...p}>
    <path d="M3 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2z" />
    <path d="M14 5v14" strokeDasharray="2 3" />
  </svg>
)

export const Users = (p) => (
  <svg {...base} {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
  </svg>
)

export const Flame = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C8 9 8 11 9.5 11 8 8 12 6 12 2z" />
    <path d="M12 22a6 6 0 0 0 6-6c0-2-1-4-2.5-5.5C16 13 14 13 14 15a2 2 0 0 1-4 0c0-1 .4-1.7.8-2.2C8.5 14 6 16 6 18a6 6 0 0 0 6 4z" />
  </svg>
)
