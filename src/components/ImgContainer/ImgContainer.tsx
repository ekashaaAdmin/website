import { PropsWithCSS } from "@src/styles";
import { VariantProps } from "@stitches/react";
import { Box, boxCss } from "../Box";
interface ImgContainerProps extends PropsWithCSS, VariantProps<typeof boxCss> {
    src: string | undefined;
    alt: string;
}

import { css, styled } from "@src/styles";

export const imgContainerBoxCss = css( {
    lineHeight: 0,
    fontSize: 0
} );

export const ImgContainerBox = styled( Box, imgContainerBoxCss );

export const ImgContainer = ( { alt, src, ...props }: ImgContainerProps ) => {
    return (
        <ImgContainerBox {...props}>
            <img
                src={src}
                alt={alt}
                width="100%"
                style={{
                    objectFit: "cover",
                    objectPosition: "center"
                }}
            />
        </ImgContainerBox>
    );
};
