import { MarinaBay } from "@src/assets";
import { Box, Section, Text } from "@src/components";
import { CSS } from "@src/styles";

const introSectionCss: CSS = {
    color: "White",
    height: "40vh",
    width: "$full"
};

const bgImageCss: CSS = {
    backgroundImage: `url(${MarinaBay})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "40vh",
    width: "$full",
    position: "absolute",
    left: 0,
    top: "5rem",
    zIndex: "$negativeOne",
    "@bp3": {
        top: "7rem"
    }
};

export const Intro = () => {
    return (
        <Section
            align={"flexStart"}
            direction="column"
            justify={"center"}
            css={introSectionCss}
        >
            <Box css={bgImageCss}></Box>
            <Text
                typography={{ "@initial": "mbHeading1", "@bp3": "dtPageHead" }}
            >
                Choose from the
            </Text>
            <Text
                typography={{ "@initial": "mbHeading1", "@bp3": "dtPageHead" }}
            >
                Best in the Market
            </Text>
        </Section>
    );
};
