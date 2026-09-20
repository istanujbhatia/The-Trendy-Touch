import { whyUsFeatures } from '../data'

export function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">The Difference</p>
          <h2>Why Choose The Trendy Touch?</h2>
        </header>
        <div className="feature-grid">
          {whyUsFeatures.map((item, i) => (
            <article key={item.title} className="feature-card reveal">
              <span className="feature-card__num">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
