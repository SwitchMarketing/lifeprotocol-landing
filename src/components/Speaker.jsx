import { Shield, Spark, Check, ArrowRight } from './Icons.jsx'

const CREDENTIALS = [
  'Független kutató — gyógyszeripari érdektől mentesen',
  'Funkcionális táplálkozási tanácsadó',
  'A nehézfém-detox és sejtszintű regeneráció szakértője',
  'Évek kutatása az autoimmun és krónikus problémák gyökérokairól',
]

const FOCUS = ['Hashimoto', 'Lyme', 'PCOS', 'Candida', 'Amalgám-terheltség']

export default function Speaker() {
  return (
    <section
      id="eloado"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 text-white sm:px-6 sm:py-28"
      style={{ background: 'linear-gradient(135deg,#04212c 0%,#063a4c 52%,#04212c 100%)' }}
    >
      {/* Decorative glows + grid (fixed look in both themes) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(128,209,245,0.18),transparent_65%)]" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(254,147,58,0.16),transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Portrait — replace the inner monogram block with an <img> when available */}
        <div className="reveal mx-auto w-full max-w-sm">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_50%_30%,#eaf4f8,#cfe4ec)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
              <img
                src="/victor.png"
                alt="Victor C. Fields, a Life Protocol alapítója"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                width="800"
                height="1000"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5">
                <p className="text-lg font-extrabold leading-tight text-white">Victor C. Fields</p>
                <p className="text-sm text-white/75">Alapító · Life Protocol</p>
              </div>
            </div>

            {/* Floating trust badge */}
            <div className="absolute -right-3 -top-3 flex items-center gap-2 rounded-xl border border-white/15 bg-[#04212c]/90 px-3.5 py-2 shadow-lg backdrop-blur sm:-right-5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#fe933a] text-[#2a1400]">
                <Shield className="h-4 w-4" />
              </span>
              <span className="text-xs font-bold leading-tight">
                Független
                <br />
                kutató
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#80d1f5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fe933a]" aria-hidden="true" />
            Az előadó
          </span>

          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-[2.6rem]">
            Victor C. Fields
          </h2>
          <p className="mt-2 text-base font-semibold text-[#80d1f5]">
            Független kutató · Funkcionális táplálkozási tanácsadó
          </p>

          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/80 sm:text-base">
            <p>
              Victor évek óta kutatja, hogyan mérgez minket észrevétlenül a nyugati életmód — a
              nehézfémektől és a rejtett kórokozóktól a rossz fénykörnyezetig és a környezeti
              sugárzásig. A munkája mindig ugyanazt a kérdést teszi fel: hol a valódi gyökérok?
            </p>
            <p>
              A Life Protocol eseményen nem elméletet ad át, hanem a csapatával együtt kidolgozott,
              gyakorlatban tesztelt protokollokat — a sejtszintű regenerációtól a célzott
              mikrotápanyag-pótlásig (jód, réz, magnézium).
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="mt-6 rounded-xl border-l-4 border-[#fe933a] bg-white/5 py-4 pl-5 pr-4 text-[15px] italic leading-relaxed text-white/90 sm:text-base">
            „Nem a tüneteket kell elnémítani. A terhet kell kivezetni — és megadni a sejtnek, amire
            valóban szüksége van."
          </blockquote>

          {/* Credentials */}
          <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#80d1f5] text-[#00131c]" aria-hidden="true">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-snug text-white/85">{c}</span>
              </li>
            ))}
          </ul>

          {/* Focus areas */}
          <div className="mt-7">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/60">
              <Spark className="h-4 w-4 text-[#fe933a]" />
              Visszatérő fókuszterületek
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {FOCUS.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/85"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-7 text-sm text-white/65">
            Az eseményen Victor mellett a teljes Life Protocol szakértői csapat is jelen van — és a
            VIP jegyesekkel személyesen is találkozik.
          </p>

          <a
            href="#jegyek"
            className="group mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-[#fe933a] px-6 py-3.5 text-sm font-bold text-[#2a1400] transition-colors duration-200 hover:bg-[#ffb784] cursor-pointer"
          >
            Találkozz vele élőben
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
