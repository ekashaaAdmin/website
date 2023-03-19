import { CSS } from "@src/styles";
import { Flex, Text } from "../";

const floatingTextCss: CSS = {
    backgroundColor: "$accentColor",
    bottom: "$3",
    borderTopRightRadius: "$2",
    borderBottomRightRadius: "$2",
    boxShadow: "$shadowtype3",
    color: "White",
    padding: "$2 $7 $2 $2",
    position: "sticky",
    width: "fit-content",
    zIndex: "3"
};

export const FloatingText = () => {
    return (
        <Flex css={floatingTextCss}>
            <Text typography={"dtPara1"}>
                Rera ID: <Text>920390490</Text>
            </Text>
        </Flex>
    );
};
