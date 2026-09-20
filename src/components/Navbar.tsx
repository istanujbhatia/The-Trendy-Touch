import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, UserRound, X } from 'lucide-react'
import { images } from '../images'
import { brand } from '../config'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#bouquets', label: 'Collection' },
  { href: '#occasions', label: 'Occasions' },
  { href: '#how-it-works', label: 'Order' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

type NavbarProps = {
  visitorName?: string
  onProfileClick: () => void
  onWhatsAppClick: () => void
}

export function Navbar({ visitorName, onProfileClick, onWhatsAppClick }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem('trendy-touch-theme') !== 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    window.localStorage.setItem('trendy-touch-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <img src={images.logo} alt="" className="nav__logo" />
          <span className="nav__name">{brand.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__profile"
            type="button"
            aria-label={visitorName ? `Edit profile for ${visitorName}` : 'Add profile details'}
            title={visitorName ? `Edit ${visitorName}'s details` : 'Add profile details'}
            onClick={onProfileClick}
          >
            <UserRound size={19} strokeWidth={1.8} />
          </button>
          <button
            className="nav__theme"
            type="button"
            aria-pressed={darkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setDarkMode((value) => !value)}
          >
            {darkMode ? <Sun size={20} strokeWidth={1.8} /> : <Moon size={20} strokeWidth={1.8} />}
          </button>
          <button
            className="btn btn--primary nav__wa"
            type="button"
            onClick={onWhatsAppClick}
          >
            WhatsApp Us
          </button>
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={21} strokeWidth={1.8} /> : <Menu size={21} strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="nav__drawer">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            className="btn btn--primary"
            type="button"
            onClick={() => {
              onWhatsAppClick()
              setOpen(false)
            }}
          >
            WhatsApp Us
          </button>
        </div>
      ) : null}
    </header>
  )
}
