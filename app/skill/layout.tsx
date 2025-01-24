import Hero from "@/app/_components/HeroSkill";
import Sheet from "@/app/_components/SheetSkill";

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
        <Hero title="Skill" sub="スキル" />
        <Sheet>{children}</Sheet>
        </>
    );
}