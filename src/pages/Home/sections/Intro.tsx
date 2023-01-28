import { Flex, FlexBox, Section, Text } from "@src/components";
import { CSS, css, styled } from "@src/styles";

const introCardCss = css( {
    backgroundColor: "transparent",
    backdropFilter: "blur(20px)",
    borderRadius: "$4",
    maxWidth: "$mobileL",
    p: "$3",
    "@bp2": {
        mx: "$8"
    }
} );

const IntroCard = styled( FlexBox, introCardCss );

const introSectionCss: CSS = {
    color: "White",
    height: "80vh",
    position: "relative"
};

export const Intro = () => {
    return (
        <Section
            direction={"column"}
            gap={"10"}
            justify={"spaceBetween"}
            css={introSectionCss}
            align={"start"}
        >
            <IntroCard direction={"column"} css={{ mt: "$10" }}>
                <Text>
                    Find Your <br /> Perfect Home
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente commodi pariatur cupiditate rem, odio ipsum?
                </Text>
            </IntroCard>

            <Flex
                direction={"column"}
                justify={"center"}
                css={{ textAlign: "center", mb: "$8", mx: "auto" }}
            >
                <Text>Explore Ekashaa</Text>
                <Text>Scroll Down</Text>
            </Flex>
        </Section>
    );
};
