import { Ekashaa_Footer_Logo } from "@src/assets";
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsWhatsapp
} from "react-icons/bs";
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
                <a href="https://instagram.com/ekashaa.realty?igshid=ZGUzMzM3NWJiOQ==">
                    <BsInstagram
                        style={{
                            color: "black"
                        }}
                    />
                </a>
                <a href="https://wa.me/message/MX5LPIMY2X6ZJ1">
                    <BsWhatsapp
                        style={{
                            color: "black"
                        }}
                    />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100091623601628&mibextid=ZbWKwL">
                    <BsFacebook
                        style={{
                            color: "black"
                        }}
                    />
                </a>
                <a href="https://www.linkedin.com/in/ekashaa-realty-advisory-87b2a5262">
                    <BsLinkedin
                        style={{
                            color: "black"
                        }}
                    />
                </a>
            </Flex>
        </Flex>
    );
};
