import { Ekashaa_Logo } from "@src/assets";
import { PropsWithCSS } from "@src/styles";
import { VariantProps } from "@stitches/react";
import { Box, boxCss } from "../Box";

interface LogoSmallProps extends VariantProps<typeof boxCss>, PropsWithCSS {}

export const LogoSmall = ( { ...props }: LogoSmallProps ) => {
    return (
        <Box {...props}>
            <img src={Ekashaa_Logo} alt="EkashaaLogo" width={"100%"} />
        </Box>
    );
};
