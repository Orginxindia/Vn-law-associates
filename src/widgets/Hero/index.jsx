import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowRight, ChevronRight, Scale } from 'lucide-react';
import { motionTheme } from '@shared/lib/motion/theme';
import Button from '@components/ui/Button';

// Manual split text implementation for clean typography reveals
const SplitText = ({ children, className }) => {
  const words = children.split(' ');
  return (
    <span className={`inline-block ${className || ''}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: "100%", rotate: 2 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotate: 0,
                transition: { duration: motionTheme.duration.normal, ease: motionTheme.ease }
              }
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export const HeroWidget = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax Scroll Offsets
  const textBgY = useTransform(scrollY, [0, 800], [0, -120]);
  const mainImageY = useTransform(scrollY, [0, 800], [0, 50]);
  const secondaryImageY = useTransform(scrollY, [0, 800], [0, -40]);
  const quoteCardY = useTransform(scrollY, [0, 800], [0, -80]);

  // Spring Physics mouse coordinates for interactive mouse tilt on the legal card
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: motionTheme.stagger.default }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: motionTheme.duration.normal, ease: motionTheme.ease } }
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[95vh] flex items-center pt-28 pb-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/law_hero_bg.png)' }}
    >
      {/* Premium horizontal gradient overlay to make left text 100% visible while keeping right image sharp */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
      
      {/* Premium Floating Colorful Fillers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Emerald Glow */}
        <motion.div 
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-[350px] h-[350px] rounded-full bg-emerald-400/25 blur-[120px]" 
        />
        {/* Amber Gold Glow */}
        <motion.div 
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 left-10 w-[400px] h-[400px] rounded-full bg-amber-300/20 blur-[130px]" 
        />
        {/* Cyan/Blue Glow */}
        <motion.div 
          animate={{ y: [-20, 20, -20], x: [15, -15, 15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-400/20 blur-[110px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Editorial Typographic Info */}
          <motion.div 
            className="lg:col-span-6 relative z-10"
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Elegant Tagline */}
            <motion.div 
              variants={fadeUp} 
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-800 mb-6"
            >
              <Scale size={14} className="text-neutral-950" />
              Prestige Legal Representation
            </motion.div>

            {/* Headline */}
            <h1 className="font-bricolage font-bold text-5xl sm:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-8 text-neutral-950">
              <SplitText>Uncompromising</SplitText>{' '}
              <SplitText>Advocacy for</SplitText>{' '}
              <SplitText className="bg-gradient-to-r from-black via-neutral-900 to-neutral-750 bg-clip-text text-transparent">
                Your Rights
              </SplitText>
            </h1>

            {/* Decorative Quote Block */}
            <motion.div 
              variants={fadeUp}
              className="border-l-2 border-neutral-950 pl-6 my-8"
            >
              <p className="italic text-neutral-800 text-base md:text-lg leading-relaxed font-medium">
                "Justice is truth in action. We don't merely defend your position—we fiercely orchestrate your victory."
              </p>
              <span className="block text-xs font-bold uppercase tracking-wider text-neutral-950 mt-2">
                — Advocate V. Nagendran, CEO & Founder
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-neutral-700 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-normal">
              VN Law Firm delivers award-winning counsel across 12+ core practice areas. We align top-tier legal intellect with surgical execution to secure optimal verdicts.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#contact" icon={ArrowRight}>
                Request Consultation
              </Button>
              <Button variant="secondary" size="lg" href="#services" icon={ChevronRight}>
                Explore Practice Areas
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait and Details */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[550px] md:h-[620px] w-full">
            
            {/* The Big Photo of Advocate V. Nagendran (shifted slightly right) */}
            <motion.div 
              style={{ y: mainImageY }}
              className="absolute right-12 md:right-16 top-4 w-[75%] md:w-[80%] h-[440px] md:h-[520px] overflow-hidden rounded-3xl border border-black/5 shadow-2xl bg-neutral-100 z-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: motionTheme.ease }}
            >
              <img 
                src="/nagendran.jpg" 
                alt="Advocate V. Nagendran, CEO & Founder of VN Law Firm" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
            </motion.div>

            {/* Advocate V. Nagendran Details: Horizontally big, vertically small, close to right side */}
            <motion.div 
              style={{ y: secondaryImageY }}
              className="absolute right-0 md:-right-8 bottom-10 z-20 w-[90%] sm:w-[420px] md:w-[480px] bg-white/95 border border-black/5 rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: motionTheme.ease }}
            >
              <div className="flex flex-col gap-3">
                {/* Top Row: Name and CEO & Founder Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-bricolage font-bold text-lg md:text-xl text-neutral-950 leading-tight">
                      Advocate V. Nagendran
                    </h3>
                    <p className="text-neutral-500 text-[11px] font-bold tracking-wider uppercase mt-0.5">
                      M.A., B.L., D.M.D.L.
                    </p>
                  </div>
                  <div className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[9px] font-bold tracking-wider uppercase">
                    <span className="w-1 h-1 rounded-full bg-emerald-600"></span>
                    CEO & Founder
                  </div>
                </div>
                
                {/* Divider */}
                <div className="border-t border-black/5"></div>
                
                {/* Bottom Row: Bio */}
                <p className="text-neutral-700 text-xs md:text-[13px] leading-relaxed font-medium">
                  Former Additional Government leader, Madurai District. High court and district court senior-most lawyer.
                </p>
              </div>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroWidget;
