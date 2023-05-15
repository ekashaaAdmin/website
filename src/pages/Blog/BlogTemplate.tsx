import { Section, Text } from "@src/components";
import { useGetBlog, useGetBlogs } from "@src/hooks";
import { useParams } from "react-router-dom";
import { BlogCarousel, BlogSection, Intro } from "./sections";
import { Blog } from "@src/utils";

export const BlogTemplate = () => {
    const { blogSlug } = useParams();

    return (
        <Section direction={"column"}>
            <Intro />
            <BlogSection blogSlug={blogSlug} />
            <BlogCarousel unwantedBlogSlug={blogSlug} />
        </Section>
    );
};
