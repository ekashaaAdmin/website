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
                src={Footer_Design_Bat}
                alt="footer-design"
                css={{
                    ml: "auto",
                    width: "15rem"
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
                        mb: "$2",
                        "@bp3": {
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "$10"
                        }
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
