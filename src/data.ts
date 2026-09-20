import { images } from './images'
import { whatsappHref } from './config'

export const whyUsFeatures = [
  {
    title: 'Handmade With Care',
    text: 'Every bouquet is carefully crafted by hand — never mass-produced.',
  },
  {
    title: 'Real Currency Notes',
    text: 'A unique, memorable gifting experience that feels generous and personal.',
  },
  {
    title: 'Fully Customizable',
    text: 'Choose your currency value, flowers, wrapping and every small detail.',
  },
  {
    title: 'Personalized',
    text: 'Add names, wishes and special messages they will actually keep.',
  },
  {
    title: 'Made for Your Moment',
    text: 'Every design can be adapted to the occasion, the person, the feeling.',
  },
]

export const bouquets = [
  {
    id: 'chocolate-crush',
    name: 'Chocolate Crush Bouquet',
    description: 'A cheerful KitKat bouquet wrapped with handwritten details and a bright red ribbon.',
    occasion: 'Birthday',
    price: '₹1,999',
    image: images.b1,
  },
  {
    id: 'beauty-bloom',
    name: 'Beauty & Bloom Bouquet',
    description: 'A playful mix of beauty treats, bangles, nail colours, and pink blooms for a thoughtful surprise.',
    occasion: 'Celebration',
    price: '₹2,599',
    image: images.b2,
  },
  {
    id: 'rose-surprise',
    name: 'Rose Surprise Box',
    description: 'Fresh red roses, chocolates, and a soft blue bow arranged in a keepsake gift box.',
    occasion: 'Anniversary',
    price: '₹3,499',
    image: images.b3,
  },
  {
    id: 'lavender-money-bloom',
    name: 'Lavender Money Bloom',
    description: 'Folded currency notes shaped like petals, framed by soft lavender flowers in a bold black wrap.',
    occasion: 'Congratulations',
    price: '₹2,499',
    image: images.b4,
  },
  {
    id: 'sweet-celebration',
    name: 'Sweet Celebration Wrap',
    description: 'A fun chocolate-led gift for someone who deserves a little extra sweetness today.',
    occasion: 'Congratulations',
    price: '₹2,799',
    image: images.b1,
  },
  {
    id: 'red-rose-keepsake',
    name: 'Red Rose Keepsake',
    description: 'A romantic rose-and-chocolate gift with a polished presentation for meaningful moments.',
    occasion: 'Valentine',
    price: '₹1,999',
    image: images.b3,
  },
]

export const occasions = [
  {
    id: 'birthday',
    name: 'Birthday',
    emotion: 'Make them feel celebrated, not just remembered.',
    image: images.b1,
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    emotion: 'A year of love, folded into one unforgettable gift.',
    image: images.b2,
  },
  {
    id: 'wedding',
    name: 'Wedding',
    emotion: 'Bless the beginning with something beautiful and meaningful.',
    image: images.b3,
  },
  {
    id: 'proposal',
    name: 'Proposal',
    emotion: 'When words are not enough, let the bouquet speak.',
    image: images.b4,
  },
  {
    id: 'valentine',
    name: "Valentine's Day",
    emotion: 'Romance, wrapped with intention.',
    image: images.b1,
  },
  {
    id: 'congratulations',
    name: 'Congratulations',
    emotion: 'Mark the win with a gift they will actually keep.',
    image: images.b2,
  },
  {
    id: 'graduation',
    name: 'Graduation',
    emotion: 'Honour the milestone with pride they can hold.',
    image: images.b3,
  },
  {
    id: 'corporate',
    name: 'Corporate Gifting',
    emotion: 'Premium thanks, without looking transactional.',
    image: images.b4,
  },
]

export const galleryItems = [
  { src: images.b1, alt: 'Real bouquet close-up', category: 'Custom' },
  { src: images.b2, alt: 'Bouquet arrangement with notes', category: 'Birthdays' },
  { src: images.b3, alt: 'Bouquet arrangement for a special occasion', category: 'Anniversaries' },
  { src: images.b4, alt: 'Luxury bouquet with real flowers', category: 'Weddings' },
  { src: images.b1, alt: 'Handcrafted bouquet in warm tones', category: 'Custom' },
  { src: images.b2, alt: 'Bouquet with a personal gifting feel', category: 'Custom' },
  { src: images.b3, alt: 'Elegant bouquet for a celebration', category: 'Custom' },
  { src: images.b4, alt: 'Romantic bouquet for meaningful moments', category: 'Anniversaries' },
  { src: images.b1, alt: 'Bouquet detail', category: 'Custom' },
  { src: images.b2, alt: 'Gift bouquet in full frame', category: 'Birthdays' },
  { src: images.b3, alt: 'Bouquet arrangement with flowers and notes', category: 'Weddings' },
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
