import { css, styled } from "@src/styles";
import { FlexBox } from "../FlexBox";

export const sectionCss = css( {
    mb: "$10"
} );

export const Section = styled( FlexBox, sectionCss );
