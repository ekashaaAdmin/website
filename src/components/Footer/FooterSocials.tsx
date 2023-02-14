import { Ekashaa_Footer_Logo } from "@src/assets";
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsWhatsapp
} from "react-icons/bs";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { Text } from "../Text";

export const FooterSocials = () => {
    return (
        <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={"4"}
        >
            <Text typography={"dtHeading3"}>
                Looking for a Property <br />{" "}
                <Text css={{ fontWeight: "$dtPara1" }}>We got your back!</Text>
            </Text>
            <img src={Ekashaa_Footer_Logo} />
            <Flex
                css={{
                    fontSize: "$dtHeading3"
                }}
                gap={"3"}
            >
                <BsInstagram />
                <BsWhatsapp />
                <BsFacebook />
                <BsLinkedin />
            </Flex>
        </Flex>
    );
};
