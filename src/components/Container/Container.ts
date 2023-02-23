import { css, styled } from "@src/styles";
import { Box } from "../Box";

export const containerCss = css( {
    mx: "auto",
    maxWidth: "$laptopL"
} );

export const Container = styled( Box, containerCss );
