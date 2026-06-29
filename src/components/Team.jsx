import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TEAM = [
  { 
    img: '/nagendran.jpg', 
    name: 'Advocate V. Nagendran', 
    role: 'CEO & Founder', 
    credentials: 'M.A., B.L., D.M.D.L.',
    specialties: ['Constitutional Law', 'Trial Court Strategy', 'Administrative Law'],
    bio: 'Former Additional Government Leader, Madurai District. CEO & Founder of VN Law Firm.' 
  },
  { 
    img: '/images/m_ramanathan.jpg', 
    name: 'Thiru Senior Adv. M. Ramanathan', 
    role: 'Senior Counsel (Civil Side)', 
    credentials: 'Senior Advocate',
    specialties: ['Civil Litigation', 'Property Disputes', 'Contracts & Advocacy'],
    bio: 'Senior Advocate specializing in Civil Litigation, Property disputes, Contracts, and Land Advocacy.',
    isLegacy: true
  },
  { 
    img: '/images/d_santhosam.jpg', 
    name: 'Thiru Senior Adv. D. Santhosam', 
    role: 'Senior Counsel (Criminal Side)', 
    credentials: 'Senior Advocate',
    specialties: ['Criminal Defense', 'Criminal Trials', 'Appellate Court'],
    bio: 'Senior Advocate specializing in Criminal Defense, Criminal Trials, and Appellate Court Advocacy.',
    isLegacy: true
  },
  { 
    img: '/images/p_chandrasekaran.jpeg', 
    name: 'Adv. P. Chandrasekaran', 
    role: 'Retired Additional Public Prosecutor', 
    credentials: 'B.A., B.L.',
    specialties: ['Public Law', 'Prosecutorial Strategy', 'Criminal Appeals'],
    bio: 'Experienced legal counsel with expertise in Public Law and Prosecutorial Strategy.' 
  },
  { 
    img: '/images/m_tamilmuthalvan.jpeg', 
    name: 'Adv. M. Tamilmuthalvan', 
    role: 'Associate Counsel', 
    credentials: 'B.A., LL.B.',
    specialties: ['Corporate Law', 'Civil Litigations', 'Constitutional Matters'],
    bio: 'Focuses on Corporate Law, Civil Litigations, and Constitutional matters.' 
  },
  { 
    img: '/images/a_vijayakumar.jpeg', 
    name: 'Adv. A. Vijayakumar', 
    role: 'Associate Counsel', 
    credentials: 'B.A., B.L.',
    specialties: ['Family Law', 'Civil Disputes', 'Commercial Contracts'],
    bio: 'Specialist in Family Law, Civil Disputes, and Commercial contracts.' 
  },
  { 
    img: '/images/k_thiraviam.jpeg', 
    name: 'Adv. K. Thiraviam', 
    role: 'Associate Counsel', 
    credentials: 'B.Sc., LL.B.',
    specialties: ['Real Estate Law', 'Banking Compliance', 'Land Disputes'],
    bio: 'Specializes in Real Estate Law, Banking Compliance, and Land disputes.' 
  },
  { 
    img: '/images/p_palani.jpg', 
    name: 'Adv. P. Palani', 
    role: 'Associate Counsel', 
    credentials: 'B.A., B.L.',
    specialties: ['Labor Court', 'Consumer Forums', 'General Civil Advocacy'],
    bio: 'Focuses on Labor Court matters, Consumer Court Forums, and General Civil Advocacy.' 
  }
];

export default function Team() {
  const targetRef = useRef(null);
  const scrollRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const calculateTranslate = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = window.innerWidth;
        setTranslateX(Math.max(0, scrollWidth - clientWidth + 96)); // Extra padding at the end
      }
    };

    calculateTranslate();
    
    window.addEventListener('resize', calculateTranslate);
    window.addEventListener('load', calculateTranslate);
    
    const resizeObserver = new ResizeObserver(() => calculateTranslate());
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      window.removeEventListener('resize', calculateTranslate);
      window.removeEventListener('load', calculateTranslate);
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -translateX]);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Desktop view (pinned horizontal scroll) - Hidden on mobile */}
      <section 
        ref={targetRef} 
        id="team" 
        className="hidden md:block relative h-[300vh] bg-neutral-950 text-white"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

          {/* Scrolling Horizontal Track */}
          <motion.div 
            ref={scrollRef} 
            style={{ x }} 
            className="flex items-center gap-8 px-[10vw] w-max select-none"
          >
            {/* Slide 1: Premium Title Slide */}
            <div className="w-[450px] lg:w-[500px] flex-shrink-0 flex flex-col justify-center pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 w-max">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Our Attorneys
              </div>
              <h2 className="font-bricolage font-bold text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-6 text-amber-100">
                Meet the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">Legal Minds</span>
              </h2>
              <p className="text-neutral-400 text-base lg:text-lg leading-relaxed mb-8">
                Our attorneys bring decades of combined experience from top law schools, federal clerkships, and leading global practices.
              </p>
              
              <div className="flex items-center gap-3 text-neutral-500 text-xs mt-2">
                <span>Scroll down to explore</span>
                <div className="w-16 h-[1px] bg-neutral-800 relative overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }} 
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }} 
                    className="absolute inset-0 bg-amber-400" 
                  />
                </div>
              </div>
            </div>

            {/* Slides 2 to 9: Attorney Cards */}
            {TEAM.map((member, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');
              return (
                <div 
                  key={member.name}
                  className="w-[340px] lg:w-[360px] h-[500px] lg:h-[530px] flex-shrink-0 relative rounded-2xl border border-neutral-800/80 bg-neutral-900/20 backdrop-blur-sm overflow-hidden group hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/[0.01] transition-all duration-500 shadow-xl"
                >
                  {/* Gray-to-Color Image Wrapper */}
                  <div className="h-[65%] w-full overflow-hidden relative">
                    {member.isLegacy && (
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-amber-500/10 text-[9px] text-neutral-300 font-bold tracking-widest uppercase shadow-lg flex items-center gap-1.5">
                        <i className="fas fa-ribbon text-amber-400"></i> Legacy Tribute
                      </div>
                    )}
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  </div>

                  {/* Elegant Index Number overlay */}
                  <span className="absolute top-4 right-6 text-7xl font-bricolage font-black text-neutral-800/25 group-hover:text-amber-500/10 transition-colors duration-500 select-none pointer-events-none">
                    {formattedIndex}
                  </span>

                  {/* Details Overlay */}
                  <div className="p-5 h-[35%] flex flex-col justify-between relative bg-neutral-900">
                    <div>
                      <h4 className="font-bricolage font-bold text-amber-100 text-base lg:text-lg leading-tight mb-0.5 group-hover:text-amber-300 transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="text-neutral-450 text-[10px] lg:text-xs font-semibold uppercase tracking-wider mb-1.5">
                        {member.role}
                      </p>
                      
                      {/* Specialties / Tags */}
                      <div className="flex flex-wrap gap-1 mb-1.5">
                        {member.specialties.map((spec) => (
                          <span key={spec} className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-neutral-950 text-neutral-450 border border-neutral-800/80 transition-colors duration-300 group-hover:text-amber-300 group-hover:border-amber-500/10">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-neutral-800/60 pt-2">
                      <p className="text-neutral-400 text-[10px] lg:text-[11px] leading-relaxed line-clamp-2">
                        <span className="text-neutral-300 font-semibold block mb-0.5">{member.credentials}</span>
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Slide 10: Outro CTA Slide */}
            <div className="w-[380px] lg:w-[420px] h-[500px] lg:h-[530px] flex-shrink-0 flex flex-col justify-center items-center text-center p-8 rounded-2xl border border-dashed border-neutral-800 bg-neutral-950">
              <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6">
                <i className="fas fa-balance-scale text-amber-400 text-2xl" />
              </div>
              <h3 className="font-bricolage font-bold text-2xl lg:text-3xl text-amber-100 mb-4 leading-tight">
                Our Entire Roster <br/>
                At Your Disposal
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-xs">
                With a robust network of 500+ specialized advocates and legal advisors, we cover every facet of the law.
              </p>
              
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-neutral-950 font-bold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-amber-400/10"
              >
                View All 500+ Attorneys
                <i className="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1 text-neutral-950" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile view (Smooth swipeable list with native snap scroll) - Hidden on desktop */}
      <section id="team-mobile" className="block md:hidden py-20 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/[0.025] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="px-6 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-300 text-[10px] font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Our Attorneys
          </div>
          <h2 className="font-bricolage font-bold text-3xl tracking-tight mb-4 text-amber-100">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">Legal Minds</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Our attorneys bring decades of combined experience from top law schools and leading global practices. Swipe to browse.
          </p>
        </div>

        {/* Swipe container */}
        <div className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 pb-6">
          {TEAM.map((member) => (
            <div 
              key={`${member.name}-mobile`}
              className="w-[290px] flex-shrink-0 snap-center relative rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden flex flex-col h-[460px]"
            >
              <div className="h-[65%] relative overflow-hidden">
                {member.isLegacy && (
                  <div className="absolute top-3 left-3 z-20 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-amber-500/10 text-[8px] text-neutral-300 font-bold tracking-widest uppercase shadow-lg flex items-center gap-1">
                    <i className="fas fa-ribbon text-amber-400"></i> Legacy Tribute
                  </div>
                )}
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow bg-neutral-950">
                <div>
                  <h4 className="font-bricolage font-bold text-amber-100 text-base leading-tight mb-1">
                    {member.name}
                  </h4>
                  <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  <p className="text-neutral-300 text-[11px] font-medium block mb-1">
                    {member.credentials}
                  </p>
                </div>
                <div className="border-t border-neutral-855 pt-3">
                  <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* End CTA Panel in mobile swipe */}
            <div className="w-[280px] flex-shrink-0 snap-center rounded-xl border border-dashed border-neutral-850 bg-neutral-950 flex flex-col justify-center items-center text-center p-6 h-[460px]">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
                <i className="fas fa-balance-scale text-amber-400 text-xl" />
              </div>
              <h3 className="font-bricolage font-bold text-xl text-amber-100 mb-3 leading-tight">
                Our Roster
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-6 px-4">
                With 500+ specialized advocates, we cover every facet of the law.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-5 py-3 bg-amber-400 text-neutral-950 font-bold text-xs rounded-lg transition-all duration-300"
              >
              View All 500+ Attorneys
              <i className="fas fa-arrow-right text-[10px] text-neutral-950" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
