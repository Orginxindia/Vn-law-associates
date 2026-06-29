import React from 'react';
import { motion } from 'framer-motion';

export default function DecoRings({ size = 500, position = 'top-right', opacity = 0.25, duration = 50, reverse = false }) {
  const positionClasses = {
    'top-right': `-top-[${size/2}px] -right-[${size/2}px]`,
    'bottom-left': `-bottom-[${size/2}px] -left-[${size/2}px]`,
  };

  return (
    <motion.div
      className={`absolute border border-black/5 rounded-full pointer-events-none ${positionClasses[position]}`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear'
      }}
    />
  );
}
