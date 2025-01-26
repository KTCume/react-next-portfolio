'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleMenu = () => setOpen(!isOpen);  // メニューのトグル（開閉）

  // リンクがクリックされたときにメニューを閉じる関数
  const handleLinkClick = () => {
    setOpen(false);
  };

  // 画面サイズの変更を監視して、640px 以上になったらメニューを閉じる
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setOpen(false);  // 画面サイズが大きくなったらメニューを閉じる
      }
    };

    window.addEventListener('resize', handleResize);
    
    // 初期状態で画面サイズをチェック
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize); // クリーンアップ
    };
  }, []);

  // メニューが開いたときにスクロールを禁止する
  useEffect(() => {
    if (isOpen) {
      // メニューが開いた時、html と body にスクロール禁止を適用
      document.body.style.overflow = 'hidden'; // メニューが開いたときにスクロール禁止
      document.documentElement.style.overflow = 'hidden'; // html のスクロールも禁止
    } else {
      // メニューが閉じた時、スクロールを元に戻す
      document.body.style.overflow = ''; // メニューが閉じたときにスクロールを元に戻す
      document.documentElement.style.overflow = ''; // html のスクロールを元に戻す
    }
  }, [isOpen]);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        {/* ロゴの表示をisOpenで制御 */}
        {isOpen && (
          <div className={styles.logoContainer}>
            <Link href="/" onClick={handleLinkClick} className={styles.logoLink}>
              <Image
                src="/icon.png"
                alt="SIMPLE"
                className={styles.logo}
                width={348}
                height={133}
                priority
              />
            </Link>
          </div>
        )}
        <ul className={styles.items}>
          <li>
            <Link href="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
          </li>
          <li>
            <Link href="/skill" onClick={handleLinkClick}>Skill</Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* ハンバーガーメニュー */}
      <button className={styles.button} onClick={toggleMenu}>
        <div className={cx(styles.burger, isOpen && styles.open)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </button>
    </div>
  );
}
