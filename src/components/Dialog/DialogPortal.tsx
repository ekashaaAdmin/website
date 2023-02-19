import { DialogContent, Overlay, Portal } from "@radix-ui/react-dialog";
import { css, styled } from "@src/styles";
import { FC, PropsWithChildren } from "react";

export interface DialogPortalProps extends PropsWithChildren {}
export interface DialogPortalProps extends PropsWithChildren {}
export const styledPortalCss = css( {} );
export const styledOverlayCss = css( {} );

export const StyledPortal = styled( Portal, styledPortalCss );
export const StyledOverlay = styled( Overlay, styledOverlayCss );

export const DialogPortal: FC<DialogPortalProps> = ( { children } ) => {
    return (
        <StyledPortal>
            <StyledOverlay css={{ backgroundColor: "$accentColor" }} />
            <DialogContent>{children}</DialogContent>
        </StyledPortal>
    );
};
