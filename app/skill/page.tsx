import Image from "next/image";
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
            <li key={member.id} className={styles.listItem}>
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
          ))}
        </ul>
      )}
    </div>
  );
}
