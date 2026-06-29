import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SectionLabel({ children, icon = 'sparkles' }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium tracking-wide uppercase mb-6">
      {icon === 'sparkles' && <Sparkles size={16} />}
      {children}
    </div>
  );
}
