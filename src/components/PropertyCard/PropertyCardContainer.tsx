import { css, styled } from "@src/styles";
import { FlexBox } from "../FlexBox";

export const propertyCardCss = css( {
    variants: {
        variant: {
            verticalCard: {
                flexDirection: "column"
            },
            horizontalCard: {
                flexDirection: "row"
            }
        }
    }
} );

export const PropertyCardContainer = styled( FlexBox, propertyCardCss );
