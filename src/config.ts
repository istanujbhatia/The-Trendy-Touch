export const brand = {
  name: 'The Trendy Touch',
  tagline: 'Handcrafted Gifts. Unforgettable Moments.',
}

export const contact = {
  phoneDisplay: '+91 870 819 3753',
  phoneTel: '+918708193753',
  whatsappNumber: '918708193753',
  instagram: 'thetrendytouch15',
  instagramUrl: 'https://www.instagram.com/thetrendytouch15?stkn=bDJ5Mms1b2Fram9l',
  location: 'Delhi NCR, India',
  hours: 'Mon – Sun, 10:00 AM – 8:00 PM',
}

export const whatsappHref = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`

export const defaultWhatsAppMessage =
  'Hello Tanya, I would like to enquire about a handcrafted currency-note bouquet.'

export const phonePattern = '\\+91 [6-9][0-9]{2}-[0-9]{3}-[0-9]{4}'

export const formatIndianPhone = (value: string) => {
  const rawDigits = value.replace(/\D/g, '')
  const digits = (value.trimStart().startsWith('+91') ? rawDigits.slice(2) : rawDigits).slice(
    0,
    10,
  )
  const first = digits.slice(0, 3)
  const second = digits.slice(3, 6)
  const last = digits.slice(6)
  return `+91 ${first}${second ? `-${second}` : ''}${last ? `-${last}` : ''}`
}

export const isValidIndianPhone = (value: string) =>
  new RegExp(phonePattern).test(value.trim())

export const normalizeIndianPhone = (value: string) => {
  return formatIndianPhone(value)
}
