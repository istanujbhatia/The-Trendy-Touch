const features = [
  {
    title: 'Handmade With Care',
    text: 'Every bouquet is carefully crafted by hand — never mass-produced.',
  },
  {
    title: 'Real Currency Notes',
    text: 'A unique, memorable gifting experience that feels generous and personal.',
  },
  {
    title: 'Fully Customizable',
    text: 'Choose your currency value, flowers, wrapping and every small detail.',
  },
  {
    title: 'Personalized',
    text: 'Add names, wishes and special messages they will actually keep.',
  },
  {
    title: 'Made for Your Moment',
    text: 'Every design can be adapted to the occasion, the person, the feeling.',
  },
]

export function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">The Difference</p>
          <h2>Why Choose The Trendy Touch?</h2>
        </header>
        <div className="feature-grid">
          {features.map((item, i) => (
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
