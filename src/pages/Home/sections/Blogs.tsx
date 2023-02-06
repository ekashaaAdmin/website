import { Blog1 } from "@assets";
import { Box, Button, Flex, ImgContainer, Section, Text } from "@components";
import { CSS } from "@src/styles";

export const Blogs = () => {
    return (
        <Section
            direction={"column"}
            align="center"
            css={{ px: "$0", maxWidth: "$full" }}
            gap={"5"}
        >
            <Box css={{ textAlign: "center" }}>
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
                gap="3"
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
                    src={Blog1}
                    alt="blog-thubnail"
                    css={{ flex: 1 }}
                />
                <Flex
                    direction="column"
                    gap="2"
                    css={{ flex: 2 }}
                    align={"flexStart"}
                >
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp3": "dtHeading3"
                        }}
                        css={{ fontWeight: "$dtHeading1" }}
                    >
                        Catchy Title/Heading Here
                    </Text>
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp3": "dtPara1"
                        }}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Praesentium reiciendis, corrupti vel reprehenderit
                        nemo aliquid maiores suscipit. Ex, facilis consectetur?
                    </Text>
                    <Button variant={"blueButton"}>Read More</Button>
                </Flex>
            </Flex>
            <Box
                size={"full"}
                css={{
                    backgroundColor: "#4CABD2",
                    p: "$5 0"
                }}
            >
                <Flex
                    center
                    direction="column"
                    gap="3"
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
                        src={Blog1}
                        alt="blog-thubnail"
                        css={{ flex: 1 }}
                    />
                    <Flex
                        direction="column"
                        gap="2"
                        css={{ flex: 2, color: "White" }}
                        align={"flexEnd"}
                    >
                        <Text
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtHeading3"
                            }}
                            css={{ fontWeight: "$dtHeading1" }}
                        >
                            Catchy Title/Heading Here
                        </Text>
                        <Text
                            align={"right"}
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtPara1"
                            }}
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Praesentium reiciendis, corrupti vel
                            reprehenderit nemo aliquid maiores suscipit. Ex
                            facilis consectetur?
                        </Text>
                        <Button variant={"whiteButton"}>Read More</Button>
                    </Flex>
                </Flex>
            </Box>
        </Section>
    );
};
