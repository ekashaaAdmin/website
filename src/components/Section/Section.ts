import { css, styled } from "@src/styles";
import { FlexBox } from "../FlexBox";

export const sectionCss = css( {
    mb: "$10",
    px: "$3",
    mx: "auto",
    maxWidth: "$laptopL"
} );

export const Section = styled( FlexBox, sectionCss );
