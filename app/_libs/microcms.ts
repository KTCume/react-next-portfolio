import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type Skill = {
    name: string;
    position: string;
    profile: string;
    image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
    name: string;
} & MicroCMSListContent;

export type Blog = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    category: Category[];
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getSkillList = async (queries?: MicroCMSQueries) => {
    const listData = await client
    .getList<Skill>({
        endpoint: "skill",
        queries,
    });
    return listData;
};

export const getBlogList = async (queries?: MicroCMSQueries) => {
    const listData = await client
    .getList<Blog>({
        endpoint: "blog",
        queries,
    });
    return listData;
};

export const getSkillDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Skill>({
        endpoint: "skill",
        contentId,
        queries,
    });
    return detailData;
};

export const getBlogDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Blog>({
        endpoint: "blog",
        contentId,
        queries,
    });
    return detailData;
};

export const getCategoryDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Category>({
        endpoint: "categories",
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
};

export const getAllSkillList = async () => {
    const listData = await client.getAllContents<Skill>({
        endpoint: "skill",
    });
    return listData;
};

export const getAllBlogList = async () => {
    const listData = await client.getAllContents<Blog>({
        endpoint: "blog",
    });
    return listData;
};

export const getAllCategoryList = async () => {
    const listData = await client.getAllContents<Category>({
        endpoint: "categories",
    });
    return listData;
};