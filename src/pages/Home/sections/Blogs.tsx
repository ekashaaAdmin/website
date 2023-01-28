import { Blog1 } from "@assets";
import { Box, Button, Flex, ImgContainer, Section, Text } from "@components";
import { CSS } from "@src/styles";

export const Blogs = () => {
    return (
        <Section align="center" direction="column" gap="5">
            <Box>
                <Text>Hand Picked</Text>
                <br />
                <Text>Blogs for You</Text>
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
        </Section>
    );
};
