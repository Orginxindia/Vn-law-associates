import { useState, useCallback } from 'react';

const FAQ_DATA = [
  { q: 'How much does an initial consultation cost?', a: "Your initial consultation is completely free. We believe everyone deserves access to legal guidance without financial barriers. During this meeting, we'll assess your case, explain your options, and provide a clear fee structure if you choose to proceed with us." },
  { q: 'What are your fee structures?', a: "We offer flexible fee arrangements including hourly billing, flat fees for specific matters, contingency fees (where you pay nothing unless we win), and hybrid structures. We'll recommend the most cost-effective approach for your specific situation during your consultation." },
  { q: 'How long does a typical case take?', a: "Case duration varies significantly by practice area and complexity. Simple matters may resolve in weeks, while complex litigation can take months to years. We provide realistic timelines during your consultation and keep you updated at every stage of your case." },
  { q: 'Do you handle cases outside your listed practice areas?', a: "While our 12 core practice areas cover the vast majority of legal needs, we also handle specialized matters including environmental law, healthcare law, entertainment law, and international arbitration. Contact us to discuss your specific situation." },
  { q: 'Can I schedule a consultation outside business hours?', a: "Absolutely. We understand that legal issues don't follow a 9-to-5 schedule. We offer evening and weekend consultations, and our emergency line is available 24/7 for urgent matters. Your case is our priority, whatever the hour." },
  { q: 'What makes VN Law Firm different from other firms?', a: "Three things set us apart: our 98.7% success rate across all practice areas, our client-first approach where you always have direct access to your attorney, and our interdisciplinary team structure that brings multiple perspectives to every case. We don't just practice law—we deliver outcomes." },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = useCallback((idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="section-label mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block"></span>
            FAQ
          </div>
          <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
            Frequently Asked <span className="text-neutral-900">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} className={`faq-item${activeIndex === idx ? ' active' : ''}`}>
              <div className="faq-header" onClick={() => toggle(idx)}>
                <span className="text-neutral-900 font-medium text-sm md:text-base">{item.q}</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-body">
                <p className="text-neutral-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
