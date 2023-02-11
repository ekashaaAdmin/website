import { axiosInstance } from "@src/utils";
import { useQuery } from "@tanstack/react-query";

export const getBlogFn = async () => {
    const response = await axiosInstance.get( "?query", {} );
};
