import { css, styled } from "@src/styles";
import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";

export const propertyCardCss = css( {
    borderRadius: "$1",
    boxShadow: "$propertyCardShadow",
    mx: "auto",
    my: "$4",
    overflow: "hidden",
    height: "350px",
    flexDirection: "column",
    width: "270px",
    "@mobileM": {
        width: "300px"
    },
    variants: {
        orientation: {
            horizontal: {
                flexDirection: "row",
                width: "550px",
                height: "250px"
            }
        }
    }
} );

export const PropertyCardContainer = styled( FlexBox, propertyCardCss );
