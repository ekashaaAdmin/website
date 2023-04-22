import { Root, Range, Track, Thumb } from "@radix-ui/react-slider";
import { styled } from "@src/styles";

export const SliderRoot = styled( Root, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    touchAction: "none",
    width: "100%",
    height: "20px"
} );

export const SliderTrack = styled( Track, {
    backgroundColor: "$accentColor",
    position: "relative",
    flexGrow: "1",
    borderRadius: "9999px",
    height: "3px"
} );

export const SliderRange = styled( Range, {
    position: "absolute",
    backgroundColor: "$accentColor",
    borderRadius: "9999px",
    height: "100%"
} );

export const SliderThumb = styled( Thumb, {
    display: "block",
    width: "20px",
    height: "20px",
    backgroundColor: "$accentColor",
    boxShadow: "0 2px 10px var(--blackA7)",
    borderRadius: "10px",
    [ `&:hover` ]: {
        backgroundColor: "$complentaryColor "
    },
    [ `&:focus` ]: {
        outline: "none",
        boxShadow: "0 0 0 5px var(--blackA8)"
    }
} );
