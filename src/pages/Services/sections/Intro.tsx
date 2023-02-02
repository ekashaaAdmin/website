import { Section, Text } from "@src/components";
import { CSS } from "@src/styles";

const introSectionCss: CSS = {
    color: "White",
    height: "40vh",
    position: "relative"
};

export const Intro = () => {
    return (
        <Section direction="column" justify="center" css={introSectionCss}>
            <Text>It's Time to</Text>
            <Text>know our Services</Text>
        </Section>
    );
};
