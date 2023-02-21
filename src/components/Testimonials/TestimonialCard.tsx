import { Ekashaa_Footer_Logo } from "@src/assets";
import { CSS } from "@src/styles";
import { Testimonial } from "@src/utils";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";
import { Text } from "../Text";

const testimonialCardCss: CSS = {
    boxShadow: "$propertyCardShadow",
    margin: "$7 auto",
    width: "285px",
    height: "400px",
    alignItems: "center",
    padding: "$3"
};

interface TestimonialProps {
    testimonialData: Testimonial;
}

export const TestimonialCard = ( { testimonialData }: TestimonialProps ) => {
    const { name, profilePicture, propertyTestimonial, testimonialContent } =
        testimonialData;

    return (
        <FlexBox
            direction={"column"}
            align={"center"}
            gap={"2"}
            css={testimonialCardCss}
        >
            <FlexBox direction={"column"} align={"center"} gap={"2"}>
                {profilePicture ? (
                    <ImgContainer
                        src={profilePicture.url}
                        alt="profile-picture"
                        css={{
                            size: "$7",
                            [ `img` ]: {
                                borderRadius: "$circle",
                                width: "$full",
                                height: "$full"
                            }
                        }}
                    />
                ) : (
                    <Box
                        css={{
                            backgroundColor: "$complentaryColor",
                            size: "$7",
                            borderRadius: "$circle"
                        }}
                    ></Box>
                )}

                <Flex direction={"column"} align={"center"}>
                    <Text typography={"dtPara1"}>{name}</Text>
                    <Text typography={"dtPara2"} align={"center"}>
                        {propertyTestimonial.name}
                    </Text>
                </Flex>
            </FlexBox>
            <Text
                typography={"dtPara3"}
                css={{
                    overflowY: "auto",
                    scrollStyling: ""
                }}
            >
                <i>{testimonialContent}</i>
            </Text>
        </FlexBox>
    );
};
