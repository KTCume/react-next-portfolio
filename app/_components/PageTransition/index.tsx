'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
 
interface PageTransitionProps {
  children: ReactNode;
}
 
export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -50 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      style={{
        overflow: 'hidden',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  );
}