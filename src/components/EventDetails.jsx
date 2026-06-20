import { Section, SectionHeading } from './Section.jsx'
import { Calendar, Clock, MapPin, ArrowRight } from './Icons.jsx'
import {
  EVENT_DATE_LABEL,
  EVENT_TIME,
  EVENT_VENUE,
  EVENT_LOCATION,
  EVENT_MAP_URL,
  EVENT_MAP_EMBED_URL,
} from '../lib/config.js'

const ITEMS = [
  { icon: Calendar, label: 'Dátum', value: EVENT_DATE_LABEL },
  { icon: Clock, label: 'Kezdés', value: `${EVENT_TIME}-tól · egész napos program` },
  { icon: MapPin, label: 'Helyszín', value: `${EVENT_VENUE}, ${EVENT_LOCATION}` },
]

export default function EventDetails() {
  return (
    <Section
      id="helyszin"
      className="border-y border-outline bg-section-alt py-14 transition-colors duration-300 sm:py-20 lg:py-28"
    >
      <SectionHeading
        eyebrow="Helyszín és időpont"
        title="Mikor és hol találkozunk?"
        intro="Egy könnyen megközelíthető helyszínen várunk — itt minden részlet, hogy be tudd tervezni a napod."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {/* Details */}
        <div className="reveal flex flex-col gap-4">
          {ITEMS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-xl border border-outline bg-surface-container p-5 shadow-soft"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-surface-container-high text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-on-surface-variant">
                  {label}
                </p>
                <p className="mt-1 text-lg font-bold leading-snug text-on-surface">{value}</p>
              </div>
            </div>
          ))}

          <a
            href={EVENT_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-bold text-on-primary transition-colors duration-200 hover:bg-primary-bright cursor-pointer"
          >
            Megnyitás Google Térképen
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Map */}
        <div className="reveal h-[300px] overflow-hidden rounded-xl border border-outline shadow-soft sm:h-[360px] lg:h-auto">
          <iframe
            title={`${EVENT_VENUE} térkép`}
            src={EVENT_MAP_EMBED_URL}
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  )
}
