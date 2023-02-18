import { Blog1 } from "@assets";
import { Box, Button, Flex, ImgContainer, Section, Text } from "@components";
import { Link } from "@src/components/Link";
import { useFeaturedBlogs } from "@src/hooks/Blogs/useFeaturedBlogs";

export const Blogs = () => {
    const { data: featuredBlogData } = useFeaturedBlogs();

    return (
        <Section
            direction={"column"}
            align="center"
            css={{ px: "$0", maxWidth: "$full" }}
        >
            <Box css={{ textAlign: "center", mb: "$5" }}>
                <Text
                    typography={{
                        "@initial": "mbHeading1",
                        "@bp3": "dtHeading1"
                    }}
                >
                    Hand Picked
                </Text>
                <br />
                <Text
                    typography={{
                        "@initial": "mbHeading2",
                        "@bp3": "dtHeading2"
                    }}
                    css={{ fontWeight: "$dtPara3" }}
                >
                    Blogs for You
                </Text>
            </Box>
            <Flex
                center
                direction="column"
                css={{
                    "@mobileM": {
                        width: "$mobileS"
                    },
                    "@bp1": {
                        width: "$full",
                        flexDirection: "row"
                    },
                    "@bp3": {
                        width: "998px"
                    }
                }}
            >
                <ImgContainer
                    src={featuredBlogData![ 0 ].mainImage?.url}
                    alt="blog-thubnail"
                    css={{ flex: 1 }}
                />
                <Flex
                    direction="column"
                    gap="2"
                    css={{ flex: 2, p: "$3" }}
                    align={"flexStart"}
                >
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp3": "dtHeading3"
                        }}
                        css={{ fontWeight: "$dtHeading1" }}
                    >
                        {featuredBlogData![ 0 ].title}
                    </Text>
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp3": "dtPara1"
                        }}
                    >
                        {featuredBlogData![ 0 ].subTitle}
                    </Text>

                    <Link to={`/blog/${featuredBlogData![ 0 ].slug?.current}`}>
                        <Button variant={"blueButton"}>Read More</Button>
                    </Link>
                </Flex>
            </Flex>
            <Box
                size={"full"}
                css={{
                    backgroundColor: "#4CABD2"
                }}
            >
                <Flex
                    center
                    direction="column"
                    css={{
                        margin: "auto",
                        "@mobileM": {
                            width: "$mobileS"
                        },
                        "@bp1": {
                            width: "$full",
                            flexDirection: "row-reverse"
                        },
                        "@bp3": {
                            width: "998px"
                        }
                    }}
                >
                    <ImgContainer
                        src={featuredBlogData![ 1 ].mainImage?.url}
                        alt="blog-thubnail"
                        css={{ flex: 1 }}
                    />
                    <Flex
                        direction="column"
                        gap="2"
                        css={{ flex: 2, color: "White", p: "$3" }}
                        align={"flexEnd"}
                    >
                        <Text
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtHeading3"
                            }}
                            css={{ fontWeight: "$dtHeading1" }}
                        >
                            {featuredBlogData![ 1 ].title}
                        </Text>
                        <Text
                            align={"right"}
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtPara1"
                            }}
                        >
                            {featuredBlogData![ 1 ].subTitle}
                        </Text>
                        <Link
                            to={`/blog/${featuredBlogData![ 1 ].slug?.current}`}
                        >
                            <Button variant={"whiteButton"}>Read More</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </Section>
    );
};
