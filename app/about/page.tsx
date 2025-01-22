import styles from "./page.module.css";

export default function Page() {
    return (
        <div>
            <section className={styles.top}>
                <h1 className={styles.title}>PROFILE</h1>
                <div className={styles.profileContainer}>
                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>名前:</span> 梅井 太貴
                    </div>
                    <div className={styles.divider}></div>

                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>年齢:</span> 19歳
                    </div>
                    <div className={styles.divider}></div>

                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>専攻:</span> スーパーITエンジニア専攻
                    </div>
                    <div className={styles.divider}></div>

                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>趣味:</span> アニメ、マンガ、KPOP
                    </div>
                    <div className={styles.divider}></div>

                    <div className={styles.profileItem}>
                        <span className={styles.profileLabel}>好きな食べ物:</span> ラーメン、ハンバーガー
                    </div>
                </div>
            </section>
        </div>
    );
}