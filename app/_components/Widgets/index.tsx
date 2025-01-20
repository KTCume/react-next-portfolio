import styles from "./index.module.css";

// ウィジェットアイテムコンポーネント
const WidgetItem: React.FC<{ imageSrc: string; content: string }> = ({ imageSrc, content }) => {
  return (
    <div className={styles.widgetItem}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="widget" className={styles.image} />
      </div>
      <p className={styles.text}>{content}</p>
    </div>
  );
};

// ウィジェットリストコンポーネント
const WidgetList: React.FC = () => {
  const items = [
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "天気情報: 今日の天気は晴れ、最高気温は25℃です。",
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "ニュース: 世界の最新ニュースをチェック。",
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "カレンダー: 今日の予定を確認しましょう。",
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "株価: A社の株価は5%上昇しました。",
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "株価: A社の株価は5%上昇しました。",
    },
    {
      imageSrc: "webkiso.jpg", // 画像URL
      content: "株価: A社の株価は5%上昇しました。",
    },
  ];

  return (
    <div className={styles.widgetList}>
      {items.map((item, index) => (
        <WidgetItem key={index} imageSrc={item.imageSrc} content={item.content} />
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
