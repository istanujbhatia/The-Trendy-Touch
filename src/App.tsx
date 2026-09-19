import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Occasions } from './components/Occasions'
import { WhyUs } from './components/WhyUs'
import { HowItWorks } from './components/HowItWorks'
import { CustomForm } from './components/CustomForm'
import { Gallery } from './components/Gallery'
import { Reviews } from './components/Reviews'
import { About } from './components/About'
import { FinalCta } from './components/FinalCta'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    nodes.forEach((node) => io.observe(node))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Occasions />
        <WhyUs />
        <HowItWorks />
        <CustomForm />
        <Gallery />
        <Reviews />
        <About />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
