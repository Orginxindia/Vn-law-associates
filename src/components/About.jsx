export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block"></span>
              About VN Law
            </div>
            <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
              A Legacy of <span className="text-neutral-900">Legal Brilliance</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-6">
              Founded over two decades ago, VN Law Firm has grown from a boutique practice into one of the most respected full-service law firms in the nation. Our unwavering commitment to justice, combined with innovative legal strategies, has earned us recognition from top legal directories worldwide.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              We believe that every client deserves world-class representation, regardless of the complexity of their case. Our team of 500+ attorneys brings deep expertise across all major practice areas, ensuring comprehensive legal solutions under one roof.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Chambers Ranked', sub: 'Tier 1 Firm' },
                { title: 'Super Lawyers', sub: '30+ Attorneys Listed' },
                { title: 'AV Preeminent', sub: 'Highest Ethical Standards' },
                { title: 'Best Lawyers®', sub: '2024 Edition' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-900/5 border border-neutral-900/10 text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950 transition-all duration-300 shadow-sm">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <div>
                    <div className="text-neutral-900 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">{item.title}</div>
                    <div className="text-neutral-500 text-xs">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative px-4 lg:px-0">
              <img src="/about_nagendran.jpg" className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-2xl border border-black/5" alt="Advocate V. Nagendran Office" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
