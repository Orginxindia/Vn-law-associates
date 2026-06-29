import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-neutral-900 bg-neutral-950 pt-16 pb-8 text-neutral-400 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-amber-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" className="w-10 h-10 object-contain rounded-lg bg-white p-0.5" alt="VN Law Logo" />
              <div className="flex flex-col">
                <span className="font-bricolage font-semibold text-white text-base tracking-tight leading-none mb-0.5">VN Law Firm</span>
                <span className="text-neutral-500 text-xs font-light">Madurai</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
              Delivering uncompromising legal excellence for over 25 years. Your rights, our mission. Justice is not just a word—it's our practice.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                <span className="text-neutral-300 text-xs font-medium">Available For Consultation</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 font-bricolage">Practice Areas</h4>
            <ul className="space-y-3">
              {['Corporate Law', 'Litigation', 'Criminal Defense', 'Family Law', 'Intellectual Property', 'Immigration'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 font-bricolage">More Services</h4>
            <ul className="space-y-3">
              {['Real Estate', 'Tax & Compliance', 'Employment Law', 'Mergers & Acquisitions', 'Banking & Finance', 'Cyber & Privacy'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 font-bricolage">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Team', href: '#team' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
                { label: 'Careers', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-neutral-400 hover:text-amber-400 text-sm transition-colors duration-300">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-900 mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">© 2025 VN Law Firm. All rights reserved. Attorney Advertising.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Disclaimer', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-neutral-500 hover:text-amber-400 text-xs transition-colors duration-300">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
