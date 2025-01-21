import styles from "./page.module.css";

export default function Page() {
    return (
        <div>
            <section className={styles.top}>
                <h1 className={styles.title}>プロフィール</h1>
                <div className={styles.profileCard}>
                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>名前:</span>
                        <span className={styles.profileValue}>梅井 太貴</span>
                    </div>
                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>年齢:</span>
                        <span className={styles.profileValue}>19歳</span>
                    </div>
                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>専攻:</span>
                        <span className={styles.profileValue}>スーパーITエンジニア専攻</span>
                    </div>
                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>趣味:</span>
                        <span className={styles.profileValue}>アニメ、マンガ、KPOP</span>
                    </div>
                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>好きな食べ物:</span>
                        <span className={styles.profileValue}>ラーメン、ハンバーガー</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
