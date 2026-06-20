import { Section, SectionHeading } from './Section.jsx'
import { Check } from './Icons.jsx'

const BURDENS = [
  'Nehézfém-terheltség (amalgám, higany, alumínium)',
  'Rejtett, krónikus gyulladások',
  'Rossz fénykörnyezet és mesterséges sugárzás',
  'Lappangó kórokozók (Lyme, Candida, EBV)',
  'Mikrotápanyag-hiányok (jód, réz, magnézium)',
]

const SOLUTION = [
  'Pontos, sorrendbe rakott "Life Protocol" lépések',
  'Azonnal alkalmazható, otthoni eszközökkel',
  'A gyökérok kezelése, nem a tünet elnyomása',
  'Mérhető, követhető regenerációs útvonal',
]

export default function Problem() {
  return (
    <Section id="problema" className="border-y border-outline bg-section-alt py-14 transition-colors duration-300 sm:py-20 lg:py-28">
      <SectionHeading
        eyebrow="Miért kell itt lenned?"
        title="Hiába a tiszta étkezés, ha a terheltség a sejtjeidben van."
        intro="Tisztán eszel, sportolsz, mégis ott a fáradtság, a köd, a megmagyarázhatatlan tünetek. A modern nyugati élet láthatatlan toxikus rétege — nehézfémek, rejtett gyulladások, környezeti terheltség — addig dolgozik ellened, amíg fel nem ismered és ki nem vezeted."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {/* The problem */}
        <div className="reveal relative overflow-hidden rounded-xl border border-outline bg-surface-container p-7 shadow-soft sm:p-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-container px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-accent-container">
            A rejtett teher
          </span>
          <h3 className="mt-5 text-xl font-bold text-on-surface sm:text-2xl">
            Amit a hagyományos megközelítés nem mér
          </h3>
          <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
            A laborlelet „rendben", de a tested mást üzen. Ezek a háttérben halmozódó terhek tartanak
            vissza a valódi energiától:
          </p>
          <ul className="mt-6 space-y-3">
            {BURDENS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-container text-on-accent-container" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                <span className="text-[15px] leading-relaxed text-on-surface">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The solution */}
        <div className="reveal relative overflow-hidden rounded-xl border border-primary-bright/30 bg-primary p-7 text-on-primary shadow-lift sm:p-9" style={{ animationDelay: '110ms' }}>
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-primary">
            A gyökeres megoldás
          </span>
          <h3 className="mt-5 text-xl font-bold sm:text-2xl">Nem elmélet. Protokoll.</h3>
          <p className="mt-3 text-base leading-relaxed text-on-primary/85">
            Ezen a napon nem újabb tudományos cikkeket kapsz, hanem egy konkrét, lépésről lépésre
            követhető rendszert, amit másnap reggel el tudsz kezdeni.
          </p>
          <ul className="mt-6 space-y-3">
            {SOLUTION.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15" aria-hidden="true">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] font-medium leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
