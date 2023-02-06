import { css, styled } from "@src/styles";
import { FlexBox } from "../FlexBox";

export const formCss = css( {
    variants: {
        variant: {
            ekaashaContact: {
                border: "1px solid $formBorder",
                borderRadius: "$inputFieldBorderRadius",
                margin: "0 auto",
                maxWidth: "$mobileL",
                padding: "$2"
            }
        }
    }
} );

export const Form = styled( "form", FlexBox, formCss );
