import { useState } from 'react'
import { Camera, MessageCircle, Phone } from 'lucide-react'
import { images } from '../images'
import { brand, contact, defaultWhatsAppMessage, whatsappHref } from '../config'
import { ReviewModal } from './ReviewModal'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#bouquets', label: 'Collection' },
  { href: '#occasions', label: 'Occasions' },
  { href: '#how-it-works', label: 'Order' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const [legal, setLegal] = useState<'privacy' | 'terms' | null>(null)
  const [showReview, setShowReview] = useState(false)

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#home" className="nav__brand">
            <img src={images.logo} alt="" className="nav__logo" />
            <span className="nav__name">{brand.name}</span>
          </a>
          <p className="footer__tag">{brand.tagline}</p>
        </div>
        <div>
          <h3>Quick links</h3>
          <nav className="footer__links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h3>Connect</h3>
          <nav className="footer__links">
            <a className="footer__contact-link" href={contact.instagramUrl} target="_blank" rel="noreferrer">
              <Camera size={17} strokeWidth={1.8} aria-hidden="true" />
              Instagram
            </a>
            <a className="footer__contact-link" href={whatsappHref(defaultWhatsAppMessage)} target="_blank" rel="noreferrer">
              <MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" />
              WhatsApp
            </a>
            <a className="footer__contact-link" href={`tel:${contact.phoneTel}`}>
              <Phone size={17} strokeWidth={1.8} aria-hidden="true" />
              {contact.phoneDisplay}
            </a>
            <p>{contact.location}</p>
          </nav>
        </div>
      </div>
      <div className="container footer__bar">
        <p>© 2026 The Trendy Touch. All Rights Reserved.</p>
        <div>
          <button type="button" onClick={() => setShowReview(true)}>
            Give a review
          </button>
          <button type="button" onClick={() => setLegal('privacy')}>
            Privacy Policy
          </button>
          <button type="button" onClick={() => setLegal('terms')}>
            Terms &amp; Conditions
          </button>
        </div>
      </div>

      {legal ? (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="legal-title">
          <div className="modal__card">
            <h2 id="legal-title">
              {legal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h2>
            {legal === 'privacy' ? (
              <p>
                Enquiries you send through this website or WhatsApp are used only
                to respond to your gift request. We do not sell personal
                information. Replace this text with your final privacy policy
                before launch.
              </p>
            ) : (
              <p>
                Bouquet designs are made to order. Currency notes are genuine
                tender included as part of the gift composition. Availability,
                delivery windows and final pricing are confirmed on WhatsApp.
                Replace this text with your legal terms before launch.
              </p>
            )}
            <button className="btn btn--primary" type="button" onClick={() => setLegal(null)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
      {showReview ? <ReviewModal onClose={() => setShowReview(false)} /> : null}
    </footer>
  )
}
