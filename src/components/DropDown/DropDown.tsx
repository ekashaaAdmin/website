import { CSS } from "@src/styles";
import { PropsWithChildren, useState } from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import { DropDownContainer } from "./DropDownContainer";

interface dropDownProps extends PropsWithChildren {
    title: string;
}

export const dropDownCss: CSS = {
    position: "relative",
    [ `& ${DropDownContainer}` ]: {
        opacity: 0,
        position: "absolute",
        zIndex: -3
    },
    [ `&:hover ${DropDownContainer}` ]: {
        opacity: 1,
        position: "relative",
        zIndex: "unset"
    }
};

export const DropDown = ( { children, title }: dropDownProps ) => {
    return (
        <Box css={dropDownCss}>
            <Text typography={"navOptions"}>{title}</Text>
            <DropDownContainer gap={1}>{children}</DropDownContainer>
        </Box>
    );
};
