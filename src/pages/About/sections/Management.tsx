import { Management1, Management2 } from "@src/assets";
import {
    Box,
    Button,
    Flex,
    ImgContainer,
    Section,
    Text
} from "@src/components";

export const Management = () => {
    return (
        <Section
            direction={"column"}
            align="center"
            css={{ px: "$0", maxWidth: "$full" }}
        >
            <Text>Meet the Team</Text>
            <Text>MANAGEMENT</Text>

            <Flex
                center
                direction="column"
                gap="3"
                css={{
                    mt: "$7",
                    p: "$5 0",
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
                    src={Management1}
                    alt="blog-thubnail"
                    css={{ flex: 1 }}
                />
                <Flex direction="column" gap="2" css={{ flex: 2 }}>
                    <Text>Catchy Title/Heading Here</Text>
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Praesentium reiciendis, corrupti vel reprehenderit
                        nemo aliquid maiores suscipit. Ex, facilis consectetur?
                    </Text>
                    <Button>Read More</Button>
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
                        src={Management2}
                        alt="blog-thubnail"
                        css={{ flex: 1 }}
                    />
                    <Flex direction="column" gap="2" css={{ flex: 2 }}>
                        <Text>Catchy Title/Heading Here</Text>
                        <Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Praesentium reiciendis, corrupti vel
                            reprehenderit nemo aliquid maiores suscipit. Ex,
                            facilis consectetur?
                        </Text>
                        <Button>Read More</Button>
                    </Flex>
                </Flex>
            </Box>
        </Section>
    );
};
