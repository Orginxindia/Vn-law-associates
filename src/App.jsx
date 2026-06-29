import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from '@widgets/Hero';
import StatsBar from '@widgets/StatsBar';
import SectionDivider from './components/SectionDivider';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

function App() {
  const [loading, setLoading] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = useCallback((message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
  }, []);

  const handleContactSubmit = useCallback(() => {
    showToast("Your consultation request has been submitted! We'll contact you within 2 hours.");
  }, [showToast]);

  // Loader timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Lock scroll while loading
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  // Reduced motion preference
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return (
    <>
      {/* Animated Preloader Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-950 text-amber-100 select-none pointer-events-auto"
          >
            <div className="relative flex flex-col items-center">
              {/* Pulsing law firm monogram */}
              <motion.div 
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-850 border border-neutral-800 flex items-center justify-center shadow-2xl mb-4 relative"
              >
                <img src="/images/logo.png" className="w-11 h-11 object-contain rounded-lg bg-white p-0.5" alt="VN Law Logo" />
                {/* Circular pulsing ring */}
                <motion.div 
                  animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-2xl border-2 border-amber-400/20"
                />
              </motion.div>
              
              {/* Text label & Loading Track */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="flex flex-col items-center gap-1"
              >
                <h2 className="font-bricolage font-bold text-xs tracking-[0.2em] text-amber-300 uppercase">VN LAW FIRM</h2>
                <div className="w-24 h-[1.5px] bg-neutral-850 relative overflow-hidden mt-1 rounded-full">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-amber-400"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <StatsBar />

      <About />
      <SectionDivider />

      <Services />
      <SectionDivider />

      <Process />
      <SectionDivider />

      <Team />
      <SectionDivider />

      <Testimonials />
      <SectionDivider />

      <FAQ />
      <SectionDivider />

      <Contact onSubmit={handleContactSubmit} />
      <Footer />
      <Toast message={toastMessage} visible={toastVisible} />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919003617313?text=Hello%20VN%20Law%20Firm%2C%20I%20would%20like%20to%20schedule%20a%20free%20legal%20consultation.%0A%0AName%3A%20%0ACase%20Type%3A%20%0AMessage%3A%20" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-neutral-950 hover:bg-neutral-900 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group border border-neutral-800"
        title="Chat with us on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl" />
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl transition-all duration-300 origin-right whitespace-nowrap border border-neutral-850">
          Chat on WhatsApp
        </span>
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full border-2 border-white/10 animate-ping -z-10" />
      </a>
    </>
  );
}

export default App;
