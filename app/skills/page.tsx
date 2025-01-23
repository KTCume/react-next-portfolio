import { getSkillsList } from "@/app/_libs/microcms";
import SkillsList from "@/app/_components/SkillsList";
import { SKILLS_LIST_LIMIT } from "@/app/_constants";


export const revalidate = 60;

export default async function Page() {
    const { contents: skills, totalCount } = await getSkillsList({
        limit: SKILLS_LIST_LIMIT,
    });

    return (
        <>
        <SkillsList skills={skills} />
        </>
    );
}