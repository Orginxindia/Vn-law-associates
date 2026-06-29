import React from 'react';
import { motion } from 'framer-motion';

const Button = React.forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      onClick,
      href,
      loading = false,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-medium transition-all duration-200 inline-flex items-center gap-2';

    const variants = {
      primary: 'bg-neutral-950 text-white hover:bg-neutral-800',
      secondary: 'bg-neutral-900/5 text-neutral-900 border border-neutral-900/10 hover:bg-neutral-900/10',
      accent:
        'bg-gradient-to-r from-neutral-950 to-neutral-750 text-white hover:shadow-lg',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-2.5 text-base rounded-lg',
      lg: 'px-8 py-3.5 text-base rounded-lg',
    };

    const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
      <>
        {Icon && !loading && <Icon size={16} />}
        {loading && <span className="animate-spin">⏳</span>}
        {children}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          className={buttonClass}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          ref={ref}
          {...props}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        className={buttonClass}
        onClick={onClick}
        disabled={disabled || loading}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        ref={ref}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
