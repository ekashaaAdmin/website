import { css, styled } from "@src/styles";
import { Flex } from "../Flex";

export const dropDownCss = css( {
    flexDirection: "column",
    gap: "$2"
} );

export const DropDownContainer = styled( Flex, dropDownCss );
