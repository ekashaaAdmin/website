import { Button, Flex, LogoSmall, Section, Text } from "@src/components";
import { Link } from "@src/components/Link";
import { CSS } from "@src/styles";

const aboutCss: CSS = {
    "@bp3": {
        flexDirection: "row"
    }
};

const textContentCss: CSS = {
    maxWidth: "$mobileS",
    "@bp1": {
        maxWidth: "$tablet"
    }
};

export const HomeAbout = () => {
    return (
        <Section
            id="about"
            direction={"column"}
            center
            gap={"4"}
            css={aboutCss}
        >
            <LogoSmall css={{ minWidth: "$logoMedium" }} />
            <Flex direction={"column"} center gap={"4"} css={textContentCss}>
                <Text typography={{ "@initial": "mbPara1", "@bp3": "dtPara1" }}>
                    We are a specialized property advisory service for luxury
                    homes and high-end commercial spaces in Mumbai. We bring you
                    all the information, analysis and advice you need to make
                    high-value property purchases in the heart of the city.
                </Text>
                <Link to={`/about`}>
                    <Button variant={"generalButton"}>More About Us</Button>
                </Link>
            </Flex>
        </Section>
    );
};
