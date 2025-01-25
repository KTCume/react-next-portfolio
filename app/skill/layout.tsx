import Hero from "@/app/_components/HeroSkill";
import Sheet from "@/app/_components/SheetSkill";
import PageTransition from "../_components/PageTransition";

export const metadata = {
    title: "スキル",
};

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function SkillLayout({ children }: Props) {
    return (
        <>
        <PageTransition>
        <Hero title="Skill" sub="スキル" />
        <Sheet>{children}</Sheet>
        </PageTransition>
        </>
    );
}