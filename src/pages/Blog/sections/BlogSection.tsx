import { FlexBox, ImgContainer, Text } from "@src/components";
import { useGetBlog } from "@src/hooks";
import { CSS } from "@src/styles";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextComp } from "@src/components/PortableText";
import { array } from "yup";
import imageUrlBuilder from "@sanity/image-url";
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
    }
};

interface BlogSectionProps {
    blogSlug?: string;
}

const myComponents: PortableTextComponents = {
    types: {
        image: ( { value } ) => {
            return <img alt=" here" src={urlFor( value.asset ).url()} />;
        }
    }
};

export const BlogSection = ( { blogSlug }: BlogSectionProps ) => {
    const { data } = useGetBlog( blogSlug ?? "" );

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
                Published at {` ${data?.publishedAt}`}
            </Text>
            <ImgContainer
                css={{ flex: 1 }}
                width={"full"}
                heigth={"half"}
                src={`${data?.imageURL?.url}`}
                alt={"blogimage"}
            />
            <PortableText value={data?.body as any} components={myComponents} />{" "}
        </FlexBox>
    );
};
