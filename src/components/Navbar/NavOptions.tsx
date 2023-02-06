import { CSS } from "@src/styles";
import { DropDown } from "../DropDown";
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
            <DropDown title="About" linkTo="/about">
                <Link to={`/about/#about`}>
                    <Text typography={"navOptions"}>Ekashaa</Text>
                </Link>
                <Link to={`/about/#management`}>
                    <Text typography={"navOptions"}>Management</Text>
                </Link>
            </DropDown>
            <Text typography={"navOptions"}>
                <Link to={`/services`}>Services</Link>
            </Text>
            <Text typography={"navOptions"}>Contact Us</Text>
        </Flex>
    );
};
