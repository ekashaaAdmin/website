import { Property } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

export const getPropertiesFn = async () => {
    const query = `*[_type == 'property'] {
        _id,
        'amenities': amenities[] -> {
            _id,
            amenityName
        },
        configuration,
        'developer': developer -> {
            developerName,
            description,
            'logo': logo.asset -> {url}
        },
        'imageUrls': imageUrls[].asset -> {url},
        location,
        name,
        possessionDate,
        priceInfo,
        projectInfo,
        reraVerified
    }`;

    const response = await client.fetch( query );

    return response;
};

export const useGetProperties = () => {
    return useQuery<Partial<Property>>( [], () => getPropertiesFn() );
};
