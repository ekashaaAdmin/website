import { NavLink as NavigationLink } from "react-router-dom";
import { css, styled } from "@src/styles";

export const navLinkCss = css( {
    color: "Black",
    textDecoration: "none",
    "&.active": {
        fontWeight: "$dtHeading1"
    }
} );

export const NavLink = styled( NavigationLink, navLinkCss );
