import { useState, useCallback, useEffect } from 'react';

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

  // Reduced motion preference
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
