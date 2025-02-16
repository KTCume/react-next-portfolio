import styles from "./page.module.css";
import Image from "next/image";
import { getBlogList } from "@/app/_libs/microcms";
import { TOP_BLOG_LIMIT } from "@/app/_constants";
import { getSkillList } from "@/app/_libs/microcms";
import { TOP_SKILL_LIMIT } from "@/app/_constants";
import BlogList from "@/app/_components/BlogList";
import SkillList from "@/app/_components/SkillList";
import ButtonLink from "@/app/_components/ButtonLink";
import Widgets from "./_components/Widgets";
import PageTransition from "./_components/PageTransition";
import AnimatedText from "./_components/AnimatedText";

export default async function Home() {
  // ニュースとスキルのリストを同時に取得
  const [blogData, skillData] = await Promise.all([
    getBlogList({ limit: TOP_BLOG_LIMIT }),
    getSkillList({ limit: TOP_SKILL_LIMIT }),
  ]);

  return(
    <>
    <PageTransition>
      <AnimatedText />
    <section className={styles.top}>
    <div>
      <h1 className={styles.title}>PORTFOLIO</h1>
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

    <section className={styles.topContainer}>
    <section className={styles.blog}>
      <h2 className={styles.blogTitle}>Blog</h2>
      <BlogList blog={blogData.contents} />
      <div className={styles.blogLink}>
        <ButtonLink href="/blog">ブログ一覧</ButtonLink>
      </div>
    </section>
    <section className={styles.profile}>
        <h2 className={styles.profileTitle}>PROFILE</h2>
        <div className={styles.profileContainer}>
          <Image
          className={styles.profileImage}
            src="/profile.jpg"
            alt=""
            width={200}
            height={200}
          />
          <div className={styles.profileTextContainer}>
        <h2 className={styles.name}>梅井 太貴</h2>
        <p className={styles.profileText}>
          2005年生まれ、京都府出身<br />
          昨年4月に京都デザイン＆テクノロジー専門学校に入学し、現在ITを学んでいます。<br />
          スーパーITエンジニア専攻の1年です。<br />
          趣味は、アニメ、マンガとK-POPです。<br />
          好きな食べ物はラーメンとハンバーグです。<br />
        </p>
        </div>
        </div>
        <div className={styles.profileLink}>
          <ButtonLink href="/about">プロフィールを見る</ButtonLink>
        </div>
      </section>
      <section className={styles.skill}>
      <h2 className={styles.skillTitle}>Skill</h2>
      <SkillList skill={skillData.contents} />
      <div className={styles.skillLink}>
        <ButtonLink href="/skill">スキル一覧</ButtonLink>
      </div>
    </section>
      <section className={styles.widgetsSection}>
                <Widgets />
      </section>
      </section>
      </PageTransition>
    </>
  ); 
}