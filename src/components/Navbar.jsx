import { useState, useEffect, useCallback, useRef } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Navbar scroll effect
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ESC to close mobile menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleNavClick = useCallback((e, href) => {
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobile();
  }, [closeMobile]);

  return (
    <>
      {/* ===== NAV ===== */}
      <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md border-b border-black/5 shadow-sm py-3' : 'bg-transparent py-5'}`} id="navbar">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/images/logo.png" className="w-10 h-10 object-contain rounded-lg bg-white p-0.5 shadow-sm border border-neutral-200/50" alt="VN Law Logo" />
            <div className="flex flex-col">
              <span className="font-bricolage font-semibold text-neutral-900 text-sm md:text-base tracking-tight leading-none mb-0.5">VN Law Firm</span>
              <span className="text-neutral-500 text-[10px] md:text-xs font-medium tracking-wider uppercase leading-none">Madurai</span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
            <a href="#process" className="nav-link" onClick={(e) => handleNavClick(e, '#process')}>Process</a>
            <a href="#team" className="nav-link" onClick={(e) => handleNavClick(e, '#team')}>Team</a>
            <a href="#testimonials" className="nav-link" onClick={(e) => handleNavClick(e, '#testimonials')}>Testimonials</a>
            <a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919003617313" className="btn-secondary text-sm !py-2.5 !px-5">
              <i className="fas fa-phone text-xs"></i> Call Us
            </a>
            <a href="#contact" className="btn-primary text-sm !py-2.5 !px-5" onClick={(e) => handleNavClick(e, '#contact')}>
              Free Consultation
            </a>
          </div>
          <button
            id="mobileToggle"
            className="lg:hidden w-10 h-10 rounded-lg bg-neutral-900/5 border border-neutral-900/10 flex items-center justify-center text-neutral-900/70 hover:text-neutral-900 hover:bg-neutral-900/10 transition-all"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(true)}
          >
            <i className="fas fa-bars text-sm"></i>
          </button>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile-menu${mobileOpen ? ' active' : ''}`} id="mobileMenu">
        <button
          id="mobileClose"
          className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-neutral-900/5 border border-neutral-900/10 flex items-center justify-center text-neutral-900/70 hover:text-neutral-900 transition-all"
          aria-label="Close menu"
          onClick={closeMobile}
        >
          <i className="fas fa-times"></i>
        </button>
        <a href="#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
        <a href="#services" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
        <a href="#process" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#process')}>Process</a>
        <a href="#team" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#team')}>Team</a>
        <a href="#testimonials" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#testimonials')}>Testimonials</a>
        <a href="#faq" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a>
        <a href="#contact" className="btn-accent mt-4" onClick={(e) => handleNavClick(e, '#contact')}>Free Consultation</a>
      </div>
    </>
  );
}
