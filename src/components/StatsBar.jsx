export default function StatsBar() {
  return (
    <section className="relative z-10 -mt-4">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="glass rounded-2xl" style={{ animation: 'scaleIn 0.6s ease-out 0.8s both' }}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="stat-card">
              <div className="stat-value text-neutral-900">45+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-value text-emerald-600">10,000+</div>
              <div className="stat-label">Cases Handled</div>
            </div>
            <div className="stat-card">
              <div className="stat-value text-neutral-900">500+</div>
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
