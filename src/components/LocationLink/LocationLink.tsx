import { PropsWithCSS } from "@src/styles";
import { VariantProps } from "@stitches/react";
import { Box, boxCss } from "../Box";
import { css, styled } from "@src/styles";
import { TransformProps } from "@stitches/react/types/styled-component";

interface iframeContainerProps
    extends PropsWithCSS,
        VariantProps<typeof boxCss> {
    src: string | undefined;
}

export const iframeContainerBoxCss = css( {
    lineHeight: 0,
    fontSize: 0
} );

export const IframeContainerBox = styled( Box, iframeContainerBoxCss );

export const LocationLink = ( { src, ...props }: iframeContainerProps ) => {
    return (
        <IframeContainerBox {...props}>
            <iframe
                src={src}
                width={"700px"}
                height={"300px"}
                style={{ border: 0 }}
            ></iframe>
        </IframeContainerBox>
    );
};
