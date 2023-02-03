import { Flex, Grid, Text } from "@src/components";

export const Footerlinksgrid = () => {
    return (
        <Flex direction={"column"}>
            <Grid
                columns={"2"}
                gapX={"1"}
                gapY={"3"}
                align={"start"}
                justify={"center"}
                css={{
                    "@bp1": {
                        gridTemplateColumns: "repeat(4, 1fr)",
                        columnGap: "$6"
                    }
                }}
            >
                <Flex direction="column" gap="1">
                    <Text css={{ fontWeight: "$dtHeading1" }}>Services</Text>
                    <Text>Property Hunt</Text>
                    <Text>Leasing</Text>
                    <Text>Financial</Text>
                    <Text>Loans</Text>
                </Flex>

                <Flex direction="column" gap="1">
                    <Text css={{ fontWeight: "$dtHeading1" }}>Know Us</Text>
                    <Text>Home</Text>
                    <Text>About Us</Text>
                    <Text>Blogs & Articles</Text>
                    <Text>Testemonials</Text>
                </Flex>

                <Flex direction="column" gap="1">
                    <Text css={{ fontWeight: "$dtHeading1" }}>Reach Us</Text>
                    <Text>
                        Call us at
                        <br />
                        +91 9820 467249
                    </Text>
                    <Text>info@ekashaa.com</Text>
                </Flex>

                <Flex direction="column" gap="1">
                    <Text css={{ fontWeight: "$dtHeading1" }}>More Links</Text>
                    <Text>FAQ</Text>
                    <Text>Privacy Policy</Text>
                    <Text>User Agreements</Text>
                    <Text>Disclaimer</Text>
                </Flex>
            </Grid>
        </Flex>
    );
};
