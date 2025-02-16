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
        <span className={styles.subspan}>ポ</span>
        <span className={styles.subspan}>ー</span>
        <span className={styles.subspan}>ト</span>
        <span className={styles.subspan}>フ</span>
        <span className={styles.subspan}>ォ</span>
        <span className={styles.subspan}>リ</span>
        <span className={styles.subspan}>オ</span>
        <span className={styles.subspan}>サ</span>
        <span className={styles.subspan}>イ</span>
        <span className={styles.subspan}>ト</span>
        <span className={styles.subspan}>へ</span>
        <span className={styles.subspan}>よ</span>
        <span className={styles.subspan}>う</span>
        <span className={styles.subspan}>こ</span>
        <span className={styles.subspan}>そ</span>
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
