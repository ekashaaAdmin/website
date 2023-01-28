import { css, styled } from "@src/styles";

export const textCss = css( {
    display: "inline-block",
    variants: {
        align: {
            center: {
                textAlign: "center"
            },
            left: {
                textAlign: "left"
            },
            right: {
                textAlign: "right"
            }
        },
        typography: {
            navOptions: {
                typography: "$navOptions"
            }
        }
    }
} );

export const Text = styled( "span", textCss );
