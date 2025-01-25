import Hero from "@/app/_components/HeroBlog";
import Sheet from "@/app/_components/SheetBlog";
import PageTransition from "../_components/PageTransition";

export const metadata = {
    title: "ブログ",
};

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function BlogLayout({ children }: Props) {
    return (
        <>
        <PageTransition>
        <Hero title="Blog" sub="ブログ" />
        <Sheet>{children}</Sheet>
        </PageTransition>
        </>
    );
}