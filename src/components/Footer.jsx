import { MapPin, Clock } from './Icons.jsx'
import {
  EVENT_LOCATION,
  EVENT_VENUE,
  EVENT_MAP_URL,
  EVENT_DATE_LABEL,
  EVENT_TIME,
} from '../lib/config.js'

export default function Footer() {
  return (
    <footer className="border-t border-outline bg-surface-mist px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-on-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </span>
              <span className="text-[15px] font-extrabold tracking-tight text-on-surface">Life Protocol</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
              Funkcionális és biofizikai megközelítés a sejtszintű regenerációért. Független kutatás,
              gyakorlati protokollok — Victor C. Fields és az LP szakértői csapata.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-on-surface-variant">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" /> {EVENT_DATE_LABEL}, {EVENT_TIME}-tól · egész napos program
              </span>
              <a
                href={EVENT_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition-colors duration-200 hover:text-primary cursor-pointer"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {EVENT_VENUE} · {EVENT_LOCATION}
                  <span className="block text-xs text-on-surface-variant/80">Megnyitás térképen</span>
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-14">
            <nav className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-on-surface">Esemény</span>
              {[
                ['#problema', 'A probléma'],
                ['#kinek', 'Kinek szól'],
                ['#tematika', 'Tematika'],
                ['#jegyek', 'Jegyek'],
              ].map(([href, label]) => (
                <a key={href} href={href} className="text-sm text-on-surface-variant transition-colors hover:text-primary cursor-pointer">
                  {label}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-on-surface">Jegytípus</span>
              {['Early Bird', 'Normál', 'VIP'].map((label) => (
                <a key={label} href="#jegyek" className="text-sm text-on-surface-variant transition-colors hover:text-primary cursor-pointer">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-outline pt-6 text-xs text-on-surface-variant sm:flex-row">
          <p>© {new Date().getFullYear()} Life Protocol. Minden jog fenntartva.</p>
          <p className="max-w-md text-center sm:text-right">
            A program edukációs célú, nem helyettesíti az orvosi diagnózist vagy kezelést.
          </p>
        </div>
      </div>
    </footer>
  )
}
