import { Ekashaa_Footer_Logo } from "@src/assets";
import { Box } from "../Box";
import { Flex } from "../Flex";

export const FooterSocials = () => {
    return (
        <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={"4"}
        >
            <p>
                <strong>Looking for a Property</strong> <br /> We got your back!
            </p>
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
