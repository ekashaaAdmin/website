import { Flex, Grid, Text } from "@src/components";
import { Link } from "../Link";

export const Footerlinksgrid = () => {
    return (
        <Flex direction={"column"}>
            <Grid
                columns={"2"}
                gapX={"1"}
                gapY={"3"}
                align={"start"}
                justify={"start"}
                css={{
                    "@bp1": {
                        gridTemplateColumns: "repeat(4, 1fr)",
                        columnGap: "$6"
                    }
                }}
            >
                <Flex direction="column" gap="1">
                    <Text css={{ fontWeight: "$dtHeading1" }}>Know Us</Text>
                    <Link to={`/`}>
                        <Text>Home</Text>
                    </Link>

                    <Link to={`/about`}>
                        <Text>About Us</Text>
                    </Link>
                    <Link to={`/services`}>
                        <Text>Services</Text>
                    </Link>
                    <Link to={`/`}>
                        <Text>Testimonials</Text>
                    </Link>
                    <Link to={`/blog`}>
                        <Text>Ekashaa Blogs</Text>
                    </Link>
                </Flex>

                <Flex direction="column" gap="1">
                    <Text css={{ fontWeight: "$dtHeading1" }}>Reach Us</Text>
                    <Text>
                        Call us at
                        <br />
                        +91 9820 467249
                    </Text>
                    <Text>
                        <a
                            style={{ textDecoration: "none", color: "inherit" }}
                            href={"mailto:info@ekashaa.com"}
                        >
                            info@ekashaa.com
                        </a>
                    </Text>
                </Flex>

                <Flex direction="column" gap="1">
                    <Text css={{ fontWeight: "$dtHeading1" }}>More Links</Text>
                    <Text>FAQ</Text>
                    <Text>Privacy Policy</Text>
                    <Text>User Agreements</Text>
                    <Text>Disclaimer</Text>
                </Flex>

                <Flex direction="column" gap="1">
                    <Text css={{ fontWeight: "$dtHeading1" }}>Rera ID</Text>
                    <Text>A51800040029</Text>
                </Flex>
            </Grid>
        </Flex>
    );
};
