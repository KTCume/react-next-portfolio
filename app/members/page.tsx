import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";



export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Taiki Umeiの自己紹介</h1>
        <p className={styles.subtitle}>
          ITエンジニアを目指し、日々進化し続けています！
        </p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <Image
            src="/profile.jpg" // プロフィール画像のパス
            alt="Taiki Umeiのプロフィール画像"
            width={200}
            height={200}
            className={styles.profileImage}
          />
          <div className={styles.textContent}>
            <h2 className={styles.heading}>趣味と好きなこと</h2>
            <p className={styles.text}>
              アニメ、漫画、KPOPを楽しむことが大好きです。特にクリエイティブな世界観や感動するストーリーに惹かれます。
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>スキルセット</h2>
          <ul className={styles.skillsList}>
            <li>HTML/CSS/JavaScript</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Python（パズルゲーム開発中）</li>
          </ul>
        </section>
        <footer className={styles.footer}>
          <p className={styles.message}>
            <span>「挑戦」を楽しみながら、最高のエンジニアを目指します！</span>
          </p>
        </footer>
      </main>
    </div>
  );
}