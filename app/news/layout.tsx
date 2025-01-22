import Hero from "@/app/_components/HeroBlog";
import Sheet from "@/app/_components/SheetBlog";

export const metadata = {
    title: "ブログ",
};

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
    return (
        <>
        <Hero title="Blog" sub="ブログ" />
        <Sheet>{children}</Sheet>
        </>
    );
}