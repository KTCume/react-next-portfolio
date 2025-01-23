import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { Skills } from "@/app/_libs/microcms";

type Props = {
    skills: Skills[];
};

export default function SkillsList({ skills }: Props) {
    if (skills.length === 0) {
        return <p>記事がありません。</p>;
    }
    return (
        <div className={styles.container}>
            {skills.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link href={`/skills/${article.id}`} className={styles.link}>
                        {article.image ? (
                            <Image
                                src={article.image.url}
                                alt=""
                                className={styles.image}
                                width={article.image.width}
                                height={article.image.height}
                            />
                        ) : (
                            <Image
                                className={styles.image}
                                src="/no-image.png"
                                alt="No Image"
                                width={1200}
                                height={630}
                            />
                        )}
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.name}</dt>
                        </dl>
                    </Link>
                </li>
            ))}
        </div>
    );
}
