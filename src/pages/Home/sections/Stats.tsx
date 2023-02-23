import { Flex, Section, Text } from "@components";

export const Stats = () => {
    return (
        <Section id="stats" center direction={"column"} gap="10">
            <Flex direction="column" align={"center"} justify={"center"}>
                <Text
                    align={"center"}
                    typography={{
                        "@initial": "mbHeading1",
                        "@bp3": "dtHeading1"
                    }}
                >
                    A complete solution for all your{" "}
                </Text>
                <Text
                    typography={{
                        "@initial": "mbHeading1",
                        "@bp3": "dtHeading1"
                    }}
                >
                    <Text align={"center"} css={{ fontWeight: "$dtPara1" }}>
                        property needs!
                    </Text>
                </Text>
            </Flex>

            {/* <Flex
                direction={{ "@initial": "column", "@bp2": "row" }}
                css={{ textAlign: "center" }}
                gap={{ "@initial": "2" }}
                justify={{ "@bp2": "spaceAround" }}
                width={{ "@bp2": "full", "@bp3": "half" }}
            >
                <Flex direction="column">
                    <Text
                        typography={{
                            "@initial": "mbHeading1",
                            "@bp3": "dtHeading2"
                        }}
                    >
                        10000+
                    </Text>
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp3": "dtPara1"
                        }}
                    >
                        Total Properties
                    </Text>
                </Flex>
                <Flex direction="column">
                    <Text
                        typography={{
                            "@initial": "mbHeading1",
                            "@bp3": "dtHeading2"
                        }}
                    >
                        50000+
                    </Text>
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp3": "dtPara1"
                        }}
                    >
                        Happy Customers
                    </Text>
                </Flex>
                <Flex direction="column">
                    <Text
                        typography={{
                            "@initial": "mbHeading1",
                            "@bp3": "dtHeading2"
                        }}
                    >
                        1000+
                    </Text>
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp3": "dtPara1"
                        }}
                    >
                        Developers
                    </Text>
                </Flex>
            </Flex> */}
        </Section>
    );
};
