import { useState, useCallback } from 'react';

const FAQ_DATA = [
  { q: 'How much does an initial consultation cost?', a: "Your initial consultation is completely free. We believe everyone deserves access to legal guidance without financial barriers. During this meeting, we'll assess your case, explain your options, and provide a clear fee structure if you choose to proceed with us." },
  { q: 'What are your fee structures?', a: "We offer flexible fee arrangements including hourly billing, flat fees for specific matters, contingency fees (where you pay nothing unless we win), and hybrid structures. We'll recommend the most cost-effective approach for your specific situation during your consultation." },
  { q: 'How long does a typical case take?', a: "Case duration varies significantly by practice area and complexity. Simple matters may resolve in weeks, while complex litigation can take months to years. We provide realistic timelines during your consultation and keep you updated at every stage of your case." },
  { q: 'Do you handle cases outside your listed practice areas?', a: "While our 12 core practice areas cover the vast majority of legal needs, we also handle specialized matters including environmental law, healthcare law, entertainment law, and international arbitration. Contact us to discuss your specific situation." },
  { q: 'Can I schedule a consultation outside business hours?', a: "Absolutely. We understand that legal issues don't follow a 9-to-5 schedule. We offer evening and weekend consultations, and our emergency line is always available for urgent matters. Your case is our priority, whatever the hour." },
  { q: 'What makes VN Law Firm different from other firms?', a: "Three things set us apart: our 98.7% success rate across all practice areas, our client-first approach where you always have direct access to your attorney, and our interdisciplinary team structure that brings multiple perspectives to every case. We don't just practice law—we deliver outcomes." },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = useCallback((idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-neutral-950 text-white border-t border-b border-neutral-900 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-350 text-xs font-semibold tracking-wider uppercase mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            FAQ
          </div>
          <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6 text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border border-neutral-800/80 rounded-xl overflow-hidden bg-neutral-900/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 group ${
                  isActive ? 'border-white/25 bg-neutral-900/25 shadow-lg shadow-white/[0.005]' : ''
                }`}
              >
                {/* Header */}
                <div 
                  className="p-5 md:p-6 cursor-pointer flex items-center justify-between gap-4 select-none" 
                  onClick={() => toggle(idx)}
                >
                  <span className={`font-medium text-sm md:text-base transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-neutral-200 group-hover:text-white'
                  }`}>
                    {item.q}
                  </span>
                  <i className={`fas fa-chevron-down text-xs text-neutral-450 transition-all duration-500 ${
                    isActive ? 'rotate-180 text-white' : 'group-hover:text-neutral-200'
                  }`}></i>
                </div>

                {/* Body (Accordion Panel) */}
                <div 
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] px-5 md:px-6"
                  style={{
                    maxHeight: isActive ? '300px' : '0px',
                    paddingBottom: isActive ? '20px' : '0px'
                  }}
                >
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed border-t border-neutral-800/60 pt-4 select-text">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
