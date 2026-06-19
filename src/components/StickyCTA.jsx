import { useEffect, useState } from 'react'
import { ArrowRight } from './Icons.jsx'

// Mobile-only sticky register bar; appears after scrolling past the hero
// and hides when the pricing section is in view.
export default function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const pricing = document.getElementById('jegyek')
    const onScroll = () => {
      const past = window.scrollY > 600
      let pricingVisible = false
      if (pricing) {
        const r = pricing.getBoundingClientRect()
        pricingVisible = r.top < window.innerHeight && r.bottom > 0
      }
      setShow(past && !pricingVisible)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-3 transition-all duration-300 sm:hidden ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <a
        href="#jegyek"
        className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-4 text-sm font-bold text-on-accent shadow-lift cursor-pointer"
      >
        Lefoglalom a helyem — Early Bird
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  )
}
