import { css, styled } from "@src/styles";

export const boxCss = css( {
    variants: {
        size: {
            0: { size: "$0" },
            1: { size: "$1" },
            2: { size: "$2" },
            3: { size: "$3" },
            4: { size: "$4" },
            5: { size: "$5" },
            6: { size: "$6" },
            7: { size: "$7" },
            8: { size: "$8" },
            9: { size: "$9" },
            10: { size: "$10" },
            11: { size: "$11" },
            12: { size: "$12" },
            13: { size: "$13" },
            14: { size: "$14" },
            full: { size: "$full" },
            half: { size: "$half" }
        },
        width: {
            full: { width: "$full" },
            half: { width: "$half" }
        },
        height: {
            full: { height: "$full" },
            half: { height: "$half" }
        }
    }
} );

export const Box = styled( "div", boxCss );
