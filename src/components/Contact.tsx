import { useState, type FormEvent } from 'react'
import { contact, defaultWhatsAppMessage, whatsappHref } from '../config'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const note = String(data.get('note') || '')
    if (!name || !phone) return
    window.open(
      whatsappHref(
        `Hello The Trendy Touch, ${name} (${phone}) would like to get in touch. ${note}`,
      ),
      '_blank',
    )
    setSent(true)
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div className="reveal">
          <p className="eyebrow">Reach us</p>
          <h2>Let&apos;s Plan Your Gift</h2>
          <p className="section__sub">
            WhatsApp is the fastest way to share references, note values and
            delivery dates.
          </p>
          <ul className="contact__list">
            <li>
              <span>Phone</span>
              <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a href={whatsappHref(defaultWhatsAppMessage)} target="_blank" rel="noreferrer">
                Chat with us
              </a>
            </li>
            <li>
              <span>Instagram</span>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                @{contact.instagram}
              </a>
            </li>
            <li>
              <span>Location</span>
              <p>{contact.location}</p>
            </li>
            <li>
              <span>Business Hours</span>
              <p>{contact.hours}</p>
            </li>
          </ul>
        </div>
        <div className="create__panel reveal">
          {sent ? (
            <div className="form-success" role="status">
              <h3>Opening WhatsApp…</h3>
              <p>If it didn&apos;t open, tap the button below.</p>
              <a className="btn btn--primary" href={whatsappHref(defaultWhatsAppMessage)} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <label>
                Name
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
              <label>
                How can we help?
                <textarea name="note" rows={4} placeholder="Occasion, date, anything we should know…" />
              </label>
              <button className="btn btn--primary" type="submit">
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
