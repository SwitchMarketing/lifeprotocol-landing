import { Section, SectionHeading } from './Section.jsx'
import { Shield, Battery, Waves } from './Icons.jsx'

const TOPICS = [
  {
    num: '01',
    icon: Shield,
    tag: 'Detox',
    title: 'Nehézfémek és toxinok biztonságos kivezetése',
    text: 'A felhalmozódott higany, alumínium és környezeti toxinok hatékony, mégis kíméletes mobilizálása és kivezetése. Megtanulod, hogyan kerüld el a „rosszul időzített" detox csapdáit, és milyen sorrendben építsd fel a tisztító protokollt.',
    points: ['Amalgám- és higanyterheltség kezelése', 'Kötőanyagok és a helyes időzítés', 'A máj és a nyirokrendszer támogatása'],
  },
  {
    num: '02',
    icon: Battery,
    tag: 'Sejtenergia',
    title: 'Sejtszintű energiatermelés és mikrotápanyagok',
    text: 'A mitokondrium a tested erőműve. Megnézzük, mely mikrotápanyagok — jód, réz, magnézium — kulcsfontosságúak a működéséhez, és hogyan állítsd helyre a valódi, tartós energiát a stimulánsok nélkül.',
    points: ['Jód–réz–magnézium egyensúly', 'Mitokondriális regeneráció', 'Pajzsmirigy- és hormontámogatás'],
  },
  {
    num: '03',
    icon: Waves,
    tag: 'Biofizika',
    title: 'Biofizika és frekvenciaterápia a gyakorlatban',
    text: 'A fény, a frekvencia és a környezeti mező közvetlenül hat a sejtjeidre. Gyakorlati protokollok a megfelelő fénykörnyezet kialakítására, a mesterséges sugárzás csökkentésére és a regeneráció felgyorsítására.',
    points: ['Optimális fénykörnyezet otthon', 'Mesterséges sugárzás csökkentése', 'Frekvenciaterápiás alapok'],
  },
]

export default function Topics() {
  return (
    <Section id="tematika" className="border-y border-outline bg-section-alt py-14 transition-colors duration-300 sm:py-20 lg:py-28">
      <SectionHeading
        eyebrow="A rendezvény főbb tematikái"
        title="Három protokoll-blokk, ami átírja a regenerációd."
        intro="Minden blokk önmagában is értékes — együtt egy teljes, sorrendbe rakott rendszert adnak, amit hazaviszel és alkalmazol."
      />

      <div className="mt-14 space-y-5">
        {TOPICS.map(({ num, icon: Icon, tag, title, text, points }, i) => (
          <article
            key={num}
            style={{ animationDelay: `${i * 90}ms` }}
            className="reveal group grid gap-6 rounded-xl border border-outline bg-surface-container p-6 shadow-soft transition-colors duration-200 hover:border-primary-bright sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10"
          >
            <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary text-on-primary shadow-soft">
                <Icon className="h-7 w-7" />
              </span>
              <span className="text-4xl font-extrabold tracking-tight text-outline lg:text-5xl">{num}</span>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-outline bg-surface-container-high px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                {tag}
              </span>
              <h3 className="mt-3 text-xl font-bold text-on-surface sm:text-2xl">{title}</h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-on-surface-variant sm:text-base">{text}</p>
            </div>

            <ul className="flex flex-col gap-2 lg:w-60">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 rounded-lg bg-surface-container-high px-3 py-2 text-sm font-medium text-on-surface">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
