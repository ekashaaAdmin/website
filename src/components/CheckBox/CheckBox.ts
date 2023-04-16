import { Root, Indicator } from "@radix-ui/react-checkbox";
import { styled } from "@src/styles";

export const CheckBoxRoot = styled( Root, {
    backgroundColor: "white",
    color: "black",
    minWidth: "$4",
    minHeight: "$4",
    size: "fit-content",
    borderRadius: "4px",
    border: "1px solid",
    borderColor: "$accentColor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 10px var(--blackA7)",
    p: "$1",
    '&[data-state="checked"]': {
        backgroundColor: "$accentColor",
        color: "white"
    }
} );
export const CheckBoxIndicator = styled( Indicator, {} );
