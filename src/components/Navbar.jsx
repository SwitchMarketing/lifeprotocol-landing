import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { ArrowRight } from './Icons.jsx'
import { EVENT_LOCATION } from '../lib/config.js'

const LINKS = [
  { href: '#problema', label: 'A probléma' },
  { href: '#kinek', label: 'Kinek szól' },
  { href: '#tematika', label: 'Tematika' },
  { href: '#eloado', label: 'Az előadó' },
  { href: '#helyszin', label: 'Helyszín' },
  { href: '#jegyek', label: 'Jegyek' },
]

export default function Navbar({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border-outline bg-surface-container/90 shadow-soft backdrop-blur-md'
            : 'border-white/10 bg-transparent backdrop-blur-sm'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 cursor-pointer">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-on-primary">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className={`text-[15px] font-extrabold tracking-tight transition-colors ${scrolled ? 'text-on-surface' : 'text-white'}`}>Life Protocol</span>
            <span className={`text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${scrolled ? 'text-on-surface-variant' : 'text-white/70'}`}>Live · {EVENT_LOCATION}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                scrolled
                  ? 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
                  : 'text-white/85 hover:bg-white/10 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <a
            href="#jegyek"
            className="hidden items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-on-accent shadow-soft transition-colors duration-200 hover:bg-accent-bright sm:inline-flex cursor-pointer"
          >
            Jegyek
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-outline bg-surface-container text-on-surface-variant lg:hidden cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-xl border border-outline bg-surface-container p-2 shadow-lift lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-high cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#jegyek"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-on-accent cursor-pointer"
          >
            Jegyek foglalása
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  )
}
