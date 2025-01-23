import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSkillsDetail } from "@/app/_libs/microcms";
import ArticleSkills from "@/app/_components/ArticleSkills";
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
    const data = await getSkillsDetail(params.slug, {
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
    const data = await getSkillsDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <>
        <ArticleSkills data={data} />
        <div className={styles.footer}>
            <ButtonLink href="/skills">スキル一覧へ</ButtonLink>
            </div>
        </>
    );
}