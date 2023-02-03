import { CSS } from "@src/styles";
import { DropDown } from "../DropDown";
import { Flex } from "../Flex";
import { Text } from "../Text";

interface NavOptions {}

export const navOptionsCss: CSS = {
    backgroundColor: "White",
    color: "Black",
    borderRadius: "$inputFieldBorderRadius",
    padding: "$3",
    position: "absolute",
    right: "$0",
    top: "$10",
    width: "max-content",
    opacity: 0,
    transform: "translateY(-10%)",
    transition: "all .3s ease-in-out 0s",
    zIndex: "$negativeTwo",
    ".active &": {
        opacity: 1,
        transform: "translateY(0)"
    },
    "@bp2": {
        opacity: "unset",
        gap: "$4",
        flexDirection: "row",
        position: "relative",
        padding: "$0",
        top: "unset",
        zIndex: "unset"
    }
};

export const NavOptions = () => {
    return (
        <Flex direction={"column"} gap={"1"} css={navOptionsCss}>
            <Text typography={"navOptions"}>Home</Text>
            <DropDown title="About">
                <Text typography={"navOptions"}>Option</Text>
                <Text typography={"navOptions"}>Option</Text>
                <Text typography={"navOptions"}>Option</Text>
            </DropDown>
            <DropDown title="Services">
                <Text typography={"navOptions"}>Option</Text>
                <Text typography={"navOptions"}>Option</Text>
                <Text typography={"navOptions"}>Option</Text>
            </DropDown>
            <Text typography={"navOptions"}>Contact Us</Text>
        </Flex>
    );
};
