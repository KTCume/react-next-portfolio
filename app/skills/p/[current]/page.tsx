import { notFound } from "next/navigation";
import { getSkillsList } from "@/app/_libs/microcms";
import SkillsList from "@/app/_components/SkillsList";
import Pagination from "@/app/_components/Pagination";
import { SKILLS_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
        current: string;
    };
};

export default async function Page({ params }: Props) {
    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 1) {
        notFound();
    }

    const { contents: skills, totalCount } = await getSkillsList({
        limit: SKILLS_LIST_LIMIT,
        offset: SKILLS_LIST_LIMIT * (current - 1),
    });

    return (
        <>
        <SkillsList skills={skills} />
        <Pagination totalCount={totalCount} current={current} />
        </>
    );
}
