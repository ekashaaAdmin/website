import { Blog } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

export const getFeaturedBlogsFn = async () => {
    const query = `*[_type == 'post' && featured == true] 
    { 
        _id, 
        publishedAt, 
        title, 
        body, 
        'authorName': author -> {name}, 
        'imageURL': mainImage.asset -> {url} 
    }`;
    const response = await client.fetch( query );
    return response[ 0 ];
};

export const useFeaturedBlogs = () => {
    return useQuery<Partial<Blog>>( [], () => getFeaturedBlogsFn() );
};
