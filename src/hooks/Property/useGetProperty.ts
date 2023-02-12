import { Property } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

export const getPropertyFn = async ( _id: string ) => {
    const query = `*[_type == 'property' && _id == '${_id}'] {
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

    return response[ 0 ];
};

export const useGetProperty = ( _id: string ) => {
    return useQuery<Property>( [ _id ], () => getPropertyFn( _id ) );
};
