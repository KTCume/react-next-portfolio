import Sheet from "@/app/_components/SheetAbout";
import Hero from "@/app/_components/Hero";
import PageTransition from "../_components/PageTransition";

export const metadata = {
    title: "自己紹介",
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
    <>
    <PageTransition>
    <Hero title="About Me" sub="自己紹介" />
    <Sheet>{children}</Sheet>
    </PageTransition>
    </>
    );
}