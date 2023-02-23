import { css, styled } from "@src/styles";
import { FlexBox } from "../FlexBox";

export const sectionCss = css( {
    mb: "$10",
    px: "$3",
    mx: "auto",
    maxWidth: "$laptopL",
    variants: {
        variant: {
            propertyInfoCss: {
                padding: "$2",
                margin: "$2 auto",
                "@mobileS": {
                    maxWidth: "$mobileS"
                },
                "@bp1": {
                    maxWidth: "$mobileM"
                },
                "@bp2": {
                    maxWidth: "$tablet"
                },
                "@bp3": {
                    maxWidth: "$laptopS"
                }
            },
            seperatorCss: {
                height: "1px",
                borderWidth: "0",
                color: "gray",
                backgroundColor: "gray",
                margin: "$0 auto",
                "@mobileS": {
                    maxWidth: "$mobileS"
                },
                "@bp1": {
                    maxWidth: "$mobileM"
                },
                "@bp2": {
                    maxWidth: "$tablet"
                },
                "@bp3": {
                    maxWidth: "$laptopS"
                }
            }
        }
    }
} );

export const Section = styled( "section", FlexBox, sectionCss );
