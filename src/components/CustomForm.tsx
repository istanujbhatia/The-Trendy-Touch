import { useState, type FormEvent } from 'react'
import { defaultWhatsAppMessage, whatsappHref } from '../config'

const initial = {
  name: '',
  phone: '',
  occasion: '',
  budget: '',
  currency: '',
  flowers: '',
  wrapping: '',
  message: '',
  date: '',
}

export function CustomForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )

  function update(key: keyof typeof initial, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.occasion) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    window.setTimeout(() => setStatus('success'), 600)
  }

  const waPreview = whatsappHref(
    `Hello The Trendy Touch, I would like a custom bouquet.\nName: ${form.name || '—'}\nPhone: ${form.phone || '—'}\nOccasion: ${form.occasion || '—'}\nBudget: ${form.budget || '—'}\nCurrency value: ${form.currency || '—'}\nFlowers: ${form.flowers || '—'}\nWrapping: ${form.wrapping || '—'}\nDelivery: ${form.date || '—'}\nMessage: ${form.message || '—'}`,
  )

  return (
    <section id="create" className="section">
      <div className="container create">
        <div className="create__intro reveal">
          <p className="eyebrow">Made for you</p>
          <h2>Create Something Truly Yours</h2>
          <p className="section__sub">
            Have something special in mind? Tell us what you&apos;re imagining
            and we&apos;ll create it for you.
          </p>
          <ul className="create__notes">
            <li>Real Indian currency notes</li>
            <li>Flowers, chocolates &amp; wrapping of your choice</li>
            <li>Personal messages, names and dates</li>
          </ul>
          <a
            className="btn btn--ghost"
            href={whatsappHref(defaultWhatsAppMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Prefer WhatsApp? Chat with us
          </a>
        </div>

        <div className="create__panel reveal">
          {status === 'success' ? (
            <div className="form-success" role="status">
              <h3>Thank you! We&apos;ve received your request.</h3>
              <p>We&apos;ll contact you shortly to confirm the details.</p>
              <a className="btn btn--primary" href={waPreview} target="_blank" rel="noreferrer">
                Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form__row">
                <label>
                  Name
                  <input
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="form__row">
                <label>
                  Occasion
                  <select
                    value={form.occasion}
                    onChange={(e) => update('occasion', e.target.value)}
                    required
                  >
                    <option value="">Select occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Wedding</option>
                    <option>Proposal</option>
                    <option>Congratulations</option>
                    <option>Corporate</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Approximate Budget
                  <select
                    value={form.budget}
                    onChange={(e) => update('budget', e.target.value)}
                  >
                    <option value="">Select budget</option>
                    <option>₹1,000–₹2,000</option>
                    <option>₹2,000–₹3,000</option>
                    <option>₹3,000–₹5,000</option>
                    <option>₹5,000+</option>
                  </select>
                </label>
              </div>
              <div className="form__row">
                <label>
                  Currency Note Value
                  <select
                    value={form.currency}
                    onChange={(e) => update('currency', e.target.value)}
                  >
                    <option value="">Select value</option>
                    <option>₹500</option>
                    <option>₹1,000</option>
                    <option>₹2,000</option>
                    <option>₹5,000</option>
                    <option>₹10,000+</option>
                  </select>
                </label>
                <label>
                  Preferred Flowers
                  <input
                    value={form.flowers}
                    onChange={(e) => update('flowers', e.target.value)}
                    placeholder="Roses, lilies, mixed…"
                  />
                </label>
              </div>
              <div className="form__row">
                <label>
                  Wrapping Style
                  <input
                    value={form.wrapping}
                    onChange={(e) => update('wrapping', e.target.value)}
                    placeholder="Blush tissue, champagne, burgundy ribbon…"
                  />
                </label>
                <label>
                  Required Delivery Date
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                  />
                </label>
              </div>
              <label>
                Personal Message
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="A few words for the card…"
                />
              </label>
              {status === 'error' ? (
                <p className="form__error">Please add your name, phone and occasion.</p>
              ) : null}
              <div className="form__actions">
                <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Request My Bouquet'}
                </button>
                <a className="btn btn--ghost" href={waPreview} target="_blank" rel="noreferrer">
                  Send via WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
