import { ContactFormImg } from "@src/assets";
import { CSS } from "@src/styles";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";
import { Link } from "../Link";
import { LogoSmall } from "../Logo";
import { Section } from "../Section";
import { Text } from "../Text";
import { ContactForm } from "./ContactForm";

const contactInnerFlexCss: CSS = {
    boxShadow: "$propertyCardShadow",
    p: "$2",
    width: "90%"
};

interface ContactFormProps {
    isPropertyPage?: boolean;
    propertyName?: string;
}

export const Contact = ( { isPropertyPage, propertyName }: ContactFormProps ) => {
    return (
        <Section
            id="contactUs"
            className="contactUs"
            direction="column"
            css={{
                px: 0,
                textAlign: "center",
                maxWidth: "$mobileL",
                "@bp3": {
                    maxWidth: "$laptopM"
                }
            }}
        >
            <Box css={{ mb: "$5" }}>
                <Text
                    typography={{
                        "@initial": "mbHeading2",
                        "@bp3": "dtHeading1"
                    }}
                >
                    Connect with us
                </Text>
                <br />
                <Text
                    typography={{
                        "@initial": "mbHeading2",
                        "@bp3": "dtHeading1"
                    }}
                    css={{ fontWeight: "$dtPara1" }}
                >
                    Today!
                </Text>
            </Box>
            <FlexBox
                direction={{ "@initial": "column", "@bp3": "row" }}
                center
                css={{
                    "@bp3": {
                        alignItems: "stretch"
                    }
                }}
            >
                <Flex
                    direction="column"
                    center
                    gap={"3"}
                    css={contactInnerFlexCss}
                >
                    <LogoSmall css={{ width: "10rem" }} />
                    <Text>
                        Email Us at{" "}
                        <Link to={`..mailto:info@ekashaa.com`}>
                            info@ekashaa.com
                        </Link>
                    </Text>
                    <ImgContainer
                        src={ContactFormImg}
                        alt="artwork"
                        width={"full"}
                    />
                </Flex>
                <Flex
                    direction="column"
                    center
                    gap={"1"}
                    css={contactInnerFlexCss}
                >
                    <Text typography={"dtHeading2"}>Get in touch</Text>
                    <Text css={{ maxWidth: "$mobileS" }} typography={"dtPara2"}>
                        Get your queries resolved from our experts
                    </Text>
                    <ContactForm
                        isPropertyPage={isPropertyPage}
                        propertyName={propertyName}
                    />
                    <Text>
                        or reach us at <br />
                        +91 9820467249
                    </Text>
                </Flex>
            </FlexBox>
        </Section>
    );
};
