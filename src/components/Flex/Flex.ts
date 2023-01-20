import { css, styled } from "@src/styles";
import { Box } from "../Box";

export const flexCss = css( {
    display: "flex",
    variants: {
        direction: {
            row: { flexDirection: "row" },
            rowReverse: { flexDirection: "row-reverse" },
            column: { flexDirection: "column" },
            columnReverse: { flexDirection: "column-reverse" }
        },
        align: {
            normal: { alignItems: "normal" },
            stretch: { alignItems: "stretch" },
            center: { alignItems: "center" },
            flexStart: { alignItems: "flex-start" },
            flexEnd: { alignItems: "flex-end" },
            start: { alignItems: "start" },
            end: { alignItems: "end" },
            baseline: { alignItems: "baseline" }
        },
        justify: {
            center: { justifyContent: "center" },
            start: { justifyContent: "start" },
            end: { justifyContent: "end" },
            flexEnd: { justifyContent: "flex-end" },
            flexStart: { justifyContent: "flex-start" },
            spaceAround: { justifyContent: "space-around" },
            spaceBetween: { justifyContent: "space-between" },
            spaceEvenly: { justifyContent: "space-evenly" }
        },
        center: {
            true: {
                alignItems: "center",
                justifyContent: "center"
            }
        },
        gap: {
            1: { gap: "$1" },
            2: { gap: "$2" },
            3: { gap: "$3" },
            4: { gap: "$4" },
            5: { gap: "$5" }
        }
    }
} );

export const Flex = styled( Box, flexCss );
