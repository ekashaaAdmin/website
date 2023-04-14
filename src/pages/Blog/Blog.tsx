import { BlogCard, Grid, Link, Section } from "@src/components";
import { useGetBlogs } from "@src/hooks";
import { Intro } from "./sections";

export const Blog = () => {
    const { data: blogs } = useGetBlogs();

    return (
        <Section direction="column">
            <Intro />
            <Grid
                columns={"blogGrid"}
                css={{
                    "@bp3": {
                        px: "$5"
                    }
                }}
                gap={"4"}
            >
                {blogs?.map(
                    ( { _id, title, subTitle, authorName, mainImage, slug } ) => (
                        <Link to={`${slug ?? ""}`} key={_id}>
                            <BlogCard
                                title={title}
                                subTitle={subTitle}
                                authorName={authorName}
                                mainImage={mainImage}
                            />
                        </Link>
                    )
                )}
            </Grid>
        </Section>
    );
};
