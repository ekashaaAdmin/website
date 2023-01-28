import { Footer_Design_Bat } from "@src/assets";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";
import { Text } from "../Text";
import { Footerlinksgrid } from "./Footerlinksgrid";
import { FooterSocials } from "./FooterSocials";

export const Footer = () => {
    return (
        <Box>
            <ImgContainer
                width={"full"}
                src={Footer_Design_Bat}
                alt="footer-design"
                css={{
                    textAlign: "right"
                }}
            />
            <Box
                css={{
                    padding: "$4",
                    boxShadow: "$footerShadow"
                }}
            >
                <Flex
                    direction={"column"}
                    align={"center"}
                    gap={"2"}
                    css={{
                        "@bp1": {
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "$6"
                        },
                        "@bp2": { gap: "$10" }
                    }}
                >
                    <FooterSocials />
                    <Footerlinksgrid />
                </Flex>

                <Text align={"center"} css={{ width: "$full" }}>
                    All Rights Reserved. © 2023 Ekaasha Realty Advisory Pvt.
                    Ltd.
                </Text>
            </Box>
        </Box>
    );
};
