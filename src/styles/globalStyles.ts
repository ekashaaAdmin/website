import { globalCss } from "./stitches.config";

export const globalStyles = globalCss( {
    "@import": [
        "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap')"
    ],
    "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0
        //     "@bp2": {
        //         fontSize: "18px"
        //     },
        //     "@bp3": {
        //         fontSize: "20px"
        //     },
        //     "@bp4": {
        //         fontSize: "22px"
        //     }
        // },
        // "*:before": {
        //     boxSizing: "border-box"
        // },
        // "*:after": {
        //     boxSizing: "border-box"
    },
    "html, body, #root": {
        scrollBehavior: "smooth",
        height: "$full",
        width: "$full"
    },
    body: {
        fontFamily: "$montserrat",
        scrollStyling: ""
    }
} );
