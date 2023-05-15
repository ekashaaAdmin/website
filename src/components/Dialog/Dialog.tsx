import {
    Root,
    DialogTrigger as PrimitiveTrigger,
    DialogTitle as PrimitiveTitle,
    DialogClose as PrimitiveClose
} from "@radix-ui/react-dialog";

export { DialogContent } from "./DialogContent";
export const DialogTrigger = PrimitiveTrigger;
export const DialogClose = PrimitiveClose;
export const DialogTitle = PrimitiveTitle;
export const Dialog = Root;
