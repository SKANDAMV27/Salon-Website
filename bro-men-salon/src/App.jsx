
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Scissors,
  Clock3,
  MapPin,
  Phone,
  Instagram,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  CalendarDays,
  Sparkles,
  ShieldCheck,
  Award,
  UserRound,
} from "lucide-react";

const services = [
  {
    number: "01",
    name: "Classic Haircut",
    desc: "A clean, timeless cut tailored to your style.",
    price: "₹100",
    icon: "✂",
  },
  {
    number: "02",
    name: "Premium Haircut",
    desc: "A detailed haircut with a refined finish.",
    price: "₹150",
    icon: "✦",
  },
  {
    number: "03",
    name: "Beard Trim",
    desc: "Sharp edges and a perfectly shaped beard.",
    price: "₹50",
    icon: "〰",
  },
  {
    number: "04",
    name: "Haircut + Beard",
    desc: "A complete grooming experience in one visit.",
    price: "₹150",
    icon: "✂",
  },
  {
    number: "05",
    name: "Clean Shave",
    desc: "A smooth, refreshing and clean shave.",
    price: "₹50",
    icon: "◈",
  },
  {
    number: "06",
    name: "Hair Styling",
    desc: "Get the perfect finish for your look.",
    price: "₹100",
    icon: "✧",
  },
];

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    title: "The Classic Cut",
    category: "HAIRCUT",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
    title: "Sharp & Clean",
    category: "GROOMING",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",
    title: "Modern Style",
    category: "STYLING",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=85",
    title: "The Details",
    category: "BARBERING",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer classic haircuts, premium haircuts, beard trimming, clean shaving, hair styling and combined haircut and beard services.",
  },
  {
    question: "Where is Bro Men Salon located?",
    answer:
      "Bro Men Salon is located in Bettamakki, Thirthahalli, Karnataka.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "You can visit the salon directly. Contact us to check availability before visiting.",
  },
  {
    question: "Are the service prices fixed?",
    answer:
      "The prices displayed on this website are sample listed prices. Please confirm the latest prices at the salon.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(
      `reveal-${Math.random().toString(36).slice(2)}`
    );

    // Visibility is handled by the CSS animation when the element enters view.
    // The timeout is intentionally not used for scroll detection.
    setVisible(true);
  }, []);

  return (
    <div
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      setShowTop(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="app">
      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-icon">
              <Scissors size={23} />
            </span>
            <span>
              <strong>BRO MEN</strong>
              <small>MEN'S SALON</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}

            <a
              href="#contact"
              className="nav-appointment"
              onClick={closeMenu}
            >
              Visit Us <ArrowUpRight size={16} />
            </a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-bg" />
          <div className="hero-overlay" />

          <div className="container hero-content">
            <Reveal>
              <div className="hero-label">
                <span className="label-line" />
                THE ART OF MEN'S GROOMING
              </div>

              <h1>
                YOUR STYLE.
                <br />
                <span>YOUR IDENTITY.</span>
              </h1>

              <p className="hero-description">
                More than just a haircut. Experience confident grooming,
                sharp styles and a look that speaks for you.
              </p>

              <div className="hero-actions">
                <a href="#services" className="btn btn-primary">
                  Explore Services <ArrowUpRight size={18} />
                </a>
                <a href="#about" className="btn btn-outline">
                  Discover More
                </a>
              </div>

              <div className="hero-location">
                <MapPin size={16} />
                BETTAMAKKI, THIRTHAHALLI
              </div>
            </Reveal>
          </div>

          <div className="hero-bottom">
            <span>EST. BRO MEN SALON</span>
            <span>CRAFTED FOR CONFIDENCE</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* Trust strip */}
        <section className="trust-strip">
          <div className="container trust-grid">
            <div>
              <Scissors />
              <span>PRECISION CUTS</span>
            </div>
            <div>
              <Sparkles />
              <span>MODERN STYLING</span>
            </div>
            <div>
              <ShieldCheck />
              <span>PERSONAL GROOMING</span>
            </div>
            <div>
              <Award />
              <span>YOUR STYLE MATTERS</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section about-section" id="about">
          <div className="container about-grid">
            <Reveal className="about-image-wrap">
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1000&q=85"
                  alt="Professional barber grooming"
                />
              </div>
              <div className="about-image-label">
                <Scissors size={20} />
                <span>STYLE WITH PURPOSE</span>
              </div>
            </Reveal>

            <Reveal className="about-content" delay={150}>
              <span className="eyebrow">ABOUT BRO MEN</span>
              <h2>
                LOOK GOOD.
                <br />
                <span>FEEL CONFIDENT.</span>
              </h2>

              <p>
                At Bro Men Salon, we believe a great haircut is more than
                appearance. It is about confidence, personality and the
                little details that make your style unique.
              </p>

              <p>
                From timeless haircuts to modern grooming, our focus is on
                helping every customer find a look that suits them.
              </p>

              <div className="about-features">
                <div>
                  <Check />
                  <span>Personalised grooming</span>
                </div>
                <div>
                  <Check />
                  <span>Attention to detail</span>
                </div>
                <div>
                  <Check />
                  <span>Clean and sharp styles</span>
                </div>
              </div>

              <a href="#services" className="text-link">
                Explore our services <ArrowUpRight size={17} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Why choose us */}
        <section className="why-section">
          <div className="container">
            <SectionHeading
              eyebrow="THE BRO MEN EXPERIENCE"
              title="MORE THAN A HAIRCUT."
              description="A grooming experience built around your style and confidence."
            />

            <div className="why-grid">
              {[
                {
                  icon: <UserRound />,
                  title: "Your Style",
                  desc: "A look that matches your personality and preferences.",
                },
                {
                  icon: <Scissors />,
                  title: "Attention to Detail",
                  desc: "Careful cuts and finishing touches for a sharp appearance.",
                },
                {
                  icon: <Sparkles />,
                  title: "Fresh Look",
                  desc: "Refresh your style with modern grooming options.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="why-card">
                    <div className="why-icon">{item.icon}</div>
                    <span className="card-number">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section services-section" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="WHAT WE OFFER"
              title="OUR SERVICES."
              description="The right cut. The right finish. The right confidence."
            />

            <div className="services-grid">
              {services.map((service, index) => (
                <Reveal key={service.number} delay={index * 70}>
                  <div className="service-card">
                    <div className="service-top">
                      <span className="service-number">
                        {service.number}
                      </span>
                      <span className="service-icon">{service.icon}</span>
                    </div>

                    <h3>{service.name}</h3>
                    <p>{service.desc}</p>

                    <div className="service-bottom">
                      <span className="service-price">{service.price}</span>
                      <span className="service-arrow">
                        <ArrowUpRight size={19} />
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="price-note">
              * Prices shown are indicative. Please confirm current pricing
              at the salon.
            </p>
          </div>
        </section>

        {/* Statement */}
        <section className="statement-section">
          <div className="statement-overlay" />
          <div className="container statement-content">
            <Reveal>
              <span className="eyebrow">OWN YOUR LOOK</span>
              <h2>
                CONFIDENCE
                <br />
                STARTS WITH <span>YOU.</span>
              </h2>
              <p>
                Your haircut is your signature. Make every detail count.
              </p>
              <a href="#contact" className="btn btn-primary">
                Find Us <ArrowUpRight size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Experience */}
        <section className="section experience-section">
          <div className="container">
            <SectionHeading
              eyebrow="SIMPLE. COMFORTABLE. PERSONAL."
              title="YOUR VISIT, YOUR WAY."
              description="A straightforward grooming experience from start to finish."
            />

            <div className="experience-grid">
              {[
                ["01", "Walk In", "Visit Bro Men Salon at Bettamakki."],
                ["02", "Choose Your Style", "Tell us the look you want."],
                ["03", "Get Groomed", "Enjoy your selected grooming service."],
                ["04", "Own Your Look", "Step out with a fresh new style."],
              ].map(([number, title, desc], index) => (
                <Reveal key={number} delay={index * 100}>
                  <div className="experience-item">
                    <span>{number}</span>
                    <div className="experience-line" />
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section gallery-section" id="gallery">
          <div className="container">
            <SectionHeading
              eyebrow="OUR STYLE IN FOCUS"
              title="THE GALLERY."
              description="A glimpse into the world of modern men's grooming."
            />

            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="gallery-card">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="gallery-overlay">
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <span className="gallery-index">0{index + 1}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews placeholder */}
        <section className="review-section">
          <div className="container review-content">
            <Reveal>
              <span className="eyebrow">YOUR EXPERIENCE MATTERS</span>
              <h2>
                GOOD STYLE.
                <br />
                <span>GOOD VIBES.</span>
              </h2>
              <p>
                We believe every visit should leave you feeling fresh and
                confident. Visit us and experience Bro Men Salon.
              </p>
              <a href="#contact" className="btn btn-primary">
                Plan Your Visit <ArrowUpRight size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section">
          <div className="container faq-layout">
            <Reveal>
              <span className="eyebrow">NEED TO KNOW?</span>
              <h2>
                FREQUENTLY
                <br />
                <span>ASKED QUESTIONS.</span>
              </h2>
              <p>
                Here are a few helpful details before your visit.
              </p>
            </Reveal>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${
                    activeFaq === index ? "faq-active" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                    aria-expanded={activeFaq === index}
                  >
                    <span>{faq.question}</span>
                    {activeFaq === index ? (
                      <ChevronUp size={19} />
                    ) : (
                      <ChevronDown size={19} />
                    )}
                  </button>

                  {activeFaq === index && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <SectionHeading
              eyebrow="COME SAY HELLO"
              title="LET'S GET YOU LOOKING SHARP."
              description="Your next fresh look is just a visit away."
            />

            <div className="contact-grid">
              <Reveal>
                <div className="contact-card">
                  <div className="contact-icon">
                    <MapPin />
                  </div>
                  <span className="contact-label">OUR LOCATION</span>
                  <h3>Visit Bro Men Salon</h3>
                  <p>Bettamakki, Thirthahalli, Karnataka, India.</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bro+Men+Salon+Bettamakki+Thirthahalli"
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Get Directions <ArrowUpRight size={17} />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="contact-card">
                  <div className="contact-icon">
                    <Clock3 />
                  </div>
                  <span className="contact-label">OPENING HOURS</span>
                  <h3>Plan Your Visit</h3>
                  <p>
                    Please contact the salon to confirm current opening
                    hours.
                  </p>
                  <span className="contact-note">
                    Walk-in availability may vary.
                  </span>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="contact-card">
                  <div className="contact-icon">
                    <Phone />
                  </div>
                  <span className="contact-label">GET IN TOUCH</span>
                  <h3>Let's Connect</h3>
                  <p>
                    Contact details can be added here once the official
                    salon number is available.
                  </p>
                  <span className="contact-note">
                    Phone number not yet provided.
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="contact-cta">
              <div>
                <span className="eyebrow">YOUR STYLE. YOUR STATEMENT.</span>
                <h3>READY FOR A FRESH LOOK?</h3>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bro+Men+Salon+Bettamakki+Thirthahalli"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Bro Men <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <a href="#home" className="brand footer-brand">
              <span className="brand-icon">
                <Scissors size={23} />
              </span>
              <span>
                <strong>BRO MEN</strong>
                <small>MEN'S SALON</small>
              </span>
            </a>

            <p>
              Style is personal. Grooming is an experience. Welcome to
              Bro Men Salon.
            </p>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Bro Men Salon. All rights
              reserved.
            </span>
            <a href="#home">
              BACK TO TOP <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating visit button */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Bro+Men+Salon+Bettamakki+Thirthahalli"
        target="_blank"
        rel="noreferrer"
        className="floating-visit"
        aria-label="Find Bro Men Salon"
      >
        <MapPin size={19} />
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={19} />
        </button>
      )}
    </div>
  );
}
