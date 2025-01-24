import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContactForm";

export default function Page() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
            ご質問やご相談があれば、下記のフォームからお気軽にご連絡ください。<br />
            内容を確認次第、迅速にお返事いたします。ご相談お待ちしております。
            </p>
            <ContactForm />
        </div>
    );
}