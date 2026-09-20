import { useEffect, useRef, useState } from 'react'
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  defaultWhatsAppMessage,
  formatIndianPhone,
  phonePattern,
  whatsappHref,
} from '../config'
import { bouquets } from '../data'
import type { VisitorDetails } from './VisitorDetailsModal'

function getTodayDate() {
  const today = new Date()
  const offset = today.getTimezoneOffset() * 60000
  return new Date(today.getTime() - offset).toISOString().slice(0, 10)
}

const initial = {
  name: '',
  phone: '',
  occasion: '',
  budget: '',
  collection: '',
  currency: [] as string[],
  flowers: '',
  wrapping: '',
  wrappingNote: '',
  message: '',
  additionalDetails: '',
  date: getTodayDate(),
}

const currencyOptions = ['₹10', '₹20', '₹50', '₹100', '₹200', '₹500']
const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function dateFromValue(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function dateValue(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function CustomSelect({
  value,
  placeholder,
  options,
  onChange,
}: {
  value: string
  placeholder: string
  options: string[]
  onChange: (value: string) => void
}) {
  const [open, setOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!selectRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [])

  return (
    <div className="custom-select" ref={selectRef}>
      <button
        className="custom-select__trigger"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={value ? '' : 'is-placeholder'}>{value || placeholder}</span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>
      {open ? (
        <div className="custom-select__menu" role="listbox">
          {options.map((option) => (
            <button
              className={option === value ? 'is-selected' : ''}
              type="button"
              role="option"
              aria-selected={option === value}
              key={option}
              onClick={() => {
                onChange(option)
                setOpen(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function DatePicker({
  value,
  min,
  onChange,
}: {
  value: string
  min: string
  onChange: (value: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [viewDate, setViewDate] = useState(() => dateFromValue(value || min))
  const monthStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1)
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate()
  const leadingDays = monthStart.getDay()
  const days = Array.from({ length: leadingDays + daysInMonth }, (_, index) =>
    index < leadingDays ? null : index - leadingDays + 1,
  )
  const minimumDate = dateFromValue(min)
  const monthLabel = viewDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
  const selectedLabel = dateFromValue(value).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="date-picker">
      <button
        className="date-picker__trigger"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{selectedLabel}</span>
        <CalendarDays size={19} strokeWidth={1.8} aria-hidden="true" />
      </button>
      {open ? (
        <div className="date-picker__popover" role="dialog" aria-label="Choose delivery date">
          <div className="date-picker__header">
            <button
              type="button"
              aria-label="Previous month"
              disabled={
                viewDate.getFullYear() === minimumDate.getFullYear() &&
                viewDate.getMonth() === minimumDate.getMonth()
              }
              onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <strong>{monthLabel}</strong>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="date-picker__weekdays">
            {weekDays.map((day) => <span key={day}>{day}</span>)}
          </div>
          <div className="date-picker__grid">
            {days.map((day, index) => {
              if (!day) return <span className="date-picker__empty" key={`empty-${index}`} />
              const currentDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
              const currentValue = dateValue(currentDate)
              const disabled = currentValue < min
              return (
                <button
                  className={currentValue === value ? 'is-selected' : ''}
                  type="button"
                  disabled={disabled}
                  key={currentValue}
                  onClick={() => {
                    onChange(currentValue)
                    setOpen(false)
                  }}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

type CustomFormProps = {
  visitorDetails: VisitorDetails | null
}

export function CustomForm({ visitorDetails }: CustomFormProps) {
  const wrappingNoteRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState(() => ({
    ...initial,
    name: visitorDetails?.name ?? '',
    phone: formatIndianPhone(visitorDetails?.phone ?? ''),
  }))
  const today = getTodayDate()

  useEffect(() => {
    if (form.wrapping === 'Add a note') {
      wrappingNoteRef.current?.focus()
    }
  }, [form.wrapping])

  function update(key: keyof typeof initial, value: string | string[]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function toggleCurrency(value: string) {
    const currency = form.currency.includes(value)
      ? form.currency.filter((item) => item !== value)
      : [...form.currency, value]
    update('currency', currency)
  }

  const waPreview = whatsappHref(
    `Hello The Trendy Touch, I would like a custom bouquet.\n\nName: ${form.name || '—'}\nPhone: ${form.phone || '—'}\nOccasion: ${form.occasion || '—'}\nInspiration: ${form.collection || '—'}\nBudget: ${form.budget || '—'}\nCurrency values: ${form.currency.length ? form.currency.join(', ') : '—'}\nFlowers: ${form.flowers || '—'}\nWrapping: ${form.wrapping || '—'}${form.wrappingNote ? `\nWrapping note: ${form.wrappingNote}` : ''}\nDelivery date: ${form.date || '—'}\nPersonal message: ${form.message || '—'}\nAdditional details: ${form.additionalDetails || '—'}`,
  )
  const chatMessage = visitorDetails
    ? `Hello The Trendy Touch, this is ${visitorDetails.name} (${visitorDetails.phone}). I would like to discuss a custom bouquet.`
    : defaultWhatsAppMessage

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
            href={whatsappHref(chatMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Prefer WhatsApp? Chat with us
          </a>
        </div>
        <div className="create__panel reveal">
          <div className="form">
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
                    pattern={phonePattern}
                    title="Enter a valid 10-digit Indian mobile number, for example 8708193753."
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', formatIndianPhone(e.target.value))}
                    required
                  />
                </label>
              </div>
              <div className="form__row">
                <label>
                  Occasion
                  <CustomSelect
                    value={form.occasion}
                    placeholder="Select occasion"
                    options={['Birthday', 'Anniversary', 'Wedding', 'Proposal', 'Congratulations', 'Corporate', 'Other']}
                    onChange={(value) => update('occasion', value)}
                  />
                </label>
                <label>
                  Approximate Budget
                  <CustomSelect
                    value={form.budget}
                    placeholder="Select budget"
                    options={['₹500–₹1,000', '₹1,000–₹2,000', '₹2,000–₹3,000', '₹3,000–₹5,000', '₹5,000+']}
                    onChange={(value) => update('budget', value)}
                  />
                </label>
              </div>
              <div className="form__row">
                <fieldset className="currency-fieldset">
                  <legend>Currency Note Value</legend>
                  <div className="currency-options" role="group" aria-label="Currency note values">
                    {currencyOptions.map((value) => (
                      <button
                        className={form.currency.includes(value) ? 'is-selected' : ''}
                        type="button"
                        aria-pressed={form.currency.includes(value)}
                        onClick={() => toggleCurrency(value)}
                        key={value}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <label>
                  Choose from Collection
                  <CustomSelect
                    value={form.collection}
                    placeholder="Select a collection piece"
                    options={[...bouquets.map((item) => item.name), 'Other']}
                    onChange={(value) => update('collection', value)}
                  />
                </label>
              </div>
              <div className="form__row">
                <label>
                  Wrapping Style
                  <CustomSelect
                    value={form.wrapping}
                    placeholder="Select style"
                    options={['Blush tissue', 'Champagne wrap', 'Burgundy ribbon', 'Black and gold wrap', 'Pink satin bow', 'Add a note']}
                    onChange={(value) => update('wrapping', value)}
                  />
                </label>
                <label>
                  Wrapping Note
                  <input
                    ref={wrappingNoteRef}
                    value={form.wrappingNote}
                    onChange={(e) => update('wrappingNote', e.target.value)}
                    placeholder={
                      form.wrapping
                        ? 'Add a wrapping note (optional)'
                        : 'Select a wrapping style first'
                    }
                    required={form.wrapping === 'Add a note'}
                    disabled={!form.wrapping}
                  />
                </label>
              </div>
              <div className="form__row">
                <label>
                  Preferred Flowers
                  <input
                    value={form.flowers}
                    onChange={(e) => update('flowers', e.target.value)}
                    placeholder="Roses, lilies, mixed…"
                  />
                </label>
                <label>
                  Required Delivery Date
                  <DatePicker value={form.date} min={today} onChange={(value) => update('date', value)} />
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
              <label>
                Additional Details
                <textarea
                  rows={3}
                  value={form.additionalDetails}
                  onChange={(e) => update('additionalDetails', e.target.value)}
                  placeholder="Any other request, reference, colour, quantity or delivery detail…"
                />
              </label>
              <div className="form__actions">
                <a className="btn btn--primary" href={waPreview} target="_blank" rel="noreferrer">
                  Send via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
