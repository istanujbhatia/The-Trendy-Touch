type FinalCtaProps = {
  onWhatsAppClick: () => void
}

export function FinalCta({ onWhatsAppClick }: FinalCtaProps) {
  return (
    <section className="final-cta">
      <div className="container reveal">
        <h2>Have a Special Moment Coming Up?</h2>
        <p>Let us create a bouquet they&apos;ll never forget.</p>
        <div className="hero__ctas hero__ctas--center">
          <button
            className="btn btn--light"
            type="button"
            onClick={onWhatsAppClick}
          >
            WhatsApp Us
          </button>
          <a className="btn btn--ghost-light" href="#create">
            Create Your Bouquet
          </a>
        </div>
      </div>
    </section>
  )
}
