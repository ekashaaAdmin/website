import { Trigger } from "@radix-ui/react-dialog";
import { css, styled } from "@src/styles";
import { FC, PropsWithChildren } from "react";

export interface DialogTriggerProps extends PropsWithChildren {
    asChild: boolean;
}

export const styledTriggerCss = css( {} );

export const StyledTrigger = styled( Trigger, styledTriggerCss );

export const DialogTrigger: FC<DialogTriggerProps> = ( {
    children,
    asChild
} ) => {
    return <StyledTrigger asChild={asChild}>{children}</StyledTrigger>;
};
