const STEPS = [
  { num: '01', title: 'Initial Consultation', desc: "We begin with a comprehensive, confidential consultation to understand your situation, assess your legal standing, and identify the best path forward—at no cost to you." },
  { num: '02', title: 'Strategic Case Analysis', desc: "Our legal team conducts an in-depth investigation, gathers evidence, reviews precedents, and develops a tailored strategy designed to maximize your outcome." },
  { num: '03', title: 'Aggressive Execution', desc: "We execute our strategy with precision—filing motions, negotiating settlements, or taking your case to trial with the full force of our resources and expertise." },
  { num: '04', title: 'Resolution & Beyond', desc: "We secure the best possible resolution and continue to support you with post-judgment enforcement, appeals if necessary, and ongoing legal counsel." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="section-label mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block"></span>
              Our Process
            </div>
            <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
              How We <span className="text-neutral-900">Deliver Results</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-8">
              Our proven four-step methodology ensures every case receives the meticulous attention and strategic thinking it deserves.
            </p>
            <div>
              <img src="/images/office_setup.jpg" className="w-full h-auto rounded-2xl border border-neutral-200/50 shadow-md" alt="VN Law Firm Office Setup" loading="lazy" />
            </div>
          </div>
          <div className="space-y-10">
            {STEPS.map((step) => (
              <div key={step.num} className="process-step">
                <div className="process-dot"></div>
                <div className="glass rounded-xl p-6">
                  <div className="text-neutral-900 font-bricolage font-bold text-sm mb-2">Step {step.num}</div>
                  <h3 className="font-bricolage font-semibold text-xl text-neutral-900 mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
