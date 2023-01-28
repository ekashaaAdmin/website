import { CSS } from "@src/styles";
import { useState } from "react";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { HamBurger } from "../HamBurger/HamBurger";
import { LogoSmall } from "../Logo";
import { NavOptions } from "./NavOptions";

const navbarCss: CSS = {
    padding: "$2 $3"
};

const navContainerCss: CSS = {
    backgroundColor: "White",
    boxShadow: "$shadowtype1",
    position: "sticky",
    top: 0,
    width: "$full",
    zIndex: "$3"
};

export const Navbar = () => {
    const [ navStatus, setNavStatus ] = useState<boolean>( false );

    return (
        <Box css={navContainerCss} className={navStatus ? `active` : ``}>
            <Flex align={"center"} justify={"spaceBetween"} css={navbarCss}>
                <LogoSmall size={"7"} />
                <NavOptions />
                <HamBurger navStatus={navStatus} setNavStatus={setNavStatus} />
            </Flex>
        </Box>
    );
};
