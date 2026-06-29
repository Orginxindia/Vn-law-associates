export default function Footer() {
  return (
    <footer className="border-t border-neutral-900/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neutral-950 to-neutral-750 flex items-center justify-center">
                <span className="font-bricolage font-bold text-sm text-white">VN</span>
              </div>
              <div>
                <span className="font-bricolage font-semibold text-neutral-900 text-base tracking-tight">VN Law Firm</span>
              </div>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-sm">Delivering uncompromising legal excellence for over 25 years. Your rights, our mission. Justice is not just a word—it's our practice.</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/5 border border-neutral-900/10">
                <div className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse"></div>
                <span className="text-neutral-900 text-xs font-medium">Available 24/7</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-neutral-900 font-semibold text-sm mb-5">Practice Areas</h4>
            <ul className="space-y-3">
              {['Corporate Law', 'Litigation', 'Criminal Defense', 'Family Law', 'Intellectual Property', 'Immigration'].map((item) => (
                <li key={item}><a href="#services" className="text-neutral-500 hover:text-neutral-900 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-900 font-semibold text-sm mb-5">More Services</h4>
            <ul className="space-y-3">
              {['Real Estate', 'Tax & Compliance', 'Employment Law', 'Mergers & Acquisitions', 'Banking & Finance', 'Cyber & Privacy'].map((item) => (
                <li key={item}><a href="#services" className="text-neutral-500 hover:text-neutral-900 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-900 font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Team', href: '#team' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
                { label: 'Careers', href: '#' },
              ].map((item) => (
                <li key={item.label}><a href={item.href} className="text-neutral-500 hover:text-neutral-900 text-sm transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-divider mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">© 2025 VN Law Firm. All rights reserved. Attorney Advertising.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Disclaimer', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-neutral-500 hover:text-neutral-600 text-xs transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
