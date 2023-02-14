import { Button, Flex, LogoSmall, Section, Text } from "@src/components";
import { CSS } from "@src/styles";

const textContentCss: CSS = {
    maxWidth: "$mobileS",
    "@bp1": {
        maxWidth: "$tablet"
    }
};

export const About = () => {
    return (
        <Section id="about" direction={"column"} center gap={"4"}>
            <LogoSmall css={{ minWidth: "$logoMedium" }} />
            <Flex direction={"column"} center gap={"4"} css={textContentCss}>
                <Text typography={{ "@initial": "mbPara1", "@bp3": "dtPara1" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, hic illo! Deserunt ullam nobis hic accusantium
                    corporis veritatis tenetur nisi ipsum saepe aliquid! Iusto
                    excepturi possimus aliquid illo impedit ducimus?
                </Text>
            </Flex>
        </Section>
    );
};
