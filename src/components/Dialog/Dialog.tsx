import { Root } from "@radix-ui/react-dialog";
import { FC, PropsWithChildren } from "react";

export interface DialogRootProps extends PropsWithChildren {}

export const DialogRoot = Root;

// export const Dialog: FC<DialogRootProps> = ( { children } ) => {
//     return <Root>{children}</Root>;
// };
