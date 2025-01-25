import { getSkillList } from "@/app/_libs/microcms";
import SkillList from "@/app/_components/SkillList";
import { SKILL_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css"


export const revalidate = 60;

export default async function Page() {
    const { contents: skill, totalCount } = await getSkillList({
        limit: SKILL_LIST_LIMIT,
    });

    return (
        <section className={styles.top}>
            <h1 className={styles.title}>学習中のスキル</h1>
            <p className={styles.text}>↓詳細はクリックで</p>
        <SkillList skill={skill} />
        </section>
    );
}