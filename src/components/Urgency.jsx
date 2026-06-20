import { useEffect, useState } from 'react'
import { Section } from './Section.jsx'
import { Flame, Users, Clock, ArrowRight } from './Icons.jsx'
import { EVENT_DATE, EARLY_BIRD_DEADLINE_LABEL } from '../lib/config.js'

function getRemaining() {
  const diff = EVENT_DATE.getTime() - Date.now()
  const clamped = Math.max(diff, 0)
  return {
    days: Math.floor(clamped / 86400000),
    hours: Math.floor((clamped / 3600000) % 24),
    minutes: Math.floor((clamped / 60000) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  }
}

function CountUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="grid min-w-[2.5rem] place-items-center rounded-lg bg-surface-container px-2 py-2 text-xl font-extrabold tabular-nums text-on-surface shadow-soft min-[400px]:min-w-[3rem] min-[400px]:px-2.5 min-[400px]:text-2xl sm:min-w-[4.5rem] sm:px-3 sm:py-2.5 sm:text-3xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
        {label}
      </span>
    </div>
  )
}

export default function Urgency() {
  const [t, setT] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <Section className="py-10 sm:py-16">
      <div className="reveal relative overflow-hidden rounded-2xl border border-outline bg-surface-mist p-5 shadow-soft min-[400px]:p-6 sm:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,var(--hero-glow-b),transparent_65%)]" />
          <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,var(--hero-glow-a),transparent_65%)]" />
        </div>

        <div className="flex flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-container px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-on-accent-container">
            <Flame className="h-4 w-4" />
            Limitált helyek · Early Bird visszaszámlálás
          </span>

          <h2 className="max-w-2xl text-balance text-2xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl">
            A terem befogadóképessége véges — és az Early Bird ár hamarosan lejár.
          </h2>

          <div className="flex items-center gap-1.5 min-[400px]:gap-2 sm:gap-4">
            <CountUnit value={t.days} label="Nap" />
            <span className="pb-5 text-lg font-bold text-outline-strong min-[400px]:text-2xl sm:pb-6">:</span>
            <CountUnit value={t.hours} label="Óra" />
            <span className="pb-5 text-lg font-bold text-outline-strong min-[400px]:text-2xl sm:pb-6">:</span>
            <CountUnit value={t.minutes} label="Perc" />
            <span className="pb-5 text-lg font-bold text-outline-strong min-[400px]:text-2xl sm:pb-6">:</span>
            <CountUnit value={t.seconds} label="Mp" />
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant shadow-soft">
              <Users className="h-4 w-4 text-primary" />
              A férőhelyek nagy része már elkelt
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant shadow-soft">
              <Clock className="h-4 w-4 text-accent" />
              Early Bird határidő: {EARLY_BIRD_DEADLINE_LABEL}
            </span>
          </div>

          <a
            href="#jegyek"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-on-accent shadow-lift transition-colors duration-200 hover:bg-accent-bright cursor-pointer"
          >
            Biztosítom a helyem most
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </Section>
  )
}
