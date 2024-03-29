import { PortableText, PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { Box, FlexBox, ImgContainer, Text } from "@src/components";
import { useGetBlog } from "@src/hooks";
import { CSS } from "@src/styles";
import client from "@src/utils/client";

const builder = imageUrlBuilder( client );

function urlFor( source: string ) {
    return builder.image( source );
}

const blogsectionCss: CSS = {
    margin: "$0 auto",
    "@mobileM": {
        maxWidth: "$mobileS"
    },
    "@bp1": {
        maxWidth: "$tablet"
    },
    "@bp3": {
        maxWidth: "$laptopS"
    },
    "& p": {
        fontSize: "$dtPara2",
        mb: "$1",
        "@bp1": {
            fontSize: "$mbPara1"
        }
    }
};

interface BlogSectionProps {
    blogSlug?: string;
}

const myComponents: PortableTextComponents = {
    types: {
        image: ( { value } ) => {
            return (
                <ImgContainer
                    size={"half"}
                    // @ts-ignore
                    src={urlFor( value.asset ).url()}
                    alt="blog-img"
                />
            );
        }
    }
};

export const BlogSection = ( { blogSlug }: BlogSectionProps ) => {
    const { data } = useGetBlog( blogSlug ?? "" );
    const publishedDate = new Date(
        data?.publishedAt as string
    ).toLocaleDateString( "en-EN", {
        year: "numeric",
        day: "numeric",
        month: "short"
    } );

    return (
        <FlexBox direction={"column"} gap={"1"} css={blogsectionCss}>
            <Text
                typography={{
                    "@initial": "mbHeading1",
                    "@bp3": "dtHeading1"
                }}
            >
                {data?.title}
            </Text>
            <Text
                typography={{
                    "@initial": "mbSubHeading1",
                    "@bp3": "dtSubHeading1"
                }}
            >
                -{data?.authorName?.name}
            </Text>
            <Text
                typography={{
                    "@initial": "mbPara1",
                    "@bp3": "dtPara1"
                }}
            >
                Published at {`${publishedDate}`}
            </Text>
            {data?.mainImage?.url && (
                <ImgContainer
                    css={{ height: "25rem" }}
                    width={"full"}
                    fullHeight
                    objectFit="contain"
                    src={`${data?.mainImage?.url}`}
                    alt={"blogimage"}
                />
            )}
            <PortableText value={data?.body as any} components={myComponents} />
        </FlexBox>
    );
};
