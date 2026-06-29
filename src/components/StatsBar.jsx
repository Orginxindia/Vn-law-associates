export default function StatsBar() {
  return (
    <section className="relative z-10 -mt-4">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="glass rounded-2xl" style={{ animation: 'scaleIn 0.6s ease-out 0.8s both' }}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="stat-card">
              <div className="stat-value text-neutral-900">25</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-value text-emerald-600">2,500+</div>
              <div className="stat-label">Cases Won</div>
            </div>
            <div className="stat-card">
              <div className="stat-value text-neutral-900">45</div>
              <div className="stat-label">Expert Attorneys</div>
            </div>
            <div className="stat-card">
              <div className="stat-value text-neutral-900">$2B+</div>
              <div className="stat-label">Recovered for Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
