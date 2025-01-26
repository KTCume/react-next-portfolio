'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(20px)' }} // 初期状態で透明＆強いぼかし
      animate={{ opacity: 1, filter: 'blur(0px)' }}  // 表示時に透明度を高め、ぼかし解除
      exit={{ opacity: 0, filter: 'blur(20px)' }}    // 退場時に透明＆強いぼかし
      transition={{
        duration: 1.0,  // アニメーション時間を長く設定
        ease: [0.3, 0.6, 0.4, 1], // ゆっくりと滑らかな変化
      }}
      style={{
        overflow: 'hidden',
        willChange: 'opacity, filter', // フィルタと透明度のパフォーマンスを最適化
      }}
    >
      {children}
    </motion.div>
  );
}
