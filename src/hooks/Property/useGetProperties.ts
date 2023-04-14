import { Property } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

// *[
//     _type =='property'
//     && priceInfo.price > 2
//     && priceInfo.price < 50
//     && location.address match "Bandra"
//     2 in configuration[].rooms
//   ]

type FilterParams = {
    minPrice?: number;
    maxPrice?: number;
    address?: string | undefined;
    configuration?: number;
};

export const getPropertiesFn = async ( {
    minPrice,
    maxPrice,
    address,
    configuration
}: FilterParams ) => {
    const query = `*[_type == 'property' 
    && priceInfo.price > $minPrice
    && priceInfo.price < $maxPrice
    ${address ?? `&& location.address match $location`}
    && $config in configuration[].rooms] {
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

    const params = {
        location: address,
        minPrice: minPrice,
        maxPrice: maxPrice,
        config: configuration
    };

    const response = await client.fetch( query, params );

    return response;
};

export const useGetProperties = ( {
    minPrice,
    maxPrice,
    address,
    configuration
}: FilterParams ) => {
    return useQuery<Partial<Property>[]>(
        [
            {
                address,
                configuration,
                maxPrice,
                minPrice
            },
            "getProperties"
        ],
        () => getPropertiesFn( { address, configuration, maxPrice, minPrice } )
    );
};
