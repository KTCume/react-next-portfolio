'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

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
            <Link href="/about" onClick={handleLinkClick}>自己紹介</Link>
          </li>
          <li>
            <Link href="/news" onClick={handleLinkClick}>ブログ</Link>
          </li>
          <li>
            <Link href="/skill" onClick={handleLinkClick}>スキル</Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleLinkClick}>お問い合わせ</Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
