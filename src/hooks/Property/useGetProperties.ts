import { useQuery } from "@tanstack/react-query";
import client from "@src/utils/client";

export const getPropertiesFn = async () => {
    const query = `*[_type == 'post'] 
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

export const useGetProperties = () => {
    return useQuery( [], () => getPropertiesFn() );
};
