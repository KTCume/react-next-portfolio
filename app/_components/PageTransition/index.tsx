'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50, filter: 'blur(10px)' }}  // 初期状態でぼかしを追加
      animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}        // 表示時にぼかしを解除
      exit={{ opacity: 0, scale: 0.95, y: -50, filter: 'blur(10px)' }}     // 退場時にぼかしを追加
      transition={{
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      style={{
        overflow: 'hidden',
        willChange: 'transform, opacity, filter',  // filterも追加してパフォーマンスを最適化
      }}
    >
      {children}
    </motion.div>
  );
}
