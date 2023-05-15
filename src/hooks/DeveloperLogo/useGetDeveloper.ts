import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

type Developer = {
    developerName: string;
};

const getDevelopersFn = async () => {
    const query = `*[_type == 'developer'] {
        developerName
    }`;

    const response = await client.fetch( query );
    return response;
};

export const useGetDevelopers = () => {
    return useQuery<Developer[]>( [ "getDevelopers" ], () => getDevelopersFn() );
};
