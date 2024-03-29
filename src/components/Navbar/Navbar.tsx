import { CSS } from "@src/styles";
import { useState } from "react";
import { FlexBox } from "../FlexBox";
import { HamBurger } from "../HamBurger/HamBurger";
import { Link } from "../Link";
import { LogoSmall } from "../Logo";
import { NavLink } from "../NavLink";
import { NavOptions } from "./NavOptions";

const navbarCss: CSS = {};

const navContainerCss: CSS = {
    backgroundColor: "White",
    boxShadow: "$shadowtype1",
    padding: "$2 $3",
    position: "sticky",
    top: 0,
    width: "$full",
    zIndex: "$5"
};

export const Navbar = () => {
    const [ navStatus, setNavStatus ] = useState<boolean>( false );

    return (
        <FlexBox
            align={"center"}
            justify={"spaceBetween"}
            css={navContainerCss}
            className={navStatus ? `active` : ``}
        >
            <NavLink to="/">
                <LogoSmall size={{ "@initial": "7", "@bp3": "10" }} />
            </NavLink>
            <NavOptions />
            <HamBurger navStatus={navStatus} setNavStatus={setNavStatus} />
        </FlexBox>
    );
};
