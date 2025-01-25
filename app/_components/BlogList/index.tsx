import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Category from "../Category";
import Date from "../Date";
import { Blog } from "@/app/_libs/microcms";

type Props = {
    blog: Blog[];
};

export default function BlogList({ blog }: Props) {
    if (blog.length === 0) {
        return <p>記事がありません。</p>;
    }
    return (
        <div className={styles.container}>
            {blog.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link href={`/blog/${article.id}`} className={styles.link}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={article.thumbnail ? article.thumbnail.url : "/no-image.png"}
                            alt={article.title || "No Image"}
                            className={styles.image}
                            width={150}
                            height={100} // サイズを統一
                        />
                        </div>
                        <dl className={styles.content}>
                            <dd className={styles.meta}>
                            <Date date={article.publishedAt ?? article.createdAt} />
                                {Array.isArray(article.category) &&
                                article.category.map((category) => (
                                    <Category key={category.id} category={category} />
                                ))}
                            </dd>
                            <dt className={styles.title}>{article.title}</dt>
                        </dl>
                    </Link>
                </li>
            ))}
        </div>
    );
}
