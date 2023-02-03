import { Ekashaa_Footer_Logo } from "@src/assets";
import { CSS } from "@src/styles";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";
import { Text } from "../Text";

const testimonialCardCss: CSS = {
    boxShadow: "$propertyCardShadow",
    margin: "$7 auto",
    width: "285px",
    height: "350px",
    alignItems: "center",
    padding: "$3 $5"
};

export const TestimonialCard = () => {
    return (
        <>
            <FlexBox
                direction={"column"}
                align={"center"}
                gap={"3"}
                css={testimonialCardCss}
            >
                {/* <ImgContainer
                    src={}
                    alt=""
                /> */}
                <Box
                    css={{
                        backgroundColor: "$complentaryColor",
                        size: "$7",
                        borderRadius: "$circle"
                    }}
                ></Box>
                <Flex direction={"column"} align={"center"}>
                    <Text typography={"dtPara1"}>KPMG</Text>
                    <Text typography={"dtPara2"} align={"center"}>
                        Property Name Senior Manager
                    </Text>
                </Flex>
                <Text typography={"dtPara3"}>
                    <i>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy.
                    </i>
                </Text>
            </FlexBox>
        </>
    );
};
