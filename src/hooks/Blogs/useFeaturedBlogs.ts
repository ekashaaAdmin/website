import { Blog } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

export const getFeaturedBlogsFn = async () => {
    const query = `*[_type == 'post' && featuredblog == true && !(_id in path('drafts.**'))] | order(publishedAt desc)
    { 
        _id, 
        publishedAt, 
        subTitle,
        'slug': slug.current,
        title, 
        body, 
        'authorName': author -> {name}, 
        'mainImage': mainImage.asset -> {url} 
    }`;
    const response = await client.fetch( query );

    return response;
};

export const useFeaturedBlogs = () => {
    return useQuery<Partial<Blog>[]>( [], () => getFeaturedBlogsFn() );
};
