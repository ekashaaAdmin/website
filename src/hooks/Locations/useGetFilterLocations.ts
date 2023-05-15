import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

type FilterLocation = {
    location: string;
};

const getFilterLocationsFn = async () => {
    const query = `*[_type == 'filterLocations'] {
        location
    }`;

    const response = await client.fetch( query );
    return response;
};

export const useGetFilterLocations = () => {
    return useQuery<FilterLocation[]>( [ "useGetFilterLocations" ], () =>
        getFilterLocationsFn()
    );
};
