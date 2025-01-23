import Image from "next/image";
import type { Skills } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
    data: Skills;
};

export default function Article({ data }: Props) {
    return (
        <main>
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
        </main>
    );
}