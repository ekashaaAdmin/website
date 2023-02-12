import { FlexBox, ImgContainer, Text } from "@src/components";
import { useGetBlog } from "@src/hooks";
import { CSS } from "@src/styles";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextComp } from "@src/components/PortableText";
import { array } from "yup";

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
        span: ( value ) => {
            console.log( value );
        },
        image: ( value ) => {
            console.log( value );
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
            <Text
                css={{
                    "@bp1": {
                        padding: "$2 0"
                    },
                    "@bp3": {
                        padding: "$5 0"
                    },
                    whiteSpace: "pre-line"
                }}
                typography={"dtPara1"}
            >
                <PortableText
                    value={data?.body as any}
                    components={myComponents}
                />
            </Text>
        </FlexBox>
    );
};
