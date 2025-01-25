import styles from "./index.module.css";
import { formatData } from "@/app/_libs/utils";

type Props = {
    date: string;
};

export default function Date({ date }: Props) {
    return (
        <span className={styles.date}>
            {formatData(date)}
        </span>
    );
}
