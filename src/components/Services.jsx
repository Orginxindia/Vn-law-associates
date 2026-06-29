const SERVICES = [
  { icon: 'fa-building', title: 'Corporate & Business Law', desc: 'Entity formation, corporate governance, shareholder agreements, joint ventures, and strategic business counsel for startups to Fortune 500 companies.', tags: ['M&A', 'Compliance', 'Governance'] },
  { icon: 'fa-gavel', title: 'Litigation & Dispute Resolution', desc: 'Aggressive courtroom advocacy and strategic dispute resolution including mediation, arbitration, and complex civil litigation across all forums.', tags: ['Trial', 'Arbitration', 'Mediation'] },
  { icon: 'fa-home', title: 'Real Estate & Property Law', desc: 'Commercial and residential transactions, property development, landlord-tenant disputes, zoning, land use, and construction law matters.', tags: ['Transactions', 'Zoning', 'Construction'] },
  { icon: 'fa-lightbulb', title: 'Intellectual Property', desc: 'Patent prosecution, trademark registration, copyright protection, trade secret strategy, IP licensing, and infringement litigation.', tags: ['Patents', 'Trademarks', 'Copyrights'] },
  { icon: 'fa-heart', title: 'Family Law', desc: "Divorce, child custody, spousal support, adoption, prenuptial agreements, and domestic violence protection with compassion and discretion.", tags: ['Divorce', 'Custody', 'Adoption'] },
  { icon: 'fa-shield-halved', title: 'Criminal Defense', desc: 'Federal and state criminal defense, white-collar crimes, DUI, drug offenses, assault, and appellate advocacy protecting your freedom.', tags: ['Federal', 'White-Collar', 'Appellate'] },
  { icon: 'fa-plane', title: 'Immigration Law', desc: 'Visa applications, green cards, citizenship, deportation defense, asylum, and corporate immigration for global talent mobility.', tags: ['Visas', 'Green Cards', 'Asylum'] },
  { icon: 'fa-file-invoice-dollar', title: 'Tax & Regulatory Compliance', desc: 'Tax planning, IRS disputes, regulatory compliance, audits, international tax strategy, and state/local tax matters for individuals and businesses.', tags: ['Tax Planning', 'IRS Defense', 'Compliance'] },
  { icon: 'fa-briefcase', title: 'Employment & Labor Law', desc: 'Wrongful termination, discrimination, wage disputes, workplace harassment, executive compensation, and employment contract negotiation.', tags: ['Discrimination', 'Wage Claims', 'Contracts'] },
  { icon: 'fa-handshake', title: 'Mergers & Acquisitions', desc: 'Due diligence, deal structuring, negotiation, regulatory approvals, post-merger integration, and cross-border M&A transactions.', tags: ['Due Diligence', 'Deal Structure', 'Cross-Border'] },
  { icon: 'fa-landmark', title: 'Banking & Finance', desc: 'Loan documentation, project finance, securities regulation, fintech compliance, banking litigation, and capital markets transactions.', tags: ['Securities', 'Fintech', 'Capital Markets'] },
  { icon: 'fa-lock', title: 'Cyber & Data Privacy Law', desc: 'Data breach response, GDPR/CCPA compliance, cybersecurity strategy, privacy policies, and technology transaction agreements.', tags: ['GDPR', 'CCPA', 'Data Breach'] },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-neutral-950 text-white overflow-hidden">
      {/* Decorative dark glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[120px]"></div>
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-white/[0.01] blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6 mx-auto shadow-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Our Practice Areas
          </div>
          <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6 text-amber-100">
            Comprehensive Legal <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            From corporate transactions to criminal defense, our attorneys deliver strategic, results-driven representation across every major area of law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="group relative bg-amber-500/[0.01] hover:bg-amber-500/[0.03] border border-amber-500/5 hover:border-amber-400/20 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/[0.01] shine-effect">
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center bg-amber-500/5 border border-amber-500/10 text-amber-300 group-hover:text-amber-400 text-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500/10 group-hover:border-amber-500/20">
                    <i className={`fas ${svc.icon}`}></i>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 translate-x-[-6px] group-hover:translate-x-0 transition-all duration-300 text-amber-400 text-sm">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
                <h3 className="font-bricolage font-semibold text-lg text-amber-200 group-hover:text-amber-300 mb-3 tracking-tight">{svc.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-neutral-400 bg-amber-500/5 border border-amber-500/5 rounded-full px-3 py-1 transition-colors duration-300 group-hover:text-amber-200 group-hover:border-amber-500/10">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
