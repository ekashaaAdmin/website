import { css, styled } from "@src/styles";

export const boxCss = css( {
    variants: {
        size: {
            full: { size: "full" },
            half: { size: "half" }
        },
        width: {
            full: { width: "full" },
            half: { width: "half" }
        },
        heigth: {
            full: { height: "full" },
            half: { height: "half" }
        }
    }
} );

export const Box = styled( "div", boxCss );
