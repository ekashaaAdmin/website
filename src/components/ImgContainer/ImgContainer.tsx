import { PropsWithCSS } from "@src/styles";
import { VariantProps } from "@stitches/react";
import { Box, boxCss } from "../Box";

interface ImgContainerProps extends PropsWithCSS, VariantProps<typeof boxCss> {
    src: string | undefined;
    alt: string;
}

export const ImgContainer = ( { alt, src, ...props }: ImgContainerProps ) => {
    return (
        <Box {...props}>
            <img src={src} alt={alt} />
        </Box>
    );
};
