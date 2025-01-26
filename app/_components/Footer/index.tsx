import Link from 'next/link';
import styles from "./index.module.css";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className="styles.item">
                        <Link href="/about">自己紹介</Link>
                    </li>
                    <li className="styles.item">
                        <Link href="/blog">ブログ</Link>
                    </li>
                    <li className="styles.item">
                        <Link href="/skill">スキル</Link>
                    </li>
                    <li className="styles.item">
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>©︎ 2025 Umei Taiki</p>
        </footer>
    );
}