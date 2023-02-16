import { useQuery } from "@tanstack/react-query";
import client from "@src/utils/client";
import { Property } from "@src/utils";

export const featuredPropertiesFn = async () => {
    const query = `*[_type == 'property' && featuredProject == true] {
        _id,
        'imageUrls': imageUrls[].asset -> {url},
        configuration,
        location,
        name,
        priceInfo,
        reraVerifiedss
    }`;

    const response = await client.fetch( query );

    return response;
};

export const useFeaturedProperties = () => {
    return useQuery<Partial<Property>>( [ "featuredProperties" ], () =>
        featuredPropertiesFn()
    );
};
