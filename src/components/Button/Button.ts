import { css, styled } from "@src/styles";

export const buttonCss = css( {
    fontFamily: "$montserrat",
    variants: {
        variant: {
            generalButton: {
                backgroundColor: "$accentColor",
                color: "white",
                padding: "$2 $5",
                textAlign: "center",
                fontSize: "$dtPara3",
                borderRadius: "$1",
                border: "2px solid $accentColor",
                "&:hover": {
                    backgroundColor: "transparent",
                    color: "$accentColor",
                    border: "2px solid $accentColor",
                    cursor: "pointer"
                }
            },
            blueButton: {
                backgroundColor: "transparent",
                padding: "$2 $5",
                border: "2px solid $accentColor",
                textAlign: "center",
                color: "$accentColor",
                fontSize: "$dtPara3",
                borderRadius: "$1",
                "&:hover": {
                    backgroundColor: "$accentColor",
                    color: "white",
                    cursor: "pointer"
                }
            },
            whiteButton: {
                backgroundColor: "transparent",
                padding: "$2 $5",
                border: "2px solid #ffffff",
                textAlign: "center",
                color: "White",
                fontSize: "$dtPara3",
                borderRadius: "$1",
                "&:hover": {
                    backgroundColor: "White",
                    color: "$accentColor",
                    cursor: "pointer"
                }
            },
            submitButton: {
                backgroundColor: "$accentColor",
                border: "2px solid $accentColor",
                color: "white",
                padding: "$1",
                width: "100%",
                textAlign: "center",
                fontSize: "$dtPara3",
                borderRadius: "$0",
                "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "$accentColor",
                    color: "$accentColor",
                    cursor: "pointer"
                }
            }
        }
    }
} );

export const Button = styled( "button", buttonCss );
