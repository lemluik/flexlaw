import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'О компании' },
  { href: '#services', label: 'Услуги' },
  { href: '#process', label: 'Как мы работаем' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Гибкий Закон"
            className={`h-10 w-auto rounded-lg transition-all ${
              isScrolled ? '' : 'bg-white/95 shadow-sm'
            }`}
          />
          <span className="font-heading text-xl font-bold transition-colors">
            <span className={isScrolled ? 'text-heading' : 'text-white'}>ГИБКИЙ </span>
            <span className={isScrolled ? 'text-primary' : 'text-orange-400'}>ЗАКОН</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacts" className="btn-primary text-xs">
            Получить консультацию
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${isScrolled ? 'text-heading' : 'text-white'}`}
          aria-label="Меню"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6t18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t mt-2 py-4 px-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacts" className="btn-primary text-xs mt-2 text-center">
              Получить консультацию
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
