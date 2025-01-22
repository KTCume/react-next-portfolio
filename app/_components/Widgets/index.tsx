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
      imageSrc: "webkiso.jpg", // 画像URL
      content: "天気情報: 今日の天気は晴れ、最高気温は25℃です。",
      link: "/skill", // 天気情報リンク
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "ニュース: 世界の最新ニュースをチェック。",
      link: "/news", // ニュースリンク
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "カレンダー: 今日の予定を確認しましょう。",
      link: "/calendar", // カレンダーリンク
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "株価: A社の株価は5%上昇しました。",
      link: "/stocks", // 株価情報リンク
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "株価: A社の株価は5%上昇しました。",
      link: "/stocks", // 株価情報リンク
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "株価: A社の株価は5%上昇しました。",
      link: "/stocks", // 株価情報リンク
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
      <h1 className={styles.title}>ウィジェットのリスト</h1>
      <WidgetList />
    </section>
  );
}
