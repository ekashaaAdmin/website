import { PropsWithCSS } from "@src/styles";
import { VariantProps } from "@stitches/react";
import { Box, boxCss } from "../Box";
interface ImgContainerProps extends PropsWithCSS, VariantProps<typeof boxCss> {
    src: string | undefined;
    alt: string;
    objectFit?: string;
    objectPosition?: string;
    fullHeight?: boolean;
}

import { css, styled } from "@src/styles";

export const imgContainerBoxCss = css( {
    lineHeight: 0,
    fontSize: 0,
    width: "$full",
    height: "$full",
    overflow: "hidden",
    objectFit: "cover"
} );

export const ImgContainerBox = styled( Box, imgContainerBoxCss );

export const ImgContainer = ( {
    alt,
    src,
    objectFit,
    objectPosition,
    fullHeight,
    ...props
}: ImgContainerProps ) => {
    return (
        <ImgContainerBox {...props}>
            <img
                src={src}
                alt={alt}
                width="100%"
                height={fullHeight ? "100%" : "auto"}
                style={{
                    objectFit: `${objectFit ?? "cover"}` as any,
                    objectPosition: `${objectPosition ?? "center"}`
                }}
            />
        </ImgContainerBox>
    );
};

ImgContainer.toString = () => ".img-container";
