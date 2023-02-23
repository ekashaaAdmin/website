import { Blog } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

export const getBlogFn = async ( blogSlug: string ) => {
    const query = `*[_type == 'post' && slug.current == '${blogSlug}'] 
    { 
        _id, 
        publishedAt,
        title, 
        body, 
        'authorName': author -> {name}, 
        'mainImage': mainImage.asset -> {url} 
    }`;
    const response = await client.fetch( query );
    return response[ 0 ];
};

export const useGetBlog = ( blogSlug: string ) => {
    return useQuery<Partial<Blog>>( [ blogSlug ], () => getBlogFn( blogSlug ) );
};
