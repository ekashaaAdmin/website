import { belaShahProfile } from "@src/assets";
import { Flex, ImgContainer, Section, Text } from "@src/components";

export const Management = () => {
    return (
        <Section
            id="management"
            direction={"column"}
            align="center"
            css={{ px: "$0", maxWidth: "$full" }}
        >
            <Text
                typography={{ "@initial": "mbHeading1", "@bp3": "dtHeading1" }}
            >
                Meet <Text css={{ fontWeight: "$dtPara1" }}>the Team</Text>
            </Text>
            <Text
                typography={{
                    "@initial": "mbSubHeading1",
                    "@bp3": "dtSubHeading1"
                }}
            >
                MANAGEMENT
            </Text>

            <Flex
                center
                direction="column"
                css={{
                    mt: "$7",
                    "@mobileM": {
                        width: "$mobileS"
                    },
                    "@bp1": {
                        width: "$full",
                        flexDirection: "column"
                        // flexDirection: "row"
                    },
                    "@bp3": {
                        width: "998px"
                    }
                }}
            >
                <ImgContainer
                    src={belaShahProfile}
                    alt="blog-thubnail"
                    css={{
                        flex: 1,
                        width: "20rem",
                        maxHeight: "20rem",
                        borderRadius: "50%",
                        overflow: "hidden"
                    }}
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
                            "@bp3": "dtHeading2"
                        }}
                        align={"center"}
                        css={{ fontWeight: "$dtHeading1", alignSelf: "center" }}
                    >
                        Bela Shah
                    </Text>
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp3": "dtPara1"
                        }}
                    >
                        Bela Shah is the founder and proprietor of Ekashaa
                        Realty. She has sold a staggering 44000 square feet of
                        premium real estate in South Mumbai worth ₹2700 million
                        (₹270 crores) in the last six years. In August 2023, she
                        topped the state in the MahaRera Real Estate
                        examination, which is the only government-recognized
                        professional certification for real estate agents in
                        Maharashtra. Since then, she has been featured in
                        several national dailies and industry-based publications{" "}
                        <br />
                        <br />A keen listener with an affable personality,
                        Bela’s intuitive understanding of client needs, deep
                        market knowledge and honest communication makes her one
                        of the most reliable voices in the
                        premium realty market.
                    </Text>
                </Flex>
            </Flex>
            {/* <Box
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
                        src={Management2}
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
                            reprehenderit nemo aliquid maiores suscipit. Ex,
                            facilis consectetur?
                        </Text>
                    </Flex>
                </Flex>
            </Box> */}
        </Section>
    );
};
