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
            },
            dtHeading1: {
                typography: "$dtHeading1"
            },
            dtHeading2: {
                typography: "$dtHeading2"
            },
            dtHeading3: {
                typography: "$dtHeading3"
            },
            dtPageHead: {
                typography: "$dtPageHead"
            },
            dtPara1: {
                typography: "$dtPara1"
            },
            dtPara2: {
                typography: "$dtPara2"
            },
            dtPara3: {
                typography: "$dtPara3"
            },
            dtSubHeading1: {
                typography: "$dtSubHeading1"
            },
            mbHeading1: {
                typography: "$mbHeading1"
            },
            mbHeading2: {
                typography: "$mbHeading2"
            },
            mbSubHeading1: {
                typography: "$mbSubHeading1"
            },
            mbPara1: {
                typography: "$mbPara1"
            }
        },
        color: {
            error: {
                color: "Red"
            }
        }
    }
} );

export const Text = styled( "span", textCss );
