import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

export const metadata = {
    title: "スキル",
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
    <>
    <Hero title="Skill" sub="スキル" />
    <Sheet>{children}</Sheet>;
    </>
    );
}