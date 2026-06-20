import { ArrowRight, MapPin, Clock, Shield } from './Icons.jsx'

const STATS = [
  { value: '3', label: 'Fő protokoll-blokk' },
  { value: '1 nap', label: 'Élő, gyakorlati esemény' },
  { value: 'Limitált', label: 'Férőhely a teremben' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-[#04181f] px-4 pb-16 pt-28 text-white sm:px-6 sm:pt-32 lg:min-h-[88vh] lg:pb-24"
    >
      {/* Full-bleed hero image (flipped so the cell sits on the right) */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <picture className="block h-full w-full">
          <source srcSet="/hero_bioscience.webp" type="image/webp" />
          <img
            src="/hero_bioscience.jpg"
            alt=""
            className="h-full w-full -scale-x-100 object-cover object-center"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Legibility overlays: solid base + horizontal fade for text side + bottom fade for mobile */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#04181f]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04181f] via-[#04181f]/85 to-transparent lg:via-[#04181f]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04181f] via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#04181f]/80 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <div className="animate-rise flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-[#80d1f5]" />
              Október közepe
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-[#80d1f5]" />
              Budapest · Élő esemény
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#fe933a]/50 bg-[#fe933a]/15 px-3.5 py-1.5 text-xs font-bold text-[#ffb784] backdrop-blur-sm">
              Early Bird élő
            </span>
          </div>

          <h1 className="animate-rise mt-7 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl" style={{ animationDelay: '60ms' }}>
            A modern világ lassan mérgez.
            <span className="mt-2 block bg-gradient-to-r from-[#80d1f5] to-[#fe933a] bg-clip-text text-transparent">
              Vedd vissza a sejtszintű egészséged.
            </span>
          </h1>

          <p className="animate-rise mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl" style={{ animationDelay: '120ms' }}>
            Egy exkluzív, gyakorlatias budapesti nap, ahol{' '}
            <span className="font-semibold text-white">Victor C. Fields</span> és a Life Protocol
            szakértői csapata mutatja be a legújabb kutatásokat és a kézzelfogható protokollokat — a
            nehézfémek és környezeti toxinok kivezetésétől a sejtszintű regenerációig.
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '180ms' }}>
            <a
              href="#jegyek"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#fe933a] px-7 py-4 text-base font-bold text-[#2a1400] shadow-lift transition-colors duration-200 hover:bg-[#ffb784] sm:w-auto cursor-pointer"
            >
              Lefoglalom a helyem
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#tematika"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/50 hover:bg-white/10 sm:w-auto cursor-pointer"
            >
              A program megtekintése
            </a>
          </div>

          <div className="animate-rise mt-6 flex items-start gap-2 text-sm text-white/75" style={{ animationDelay: '220ms' }}>
            <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[#8fd99e]" />
            Kutatásokon alapuló, funkcionális és biofizikai megközelítés — marketing-sallang nélkül.
          </div>

          <dl className="animate-rise mt-12 grid max-w-xl grid-cols-3 gap-2.5 sm:gap-5" style={{ animationDelay: '260ms' }}>
            {STATS.map((s) => (
              <div key={s.label} className="min-w-0 rounded-xl border border-white/12 bg-white/5 p-3 text-center backdrop-blur-sm sm:p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="break-words text-base font-extrabold leading-tight tracking-tight text-[#80d1f5] min-[400px]:text-xl sm:text-3xl">{s.value}</dd>
                <p className="mt-1 text-[11px] font-medium leading-tight text-white/70 min-[400px]:text-xs sm:text-sm">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
