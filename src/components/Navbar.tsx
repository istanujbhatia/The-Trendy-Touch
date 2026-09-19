import { useEffect, useState } from 'react'
import { images } from '../images'
import { brand } from '../config'
import { defaultWhatsAppMessage, whatsappHref } from '../config'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#bouquets', label: 'Bouquets' },
  { href: '#occasions', label: 'Occasions' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          <a
            className="btn btn--primary nav__wa"
            href={whatsappHref(defaultWhatsAppMessage)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
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
          <a
            className="btn btn--primary"
            href={whatsappHref(defaultWhatsAppMessage)}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            WhatsApp Us
          </a>
        </div>
      ) : null}
    </header>
  )
}
