import { images } from '../images'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy reveal">
          <p className="eyebrow">Handcrafted · Personalized · Unforgettable</p>
          <h1>
            Turn Moments
            <br />
            Into Memories.
          </h1>
          <p className="lead">
            Beautifully handcrafted currency-note bouquets designed to make
            birthdays, anniversaries, celebrations and special moments
            unforgettable.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#bouquets">
              Explore Bouquets
            </a>
            <a className="btn btn--ghost" href="#create">
              Create Your Bouquet
            </a>
          </div>
          <ul className="trust">
            <li>Handmade</li>
            <li>Personalized</li>
            <li>Custom Designs</li>
          </ul>
        </div>
        <div className="hero__visual reveal">
          <div className="hero__frame">
            <img
              src={images.hero}
              alt="Handcrafted currency-note bouquet with roses and elegant wrapping"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
