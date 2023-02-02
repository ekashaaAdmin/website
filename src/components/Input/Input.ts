import { css, styled } from "@src/styles";

export const inputCss = css( {
    width: "100%",
    position: "relative",
    borderStyle: "solid",
    padding: "$4",
    all: "unset",
    maxWidth: "$full",
    typography: "$captionMedium",
    height: "$full",
    variants: {}
} );

export const Input = styled( "input", inputCss );
