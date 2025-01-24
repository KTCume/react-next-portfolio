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
                        また、好きな食べ物はラーメンとハンバーグです。<br />
                    </p>
                    </div>
                </div>
            </section>

            {/* 学習中のスキル セクション */}
            <section className={styles.skillstop}>
                <h2 className={styles.skillsTitle}>学習中のスキル</h2>
                <div className={styles.skillsContainer}>
                    <p className={styles.skillsText}>
                        現在、HTML、CSS、JavaScript、Git、TypeScript、Reactなどのスキルを学んでおり、ウェブ開発の基礎から応用まで幅広く勉強しています。<br />
                        特に、型安全なコードを書くためにTypeScriptに注力しており、Reactを使ったウェブアプリケーション開発にも挑戦しています。<br />
                    </p>
                </div>
            </section>
        </div>
    );
}
