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
    address: string[];
    configuration: number[];
    developer: string[];
};

export const getPropertiesFn = async ( {
    minPrice = 2,
    maxPrice = 50,
    address = [],
    configuration = [],
    developer = []
}: FilterParams ) => {
    const query = `*[_type == 'property' 
    && priceInfo.price > $minPrice
    && priceInfo.price < $maxPrice
    ${
    address.length > 0
        ? `&& ${address
            .map( ( a, i ) =>
                address.length !== i + 1
                    ? `location.address match '${a}' ||`
                    : `location.address match '${a}'`
            )
            .join( " " )}`
        : ""
}
    ${developer.length > 0 ? `&& developer -> developerName in $devs` : ""}
    ] {
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
        minPrice: minPrice,
        maxPrice: maxPrice,
        devs: developer
    };

    console.log( query );

    const response = await client.fetch( query, params );
    return response;
};

export const useGetProperties = ( {
    minPrice,
    maxPrice,
    address,
    configuration,
    developer
}: FilterParams ) => {
    return useQuery<Partial<Property>[]>(
        [
            {
                address,
                configuration,
                developer,
                maxPrice,
                minPrice
            },
            "getProperties"
        ],
        () =>
            getPropertiesFn( {
                address,
                configuration,
                maxPrice,
                minPrice,
                developer
            } )
    );
};
