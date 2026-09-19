const steps = [
  {
    n: '01',
    title: 'Choose',
    text: 'Browse bouquets or select an occasion that matches the moment.',
  },
  {
    n: '02',
    title: 'Customize',
    text: 'Choose currency value, flowers, wrapping and a personal message.',
  },
  {
    n: '03',
    title: 'Order',
    text: 'Send your requirements through WhatsApp or the enquiry form.',
  },
  {
    n: '04',
    title: 'Receive',
    text: 'Your handmade bouquet is prepared with care and delivered.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section section--blush">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Simple &amp; Reassuring</p>
          <h2>Your Perfect Bouquet in 4 Simple Steps</h2>
        </header>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.n} className="steps__item reveal">
              <span className="steps__n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
