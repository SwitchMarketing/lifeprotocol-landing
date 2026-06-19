import { useTheme } from './hooks/useTheme.js'
import { useScrollReveal } from './hooks/useScrollReveal.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Audience from './components/Audience.jsx'
import Topics from './components/Topics.jsx'
import Speaker from './components/Speaker.jsx'
import Pricing from './components/Pricing.jsx'
import Urgency from './components/Urgency.jsx'
import Footer from './components/Footer.jsx'
import StickyCTA from './components/StickyCTA.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  useScrollReveal()

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Ugrás a tartalomra
      </a>

      <Navbar theme={theme} onToggle={toggleTheme} />

      <main>
        <Hero />
        <Problem />
        <Audience />
        <Topics />
        <Speaker />
        <Urgency />
        <Pricing />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  )
}
