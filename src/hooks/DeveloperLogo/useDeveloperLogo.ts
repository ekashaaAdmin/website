import { DevLogo } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

export const getLogoFn = async () => {
    const query = `*[_type == 'developerIcons' ]
    {
        'logo': logo.asset -> {url}
    }`;
    const response = await client.fetch( query );
    return response;
};

export const useDeveloperLogo = () => {
    return useQuery<DevLogo[]>( [ "developer-logo" ], () => getLogoFn() );
};
