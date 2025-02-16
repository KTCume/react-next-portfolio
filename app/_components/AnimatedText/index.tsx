"use client"; // クライアントサイドでのみ実行

import React from 'react';
import styles from './index.module.css'; // CSSモジュールをインポート

const AnimatedText = () => {
  return (
    <div className={styles.body}> {/* CSSモジュールのクラス名を適用 */}
      <div className={styles.container}> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>P</span> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>O</span> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>R</span> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>T</span> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>F</span> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>O</span> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>L</span> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>I</span> {/* CSSモジュールのクラス名を適用 */}
        <span className={styles.span}>O</span> {/* CSSモジュールのクラス名を適用 */}
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
