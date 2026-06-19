import { Section, SectionHeading } from './Section.jsx'
import { Heart, Battery, Compass, Spark, Shield } from './Icons.jsx'

const PROFILES = [
  {
    icon: Heart,
    title: 'Autoimmun tünetekkel élsz',
    text: 'Hashimoto, PCOS, Lyme vagy más krónikus diagnózis — és a gyökérokot keresed, nem újabb tüneti kezelést.',
  },
  {
    icon: Battery,
    title: 'Krónikus fáradtság húz le',
    text: 'Reggel sem vagy kipihent, délután ledönt a fáradtság, és „agyköd" telepszik rád ok nélkül.',
  },
  {
    icon: Compass,
    title: 'Elakadtál az orvoslás útvesztőjében',
    text: 'Vizsgálatok sora, „minden rendben" leletek, mégis tudod, hogy valami nincs egyensúlyban.',
  },
  {
    icon: Spark,
    title: 'Tudatos biohacker vagy',
    text: 'Optimalizálsz, méred, kísérletezel — és a következő szintű, biofizikai protokollokra vagy kíváncsi.',
  },
  {
    icon: Shield,
    title: 'Megelőznél, mielőtt baj lesz',
    text: 'Tünetmentes vagy, de tisztában vagy a környezeti terheltséggel, és proaktívan védenéd a sejtjeidet.',
  },
]

export default function Audience() {
  return (
    <Section id="kinek" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="Kiknek kötelező a részvétel?"
        title="Ha magadra ismersz, ez a nap neked szól."
        intro="Nem mindenkinek építettük ezt a programot. Azoknak, akik komolyan veszik az egészségüket, és kézzelfogható lépésekért jönnek."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROFILES.map(({ icon: Icon, title, text }, i) => (
          <article
            key={title}
            style={{ animationDelay: `${i * 70}ms` }}
            className={`reveal group rounded-xl border border-outline bg-surface-container p-6 shadow-soft transition duration-200 hover:border-primary-bright hover:shadow-lift ${
              i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-surface-container-high text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-on-primary">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-on-surface">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-on-surface-variant">{text}</p>
          </article>
        ))}

        {/* CTA tile fills the grid */}
        <article className="flex flex-col justify-between rounded-xl border border-primary-bright/30 bg-gradient-to-br from-primary to-primary-bright p-6 text-on-primary shadow-lift sm:col-span-2 lg:col-span-1">
          <div>
            <h3 className="text-lg font-bold">Magadra ismertél?</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-on-primary/85">
              Akkor ne csak olvass róla — gyere el, és vidd haza a saját protokollod.
            </p>
          </div>
          <a
            href="#jegyek"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-on-accent transition-colors duration-200 hover:bg-accent-bright cursor-pointer"
          >
            Megnézem a jegyeket
          </a>
        </article>
      </div>
    </Section>
  )
}
