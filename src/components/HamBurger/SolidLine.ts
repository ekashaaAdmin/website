import { css, styled } from "@src/styles";

export const solidLineCss = css( {
    width: "$3",
    height: "$1",
    borderTopWidth: "thin",
    borderTopStyle: "solid",
    borderTopColor: "Black",
    translate: "(0, 0)",
    transition: "all .3s ease-in-out",
    variants: {
        variant: {
            rotateClockwise: {
                ".active &": {
                    transform: "translate(-10%, 100%) rotate(45deg)"
                }
            },
            rotateAntiClockwise: {
                ".active &": {
                    transform: "translate(10%, 0) rotate(-45deg)"
                }
            },
            disappear: {
                ".active &": {
                    display: "none"
                }
            }
        }
    }
} );

export const SolidLine = styled( "div", solidLineCss );
