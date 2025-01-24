import Image from "next/image";
import type { Skill } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
    data: Skill;
};

export default function Article({ data }: Props) {
    return (
        <main>
            <div className={styles.container}>
            <h1 className={styles.title}>{data.name}</h1>
            <p className={styles.description}>{data.position}</p>
            {data.image && (
                <Image
                src={data.image.url}
                alt=""
                className={styles.thumbnail}
                width={data.image.width}
                height={data.image.height}
                />
            )}
            <div
            className={styles.content}
            dangerouslySetInnerHTML={{
                __html: data.profile,
            }}
            />
            </div>
        </main>
    );
}