export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 px-4 sm:px-6 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-outline bg-surface-container px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, intro, align = 'center' }) {
  const isCenter = align === 'center'
  return (
    <div className={`reveal flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {intro && (
        <p className={`max-w-2xl text-pretty text-base leading-relaxed text-on-surface-variant sm:text-lg ${isCenter ? '' : ''}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
