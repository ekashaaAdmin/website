import { belaShah_pic1, Management1, Management2 } from "@src/assets";
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
                    src={belaShah_pic1}
                    alt="blog-thubnail"
                    css={{ flex: 1 }}
                    width={"half"}
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
                        align={"center"}
                        css={{ fontWeight: "$dtHeading1" }}
                    >
                        Bela Shah
                    </Text>
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp3": "dtPara1"
                        }}
                    >
                        Bela Shah is founder and proprietor of Ekashaa Realty.
                        She has recorded sales worth ₹1900 million (₹190 crores)
                        in the last five years alone. In terms of area, her
                        sales accounts for a staggering 32000 square feet of
                        premium real estate in South Mumbai. Over the year, she
                        has been associated with prestigious residential
                        projects that house Bollywood celebrities and well-known
                        industrialists such as Piramal Mahalaxmi, XXX, XXXX.
                        <br />
                        Among her clients are CEOs and CFOs of tech, advertising
                        and automotive firms, who rely on her deep market
                        knowledge and insights for their purchase decisions. A
                        keen listener with an affable personality, Bela is well
                        known for her ability to find and make personal
                        connections everywhere she goes. Her intuitive
                        understanding of client needs and her knack to persuade
                        without pestering sets her apart from the rest.
                        <br />
                        Through Ekashaa, Bela hopes to augment the unique voice
                        and vision that she brings to the premium real estate
                        market.
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
