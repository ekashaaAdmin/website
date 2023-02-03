import { Section, Text } from "@src/components";
import { CSS } from "@src/styles";

const introSectionCss: CSS = {
    color: "White",
    height: "40vh",
    position: "relative"
};

export const Intro = () => {
    return (
        <Section align={"center"} css={introSectionCss}>
            <Text
                typography={{ "@initial": "mbHeading1", "@bp3": "dtPageHead" }}
            >
                It's Time to Know Us
            </Text>
        </Section>
    );
};
