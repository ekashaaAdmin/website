import { DevLogo } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

export const getLogoFn = async () => {
    const query = `*[_type == 'developerIcons' ]
    {
        'logo': logo.asset
    }`;
    const response = await client.fetch( query );
    console.log( response );
    return response[ 0 ];
};

export const useDeveloperLogo = () => {
    return useQuery<Partial<DevLogo>>( [], () => getLogoFn() );
};
