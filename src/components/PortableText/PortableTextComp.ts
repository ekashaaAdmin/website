import { PortableTextComponents } from "@portabletext/react";
import { Text } from "../Text";

export const PortableTextComp: PortableTextComponents = {
    types: {
        block: ({ children }) => (<Text typography={"dtPara1"}>{children}</Text>);
    }
};
