import { CSS } from "@src/styles";
import { Anchor } from "../Anchor";
import { Flex } from "../Flex";
import { Link } from "../Link";
import { Text } from "../Text";

interface NavOptions {}

export const navOptionsCss: CSS = {
    backgroundColor: "White",
    color: "Black",
    borderRadius: "$inputFieldBorderRadius",
    padding: "$3",
    position: "absolute",
    pointerEvents: "none",
    right: "$0",
    top: "$10",
    width: "max-content",
    opacity: 0,
    transform: "translateY(-10%)",
    transition: "all .3s ease-in-out 0s",
    ".active &": {
        opacity: 1,
        pointerEvents: "all",
        transform: "translateY(0)"
    },
    "@bp2": {
        opacity: "unset",
        gap: "$4",
        flexDirection: "row",
        pointerEvents: "all",
        position: "relative",
        padding: "$0",
        top: "unset"
    }
};

export const NavOptions = () => {
    return (
        <Flex direction={"column"} gap={"1"} css={navOptionsCss}>
            <Text typography={"navOptions"}>
                <Link to={`/`}>Home</Link>
            </Text>
            <Text typography={"navOptions"}>
                <Link to="/about">About</Link>
            </Text>

            <Text typography={"navOptions"}>
                <Link to={`/services`}>Services</Link>
            </Text>
            <Anchor href={"#contactUs"}>
                <Text typography={"navOptions"}> Contact Us</Text>
            </Anchor>
        </Flex>
    );
};
