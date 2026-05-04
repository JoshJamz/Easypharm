import React from 'react';
import { cn } from '@/src/lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-[var(--color-primary)] text-white hover:scale-[1.02] border-none shadow-[0_10px_25px_-5px_rgba(11,107,79,0.3)]',
      secondary: 'bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[#E2F7EB] border border-[#DCFCE7]',
      outline: 'bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)] dark:hover:bg-[var(--color-primary-dark)] dark:hover:bg-opacity-20',
      ghost: 'bg-transparent text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] hover:bg-gray-100 dark:hover:bg-gray-800'
    };

    const sizes = {
      sm: 'h-10 px-5 text-sm rounded-full',
      md: 'h-12 px-6 text-base rounded-[12px]',
      lg: 'h-14 px-8 text-lg font-semibold rounded-[12px]'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:pointer-events-none disabled:opacity-50 overflow-hidden relative cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
