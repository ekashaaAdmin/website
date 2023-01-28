import { Flex, Grid } from "@src/components";

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
                    <h4>Services</h4>
                    <p>Property Hunt</p>
                    <p>Leasing</p>
                    <p>Financial</p>
                    <p>Loans</p>
                </Flex>

                <Flex direction="column" gap="1">
                    <h4>Know Us</h4>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Blogs & Articles</p>
                    <p>Testemonials</p>
                </Flex>

                <Flex direction="column" gap="1">
                    <h4>Reach Us</h4>
                    <p>
                        Call us at
                        <br />
                        +91 9820 467249
                    </p>
                    <p>info@ekashaa.com</p>
                </Flex>

                <Flex direction="column" gap="1">
                    <h4>More Links</h4>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                    <p>User Agreements</p>
                    <p>Disclaimer</p>
                </Flex>
            </Grid>
        </Flex>
    );
};
