import { Flex, FlexBox, Section, Text } from "@src/components";
import { CSS, css, styled } from "@src/styles";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const introCardCss = css( {
    backgroundColor: "transparent",
    backdropFilter: "blur(20px)",
    borderRadius: "$4",
    maxWidth: "fit-content",
    height: "fit-content",
    p: "$3",
    "@bp2": {
        maxWidth: "34rem",
        mx: "$8"
    }
} );

const IntroCard = styled( FlexBox, introCardCss );

const introSectionCss: CSS = {
    color: "White",
    height: "75vh",
    position: "relative"
};

const arrowDownCss: CSS = {
    position: "absolute",
    bottom: "-2rem",
    left: 0,
    right: 0,
    margin: "auto"
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
            <IntroCard
                direction={"column"}
                css={{
                    mt: "$14",
                    height: "fit-content",
                    "@mobileS": {
                        mt: "$6"
                    },
                    "@bp2": {
                        mt: "$14"
                    }
                }}
            >
                <Text
                    typography={{
                        "@initial": "mbHeading1",
                        "@bp3": "dtPageHead"
                    }}
                >
                    Good things <br /> come to those…
                </Text>
                <Text typography={{ "@initial": "mbPara1", "@bp3": "dtPara1" }}>
                    who know whom to trust. At Ekashaa, we value the journey
                    that has led you to us, and it’s why we know you deserve a
                    slice of paradise
                </Text>
            </IntroCard>

            <Flex
                direction={"column"}
                justify={"center"}
                css={{ textAlign: "center", mb: "$8", mx: "auto" }}
            >
                <Text typography={"dtHeading3"}>Explore Ekashaa</Text>
                <Text typography={"dtPara1"}>Scroll Down</Text>
            </Flex>
            {/* <IoIosArrowDropdownCircle
                color="#1C99CD"
                size={"2rem"}
                style={arrowDownCss as any}
            /> */}
        </Section>
    );
};
