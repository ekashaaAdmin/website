import { Content } from "@radix-ui/react-dialog";
import { css, styled } from "@src/styles";
import { FC, PropsWithChildren } from "react";

export interface DialogContentProps extends PropsWithChildren {}

export const styledContentCss = css( {} );

export const StyledContent = styled( Content, styledContentCss );

export const DialogContent: FC<DialogContentProps> = ( { children } ) => {
    return <StyledContent>{children}</StyledContent>;
};
