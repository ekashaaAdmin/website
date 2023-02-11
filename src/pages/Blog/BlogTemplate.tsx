import { Section } from "@src/components";
import { useGetBlogs } from "@src/hooks";
import { BlogCarousel, BlogSection, Intro } from "./sections";

export const BlogTemplate = () => {
    const { data } = useGetBlogs();

    console.log( data );

    return (
        <Section direction={"column"}>
            <Intro />
            <BlogSection />
            <BlogCarousel />
        </Section>
    );
};
