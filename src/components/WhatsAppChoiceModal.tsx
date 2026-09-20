import { MessageCircle, ClipboardList } from 'lucide-react'
import { defaultWhatsAppMessage, whatsappHref } from '../config'

type WhatsAppChoiceModalProps = {
  onCreateEnquiry: () => void
  onClose: () => void
}

export function WhatsAppChoiceModal({ onCreateEnquiry, onClose }: WhatsAppChoiceModalProps) {
  function followUp() {
    window.open(whatsappHref(defaultWhatsAppMessage), '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div className="modal visitor-modal" role="dialog" aria-modal="true" aria-labelledby="whatsapp-choice-title">
      <div className="modal__card whatsapp-choice__card">
        <p className="eyebrow">WhatsApp</p>
        <h2 id="whatsapp-choice-title">How would you like to continue?</h2>
        <p>Choose a detailed enquiry or send a quick message.</p>
        <div className="whatsapp-choice__actions">
          <button className="btn btn--primary" type="button" onClick={onCreateEnquiry}>
            <ClipboardList size={18} aria-hidden="true" />
            Create detailed enquiry
          </button>
          <button className="btn btn--ghost" type="button" onClick={followUp}>
            <MessageCircle size={18} aria-hidden="true" />
            Send a quick message
          </button>
          <button className="whatsapp-choice__cancel" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
