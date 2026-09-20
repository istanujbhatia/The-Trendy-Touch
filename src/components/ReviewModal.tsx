import { useState, type FormEvent } from 'react'
import { Star } from 'lucide-react'
import { bouquets } from '../data'

type ReviewModalProps = {
  onClose: () => void
}

export function ReviewModal({ onClose }: ReviewModalProps) {
  const [product, setProduct] = useState('')
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [review, setReview] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!product || !rating || !review.trim()) return
    setSubmitted(true)
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="review-title">
      <div className="modal__card review-modal__card">
        {submitted ? (
          <div className="form-success">
            <p className="eyebrow">Thank you</p>
            <h2 id="review-title">Your review is ready to share.</h2>
            <p>We appreciate you taking a moment to tell us about your experience.</p>
            <button className="btn btn--primary" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Share your experience</p>
            <h2 id="review-title">Give a review</h2>
            <p>Tell us which piece you loved and what made it special.</p>
            <form className="form" onSubmit={submitReview}>
              <label>
                Product
                <select value={product} onChange={(event) => setProduct(event.target.value)} required>
                  <option value="" disabled>
                    Select a product
                  </option>
                  {bouquets.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                  <option>Other</option>
                </select>
              </label>
              <fieldset className="review-rating">
                <legend>Rating</legend>
                <div className="review-rating__stars" role="radiogroup" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      className={value <= (hoveredRating || rating) ? 'is-selected' : ''}
                      type="button"
                      role="radio"
                      aria-checked={value === rating}
                      aria-label={`${value} star${value === 1 ? '' : 's'}`}
                      onClick={() => setRating(value)}
                      onPointerEnter={() => setHoveredRating(value)}
                      onPointerLeave={() => setHoveredRating(0)}
                      key={value}
                    >
                      <Star size={25} fill="currentColor" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </fieldset>
              <label>
                Your review
                <textarea
                  rows={5}
                  value={review}
                  onChange={(event) => setReview(event.target.value)}
                  placeholder="What did you like about your gift?"
                  required
                />
              </label>
              <div className="form__actions">
                <button className="btn btn--primary" type="submit">
                  Submit review
                </button>
                <button className="btn btn--ghost" type="button" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
