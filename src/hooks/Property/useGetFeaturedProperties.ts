import { Property } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

export const getFeaturedPropertiesFn = async () => {
    const query = `*[_type == 'property' && featuredProject == true] {
        _id,
        'imageUrls': imageUrls[].asset -> {url},
        configuration,
        location,
        name,
        priceInfo,
        reraVerified
    }`;

    const response = await client.fetch( query );

    return response;
};

export const useGetFeaturedProperties = () => {
    return useQuery<Partial<Property>>( [], () => getFeaturedPropertiesFn() );
};
