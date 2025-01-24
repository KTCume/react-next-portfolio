import Link from "next/link";
import styles from "./index.module.css";

// ウィジェットアイテムコンポーネント
const WidgetItem: React.FC<{ imageSrc: string; content: string; detail: string; link: string }> = ({
  imageSrc,
  content,
  detail,
  link,
}) => {
  return (
    <Link href={link} className={styles.widgetItem}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="widget" className={styles.image} />
      </div>
      <p className={styles.text}>{content}</p>
      <p className={styles.inside}>{detail}</p>
    </Link>
  );
};

// ウィジェットリストコンポーネント
const WidgetList: React.FC = () => {
  const items = [
    {
      imageSrc: "/blog.jpg",
      content: "ブログ ",
      detail: "取り組みについて日々追加していきます。",
      link: "/blog",
    },
    {
      imageSrc: "/pasokon.jpg",
      content: "スキル一覧",
      detail: "学習中のスキルを掲載しています。",
      link: "/skill", // 天気情報リンク
    },
    {
      imageSrc: "/webkiso.jpg",
      content: "お問い合わせ ",
      detail: "質問やご相談を受け付けています。",
      link: "/contact",
    },
  ];

  return (
    <div className={styles.widgetList}>
      {items.map((item, index) => (
        <WidgetItem key={index} imageSrc={item.imageSrc} content={item.content} detail={item.detail} link={item.link} />
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
