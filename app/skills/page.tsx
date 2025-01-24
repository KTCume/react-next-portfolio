import { getSkillsList } from "@/app/_libs/microcms";
import SkillsList from "@/app/_components/SkillsList";
import { SKILLS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css"


export const revalidate = 60;

export default async function Page() {
    const { contents: skills, totalCount } = await getSkillsList({
        limit: SKILLS_LIST_LIMIT,
    });

    return (
        <section className={styles.top}>
          <h1 className={styles.title}>学習中</h1>
          <p className={styles.text}>↓詳細はクリックで</p>
        <SkillsList skills={skills} />
        </section>
    );
}