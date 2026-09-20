import { useState, type FormEvent } from 'react'
import {
  contact,
  defaultWhatsAppMessage,
  formatIndianPhone,
  isValidIndianPhone,
  normalizeIndianPhone,
  phonePattern,
  whatsappHref,
} from '../config'
import type { VisitorDetails } from './VisitorDetailsModal'

type ContactProps = {
  visitorDetails: VisitorDetails | null
}

export function Contact({ visitorDetails }: ContactProps) {
  const [name, setName] = useState(visitorDetails?.name ?? '')
  const [phone, setPhone] = useState(formatIndianPhone(visitorDetails?.phone ?? ''))
  const [note, setNote] = useState('')
  const chatMessage = visitorDetails
    ? `Hello The Trendy Touch, this is ${visitorDetails.name} (${visitorDetails.phone}). I would like to discuss my gift requirements.`
    : defaultWhatsAppMessage

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name || !phone || !isValidIndianPhone(phone)) return
    const normalizedPhone = normalizeIndianPhone(phone)
    window.open(
      whatsappHref(
        `Hello The Trendy Touch, ${name} (${normalizedPhone}) would like to get in touch. ${note}`,
      ),
      '_blank',
    )
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
              <a href={whatsappHref(chatMessage)} target="_blank" rel="noreferrer">
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
          <form className="form" onSubmit={onSubmit}>
              <label>
                Name
                <input
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  autoComplete="name"
                />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(formatIndianPhone(event.target.value))}
                  type="tel"
                  inputMode="tel"
                  maxLength={16}
                  pattern={phonePattern}
                  title="Enter a valid number in this format: +91 870-819-3753."
                  required
                  autoComplete="tel"
                />
              </label>
              <label>
                How can we help?
                <textarea
                  name="note"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  rows={4}
                  placeholder="Occasion, date, anything we should know…"
                />
              </label>
              <button className="btn btn--primary" type="submit">
                Send via WhatsApp
              </button>
          </form>
        </div>
      </div>
    </section>
  )
}
