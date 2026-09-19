import { occasions } from '../data'

export function Occasions() {
  return (
    <section id="occasions" className="section section--blush">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Occasion → Emotion → Gift</p>
          <h2>Find the Perfect Gift for Every Occasion</h2>
        </header>
        <div className="occasion-row">
          {occasions.map((item) => (
            <a
              key={item.id}
              className="occasion-card reveal"
              href="#create"
            >
              <img src={item.image} alt="" />
              <div className="occasion-card__copy">
                <h3>{item.name}</h3>
                <p>{item.emotion}</p>
                <span>Create this gift</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
