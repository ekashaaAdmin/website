import { Footer_Design_Bat } from "@src/assets";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { Footerlinksgrid } from "./Footerlinksgrid";
import { FooterSocials } from "./FooterSocials";
import { globalStyles } from "@src/styles/globalStyles";
import { ImgContainer } from "../ImgContainer";

export const Footer = () => {
    return (
        <Box>
            <ImgContainer
                width={"full"}
                src={Footer_Design_Bat}
                alt="footer-design"
            />
            <Box
                css={{
                    padding: "$4",
                    boxShadow: "$shadowtype4",
                    textAlign: "center"
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
                <p>
                    All Rights Reserved. © 2023 Ekaasha Realty Advisory Pvt.
                    Ltd.
                </p>
            </Box>
        </Box>
    );
};
