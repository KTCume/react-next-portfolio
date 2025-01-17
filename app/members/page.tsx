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
          ITエンジニアを目指して、日々挑戦を楽しんでいます！
        </p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <Image
            src="/profile.jpg"
            alt="Taiki Umeiのプロフィール画像"
            width={200}
            height={200}
            className={styles.profileImage}
          />
          <div className={styles.textContent}>
            <h2 className={styles.heading}>自己紹介</h2>
            <p className={styles.text}>
              私は、常に技術の進化に興奮し、困難な課題に挑戦することに喜びを感じています。ITエンジニアとして、クリエイティブな解決策を提供することを心がけ、日々学び続けています。将来は、システムアーキテクチャやAIを活用した革新的なプロダクトを作ることを目指しています。
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>趣味と好きなこと</h2>
          <p className={styles.text}>
            アニメ、漫画、KPOPの世界に没頭しています。それぞれの分野で表現される情熱やストーリーテリングに深く影響を受け、自分の考え方や価値観を広げています。
          </p>
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
            「挑戦」を楽しみながら、最高のエンジニアを目指して進化し続けます！
          </p>
        </footer>
      </main>
    </div>
  );
}