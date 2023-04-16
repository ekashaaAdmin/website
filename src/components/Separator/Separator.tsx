import { Root } from "@radix-ui/react-separator";
import { styled } from "@src/styles";

export const Separator = styled( Root, {
    backgroundColor: "var(--violet6)",
    '&[data-orientation="horizontal"]': {
        height: "1px",
        width: "100%"
    },
    'SeparatorRoot[data-orientation="vertical"]': {
        height: "100%",
        width: "1px"
    }
} );
