import { CSS } from "@src/styles";
import { PropsWithChildren, useState } from "react";
import { Box } from "../Box";
import { Link } from "../Link";
import { Text } from "../Text";
import { DropDownContainer } from "./DropDownContainer";

interface dropDownProps extends PropsWithChildren {
    title: string;
    linkTo?: string;
}

export const dropdownHoverCss: CSS = {
    opacity: 1,
    position: "absolute",
    pointerEvents: "all"
};

export const dropDownCss: CSS = {
    position: "relative",
    cursor: "pointer",
    [ `${DropDownContainer}` ]: {
        backgroundColor: "White",
        borderRadius: "$inputFieldBorderRadius",
        opacity: 0,
        position: "absolute",
        pointerEvents: "none",
        m: "0.5rem 0 0.2rem 0"
    },
    [ `.dropdown-trigger:hover ~ ${DropDownContainer}` ]: {
        opacity: 1,
        position: "relative",
        pointerEvents: "all"
    },
    "@bp2": {
        [ `${DropDownContainer}` ]: {
            boxShadow: "$footerShadow",
            transition: "all .3s ease-in-out .3s",
            right: 0,
            padding: "$5 $2 $2",
            m: "$0"
        },
        [ `.dropdown-trigger:hover ~ ${DropDownContainer}` ]: {
            ...dropdownHoverCss
        },
        [ `${DropDownContainer}:hover` ]: {
            ...dropdownHoverCss
        }
    }
};

export const DropDown = ( { children, title, linkTo }: dropDownProps ) => {
    return (
        <Box css={dropDownCss}>
            <Text typography={"navOptions"} className="dropdown-trigger">
                <Link to={linkTo ?? "/"}>{title}</Link>
            </Text>
            <DropDownContainer className="collapsible" gap={1}>
                {children}
            </DropDownContainer>
        </Box>
    );
};
