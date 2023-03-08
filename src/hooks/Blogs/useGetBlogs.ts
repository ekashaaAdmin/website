import { axiosInstance } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

export interface Blog {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    author: {
        _ref: string;
        type: string;
    };
    body: unknown;
    subTitle: string;
    categories: [];
    publishedAt: Date;
    slug: {
        _type: string;
        current: string;
    };
    title: string;
}

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
    return useQuery<Blog[]>( [ "unwantedBlogSlug" ], () =>
        getBlogsFn( unwantedBlogSlug )
    );
};
