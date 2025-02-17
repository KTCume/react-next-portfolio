"use client";

import React, { useEffect } from "react";
import styles from "./index.module.css";

const AnimatedText = () => {
  return (
    <div className={styles.body}>
      <div className={styles.starryBackground}></div> {/* 星の背景 */}
      <div className={styles.container}>
        {"Portfolio".split("" ).map((char, index) => (
          <span key={index} className={styles.span} style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
            {char}
          </span>
        ))}
      </div>
      <div className={styles.subcontainer}>
        {"ご覧いただきありがとうございます".split("" ).map((char, index) => (
          <span key={index} className={styles.subspan} style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
