import { reviews } from '../data'

export function Reviews() {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Kind words</p>
          <h2>Loved by People Who Gift With Heart</h2>
        </header>
        <div className="review-grid">
          {reviews.map((item) => (
            <blockquote key={item.name} className="review-card reveal">
              <p className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <p>“{item.text}”</p>
              <footer>{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
