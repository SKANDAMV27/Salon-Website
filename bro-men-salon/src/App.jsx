import { useState } from 'react'
import { Menu, X, ArrowUpRight, Scissors, Clock3, MapPin, Phone, Instagram, Star, Check } from 'lucide-react'

const services = [
  { number: '01', name: 'Classic Haircut', desc: 'A clean, timeless cut tailored to your style.', price: '₹100', icon: '✂' },
  { number: '02', name: 'Premium Haircut', desc: 'Modern styling with attention to every detail.', price: '₹150', icon: '✦' },
  { number: '03', name: 'Beard Trim', desc: 'Sharp lines and a neat, well-shaped beard.', price: '₹50', icon: '◈' },
  { number: '04', name: 'Haircut + Beard', desc: 'The complete fresh look in one visit.', price: '₹150', icon: '✧' },
  { number: '05', name: 'Clean Shave', desc: 'A smooth, refreshed finish.', price: '₹50', icon: '〰' },
  { number: '06', name: 'Hair Styling', desc: 'Finish your look for everyday or special days.', price: '₹100', icon: '✦' },
]

const gallery = [
  { image: 'photo-1621605815971-fbc98d665033', label: 'Precision fades' },
  { image: 'photo-1503951914875-452162b0f3f1', label: 'The barber experience' },
  { image: 'photo-1599351431202-1e0f0137899a', label: 'Modern styling' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Gallery', '#gallery'], ['Contact', '#contact']]
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="topline"><span>MEN'S GROOMING • BETTAMAKKI, THIRTHAHALLI</span><span className="topline-right"><Clock3 size={13} /> Walk-ins welcome</span></div>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Bro Men Salon home">
          <span className="brand-mark"><Scissors size={25} strokeWidth={1.5} /></span>
          <span className="brand-words"><strong>BRO MEN</strong><small>S A L O N</small></span>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Visit us <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="Barber carefully styling a men's haircut" />
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="eyebrow"><span /> YOUR NEIGHBOURHOOD BARBER</div>
            <h1>LOOK SHARP.<br /><em>FEEL</em> DIFFERENT.</h1>
            <p>Good hair. Great confidence. Your everyday grooming spot in Bettamakki, Thirthahalli.</p>
            <div className="hero-actions"><a className="button button-gold" href="#services">Explore services <ArrowUpRight size={17} /></a><a className="text-link" href="#about">Discover our salon <span>↓</span></a></div>
            <div className="hero-note"><span className="note-line" /> THE DETAILS MAKE THE DIFFERENCE</div>
          </div>
          <div className="hero-side-label">BRO MEN SALON <span>—</span> THIRTHAHALLI</div>
          <div className="hero-counter"><strong>01</strong><span> / </span> THE GROOMING EXPERIENCE</div>
        </section>

        <section className="trust-strip">
          <div><Scissors /><span>Sharp cuts</span></div><i />
          <div><Star /><span>Personal style</span></div><i />
          <div><Check /><span>Friendly service</span></div><i />
          <div><MapPin /><span>Local to you</span></div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-kicker">01 / A LITTLE ABOUT US</div>
          <div className="about-grid">
            <div className="about-title"><h2>MORE THAN A<br />HAIRCUT. <em>IT'S YOUR</em><br />SIGNATURE.</h2><div className="gold-rule" /></div>
            <div className="about-copy"><p className="lead">At Bro Men Salon, we believe looking good should feel easy.</p><p>From a fresh everyday cut to a sharper new style, we're here to help you look and feel your best. Drop in, take a seat, and let us take care of the details.</p><div className="location-chip"><MapPin size={17} /><span>Bettamakki, Thirthahalli, Karnataka</span></div></div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading"><div><div className="section-kicker">02 / THE MENU</div><h2>THE RIGHT CUT.<br /><em>THE RIGHT PRICE.</em></h2></div><p>Simple services, careful work, and a look that feels like you.</p></div>
          <div className="service-grid">{services.map(s => <article className="service-card" key={s.number}><div className="service-top"><span className="service-number">{s.number}</span><span className="service-icon">{s.icon}</span></div><h3>{s.name}</h3><p>{s.desc}</p><div className="service-bottom"><span>Starting from</span><strong>{s.price}</strong></div></article>)}</div>
          <p className="price-note">*Prices shown are sample prices for the website design. Please confirm with the salon before publishing.</p>
        </section>

        <section className="statement"><div className="statement-mark">“</div><p>A GOOD HAIRCUT<br />IS A <em>CONFIDENCE</em><br />BOOST YOU CAN WEAR.</p><span>BRO MEN SALON · THIRTHAHALLI</span></section>

        <section className="gallery section-pad" id="gallery">
          <div className="section-heading"><div><div className="section-kicker">03 / THE LOOK</div><h2>FRESH CUTS.<br /><em>FRESH ENERGY.</em></h2></div><p>Find your next look. Bring your inspiration. Let's make it yours.</p></div>
          <div className="gallery-grid">{gallery.map((g, i) => <div className={`gallery-item gallery-item-${i + 1}`} key={g.image}><img src={`https://images.unsplash.com/${g.image}?auto=format&fit=crop&w=900&q=85`} alt={g.label} loading="lazy" /><div className="gallery-caption"><span>0{i + 1}</span><strong>{g.label}</strong><ArrowUpRight size={18} /></div></div>)}</div>
        </section>

        <section className="visit section-pad" id="contact">
          <div className="visit-card"><div className="visit-left"><div className="section-kicker">04 / COME ON IN</div><h2>YOUR CHAIR<br />IS <em>WAITING.</em></h2><p>Ready for a fresh look? Stop by Bro Men Salon. We'd be happy to see you.</p><a className="button button-gold" href="https://www.google.com/maps/search/?api=1&query=Bro+Men+Salon+Bettamakki+Thirthahalli" target="_blank" rel="noreferrer">Find us on Maps <ArrowUpRight size={17} /></a></div><div className="visit-details"><div className="detail-row"><MapPin /><div><small>FIND US</small><strong>Bettamakki, Thirthahalli</strong><span>Karnataka, India</span></div></div><div className="detail-row"><Clock3 /><div><small>OPENING HOURS</small><strong>Hours to be confirmed</strong><span>Please check in with the salon</span></div></div><div className="detail-row"><Phone /><div><small>CALL / WHATSAPP</small><strong>Contact number coming soon</strong><span>Add the salon's number to enable booking</span></div></div></div></div>
        </section>
      </main>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Scissors size={23} strokeWidth={1.5} /></span><span className="brand-words"><strong>BRO MEN</strong><small>S A L O N</small></span></a><p>Good grooming. Good energy. Every day.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} Bro Men Salon</span><span>BETTAMAKKI · THIRTHAHALLI, KARNATAKA</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </div>
  )
}

export default App
