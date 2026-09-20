import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Occasions } from './components/Occasions'
import { HowItWorks } from './components/HowItWorks'
import { CustomForm } from './components/CustomForm'
import { Gallery } from './components/Gallery'
import { Reviews } from './components/Reviews'
import { About } from './components/About'
import { FinalCta } from './components/FinalCta'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { VisitorDetailsModal, type VisitorDetails } from './components/VisitorDetailsModal'
import { WhatsAppChoiceModal } from './components/WhatsAppChoiceModal'

const visitorDetailsKey = 'trendy-touch-visitor-details'
const visitorPromptKey = 'trendy-touch-visitor-prompted'

function getSavedVisitorDetails(): VisitorDetails | null {
  const saved = window.localStorage.getItem(visitorDetailsKey)
  if (!saved) return null

  try {
    const details = JSON.parse(saved) as Partial<VisitorDetails>
    if (typeof details.name === 'string' && typeof details.phone === 'string') {
      return { name: details.name, phone: details.phone }
    }
  } catch {
    return null
  }

  return null
}

export default function App() {
  const [visitorDetails, setVisitorDetails] = useState<VisitorDetails | null>(
    getSavedVisitorDetails,
  )
  const [showVisitorPrompt, setShowVisitorPrompt] = useState(
    () => !window.localStorage.getItem(visitorPromptKey),
  )
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showWhatsAppChoice, setShowWhatsAppChoice] = useState(false)

  function saveVisitorDetails(details: VisitorDetails) {
    window.localStorage.setItem(visitorDetailsKey, JSON.stringify(details))
    window.localStorage.setItem(visitorPromptKey, 'true')
    setVisitorDetails(details)
    setShowVisitorPrompt(false)
  }

  function skipVisitorPrompt() {
    window.localStorage.setItem(visitorPromptKey, 'true')
    setShowVisitorPrompt(false)
  }

  function openWhatsAppChoice() {
    setShowWhatsAppChoice(true)
  }

  function createDetailedEnquiry() {
    setShowWhatsAppChoice(false)
    document.getElementById('create')?.scrollIntoView({ behavior: 'smooth' })
  }

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
      <Navbar
        visitorName={visitorDetails?.name}
        onProfileClick={() => setShowProfileModal(true)}
        onWhatsAppClick={openWhatsAppChoice}
      />
      {showVisitorPrompt ? (
        <VisitorDetailsModal onSave={saveVisitorDetails} onSkip={skipVisitorPrompt} />
      ) : null}
      {showProfileModal ? (
        <VisitorDetailsModal
          key={visitorDetails ? `${visitorDetails.name}-${visitorDetails.phone}` : 'empty'}
          initialDetails={visitorDetails}
          editing
          onSave={(details) => {
            saveVisitorDetails(details)
            setShowProfileModal(false)
          }}
          onSkip={() => setShowProfileModal(false)}
        />
      ) : null}
      {showWhatsAppChoice ? (
        <WhatsAppChoiceModal
          onCreateEnquiry={createDetailedEnquiry}
          onClose={() => setShowWhatsAppChoice(false)}
        />
      ) : null}
      <main>
        <Hero />
        <Featured />
        <Occasions />
        <HowItWorks />
        <CustomForm
          key={visitorDetails ? `${visitorDetails.name}-${visitorDetails.phone}` : 'empty'}
          visitorDetails={visitorDetails}
        />
        <Gallery />
        <Reviews />
        <About />
        <FinalCta onWhatsAppClick={openWhatsAppChoice} />
        <Contact
          key={visitorDetails ? `${visitorDetails.name}-${visitorDetails.phone}` : 'empty'}
          visitorDetails={visitorDetails}
        />
      </main>
      <Footer />
      <WhatsAppFloat onWhatsAppClick={openWhatsAppChoice} />
    </>
  )
}
