import { Ekashaa_Footer_Logo } from "@src/assets";
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
            <Flex gap={"3"}>
                <Box
                    css={{
                        backgroundColor: "$complentaryColor",
                        size: "$3",
                        borderRadius: "$circle"
                    }}
                ></Box>
                <Box
                    css={{
                        backgroundColor: "$complentaryColor",
                        size: "$3",
                        borderRadius: "$circle"
                    }}
                ></Box>
                <Box
                    css={{
                        backgroundColor: "$complentaryColor",
                        size: "$3",
                        borderRadius: "$circle"
                    }}
                ></Box>
                <Box
                    css={{
                        backgroundColor: "$complentaryColor",
                        size: "$3",
                        borderRadius: "$circle"
                    }}
                ></Box>
            </Flex>
        </Flex>
    );
};
