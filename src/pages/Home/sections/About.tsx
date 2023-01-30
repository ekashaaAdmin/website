import { Button, Flex, LogoSmall, Section, Text } from "@src/components";
import { CSS } from "@src/styles";

const aboutCss: CSS = {
    "@bp1": {
        flexDirection: "row"
    }
};

const textContentCss: CSS = {
    maxWidth: "$mobileS",
    "@bp1": {
        maxWidth: "unset"
    }
};

export const About = () => {
    return (
        <Section
            id="about"
            direction={"column"}
            center
            gap={"2"}
            css={aboutCss}
        >
            <LogoSmall css={{ minWidth: "$logoMedium" }} />
            <Flex direction={"column"} center gap={"2"} css={textContentCss}>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, hic illo! Deserunt ullam nobis hic accusantium
                    corporis veritatis tenetur nisi ipsum saepe aliquid! Iusto
                    excepturi possimus aliquid illo impedit ducimus?
                </Text>
                <Button>More About Us</Button>
            </Flex>
        </Section>
    );
};
