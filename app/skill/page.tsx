import Image from "next/image";
import Link from "next/link";  // Linkコンポーネントをインポート
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

export default async function Page() {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul className={styles.memberList}>
          {data.contents.map((member) => (
            // Linkコンポーネントで<li>要素全体をラップ
            <Link key={member.id} href={`/members/${member.id}`} className={styles.listItem}>
              <li className={styles.listItemContent}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image.url}
                    alt={member.name}
                    width={240}
                    height={240}
                    className={styles.image}
                  />
                </div>
                <div className={styles.info}>
                  <p className={styles.name}>{member.name}</p>
                  <p className={styles.position}>{member.position}</p>
                  <p className={styles.profile}>{member.profile}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
