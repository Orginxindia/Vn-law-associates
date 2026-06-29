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
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block"></span>
            Client Testimonials
          </div>
          <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
            What Our Clients <span className="text-neutral-900">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="quote-mark">"</div>
              <Stars />
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img src={t.img} className="w-10 h-10 rounded-full object-cover" alt={t.name} loading="lazy" />
                <div>
                  <div className="text-neutral-900 text-sm font-medium">{t.name}</div>
                  <div className="text-neutral-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
