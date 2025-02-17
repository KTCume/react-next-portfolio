"use client"; // クライアントサイドでのみ実行

import React from 'react';
import styles from './index.module.css'; // CSSモジュールをインポート

const AnimatedText = () => {
  return (
    <div className={styles.body}> {/* CSSモジュールのクラス名を適用 */}
      <div className={styles.container}> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>P</span>
        <span className={styles.span}>O</span>
        <span className={styles.span}>R</span>
        <span className={styles.span}>T</span>
        <span className={styles.span}>F</span>
        <span className={styles.span}>O</span>
        <span className={styles.span}>L</span>
        <span className={styles.span}>I</span>
        <span className={styles.span}>O</span>
      </div>

      <div className={styles.subcontainer}>
        <span className={styles.subspan}>ご</span>
        <span className={styles.subspan}>覧</span>
        <span className={styles.subspan}>い</span>
        <span className={styles.subspan}>た</span>
        <span className={styles.subspan}>だ</span>
        <span className={styles.subspan}>き</span>
        <span className={styles.subspan}>あ</span>
        <span className={styles.subspan}>り</span>
        <span className={styles.subspan}>が</span>
        <span className={styles.subspan}>と</span>
        <span className={styles.subspan}>う</span>
        <span className={styles.subspan}>ご</span>
        <span className={styles.subspan}>ざ</span>
        <span className={styles.subspan}>い</span>
        <span className={styles.subspan}>ま</span>
        <span className={styles.subspan}>す</span>
      </div>

      {/* 雪のエフェクト */}
      <div className={styles.snowContainer}>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
        <div className={styles.snow}></div>
      </div>
    </div>
  );
};

export default AnimatedText;
