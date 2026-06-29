const TEAM = [
  { img: '/nagendran.jpg', name: 'Advocate V. Nagendran', role: 'CEO & Founder', bio: 'M.A., B.L., D.M.D.L. Former Additional Government Pleader, Madurai District. CEO & Founder of VN Law Firm.' },
  { img: '/images/m_ramanathan.jpg', name: 'Senior Adv. M. Ramanathan', role: 'Senior Counsel (Civil Side)', bio: 'Senior Advocate specializing in Civil Litigation, Property disputes, Contracts, and Land Advocacy.' },
  { img: '/images/d_santhosam.jpg', name: 'Senior Adv. D. Santhosam', role: 'Senior Counsel (Criminal Side)', bio: 'Senior Advocate specializing in Criminal Defense, Criminal Trials, and Appellate Court Advocacy.' },
  { img: '/images/p_chandrasekaran.jpeg', name: 'Adv. P. Chandrasekaran', role: 'Retired Additional Public Prosecutor', bio: 'B.A., B.L. Experienced legal counsel with expertise in Public Law and Prosecutorial Strategy.' },
  { img: '/images/m_tamilmuthalvan.jpeg', name: 'Adv. M. Tamilmuthalvan', role: 'Associate Counsel', bio: 'B.A., LL.B. Focuses on Corporate Law, Civil Litigations, and Constitutional matters.' },
  { img: '/images/a_vijayakumar.jpeg', name: 'Adv. A. Vijayakumar', role: 'Associate Counsel', bio: 'B.A., B.L. Specialist in Family Law, Civil Disputes, and Commercial contracts.' },
  { img: '/images/k_thiraviam.jpeg', name: 'Adv. K. Thiraviam', role: 'Associate Counsel', bio: 'B.Sc., LL.B. Specializes in Real Estate Law, Banking Compliance, and Land disputes.' },
  { img: '/images/p_palani.jpg', name: 'Adv. P. Palani', role: 'Associate Counsel', bio: 'B.A., B.L. Focuses on Labor Court matters, Consumer Court Forums, and General Civil Advocacy.' }
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-900/3 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block"></span>
            Our Attorneys
          </div>
          <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
            Meet the <span className="text-neutral-900">Legal Minds</span>
          </h2>
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            Our attorneys bring decades of combined experience from top law schools, federal clerkships, and leading global firms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="team-card">
              <img src={member.img} className="w-full h-[360px] object-cover" alt={member.name} loading="lazy" />
              <div className="overlay">
                <h4 className="font-bricolage font-semibold text-neutral-900 text-lg">{member.name}</h4>
                <p className="text-neutral-900 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-neutral-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            View All 45+ Attorneys
            <i className="fas fa-arrow-right text-sm text-neutral-900"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
