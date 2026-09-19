import { images } from '../images'

export function About() {
  return (
    <section id="about" className="section section--blush">
      <div className="container about">
        <div className="about__media reveal">
          <img
            src={images.about}
            alt="Hands arranging a handmade bouquet with wrapping and ribbons"
          />
        </div>
        <div className="about__copy reveal">
          <p className="eyebrow">Our story</p>
          <h2>More Than Just a Bouquet</h2>
          <p>
            The Trendy Touch creates meaningful handmade gifts by combining
            beautiful flowers, real currency notes, personalised messages and
            thoughtful presentation. We design for the person on the other side
            of the ribbon — the birthday, the anniversary, the quiet thank you.
          </p>
          <p>
            This is not a flower stall, and it is not a banknote. It is a
            gifting experience: handcrafted, personal, and made to be
            remembered.
          </p>
          <ul className="about__pills">
            <li>Handcrafted</li>
            <li>Personalized</li>
            <li>Unique Gifting</li>
            <li>Made With Love</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
