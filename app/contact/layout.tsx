import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";
import PageTransition from "../_components/PageTransition";

export const metadata = {
    title: "お問い合わせ",
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <>
        <PageTransition>
        <Hero title="Contact" sub="お問い合わせ" />
        <Sheet>{children}</Sheet>
        </PageTransition>
        </>
    );
}