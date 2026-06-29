const TESTIMONIALS = [
  { quote: "VN Law Firm helped me resolve a complex ancestral land dispute in Madurai that was pending for years. Thiru Nagendran sir's team was very patient and professional. I am highly relieved.", name: 'Thiru. K. Ranganathan', role: 'Retired Headmaster, Madurai', img: 'https://picsum.photos/seed/client1/40/40.jpg?q=80' },
  { quote: "We hired VN Law for our textile partnership agreement and commercial compliance. They completed the work quickly and explained all legal terms in simple language. Exceptional service!", name: 'Mrs. S. Meenakshi', role: 'Partner, Meenakshi Textiles', img: 'https://picsum.photos/seed/client2/40/40.jpg?q=80' },
  { quote: "Advocate Nagendran sir and his team handled a contract dispute for us at the district court. Their strategic approach and dedication saved us from a huge financial loss.", name: 'Mr. A. Joseph', role: 'Civil Contractor, KK Nagar', img: 'https://picsum.photos/seed/client3/40/40.jpg?q=80' },
  { quote: "Excellent service for property due diligence. Before purchasing our clinic expansion land, VN Law verified all mother documents dating back 40 years. Highly recommend their real estate team.", name: 'Dr. R. Karthik', role: 'Consultant Surgeon, Madurai', img: 'https://picsum.photos/seed/client4/40/40.jpg?q=80' },
  { quote: "During a difficult family dispute, the lawyers here provided empathetic support and handled child custody matters with absolute discretion and care. Forever grateful to the team.", name: 'Mrs. Priya Anand', role: 'IT Professional, Madurai', img: 'https://picsum.photos/seed/client5/40/40.jpg?q=80' },
  { quote: "We regularly consult VN Law Firm for labor law issues and contract drafting. Their advice is practical, direct, and has always protected our interests. Best lawyers in Madurai Bench.", name: 'Thiru. M. Alagarsamy', role: 'MD, Alagar Motors', img: 'https://picsum.photos/seed/client6/40/40.jpg?q=80' },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fas fa-star text-neutral-350 text-xs"></i>
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
                <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-5 select-text">{t.quote}</p>
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
                <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-5 select-text">{t.quote}</p>
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
