import Link from "next/link";
import styles from "./index.module.css";

// ウィジェットアイテムコンポーネント
const WidgetItem: React.FC<{ imageSrc: string; content: string; link: string }> = ({ imageSrc, content, link }) => {
  return (
    <Link href={link} className={styles.widgetItem}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="widget" className={styles.image} />
      </div>
      <p className={styles.text}>{content}</p>
    </Link>
  );
};

// ウィジェットリストコンポーネント
const WidgetList: React.FC = () => {
  const items = [
    {
      imageSrc: "blog.jpg", // 画像URL
      content: "ブログ: 取り組みについて日々追加していきます。",
      link: "/news", // ニュースリンク
    },
    {
      imageSrc: "pasokon.jpg", // 画像URL
      content: "スキル一覧: 学習中のスキルを掲載しています。",
      link: "/skill", // 天気情報リンク
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "カレンダー: 今日の予定を確認しましょう。",
      link: "/calendar", // カレンダーリンク
    },
  ];

  return (
    <div className={styles.widgetList}>
      {items.map((item, index) => (
        <WidgetItem key={index} imageSrc={item.imageSrc} content={item.content} link={item.link} />
      ))}
    </div>
  );
};

// ページコンポーネント
export default function Widgets() {
  return (
    <section className={styles.top}>
      <h1 className={styles.title}>コンテンツ一覧</h1>
      <WidgetList />
    </section>
  );
}
