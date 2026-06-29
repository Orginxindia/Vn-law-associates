const TESTIMONIALS = [
  { quote: "VN Law Firm handled our $200M merger with extraordinary precision. Their attention to detail and strategic negotiation saved us millions. Absolutely world-class corporate counsel.", name: 'Robert Aldridge', role: 'CEO, TechVenture Inc.', img: 'https://picsum.photos/seed/ceo1/40/40.jpg?q=80' },
  { quote: "When I was wrongfully terminated, VN Law Firm fought tirelessly for me. They secured a $3.2M settlement that changed my life. I can't recommend them enough.", name: 'Maria Gonzalez', role: 'Former VP, Global Corp', img: 'https://picsum.photos/seed/client5/40/40.jpg?q=80' },
  { quote: "The immigration team at VN Law made my dream of becoming a U.S. citizen a reality. Their compassion and expertise turned an overwhelming process into a smooth journey.", name: 'Ahmed Hassan', role: 'Software Engineer', img: 'https://picsum.photos/seed/client6/40/40.jpg?q=80' },
  { quote: "They defended me against federal charges with unmatched skill. The outcome was a full acquittal. VN Law Firm literally saved my life and my family's future.", name: 'James Patterson', role: 'Business Owner', img: 'https://picsum.photos/seed/client7/40/40.jpg?q=80' },
  { quote: "Our patent portfolio went from zero to 47 patents under VN Law's guidance. Sarah Chen and her IP team are simply the best in the business. Period.", name: 'Dr. Lisa Park', role: 'CTO, BioGenesis Labs', img: 'https://picsum.photos/seed/cto1/40/40.jpg?q=80' },
  { quote: "During my divorce, Priya Sharma handled everything with grace and ferocity. She protected my children's future and secured a fair settlement. Forever grateful.", name: 'Jennifer Torres', role: 'Entrepreneur', img: 'https://picsum.photos/seed/client8/40/40.jpg?q=80' },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fas fa-star text-amber-400 text-xs"></i>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 3);
  const row2 = TESTIMONIALS.slice(3, 6);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left var(--speed, 35s) linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right var(--speed, 35s) linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
      `}</style>

      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-neutral-900/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block"></span>
            Client Testimonials
          </div>
          <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
            What Our Clients <span className="text-neutral-900">Say</span>
          </h2>
        </div>
      </div>

      {/* Double Row Infinite Marquee */}
      <div className="marquee-container space-y-6 w-full overflow-hidden marquee-mask relative select-none">
        
        {/* Row 1 (Scrolling Left) */}
        <div className="flex w-max">
          <div className="animate-marquee-left marquee-track flex gap-6 pr-6">
            {[...row1, ...row1, ...row1].map((t, idx) => (
              <div 
                key={`${t.name}-row1-${idx}`} 
                className="testimonial-card flex-shrink-0 w-[290px] md:w-[350px] bg-neutral-50/20 border border-neutral-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 cursor-pointer"
              >
                <div className="quote-mark text-neutral-250 select-none">"</div>
                <Stars />
                <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-5 min-h-[72px] line-clamp-3 select-text">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} className="w-9 h-9 rounded-full object-cover border border-neutral-100" alt={t.name} loading="lazy" />
                  <div>
                    <div className="text-neutral-900 text-sm font-semibold">{t.name}</div>
                    <div className="text-neutral-500 text-[10px] md:text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="flex w-max">
          <div className="animate-marquee-right marquee-track flex gap-6 pr-6">
            {[...row2, ...row2, ...row2].map((t, idx) => (
              <div 
                key={`${t.name}-row2-${idx}`} 
                className="testimonial-card flex-shrink-0 w-[290px] md:w-[350px] bg-neutral-50/20 border border-neutral-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 cursor-pointer"
              >
                <div className="quote-mark text-neutral-250 select-none">"</div>
                <Stars />
                <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-5 min-h-[72px] line-clamp-3 select-text">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} className="w-9 h-9 rounded-full object-cover border border-neutral-100" alt={t.name} loading="lazy" />
                  <div>
                    <div className="text-neutral-900 text-sm font-semibold">{t.name}</div>
                    <div className="text-neutral-500 text-[10px] md:text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
