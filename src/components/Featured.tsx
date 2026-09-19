import { bouquets, enquireFor } from '../data'

export function Featured() {
  return (
    <section id="bouquets" className="section">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">The Collection</p>
          <h2>Made for Moments That Matter</h2>
          <p className="section__sub">
            Explore our handcrafted bouquets designed to make every celebration
            special.
          </p>
        </header>
        <div className="product-grid">
          {bouquets.map((item) => (
            <article key={item.id} className="product-card reveal">
              <div className="product-card__media">
                <img src={item.image} alt={item.name} />
                <span className="badge">{item.occasion}</span>
              </div>
              <div className="product-card__body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="product-card__meta">
                  <p className="price">
                    Starting from <strong>{item.price}</strong>
                  </p>
                  <a
                    className="btn btn--sm btn--primary"
                    href={enquireFor(item.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
