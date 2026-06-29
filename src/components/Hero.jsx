export default function Hero() {
  return (
    <section className="hero-bg relative min-h-[92vh] flex items-center pt-24 pb-20" aria-label="Hero">
      <div className="deco-ring w-[500px] h-[500px] -top-40 -right-40 opacity-25" style={{ animationDuration: '50s' }}></div>
      <div className="deco-ring w-[300px] h-[300px] bottom-20 -left-20 opacity-15" style={{ animationDirection: 'reverse', animationDuration: '35s' }}></div>
      <div className="absolute top-1/4 right-1/4 deco-dot" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
      <div className="absolute bottom-1/3 left-1/3 deco-dot" style={{ animation: 'float 5s ease-in-out infinite 1s' }}></div>
      <div className="absolute top-1/2 right-1/3 deco-dot" style={{ animation: 'float 6s ease-in-out infinite 2s', width: '3px', height: '3px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div style={{ animation: 'fadeSlideIn 0.8s ease-out 0.1s both' }}>
              <div className="section-label mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                Award-Winning Legal Excellence
              </div>
            </div>
            <h1 className="font-bricolage font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-8" style={{ animation: 'fadeSlideIn 0.8s ease-out 0.2s both' }}>
              Your Legal Rights,<br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Fiercely Defended</span>
            </h1>
            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-xl mb-10" style={{ animation: 'fadeSlideIn 0.8s ease-out 0.3s both' }}>
              VN Law Firm delivers uncompromising legal representation across 12+ practice areas. Trusted by Fortune 500 companies and individuals alike.
            </p>
            <div className="flex flex-wrap gap-4" style={{ animation: 'fadeSlideIn 0.8s ease-out 0.4s both' }}>
              <a href="#contact" className="btn-accent">
                Schedule Consultation
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
              <a href="#services" className="btn-secondary">
                <i className="fas fa-scale-balanced text-sm text-emerald-600"></i>
                Explore Services
              </a>
            </div>
            <div className="flex items-center gap-6 mt-12" style={{ animation: 'fadeSlideIn 0.8s ease-out 0.5s both' }}>
              <div className="flex -space-x-3">
                <img src="https://picsum.photos/seed/client1/40/40.jpg?q=80&w=40" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Client" loading="lazy" />
                <img src="https://picsum.photos/seed/client2/40/40.jpg?q=80&w=40" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Client" loading="lazy" />
                <img src="https://picsum.photos/seed/client3/40/40.jpg?q=80&w=40" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Client" loading="lazy" />
                <img src="https://picsum.photos/seed/client4/40/40.jpg?q=80&w=40" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Client" loading="lazy" />
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <i className="fas fa-star text-neutral-350 text-xs"></i>
                  <i className="fas fa-star text-neutral-350 text-xs"></i>
                  <i className="fas fa-star text-neutral-350 text-xs"></i>
                  <i className="fas fa-star text-neutral-350 text-xs"></i>
                  <i className="fas fa-star text-neutral-350 text-xs"></i>
                </div>
                <span className="text-neutral-600 text-xs">Trusted by 2,500+ clients</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block" style={{ animation: 'fadeSlideInRight 0.8s ease-out 0.4s both' }}>
            <div className="relative">
              <div className="glass-strong rounded-3xl p-6" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}>
                <img src="https://picsum.photos/seed/lawoffice/500/600.jpg?q=80" className="w-full h-[420px] object-cover rounded-2xl" alt="VN Law Office" loading="lazy" />
                <div className="absolute bottom-10 left-10 right-10 glass rounded-2xl p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center">
                      <i className="fas fa-trophy text-emerald-600"></i>
                    </div>
                    <div>
                      <div className="text-neutral-900 font-semibold text-sm">98.7% Success Rate</div>
                      <div className="text-neutral-500 text-xs">Across all practice areas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
