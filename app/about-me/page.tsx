import styles from "./page.module.css";


export default function Page() {
    return (
        <div>
            <section className={styles.top}>
                <h1 className={styles.title}>プロフィール</h1>
                <ul className={styles.profileList}>
                    <li className={styles.profileItem}>名前: 梅井 太貴</li>
                    <li className={styles.profileItem}>年齢: 19歳</li>
                    <li className={styles.profileItem}>専攻: スーパーITエンジニア専攻</li>
                    <li className={styles.profileItem}>趣味: アニメ、マンガ、KPOP</li>
                    <li className={styles.profileItem}>好きな食べ物: ラーメン、ハンバーガー</li>
                </ul>
            </section>

            
        </div>
    );
}
