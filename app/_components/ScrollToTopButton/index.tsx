"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // スクロール時にボタンの表示を切り替える
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // ページトップにスクロールする関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // スムーズにスクロール
    });
  };

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
