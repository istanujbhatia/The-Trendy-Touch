import { images } from './images'
import { whatsappHref } from './config'

export const bouquets = [
  {
    id: 'classic-rose',
    name: 'Classic Rose Currency Bouquet',
    description: 'Soft roses and folded notes, wrapped for birthdays that deserve more than flowers alone.',
    occasion: 'Birthday',
    price: '₹1,999',
    image: images.classic,
  },
  {
    id: 'premium-money',
    name: 'Premium Money Bouquet',
    description: 'A generous fan of notes with blush blooms — memorable, abundant, and made to gift.',
    occasion: 'Congratulations',
    price: '₹2,599',
    image: images.premium,
  },
  {
    id: 'luxury-celebration',
    name: 'Luxury Celebration Bouquet',
    description: 'Champagne wrapping, cream florals, and a richer note composition for milestone moments.',
    occasion: 'Celebration',
    price: '₹3,499',
    image: images.luxury,
  },
  {
    id: 'heart-money',
    name: 'Heart Money Bouquet',
    description: 'A romantic heart-shaped arrangement for proposals, Valentine’s, and I-love-you days.',
    occasion: 'Valentine',
    price: '₹2,499',
    image: images.heart,
  },
  {
    id: 'anniversary',
    name: 'Anniversary Bouquet',
    description: 'Roses, chocolates, and currency notes composed for years worth celebrating.',
    occasion: 'Anniversary',
    price: '₹2,799',
    image: images.anniversary,
  },
  {
    id: 'custom',
    name: 'Custom Money Bouquet',
    description: 'Your note value, flowers, wrapping, and message — designed around one person.',
    occasion: 'Custom',
    price: '₹1,999',
    image: images.custom,
  },
]

export const occasions = [
  {
    id: 'birthday',
    name: 'Birthday',
    emotion: 'Make them feel celebrated, not just remembered.',
    image: images.birthday,
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    emotion: 'A year of love, folded into one unforgettable gift.',
    image: images.anniversary,
  },
  {
    id: 'wedding',
    name: 'Wedding',
    emotion: 'Bless the beginning with something beautiful and meaningful.',
    image: images.wedding,
  },
  {
    id: 'proposal',
    name: 'Proposal',
    emotion: 'When words are not enough, let the bouquet speak.',
    image: images.heart,
  },
  {
    id: 'valentine',
    name: "Valentine's Day",
    emotion: 'Romance, wrapped with intention.',
    image: images.classic,
  },
  {
    id: 'congratulations',
    name: 'Congratulations',
    emotion: 'Mark the win with a gift they will actually keep.',
    image: images.premium,
  },
  {
    id: 'graduation',
    name: 'Graduation',
    emotion: 'Honour the milestone with pride they can hold.',
    image: images.custom,
  },
  {
    id: 'corporate',
    name: 'Corporate Gifting',
    emotion: 'Premium thanks, without looking transactional.',
    image: images.luxury,
  },
]

export const galleryItems = [
  { src: images.hero, alt: 'Luxury currency-note bouquet', category: 'Custom' },
  { src: images.birthday, alt: 'Birthday bouquet', category: 'Birthdays' },
  { src: images.anniversary, alt: 'Anniversary bouquet', category: 'Anniversaries' },
  { src: images.wedding, alt: 'Wedding bouquet', category: 'Weddings' },
  { src: images.premium, alt: 'Premium money bouquet', category: 'Custom' },
  { src: images.chocolate, alt: 'Chocolate and flower bouquet', category: 'Custom' },
  { src: images.luxury, alt: 'Luxury celebration bouquet', category: 'Custom' },
  { src: images.heart, alt: 'Heart money bouquet', category: 'Anniversaries' },
  { src: images.wrapping, alt: 'Premium wrapping detail', category: 'Custom' },
  { src: images.classic, alt: 'Classic rose currency bouquet', category: 'Birthdays' },
  { src: images.custom, alt: 'Custom mixed bouquet', category: 'Weddings' },
]

export const reviews = [
  {
    name: 'Ananya Mehra',
    text: 'The anniversary bouquet felt personal, not store-bought. She still talks about how it was wrapped.',
  },
  {
    name: 'Rohan Kapoor',
    text: 'Ordered a congratulations bouquet for my sister. The notes, roses, and message card were all considered.',
  },
  {
    name: 'Ishita Sharma',
    text: 'I sent a custom birthday piece. They helped me choose the value and flowers over WhatsApp — effortless.',
  },
  {
    name: 'Vikram Nair',
    text: 'Used them for a small corporate thank-you. Premium without being flashy. Exactly the tone we needed.',
  },
]

export const enquireFor = (productName: string) =>
  whatsappHref(
    `Hello The Trendy Touch, I would like to enquire about the ${productName}.`,
  )
