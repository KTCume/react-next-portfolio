import { notFound } from "next/navigation";
import { getSkillList } from "@/app/_libs/microcms";
import SkillList from "@/app/_components/SkillList";
import Pagination from "@/app/_components/Pagination";
import { SKILL_LIST_LIMIT } from "@/app/_constants";

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

    const { contents: skill, totalCount } = await getSkillList({
        limit: SKILL_LIST_LIMIT,
        offset: SKILL_LIST_LIMIT * (current - 1),
    });

    return (
        <>
        <SkillList skill={skill} />
        <Pagination totalCount={totalCount} current={current} />
        </>
    );
}
