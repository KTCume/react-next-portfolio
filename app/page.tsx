import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import Widgets from "./_components/Widgets";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return(
    <>
    <section className={styles.top}>
    <div>
      <h1 className={styles.title}>梅井太貴</h1>
      <p className={styles.description}>
        ポートフォリオサイトです。
      </p>
    </div>
    <Image
    className={styles.bgimg}
    src="/webkiso.jpg" 
    alt="" 
    width={4000}
    height={1200}
    priority
    sizes="100vw"
    />
    </section>
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>Blog</h2>
      <NewsList news={data.contents} />
      <div className={styles.newsLink}>
        <ButtonLink href="/news">ブログ一覧へ</ButtonLink>
      </div>
    </section>
    <section className={styles.profile}>
        <h2 className={styles.profileTitle}>プロフィール</h2>
        <p className={styles.profileDescription}>
          私は梅井太貴です。ITエンジニアとして、さまざまなプロジェクトに取り組んでいます。このサイトでは、私の作品やブログをご覧いただけます。
        </p>
        <div className={styles.profileLink}>
          <ButtonLink href="/about-me">プロフィールを見る</ButtonLink>
        </div>
      </section>
      <section className={styles.widgetsSection}>
                <Widgets />
      </section>
    </>
  ); 
}