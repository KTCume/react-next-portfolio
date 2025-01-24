import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSkillDetail } from "@/app/_libs/microcms";
import ArticleSkill from "@/app/_components/ArticleSkill";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    };
};

export async function generateMetadata
({ params, searchParams }: Props): Promise<Metadata> {
    const data = await getSkillDetail(params.slug, {
        draftKey: searchParams.dk,
    });

    return {
        title: data.name,
        description: data.position,
        openGraph: {
            title: data.position,
            images: [data?.image?.url ?? ""],
        },
    };
}

export default async function Page({ params, searchParams }:Props) {
    const data = await getSkillDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <>
        <ArticleSkill data={data} />
        <div className={styles.footer}>
            <ButtonLink href="/skill">スキル一覧へ</ButtonLink>
            </div>
        </>
    );
}