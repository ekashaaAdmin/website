import { CSS } from "@src/styles";
import { useState } from "react";
import { Flex, Text } from "../";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const floatingTextCss: CSS = {
    backgroundColor: "$accentColor",
    bottom: "$3",
    borderTopRightRadius: "$2",
    borderBottomRightRadius: "$2",
    boxShadow: "$shadowtype3",
    color: "White",
    padding: "$2",
    mb: "$5",
    position: "sticky",
    width: "fit-content",
    transform: "translate(-15rem, 0)",
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: ".3s",
    zIndex: "3",
    "&.open": {
        transform: "translate(0, 0)"
    }
};

export const FloatingText = () => {
    const [ status, setStatus ] = useState<boolean>( false );

    const toggle = () => {
        setStatus( !status );
    };

    return (
        <Flex
            align="center"
            justify="spaceBetween"
            css={floatingTextCss}
            gap="2"
            className={status ? "open" : ""}
            onClick={toggle}
        >
            <Text typography={"dtPara1"}>
                Rera ID: <Text>A51800040029</Text>
            </Text>
            {status ? (
                <AiOutlineLeft size={"1.5rem"} />
            ) : (
                <AiOutlineRight size={"1.5rem"} />
            )}
        </Flex>
    );
};
