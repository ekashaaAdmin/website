import { css, styled } from "@src/styles";

export const textCss = css( {
    variants: {
        typography: {
            navOptions: {
                typography: "$navOptions"
            }
        }
    }
} );

export const Text = styled( "span", textCss );
