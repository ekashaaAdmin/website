import { css, styled } from "@src/styles";

export const inputCss = css( {
    all: "unset",
    position: "relative",
    padding: "$1",
    border: "1px solid $formBorder",
    borderRadius: "$inputFieldBorderRadius",
    maxWidth: "calc(100% - $1)",
    typography: "$captionMedium",
    height: "$full",
    [ `&[type="radio"]` ]: {
        all: "revert"
    },
    [ `&[type="checkbox"]` ]: {
        all: "revert"
    }
} );

export const Input = styled( "input", inputCss );
