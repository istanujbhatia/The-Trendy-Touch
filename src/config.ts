export const brand = {
  name: 'The Trendy Touch',
  tagline: 'Handcrafted Gifts. Unforgettable Moments.',
}

export const contact = {
  phoneDisplay: '+91 98765 43210',
  phoneTel: '+919876543210',
  whatsappNumber: '919876543210',
  instagram: 'thetrendytouch',
  instagramUrl: 'https://instagram.com/thetrendytouch',
  location: 'Delhi NCR, India',
  hours: 'Mon – Sun, 10:00 AM – 8:00 PM',
}

export const whatsappHref = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`

export const defaultWhatsAppMessage =
  'Hello The Trendy Touch, I would like to enquire about a handcrafted currency-note bouquet.'
