import { Blog2 } from "@src/assets";
import { FlexBox, ImgContainer, Text } from "@src/components";
import { CSS } from "@src/styles";

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
    padding: " 0 $3"
};

export const BlogSection = () => {
    return (
        <>
            <FlexBox direction={"column"} gap={"1"} css={blogsectionCss}>
                <Text
                    typography={{
                        "@initial": "mbHeading1",
                        "@bp3": "dtHeading1"
                    }}
                >
                    Blog Title
                </Text>
                <Text
                    typography={{
                        "@initial": "mbSubHeading1",
                        "@bp3": "dtSubHeading1"
                    }}
                >
                    -Author
                </Text>
                <Text
                    typography={{
                        "@initial": "mbPara1",
                        "@bp3": "dtPara1"
                    }}
                >
                    Published at
                </Text>
                <ImgContainer
                    css={{ flex: 1 }}
                    width={"full"}
                    heigth={"half"}
                    src={Blog2}
                    alt={"blogimage"}
                />
                <Text
                    css={{
                        "@bp1": {
                            padding: "$2 0"
                        },
                        "@bp3": {
                            padding: "$5 0"
                        }
                    }}
                    typography={"dtPara1"}
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting. Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting.
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting. Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry.
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting. Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry.
                </Text>
            </FlexBox>
        </>
    );
};
