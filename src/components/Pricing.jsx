import { Section, SectionHeading } from './Section.jsx'
import { Check, ArrowRight, Ticket, Crown } from './Icons.jsx'

const TIERS = [
  {
    id: 'early-bird',
    name: 'Early Bird',
    icon: Ticket,
    badge: 'Legjobb ár',
    badgeTone: 'accent',
    price: '34 900',
    suffix: 'Ft',
    note: 'Korlátozott darabszám — amíg a keret tart',
    forWho: 'A leggyorsabbaknak, akik most döntenek.',
    cta: 'Lecsapok az Early Birdre',
    highlight: false,
    features: [
      'Teljes élő részvétel mindhárom előadás-blokkon',
      'Belépés a kiállítói és bemutató térbe',
      'A teljes napos program minden gyakorlati demója',
      'Közösségi élő esemény Budapesten',
    ],
  },
  {
    id: 'vip',
    name: 'VIP',
    icon: Crown,
    badge: 'Legnépszerűbb',
    badgeTone: 'primary',
    price: '89 900',
    suffix: 'Ft',
    note: 'Szigorúan limitált VIP férőhely',
    forWho: 'Akik a legmélyebb, személyes élményre vágynak.',
    cta: 'Kérem a VIP élményt',
    highlight: true,
    features: [
      'Minden, ami a Normál jegyben — és jóval több',
      'Első soros, prémium helyek a teremben',
      'Zártkörű networking az LP szakértői csapattal',
      'Közös ebéd Victor C. Fields-szel és a csapattal',
      'Ajándék online LP képzés vagy konzultációs kedvezmény',
    ],
  },
  {
    id: 'normal',
    name: 'Normál',
    icon: Ticket,
    badge: null,
    badgeTone: 'accent',
    price: '49 900',
    suffix: 'Ft',
    note: 'Teljes árú belépő az élő eseményre',
    forWho: 'Akik a teljes élő napot és az anyagokat szeretnék.',
    cta: 'Megveszem a Normál jegyet',
    highlight: false,
    features: [
      'Teljes élő részvétel mindhárom előadás-blokkon',
      'Belépés a kiállítói és bemutató térbe',
      'Strukturált jegyzetcsomag a naphoz',
      'Az elméleti és gyakorlati anyagok digitális összefoglalója',
    ],
  },
]

function Badge({ tone, children }) {
  const tones = {
    accent: 'bg-accent text-on-accent',
    primary: 'bg-on-primary text-primary',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] shadow-soft ${tones[tone]}`}>
      {children}
    </span>
  )
}

function TierCard({ tier }) {
  const { icon: Icon, highlight } = tier

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 transition-transform duration-200 sm:p-8 ${
        highlight
          ? 'border-primary-bright bg-primary text-on-primary shadow-lift lg:-translate-y-3 lg:scale-[1.03]'
          : 'border-outline bg-surface-container text-on-surface shadow-soft hover:-translate-y-1'
      }`}
    >
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge tone={tier.badgeTone}>{tier.badge}</Badge>
        </div>
      )}

      <div className="flex items-center gap-3">
        <span
          className={`grid h-11 w-11 place-items-center rounded-lg ${
            highlight ? 'bg-white/15 text-on-primary' : 'bg-surface-container-high text-primary'
          }`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-extrabold tracking-tight">{tier.name} jegy</h3>
      </div>

      <p className={`mt-4 text-sm font-medium ${highlight ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
        {tier.forWho}
      </p>

      <div className="mt-5 flex items-end gap-1.5">
        <span className="text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">{tier.price}</span>
        <span className={`mb-1.5 text-lg font-bold ${highlight ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
          {tier.suffix}
        </span>
      </div>
      <p className={`mt-1 text-xs font-semibold ${highlight ? 'text-on-primary/75' : 'text-on-surface-variant'}`}>
        {tier.note}
      </p>

      <div className={`my-6 h-px w-full ${highlight ? 'bg-white/15' : 'bg-outline'}`} />

      <ul className="flex flex-1 flex-col gap-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                highlight ? 'bg-white/15 text-on-primary' : 'bg-primary text-on-primary'
              }`}
              aria-hidden="true"
            >
              <Check className="h-3 w-3" />
            </span>
            <span className={`text-[15px] leading-snug ${highlight ? 'text-on-primary/90' : 'text-on-surface'}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#jegyek"
        className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold transition-colors duration-200 cursor-pointer ${
          highlight
            ? 'bg-accent text-on-accent hover:bg-accent-bright'
            : 'bg-primary text-on-primary hover:bg-primary-bright'
        }`}
      >
        {tier.cta}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  )
}

export default function Pricing() {
  return (
    <Section id="jegyek" className="border-y border-outline bg-section-alt py-14 transition-colors duration-300 sm:py-20 lg:py-28">
      <SectionHeading
        eyebrow="Jegyek és árazás"
        title="Válaszd ki, milyen mélyen merülnél el."
        intro="Minden jegy ugyanazt az élő, gyakorlati napot nyitja meg — a különbség a közelségben, a hozzáférésben és az extra értékben van."
      />

      {/* Mobile: vertical scroll stack · Desktop: 3-up comparison grid */}
      <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-center lg:gap-7">
        {TIERS.map((tier, i) => (
          <div key={tier.id} className="reveal" style={{ animationDelay: `${i * 90}ms` }}>
            <TierCard tier={tier} />
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-on-surface-variant">
        Minden ár tartalmazza az áfát. A jegyek átruházhatók, de a kedvezményes Early Bird keret nem
        bővíthető.
      </p>
    </Section>
  )
}
