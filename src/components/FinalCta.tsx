import { defaultWhatsAppMessage, whatsappHref } from '../config'

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container reveal">
        <h2>Have a Special Moment Coming Up?</h2>
        <p>Let us create a bouquet they&apos;ll never forget.</p>
        <div className="hero__ctas hero__ctas--center">
          <a
            className="btn btn--light"
            href={whatsappHref(defaultWhatsAppMessage)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
          <a className="btn btn--ghost-light" href="#create">
            Create Your Bouquet
          </a>
        </div>
      </div>
    </section>
  )
}
