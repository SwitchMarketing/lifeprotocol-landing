import { Sun, Moon } from './Icons.jsx'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Váltás világos módra' : 'Váltás sötét módra'}
      title={isDark ? 'Világos mód' : 'Sötét mód'}
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline bg-surface-container text-on-surface-variant shadow-soft transition-colors duration-200 hover:text-primary hover:border-primary-bright cursor-pointer"
    >
      <span className="sr-only">Téma váltása</span>
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  )
}
