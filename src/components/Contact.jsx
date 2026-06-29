import { useState, useCallback, useRef } from 'react';

const PRACTICE_OPTIONS = [
  { value: '', label: 'Select a practice area', disabled: true },
  { value: 'corporate', label: 'Corporate & Business Law' },
  { value: 'litigation', label: 'Litigation & Dispute Resolution' },
  { value: 'realestate', label: 'Real Estate & Property Law' },
  { value: 'ip', label: 'Intellectual Property' },
  { value: 'family', label: 'Family Law' },
  { value: 'criminal', label: 'Criminal Defense' },
  { value: 'immigration', label: 'Immigration Law' },
  { value: 'tax', label: 'Tax & Regulatory Compliance' },
  { value: 'employment', label: 'Employment & Labor Law' },
  { value: 'ma', label: 'Mergers & Acquisitions' },
  { value: 'banking', label: 'Banking & Finance' },
  { value: 'cyber', label: 'Cyber & Data Privacy Law' },
  { value: 'other', label: 'Other' },
];

const selectBgStyle = {
  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='rgba(0,0,0,0.4)' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'/></svg>")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 16px center',
  backgroundSize: '16px',
};

export default function Contact({ onSubmit }) {
  const formRef = useRef(null);
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = useCallback(() => {
    const form = formRef.current;
    if (!form) return [];
    const fd = new FormData(form);
    const errors = [];
    const firstName = fd.get('firstName')?.trim();
    const lastName = fd.get('lastName')?.trim();
    const email = fd.get('email')?.trim();
    const practiceArea = fd.get('practiceArea');
    const message = fd.get('message')?.trim();
    const consent = form.querySelector('#consent').checked;

    if (!firstName) errors.push('First name is required');
    if (!lastName) errors.push('Last name is required');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required');
    if (!practiceArea) errors.push('Please select a practice area');
    if (!message || message.length < 10) errors.push('Please provide at least 10 characters');
    if (!consent) errors.push('You must agree to the privacy policy');
    return errors;
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length) {
      setFormError(errors.join('. '));
      return;
    }
    setFormError('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onSubmit) onSubmit();

      setTimeout(() => {
        setSubmitted(false);
        formRef.current?.reset();
      }, 2000);
    }, 1500);
  }, [validate, onSubmit]);

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="deco-ring w-[400px] h-[400px] -top-40 right-10 opacity-20" style={{ animationDuration: '45s' }}></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block"></span>
              Get Started
            </div>
            <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
              Ready to Fight<br /><span className="text-neutral-950">For Your Rights?</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-10">
              Don't face your legal challenges alone. Schedule a free, confidential consultation with one of our expert attorneys today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-neutral-900/5 border border-neutral-900/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-900/10 transition-all">
                  <i className="fas fa-phone text-neutral-900"></i>
                </div>
                <div>
                  <div className="text-neutral-900 font-medium text-sm mb-1">Call Us 24/7</div>
                  <a href="tel:+1-555-123-4567" className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors">+1 (555) 123-4567</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-neutral-900/5 border border-neutral-900/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-900/10 transition-all">
                  <i className="fas fa-envelope text-neutral-900"></i>
                </div>
                <div>
                  <div className="text-neutral-900 font-medium text-sm mb-1">Email Us</div>
                  <a href="mailto:consult@vnlawfirm.com" className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors">consult@vnlawfirm.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-neutral-900/5 border border-neutral-900/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-900/10 transition-all">
                  <i className="fas fa-location-dot text-neutral-900"></i>
                </div>
                <div>
                  <div className="text-neutral-900 font-medium text-sm mb-1">Visit Our Office</div>
                  <div className="text-neutral-600 text-sm">1200 Legal Plaza, Suite 500<br />New York, NY 10022</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-10">
              {['fa-linkedin-in', 'fa-twitter', 'fa-facebook-f', 'fa-instagram'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-lg bg-neutral-900/5 border border-neutral-900/10 flex items-center justify-center text-neutral-600 hover:text-neutral-950 hover:border-neutral-950/30 transition-all">
                  <i className={`fab ${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <form ref={formRef} id="contactForm" className="glass-strong rounded-2xl p-8 md:p-10 space-y-5" noValidate onSubmit={handleSubmit}>
              <h3 className="font-bricolage font-bold text-xl text-neutral-900 mb-2 tracking-tight">Free Consultation Request</h3>
              <p className="text-neutral-500 text-sm mb-6">Fill out the form below and we'll get back to you within 2 hours.</p>

              {formError && (
                <div id="formError" className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">{formError}</div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-neutral-600 text-xs font-medium mb-2 block">First Name *</label>
                  <input type="text" name="firstName" required placeholder="John" className="w-full bg-neutral-900/5 border border-neutral-900/10 rounded-lg px-4 py-3 text-neutral-900 text-sm placeholder-neutral-500 focus:outline-none focus:border-neutral-950/40 transition-colors" aria-label="First Name" />
                </div>
                <div>
                  <label className="text-neutral-600 text-xs font-medium mb-2 block">Last Name *</label>
                  <input type="text" name="lastName" required placeholder="Doe" className="w-full bg-neutral-900/5 border border-neutral-900/10 rounded-lg px-4 py-3 text-neutral-900 text-sm placeholder-neutral-500 focus:outline-none focus:border-neutral-950/40 transition-colors" aria-label="Last Name" />
                </div>
              </div>
              <div>
                <label className="text-neutral-600 text-xs font-medium mb-2 block">Email *</label>
                <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-neutral-900/5 border border-neutral-900/10 rounded-lg px-4 py-3 text-neutral-900 text-sm placeholder-neutral-500 focus:outline-none focus:border-neutral-950/40 transition-colors" aria-label="Email" />
              </div>
              <div>
                <label className="text-neutral-600 text-xs font-medium mb-2 block">Phone</label>
                <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className="w-full bg-neutral-900/5 border border-neutral-900/10 rounded-lg px-4 py-3 text-neutral-900 text-sm placeholder-neutral-500 focus:outline-none focus:border-neutral-950/40 transition-colors" aria-label="Phone" />
              </div>
              <div>
                <label className="text-neutral-600 text-xs font-medium mb-2 block">Practice Area *</label>
                <select name="practiceArea" required className="w-full bg-neutral-900/5 border border-neutral-900/10 rounded-lg px-4 py-3 text-neutral-900 text-sm focus:outline-none focus:border-neutral-950/40 transition-colors appearance-none cursor-pointer" style={selectBgStyle} aria-label="Practice Area" defaultValue="">
                  {PRACTICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-neutral-600 text-xs font-medium mb-2 block">Brief Description of Your Case *</label>
                <textarea name="message" required rows="4" placeholder="Please provide a brief overview of your legal matter..." className="w-full bg-neutral-900/5 border border-neutral-900/10 rounded-lg px-4 py-3 text-neutral-900 text-sm placeholder-neutral-500 focus:outline-none focus:border-neutral-950/40 transition-colors resize-none" aria-label="Case Description"></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" required id="consent" className="mt-1 accent-neutral-950 cursor-pointer" aria-label="Privacy consent" />
                <label htmlFor="consent" className="text-neutral-500 text-xs leading-relaxed cursor-pointer">I agree to the privacy policy and understand that all information shared is protected by attorney-client privilege.</label>
              </div>
              <button type="submit" className="btn-accent w-full justify-center !py-4 !text-base relative overflow-hidden" disabled={submitting || submitted} style={(submitting || submitted) ? { opacity: 0.7 } : {}}>
                {submitted ? (
                  <><i className="fas fa-check text-sm"></i> Submitted!</>
                ) : submitting ? (
                  <><i className="fas fa-spinner fa-spin"></i> Submitting...</>
                ) : (
                  <><i className="fas fa-paper-plane text-sm"></i><span className="submit-text">Submit Consultation Request</span></>
                )}
              </button>
              <p className="text-neutral-500 text-[11px] text-center">No fees until you hire us. 100% confidential.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
