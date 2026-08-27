import { useState, useEffect } from 'react'

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

function Logo() {
  return (
    <div className="inline-flex items-baseline justify-center cursor-pointer group hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <span className="font-logo-sans text-3xl font-bold tracking-[0.15em] text-cream">INEA</span>
      <span className="font-logo-script -ml-[0.85em] translate-y-[35%] text-4xl text-cream">Scents</span>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' })
  const [showModal, setShowModal] = useState(false)
  const handle = (e: React.FormEvent) => { e.preventDefault(); setShowModal(true); }
  
  const labelClass = "text-xs font-bold uppercase tracking-[0.2em] mb-3 block text-cream/60"
  const inputClass = "w-full bg-transparent border-b border-cream/20 focus:border-cream focus:ring-0 outline-none px-0 py-3 text-lg text-cream placeholder-cream/20 transition-colors rounded-none"

  // Date constraint: today
  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      <form onSubmit={handle} className="space-y-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <label className={labelClass}>Full Name</label>
            <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Maria Santos" />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="maria@email.com" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <label className={labelClass}>Phone</label>
            <input type="tel" required pattern="[\+0-9\s\-]+" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+63 912 345 6789" />
          </div>
          <div>
            <label className={labelClass}>Event Date</label>
            <input type="date" required min={today} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className={inputClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Details</label>
          <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-y border-b min-h-[100px]`} placeholder="Tell us about your event..." />
        </div>
        <div className="pt-8">
          <button type="submit" className="bg-cream text-primary w-full py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-cream/90 transition-all">
            Reserve Your Date
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/80 backdrop-blur-md transition-opacity">
          <div className="bg-primary-dark max-w-lg w-full p-12 text-center border border-cream/10">
            <h3 className="font-logo-sans text-4xl font-bold uppercase tracking-tighter mb-4 text-cream">Request Received</h3>
            <p className="text-cream/80 font-light text-lg mb-10 leading-relaxed">
              Your inquiry has been secured. Our Scent Concierge will contact you within 24 hours to begin crafting your bespoke bar.
            </p>
            <button 
              onClick={() => { setShowModal(false); setForm({ name: '', email: '', phone: '', date: '', message: '' }) }}
              className="bg-cream text-primary px-10 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-cream/90 transition-all"
            >
              Return
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-primary text-cream selection:bg-cream selection:text-primary font-body">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-primary/90 backdrop-blur-md border-cream/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Logo />
          <button onClick={() => document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' })} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-cream/80 transition-colors">
            Inquire
          </button>
        </div>
      </nav>

      <main className="pt-32">
        {/* The Velvet Typographic Grid - Hero */}
        <header className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-32 relative">
          <div className="relative z-10">
            <h1 className="font-logo-sans text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase opacity-90 break-words mix-blend-screen">
              THE<br/>BESPOKE
            </h1>
            <div className="relative h-24 sm:h-32 md:h-40 -mt-8 md:-mt-16 lg:-mt-24 z-20 pointer-events-none">
              <span className="font-logo-script text-[15vw] leading-none text-accent absolute left-[10%] transform -rotate-3 mix-blend-screen">
                Fragrance
              </span>
            </div>
            <h1 className="font-logo-sans text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase opacity-90 break-words text-right mt-12 md:mt-0">
              EXPERIENCE
            </h1>
          </div>
          
          <div className="mt-32 max-w-2xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-cream/90">
              A curated olfactory journey for the discerning guest. We bring the luxury perfumery directly to your event, crafting memories in real-time.
            </p>
          </div>
        </header>

        {/* The Typographic Manifesto (Replacing the Stat Block) */}
        <section className="border-y border-cream/10 py-32 bg-primary-dark/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 relative group">
                <div className="aspect-[3/4] bg-cream/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1615160460366-2c9a41771b51?w=800&auto=format" alt="Luxury perfume bottle" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
                </div>
              </div>
              <div className="md:col-span-7 md:pl-12">
                <h2 className="font-logo-sans text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-none">Not Just a Favor.<br/>A Ritual.</h2>
                <div className="space-y-8 text-lg font-light text-cream/80 leading-relaxed max-w-xl">
                  <p>
                    We have completely dismantled the traditional event favor. Instead of a forgotten keepsake, your guests are invited to a highly curated perfume bar.
                  </p>
                  <p>
                    Guided by our professional Scent Concierge, they will explore over forty luxury-inspired fragrances, ultimately taking home a 10ml customized bottle tailored to their exact preference.
                  </p>
                  <div className="pt-8 border-t border-cream/20">
                    <div className="flex items-end gap-6">
                      <div className="font-logo-sans text-4xl font-bold uppercase tracking-tight">₱8,799</div>
                      <div className="text-xs font-bold uppercase tracking-[0.2em] pb-1.5 text-cream/50">Base Investment (100 Bottles)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Section */}
        <section id="inquire" className="py-40">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-24">
              <h2 className="font-logo-sans text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Initiate</h2>
              <p className="text-cream/70 text-lg font-light">Secure your date and allow us to begin crafting your bespoke bar.</p>
            </div>
            
            <div className="pt-8">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-cream/10 bg-primary-dark/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo />
          
          <div className="flex items-center gap-6 text-cream/60">
            <div className="text-xs font-bold uppercase tracking-[0.2em]">Manila, Philippines</div>
            <div className="w-1 h-1 rounded-full bg-cream/30"></div>
            <a href="#" className="hover:text-cream/80 transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-cream/80 transition-colors"><FacebookIcon /></a>
          </div>
          
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40">
            © 2026 Inea Scents
          </div>
        </div>
      </footer>
    </div>
  )
}
