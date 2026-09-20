import { MessageCircle } from 'lucide-react'
type WhatsAppFloatProps = {
  onWhatsAppClick: () => void
}

export function WhatsAppFloat({ onWhatsAppClick }: WhatsAppFloatProps) {
  return (
    <a
      className="wa-float"
      href="#"
      onClick={(event) => {
        event.preventDefault()
        onWhatsAppClick()
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} aria-hidden="true" />
    </a>
  )
}
