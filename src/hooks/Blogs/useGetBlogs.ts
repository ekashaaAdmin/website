import { axiosInstance } from "@src/utils";
import { useQuery } from "@tanstack/react-query";

export interface Blog {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    author: {
        _ref: string;
        type: string;
    };
    body: unknown;
    subTitle: string;
    categories: [];
    publishedAt: Date;
    slug: {
        _type: string;
        current: string;
    };
    title: string;
}

export const getBlogsFn = async () => {
    const response = await axiosInstance.get( "?query=*%5B_type%3D%3D'post'%5D" );
    if ( response.status === 200 ) {
        const {
            data: { result }
        } = response;
        return result;
    }
};

export const useGetBlogs = () => {
    return useQuery<Blog[]>( [], () => getBlogsFn() );
};
