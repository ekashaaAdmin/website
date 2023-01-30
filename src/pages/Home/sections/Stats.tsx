import { Flex, Section, Text } from "@components";

export const Stats = () => {
    return (
        <Section id="stats" center direction={"column"} gap="5">
            <Flex direction="column">
                <Text>A complete solution for</Text>
                <Text>
                    all you <Text>property needs!</Text>
                </Text>
            </Flex>

            <Flex
                direction={{ "@initial": "column", "@bp2": "row" }}
                css={{ textAlign: "center" }}
                gap={{ "@initial": "2" }}
                justify={{ "@bp2": "spaceAround" }}
                width={{ "@bp2": "full", "@bp3": "half" }}
            >
                <Flex direction="column">
                    <Text>10000+</Text>
                    <Text>Total Properties</Text>
                </Flex>
                <Flex direction="column">
                    <Text>50000+</Text>
                    <Text>Happy Customers</Text>
                </Flex>
                <Flex direction="column">
                    <Text>1000+</Text>
                    <Text>Developers</Text>
                </Flex>
            </Flex>
        </Section>
    );
};
