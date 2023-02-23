import { css, styled } from "@src/styles";
import { Link as RLink } from "react-router-dom";

export const linkCss = css( {
    color: "Black",
    textDecoration: "none"
} );

export const Link = styled( RLink, linkCss );
