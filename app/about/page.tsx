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

            {/* 学習中のスキル セクション */}
            <section className={styles.skillsSection}>
                <h2 className={styles.skillsTitle}>学習中のスキル</h2>
                <div className={styles.skillsContainer}>
                    <div className={styles.skillItem}>
                        <span className={styles.skillLabel}>HTML, CSS, JavaScript:</span> 
                        <p>これらの基本的なウェブ技術を勉強しており、ウェブデザインやフロントエンド開発に関する知識を深めています。</p>
                    </div>
                    <div className={styles.divider}></div>

                    <div className={styles.skillItem}>
                        <span className={styles.skillLabel}>Git:</span> 
                        <p>バージョン管理ツールのGitを使って、コードの管理やチーム開発の経験を積んでいます。</p>
                    </div>
                    <div className={styles.divider}></div>

                    <div className={styles.skillItem}>
                        <span className={styles.skillLabel}>TypeScript:</span> 
                        <p>現在TypeScriptを勉強中です。JavaScriptの拡張機能を使い、型安全なコードを書くことを目指しています。</p>
                    </div>
                    <div className={styles.divider}></div>

                    <div className={styles.skillItem}>
                        <span className={styles.skillLabel}>React:</span> 
                        <p>Reactを使ったウェブアプリケーション開発にも挑戦したいと考えています。コンポーネントベースの開発を学んでいます。</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
