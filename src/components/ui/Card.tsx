import React from 'react';
import { cn } from '@/src/lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

export function Card({ className, children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(
        'rounded-[20px] border border-[var(--border-color)] bg-[var(--bg-color)] shadow-sm overflow-hidden transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[0_10px_30px_rgba(11,107,79,0.05)] dark:hover:shadow-[0_10px_30px_rgba(11,107,79,0.15)]',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardContent({ className, children }: { className?: string, children: React.ReactNode }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
