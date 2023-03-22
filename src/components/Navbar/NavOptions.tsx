import { CSS } from "@src/styles";
import { Anchor } from "../Anchor";
import { Flex } from "../Flex";
import { NavLink } from "../NavLink";
import { Text } from "../Text";
import { FiChevronDown } from "react-icons/fi";

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
                <NavLink to={`/`}>Home</NavLink>
            </Text>
            <Text typography={"navOptions"}>
                <NavLink to={`/properties`}>Properties</NavLink>
            </Text>
            <Text typography={"navOptions"}>
                <NavLink to={`/blog`}>Blogs</NavLink>
            </Text>
            <Text typography={"navOptions"}>
                <NavLink to="/about">About</NavLink>
            </Text>
            <Text typography={"navOptions"}>
                <NavLink to={`/services`}>Services</NavLink>
            </Text>

            <Anchor href={"#contactUs"}>
                <Flex align={"center"} gap="1">
                    <Text typography={"navOptions"}> Contact Us</Text>
                    <FiChevronDown />
                </Flex>
            </Anchor>
        </Flex>
    );
};
