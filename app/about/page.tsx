import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
    return (
        <div>
            <section className={styles.top}>
                <h1 className={styles.title}>PROFILE</h1>
                <div className={styles.profileContainer}>
                    <Image
                        className={styles.profileImage}
                        src="/profile.jpg"
                        alt=""
                        width={300}
                        height={300}
                    />
                    <div className={styles.profileTextContainer}>
                    <h2 className={styles.name}></h2>
                    <p className={styles.profileText}>
                        私の名前は梅井 太貴です。<br />
                        現在、京都デザイン＆テクノロジー専門学校でITを学んでいます。<br />
                        スーパーITエンジニア専攻 1年<br />
                        趣味は、アニメ、マンガとK-POPです。<br />
                        好きな食べ物はラーメンとハンバーグです。<br />
                    </p>
                    </div>
                </div>
            </section>

            <section className={styles.interest}>
            <h2 className={styles.interestTitle}>ITに興味を持った理由</h2>
                <div className={styles.interestContainer}>
                    <p className={styles.interestText}>
                        高校在学中にIT関連の授業を受けたことがきっかけで、ITに興味を持つようになりました。<br />
                        高校では特に何かを作るようなことはしていませんでしたが、唯一眠くならずに集中できた授業がIT関連の授業でした。その時間だけは不思議と興味を持って取り組むことができ、ITの世界に魅力を感じるきっかけになりました。
                    </p>
                </div>
            </section>

            {/* 学習中のスキル セクション */}
            <section className={styles.skillstop}>
                <h2 className={styles.skillsTitle}>学習中のスキル</h2>
                <div className={styles.skillsContainer}>
                    <p className={styles.skillsText}>
                    現在、HTML、CSS、TypeScript、Reactを中心に学習しています。<br />
                    HTMLとCSSでWebページの基本構造やデザインを学び、レスポンシブデザインやモダンなレイアウトの実装に取り組んでいます。<br />
                    Reactではコンポーネントの再利用性を意識したUI構築を目指し、特にTypeScriptを活用して型安全なコードの重要性を学習中です。<br />
                    これからは学んだスキルを活かし、シンプルなWebサイトから少しずつ動的なアプリケーションの制作に挑戦していきたいと考えています。
                    まだ経験は浅いですが、ReactとTypeScriptを活用しながら実践的な開発に取り組み、最新技術を取り入れた質の高いWebサイトを作れるよう成長していきたいです。
                    </p>
                </div>
            </section>
        </div>
    );
}
