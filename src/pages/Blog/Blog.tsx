import { useGetBlogs } from "@src/hooks";
import { BlogCarousel, BlogSection, Intro } from "./sections";

export const Blog = () => {
    const { data } = useGetBlogs();

    console.log( data );

    return (
        <>
            <Intro />
            <BlogSection />
            <BlogCarousel />
        </>
    );
};
