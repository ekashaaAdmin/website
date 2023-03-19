import {
    DialogContent as PrimitiveContent,
    DialogOverlay as PrimitiveOverlay,
    DialogPortal as PrimitivePortal
} from "@radix-ui/react-dialog";
import { keyframes, styled } from "@src/styles";
import { ComponentProps } from "@stitches/react";
import { forwardRef, PropsWithChildren } from "react";
import { FlexBox } from "../FlexBox";

const overlayShow = keyframes( {
    "0%": { opacity: 0, backdropFilter: "blur(0px)" },
    "100%": { opacity: 1, backdropFilter: "blur(2px)" }
} );

const contentShow = keyframes( {
    "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
    "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
} );

export const DialogOverlay = styled( PrimitiveOverlay, {
    backgroundColor: "$overlay",
    position: "fixed",
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    zIndex: "$4"
} );

export const DialogPortal = styled( PrimitivePortal, {} );

const StyledContent = styled( PrimitiveContent, {
    boxSizing: "border-box",
    borderRadius: "$1",
    maxWidth: "95%",
    backgroundColor: "#ffffff",
    boxShadow: "$shadowtype3",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animation: `${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    padding: "$2",
    width: "fit-content",
    zIndex: "5",
    "&:focus": { outline: "none" }
} );

interface DialogContentProps
    extends PropsWithChildren,
        ComponentProps<typeof StyledContent>,
        Partial<ComponentProps<typeof FlexBox>> {}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
    (
        {
            children,
            direction,
            gap,
            align,
            justify,
            size,
            width,
            height,
            ...props
        },
        forwardedRef
    ) => {
        return (
            <DialogPortal>
                <DialogOverlay />
                <StyledContent {...props}>
                    <FlexBox
                        direction={direction!}
                        gap={gap!}
                        align={align!}
                        justify={justify!}
                        width={width!}
                        height={height!}
                    >
                        {children}
                    </FlexBox>
                </StyledContent>
            </DialogPortal>
        );
    }
);
