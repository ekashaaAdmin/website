import { CSS } from "@src/styles";
import { useState } from "react";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { HamBurger } from "../HamBurger/HamBurger";
import { LogoSmall } from "../Logo";
import { NavOptions } from "./NavOptions";
import { globalStyles } from "@styles";

globalStyles();

const navbarCss: CSS = {
    padding: "$2 $3",
    position: "relative"
};

const navContainerCss: CSS = {
    backgroundColor: "White",
    position: "relative",
    top: 0,
    width: "$full",
    boxShadow: "$shadowtype1",
    zIndex: "$3"
};

export const Navbar = () => {
    const [ navStatus, setNavStatus ] = useState<boolean>( false );

    return (
        <Box css={navContainerCss}>
            <Flex
                align={"center"}
                justify={"spaceBetween"}
                css={navbarCss}
                className={navStatus ? `active` : ``}
            >
                <LogoSmall size={"7"} />
                <NavOptions />
                <HamBurger navStatus={navStatus} setNavStatus={setNavStatus} />
            </Flex>
        </Box>
    );
};
