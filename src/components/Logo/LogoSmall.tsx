import { PropsWithCSS } from "@src/styles";
import { VariantProps } from "@stitches/react";
import { Box, boxCss } from "../Box";

interface LogoSmallProps extends VariantProps<typeof boxCss>, PropsWithCSS {}

export const LogoSmall = ( { ...props }: LogoSmallProps ) => {
    return (
        <Box {...props}>
            <img
                src="https://cdn.discordapp.com/attachments/1052611620234330122/1066260005986238525/Ekashaa_Footer_Logo.png"
                alt="EkashaaLogo"
                width={"100%"}
            />
        </Box>
    );
};
