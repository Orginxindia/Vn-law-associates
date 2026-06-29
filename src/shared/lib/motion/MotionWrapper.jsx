import React from 'react';
import { motion } from 'framer-motion';
import { motionTheme } from './theme';

export const MotionWrapper = ({
  children,
  className = '',
  delay = 0,
  stagger = false,
  as = 'div'
}) => {
  const Component = motion[as] || motion.div;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ? motionTheme.stagger.default : 0,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionTheme.duration.normal,
        ease: motionTheme.ease,
      }
    }
  };

  return (
    <Component
      className={className}
      variants={stagger ? containerVariants : itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </Component>
  );
};
