import { useState, type FormEvent } from 'react'
import {
  formatIndianPhone,
  isValidIndianPhone,
  normalizeIndianPhone,
  phonePattern,
} from '../config'

export type VisitorDetails = {
  name: string
  phone: string
}

type VisitorDetailsModalProps = {
  initialDetails?: VisitorDetails | null
  editing?: boolean
  onSave: (details: VisitorDetails) => void
  onSkip: () => void
}

export function VisitorDetailsModal({
  initialDetails,
  editing = false,
  onSave,
  onSkip,
}: VisitorDetailsModalProps) {
  const [name, setName] = useState(initialDetails?.name ?? '')
  const [phone, setPhone] = useState(formatIndianPhone(initialDetails?.phone ?? ''))
  const [phoneError, setPhoneError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name.trim() || !phone.trim()) return
    if (!isValidIndianPhone(phone)) {
      setPhoneError('Enter a valid number in this format: +91 870-819-3753.')
      return
    }
    onSave({ name: name.trim(), phone: normalizeIndianPhone(phone) })
  }

  return (
    <div className="modal visitor-modal" role="dialog" aria-modal="true" aria-labelledby="visitor-details-title">
      <div className="modal__card visitor-modal__card">
        <p className="eyebrow">{editing ? 'Your profile' : 'Quick details'}</p>
        <h2 id="visitor-details-title">
          {editing ? 'Update your details' : 'How can we reach you?'}
        </h2>
        <p>
          {editing
            ? 'Keep your saved details up to date for faster enquiries.'
            : 'Save your name and phone once to make your next enquiry faster.'}
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              required
              autoFocus
            />
          </label>
          <label>
            Phone
            <input
              value={phone}
              onChange={(event) => setPhone(formatIndianPhone(event.target.value))}
              type="tel"
              inputMode="tel"
              maxLength={16}
              autoComplete="tel"
              pattern={phonePattern}
              title="Enter a valid number in this format: +91 870-819-3753."
              required
            />
            {phoneError ? <p className="form__error">{phoneError}</p> : null}
          </label>
          <div className="form__actions">
            <button className="btn btn--primary" type="submit">
              {editing ? 'Save changes' : 'OK, save details'}
            </button>
            <button className="btn btn--ghost" type="button" onClick={onSkip}>
              {editing ? 'Cancel' : 'Skip / add later'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
