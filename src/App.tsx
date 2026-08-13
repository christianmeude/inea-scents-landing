import { useState, useEffect, useRef } from 'react'

// ─── Icons ────────────────────────────────────────────────────────────────────
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill={filled ? '#A08E98' : 'none'} stroke="#A08E98" strokeWidth="1.5">
    <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6z" />
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
  </svg>
)

const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A08E98" strokeWidth="1.5">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A08E98" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A08E98" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
  </svg>
)

const GiftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A08E98" strokeWidth="1.5">
    <rect x="3" y="8" width="18" height="14" rx="2" />
    <path d="M21 8H3" strokeLinecap="round" />
    <path d="M12 8V22M12 8H7.5a2.5 2.5 0 010-5C11 3 12 8 12 8zM12 8h4.5a2.5 2.5 0 000-5C13 3 12 8 12 8z" strokeLinecap="round" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A08E98" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── Data ────────────────────────────────────────────────────────────────────
const navLinks = ['Home', 'About', 'Packages', 'Gallery', 'Reviews', 'Contact']

const packages = [
  {
    name: '50 Pax Package',
    price: '₱4,999',
    pax: '50 guests',
    image: 'https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?w=600&h=400&fit=crop&auto=format',
    features: ['5 premium fragrances', 'Custom label printing', 'Elegant display setup', 'Professional attendant', '3-hour event coverage'],
    badge: 'Starter',
  },
  {
    name: '70 Pax Package',
    price: '₱6,499',
    pax: '70 guests',
    image: 'https://images.unsplash.com/photo-1608721279136-cd41b752fa41?w=600&h=400&fit=crop&auto=format',
    features: ['8 premium fragrances', 'Custom label printing', 'Luxury floral display', '2 professional attendants', '4-hour event coverage', 'Gift ribbon wrap'],
    badge: 'Popular',
  },
  {
    name: '100 Pax Package',
    price: '₱8,799',
    pax: '100 guests',
    image: 'https://images.unsplash.com/photo-1638295916768-459f6cf440bc?w=600&h=400&fit=crop&auto=format',
    features: ['12 premium fragrances', 'Custom label printing', 'Grand floral display', '3 professional attendants', '5-hour event coverage', 'Gift ribbon wrap', 'Personalized cards'],
    badge: 'Best Value',
  },
  {
    name: '150 Pax Package',
    price: '₱12,999',
    pax: '150 guests',
    image: 'https://images.unsplash.com/photo-1606391484561-e1831bf6a8a0?w=600&h=400&fit=crop&auto=format',
    features: ['18 premium fragrances', 'Custom label printing', 'Grand luxury display', '4 professional attendants', '6-hour event coverage', 'Gift ribbon wrap', 'Personalized cards', 'Dedicated coordinator'],
    badge: 'Premium',
  },
]

const perfumes = [
  { name: 'Burberry Weekend', category: 'Fresh', image: 'https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?w=400&h=500&fit=crop&auto=format' },
  { name: 'Ariana Grande Cloud', category: 'Sweet', image: 'https://images.unsplash.com/photo-1608721279136-cd41b752fa41?w=400&h=500&fit=crop&auto=format' },
  { name: 'Baccarat Rouge 540', category: 'Woody', image: 'https://images.unsplash.com/photo-1615160460366-2c9a41771b51?w=400&h=500&fit=crop&auto=format' },
  { name: 'Versace Bright Crystal', category: 'Floral', image: 'https://images.unsplash.com/photo-1615160460524-432433ba1b8f?w=400&h=500&fit=crop&auto=format' },
  { name: 'Jo Malone Peony', category: 'Floral', image: 'https://images.unsplash.com/photo-1585218356022-6a53145f56f6?w=400&h=500&fit=crop&auto=format' },
  { name: 'Chanel Chance Eau', category: 'Fresh', image: 'https://images.unsplash.com/photo-1541108564883-bec8126021f5?w=400&h=500&fit=crop&auto=format' },
]

const categoryColors: Record<string, string> = {
  Floral: 'bg-pink-50 text-pink-600',
  Woody: 'bg-amber-50 text-amber-700',
  Fresh: 'bg-sky-50 text-sky-600',
  Sweet: 'bg-purple-50 text-purple-600',
}

const features = [
  { icon: <SparkleIcon />, title: 'Luxury Setup', desc: 'Elegant, Instagram-worthy perfume stations with floral arrangements and gold accents tailored to your event theme.' },
  { icon: <ShieldIcon />, title: 'Premium Fragrances', desc: 'Curated selection of inspired luxury scents — from Dior to Creed — presented in premium crystal-clear bottles.' },
  { icon: <UsersIcon />, title: 'Professional Staff', desc: 'Trained, well-groomed attendants who guide your guests through each fragrance with grace and expertise.' },
  { icon: <GiftIcon />, title: 'Custom Labels & Packaging', desc: 'Personalized labels and elegant packaging make every bottle a keepsake your guests will treasure forever.' },
]

const steps = [
  { num: '01', title: 'Choose Package', desc: 'Select the perfect package based on your guest count and budget.' },
  { num: '02', title: 'Select Scents', desc: 'Curate your fragrance menu from our premium collection.' },
  { num: '03', title: 'Event Details', desc: 'Tell us about your venue, date, and special requests.' },
  { num: '04', title: 'Payment', desc: 'Secure your booking with our easy payment options.' },
  { num: '05', title: 'Enjoy', desc: 'We arrive, set up, and create an unforgettable experience.' },
]

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=500&h=600&fit=crop&auto=format', alt: 'Wedding perfume bar with gold and white floral ceiling', height: 'tall' },
  { url: 'https://images.unsplash.com/photo-1758225502621-9102d2856dc8?w=500&h=380&fit=crop&auto=format', alt: 'Perfume collection display', height: 'medium' },
  { url: 'https://images.unsplash.com/photo-1670529776180-60e4132ab90c?w=500&h=500&fit=crop&auto=format', alt: 'Elegant white flower courtyard event', height: 'medium' },
  { url: 'https://images.unsplash.com/photo-1714001385982-3513dbd9db82?w=500&h=650&fit=crop&auto=format', alt: 'Luxury perfume bottles on table', height: 'tall' },
  { url: 'https://images.unsplash.com/photo-1724855946379-451f59d45df6?w=500&h=400&fit=crop&auto=format', alt: 'Wedding ceremony setup', height: 'medium' },
  { url: 'https://images.unsplash.com/photo-1738217383996-9947554e9f28?w=500&h=550&fit=crop&auto=format', alt: 'Banquet hall with floral ceiling', height: 'tall' },
  { url: 'https://images.unsplash.com/photo-1693945099014-a24f4f079c5a?w=500&h=380&fit=crop&auto=format', alt: 'Elegant event table flowers', height: 'medium' },
  { url: 'https://images.unsplash.com/photo-1615160460366-2c9a41771b51?w=500&h=500&fit=crop&auto=format', alt: 'Premium perfume bottle display', height: 'medium' },
]

const testimonials = [
  {
    name: 'Sofia Reyes',
    event: 'Wedding Reception',
    rating: 5,
    review: "Inea Scents made our wedding absolutely magical. Every guest was raving about the perfume bar — it was the highlight of the evening! The setup was stunning and the staff were so professional.",
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Camille Santos',
    event: "18th Debut",
    rating: 5,
    review: "I had the most beautiful debut, partly thanks to Inea Scents! The custom labels with my name were such a lovely touch. My friends are still talking about it months later.",
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Marcus Lim',
    event: 'Corporate Gala',
    rating: 5,
    review: "We hired Inea Scents for our annual corporate gala and it was a massive hit. The team was punctual, the display looked incredibly luxurious, and 150 guests were perfectly catered to.",
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format',
  },
]

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-full btn-gold flex items-center justify-center">
            <span className="text-white text-xs font-display font-bold">IS</span>
          </div>
          <span className="font-display font-semibold text-lg tracking-wide text-gray-900">Inea Scents</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-gray-700 hover:text-[#A08E98] transition-colors duration-200 tracking-wide"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-[#A08E98] transition-colors px-4 py-2">
            Login
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-gold text-white text-sm font-semibold px-6 py-2.5 rounded-full"
          >
            Book Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-gray-800 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-[#A08E98]/10 px-6 py-6 space-y-4">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-[#A08E98] py-2"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="btn-gold text-white text-sm font-semibold px-6 py-3 rounded-full w-full mt-2"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=1800&h=1200&fit=crop&auto=format"
          alt="Luxury wedding event with gold and white floral ceiling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[#A08E98]/10 border border-[#A08E98]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A08E98]" />
              <span className="text-xs font-medium tracking-widest text-[#85717D] uppercase">Premium Perfume Bar</span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gray-900 mb-6">
              Luxury Perfume Bar
              <span className="block font-italic italic text-gold-gradient mt-1">for Every</span>
              Celebration
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Create unforgettable memories with a premium mobile perfume bar experience for weddings, birthdays, debuts, corporate events, and private celebrations.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide shadow-lg"
              >
                Book Now
              </button>
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-300 hover:border-[#A08E98] text-gray-800 hover:text-[#A08E98] font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-colors duration-200"
              >
                Explore Packages
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
                <span className="text-sm font-semibold text-gray-800">4.9 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-display font-bold text-[#A08E98]">500+</span>
                <span className="text-sm text-gray-600">Successful Events</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Trusted by</span>
                <span className="text-sm font-semibold text-gray-800">Hundreds of Clients</span>
              </div>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="float-anim glass rounded-[20px] p-6 w-full max-w-sm shadow-2xl shadow-black/10">
              {/* Gold accent bar */}
              <div className="h-1 w-full rounded-full btn-gold mb-5" />

              <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">Booking Summary</h3>

              {/* Package */}
              <div className="bg-[#F8F5F0] rounded-[14px] p-4 mb-4">
                <div className="text-xs text-[#85717D] font-medium tracking-wide uppercase mb-1">Package</div>
                <div className="font-semibold text-gray-900">100 Pax Premium Package</div>
              </div>

              {/* Scents */}
              <div className="mb-4">
                <div className="text-xs text-[#85717D] font-medium tracking-wide uppercase mb-2">Selected Scents</div>
                <div className="space-y-1.5">
                  {['Burberry Weekend', 'Ariana Grande Cloud', 'Baccarat Rouge 540', 'Versace Bright Crystal'].map(s => (
                    <div key={s} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1 h-1 rounded-full bg-[#A08E98] flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Event Date', val: 'Aug 15, 2025' },
                  { label: 'Guests', val: '100 pax' },
                  { label: 'Location', val: 'Manila, PH' },
                ].map(f => (
                  <div key={f.label} className={`bg-[#F8F5F0] rounded-xl p-3 ${f.label === 'Location' ? 'col-span-2' : ''}`}>
                    <div className="text-xs text-gray-400 mb-0.5">{f.label}</div>
                    <div className="text-sm font-medium text-gray-800">{f.val}</div>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline justify-between mb-5 px-1">
                <span className="text-sm text-gray-500">Estimated Price</span>
                <span className="font-display text-3xl font-bold text-gold-gradient">₱8,799</span>
              </div>

              <button className="btn-gold text-white font-semibold w-full py-3.5 rounded-full text-sm tracking-wide">
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs tracking-widest uppercase text-gray-500">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#A08E98] to-transparent" />
      </div>
    </section>
  )
}

function Packages() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="packages" className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#A08E98]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-medium tracking-widest text-[#85717D] uppercase">Our Offerings</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Packages</h2>
          <div className="gold-divider mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">Thoughtfully curated packages for every occasion and guest size.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`card-hover bg-white rounded-[20px] overflow-hidden cursor-pointer ${hovered === i ? 'ring-1 ring-[#A08E98]/40' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-48 bg-[#EADBC8]">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#85717D] text-xs font-semibold px-3 py-1 rounded-full">
                  {pkg.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-[#A08E98]">{pkg.price}</span>
                </div>
                <span className="inline-block text-xs text-gray-400 mb-4">{pkg.pax}</span>
                <ul className="space-y-2 mb-5">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold text-white font-semibold w-full py-3 rounded-full text-xs tracking-wide"
                >
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PerfumeCollection() {
  const [selected, setSelected] = useState<string[]>([])
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Floral', 'Woody', 'Fresh', 'Sweet']
  const filtered = filter === 'All' ? perfumes : perfumes.filter(p => p.category === filter)

  const toggle = (name: string) => {
    setSelected(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name])
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F8F5F0] border border-[#A08E98]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-medium tracking-widest text-[#85717D] uppercase">Curated Selection</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Perfume Collection</h2>
          <div className="gold-divider mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">Choose from our hand-picked selection of luxury-inspired fragrances.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'btn-gold text-white shadow-md'
                  : 'bg-[#F8F5F0] text-gray-600 hover:border-[#A08E98] hover:text-[#A08E98]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filtered.map(p => {
            const isSelected = selected.includes(p.name)
            return (
              <div
                key={p.name}
                className={`card-hover bg-[#F8F5F0] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-200 ${isSelected ? 'ring-2 ring-[#A08E98]' : ''}`}
                onClick={() => toggle(p.name)}
              >
                <div className="h-40 bg-[#EADBC8]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[p.category]}`}>
                    {p.category}
                  </span>
                  <h4 className="font-display font-semibold text-gray-900 text-sm mt-2 mb-3 leading-tight">{p.name}</h4>
                  <button
                    className={`w-full py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#A08E98] text-white'
                        : 'border border-[#A08E98]/40 text-[#85717D] hover:bg-[#A08E98] hover:text-white'
                    }`}
                  >
                    {isSelected ? '✓ Selected' : 'Select'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {selected.length > 0 && (
          <div className="mt-8 p-4 bg-[#F8F5F0] rounded-[16px] flex items-center justify-between flex-wrap gap-4">
            <span className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{selected.length}</span> scent{selected.length > 1 ? 's' : ''} selected: {selected.join(', ')}
            </span>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold text-white text-xs font-semibold px-6 py-2.5 rounded-full"
            >
              Book with These Scents
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function WhyChoose() {
  return (
    <section id="about" className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-[#A08E98]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-medium tracking-widest text-[#85717D] uppercase">Why We're Different</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose<br />
              <span className="italic text-gold-gradient">Inea Scents?</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#A08E98] mb-6" />
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              We don't just set up a perfume station — we craft an experience that elevates every event into a memory your guests will carry with them forever.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide inline-block"
            >
              Start Planning
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`card-hover bg-white rounded-[20px] p-6 shadow-sm ${i === 1 ? 'mt-6' : ''} ${i === 3 ? '-mt-6' : ''}`}
              >
                <div className="w-12 h-12 bg-[#F8F5F0] rounded-2xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F8F5F0] border border-[#A08E98]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-medium tracking-widest text-[#85717D] uppercase">Simple Process</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="gold-divider mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">From first inquiry to unforgettable event — five simple steps.</p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#A08E98]/40 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center flex-1 relative px-2">
              <div className="w-20 h-20 rounded-full btn-gold flex flex-col items-center justify-center mb-4 shadow-lg shadow-[#A08E98]/25 relative z-10 bg-white">
                <span className="font-display text-xl font-bold text-white">{step.num}</span>
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden xl:block absolute top-9 -right-3 text-[#A08E98]/40 text-2xl">›</div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full btn-gold flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="font-display text-base font-bold text-white">{step.num}</span>
              </div>
              <div className="pt-2">
                <h3 className="font-display font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#A08E98]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-medium tracking-widest text-[#85717D] uppercase">Our Work</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="gold-divider mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">Every event is a story. Here are some of our favorites.</p>
        </div>

        <div className="masonry">
          {galleryImages.map((img, i) => (
            <div key={i} className="masonry-item card-hover rounded-[16px] overflow-hidden bg-[#EADBC8]">
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-auto object-cover block transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F8F5F0] border border-[#A08E98]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-medium tracking-widest text-[#85717D] uppercase">Client Stories</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <div className="gold-divider mb-4" />
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
            <span className="text-gray-600 font-semibold">4.9 / 5.0</span>
            <span className="text-gray-400 text-sm">· 500+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-hover bg-[#F8F5F0] rounded-[20px] p-7">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 font-display italic">
                "{t.review}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-[#EADBC8]">
                <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#A08E98]/30" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-[#85717D]">{t.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-[#A08E98]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-medium tracking-widest text-[#85717D] uppercase">Get in Touch</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Book Your Event</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm">
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handle} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#F8F5F0] border border-transparent focus:border-[#A08E98] outline-none rounded-xl px-4 py-3 text-sm text-gray-800 transition-colors"
                    placeholder="Maria Santos"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#F8F5F0] border border-transparent focus:border-[#A08E98] outline-none rounded-xl px-4 py-3 text-sm text-gray-800 transition-colors"
                    placeholder="maria@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#F8F5F0] border border-transparent focus:border-[#A08E98] outline-none rounded-xl px-4 py-3 text-sm text-gray-800 transition-colors"
                    placeholder="+63 912 345 6789"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">Event Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-[#F8F5F0] border border-transparent focus:border-[#A08E98] outline-none rounded-xl px-4 py-3 text-sm text-gray-800 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#F8F5F0] border border-transparent focus:border-[#A08E98] outline-none rounded-xl px-4 py-3 text-sm text-gray-800 transition-colors resize-none"
                  placeholder="Tell us about your event — guest count, venue, theme..."
                />
              </div>
              <button
                type="submit"
                className={`btn-gold text-white font-semibold w-full py-4 rounded-full text-sm tracking-wide transition-all ${sent ? 'opacity-70' : ''}`}
              >
                {sent ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="relative rounded-[20px] overflow-hidden bg-[#EADBC8] h-52">
              <img
                src="https://images.unsplash.com/photo-1613128517587-08dc18819ebe?w=700&h=400&fit=crop&auto=format"
                alt="Event venue map area"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-2xl px-5 py-3 flex items-center gap-2">
                  <MapPinIcon />
                  <span className="text-sm font-semibold text-gray-800">Metro Manila, Philippines</span>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm space-y-4">
              {[
                { icon: <PhoneIcon />, label: 'Phone', val: '+63 912 345 6789' },
                { icon: <MailIcon />, label: 'Email', val: 'hello@ineascents.com' },
                { icon: <MapPinIcon />, label: 'Location', val: 'Metro Manila, Philippines' },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F8F5F0] rounded-xl flex items-center justify-center text-[#A08E98]">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{c.label}</div>
                    <div className="text-sm font-medium text-gray-800">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials + hours */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <div className="flex gap-3 mb-5">
                {[
                  { icon: <FacebookIcon />, label: 'Facebook', handle: 'ineascents' },
                  { icon: <InstagramIcon />, label: 'Instagram', handle: '@ineascents' },
                ].map(s => (
                  <div key={s.label} className="flex-1 bg-[#F8F5F0] rounded-xl p-3 flex items-center gap-2">
                    <span className="text-[#A08E98]">{s.icon}</span>
                    <div>
                      <div className="text-[10px] text-gray-400">{s.label}</div>
                      <div className="text-xs font-medium text-gray-700">{s.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#F8F5F0] pt-4">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Business Hours</div>
                <div className="text-sm text-gray-700">Monday – Saturday: 9:00 AM – 7:00 PM</div>
                <div className="text-sm text-gray-400">Sunday: By appointment only</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl font-semibold mb-1">Stay in the loop</h4>
            <p className="text-gray-400 text-sm">Get exclusive offers and event inspiration.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 bg-white/10 border border-white/10 focus:border-[#A08E98] outline-none rounded-full px-5 py-3 text-sm text-white placeholder:text-gray-500 transition-colors"
            />
            <button className="btn-gold text-white font-semibold px-6 py-3 rounded-full text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full btn-gold flex items-center justify-center">
                <span className="text-white text-xs font-display font-bold">IS</span>
              </div>
              <span className="font-display font-semibold text-lg tracking-wide">Inea Scents</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Premium mobile perfume bar experiences for every celebration across Metro Manila.
            </p>
            <div className="flex gap-3">
              {[<FacebookIcon />, <InstagramIcon />].map((Icon, i) => (
                <button key={i} className="w-9 h-9 border border-white/10 hover:border-[#A08E98] rounded-full flex items-center justify-center text-gray-400 hover:text-[#A08E98] transition-colors">
                  {Icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Quick Links</h5>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l}>
                  <button onClick={() => scrollTo(l)} className="text-sm text-gray-400 hover:text-[#A08E98] transition-colors">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Packages</h5>
            <ul className="space-y-2.5">
              {packages.map(p => (
                <li key={p.name}>
                  <button onClick={() => scrollTo('packages')} className="text-sm text-gray-400 hover:text-[#A08E98] transition-colors">
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Legal</h5>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map(l => (
                <li key={l}>
                  <button className="text-sm text-gray-400 hover:text-[#A08E98] transition-colors">{l}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Inea Scents. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 font-display italic">
            Crafting unforgettable scent experiences.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Packages />
      <PerfumeCollection />
      <WhyChoose />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
