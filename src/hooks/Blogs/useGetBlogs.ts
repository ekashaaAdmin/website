import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";
import { Blog } from "@src/utils";

export const getBlogsFn = async ( unwantedBlogSlug?: string ) => {
    const query = `*[_type == 'post' ${
        unwantedBlogSlug ? `&& slug.current != "${unwantedBlogSlug}"` : ""
    }] 
    { 
        _id, 
        publishedAt, 
        subTitle,
        title, 
        body,
        'slug': slug.current,
        'authorName': author -> {name}, 
        'mainImage': mainImage.asset -> {url} 
    }`;

    const response = await client.fetch( query );
    return response;
};

export const useGetBlogs = ( unwantedBlogSlug?: string ) => {
    return useQuery<
        Pick<
            Blog,
            | "_id"
            | "publishedAt"
            | "subTitle"
            | "title"
            | "body"
            | "slug"
            | "mainImage"
            | "authorName"
        >[]
    >( [ "unwantedBlogSlug", unwantedBlogSlug ], () =>
        getBlogsFn( unwantedBlogSlug )
    );
};
