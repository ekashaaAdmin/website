import { Button, FlexBox, Text, Grid, Section } from "@src/components";
import { CSS } from "@src/styles";

const downloadNowCss: CSS = {
    "@mobileS": {
        alignItems: "center"
    },
    "@bp2": {
        alignItems: "flex-start"
    }
};

export const OverView = () => {
    return (
        <Section id="overview" variant={"propertyInfoCss"}>
            <FlexBox
                direction={"column"}
                gap={{ "@initial": "7", "@bp2": "6" }}
            >
                <Text typography={"dtHeading3"}>
                    Unity Towers, Malabar Hill, Mumbai
                </Text>

                <Grid
                    justify={"start"}
                    columns={{ "@initial": "2", "@bp2": "4" }}
                    gap={"6"}
                >
                    <FlexBox direction={"column"} gap={"1"}>
                        <Text typography={"dtPara3"}>Project Status</Text>
                        <Text
                            typography={"dtPara1"}
                            css={{ fontWeight: "$dtHeading2" }}
                        >
                            Completed
                        </Text>
                    </FlexBox>
                    <FlexBox direction={"column"} gap={"1"}>
                        <Text typography={"dtPara3"}>Project Type</Text>
                        <Text
                            typography={"dtPara1"}
                            css={{ fontWeight: "$dtHeading2" }}
                        >
                            High Rise
                        </Text>
                    </FlexBox>
                    <FlexBox direction={"column"} gap={"1"}>
                        <Text typography={"dtPara3"}>Total Floors</Text>
                        <Text
                            typography={"dtPara1"}
                            css={{ fontWeight: "$dtHeading2" }}
                        >
                            27
                        </Text>
                    </FlexBox>
                    <FlexBox direction={"column"} gap={"1"}>
                        <Text typography={"dtPara3"}>Plot Area</Text>
                        <Text
                            typography={"dtPara1"}
                            css={{ fontWeight: "$dtHeading2" }}
                        >
                            13694450 SqFt
                        </Text>
                    </FlexBox>
                </Grid>

                <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                </Text>

                <Button css={downloadNowCss} variant={"generalButton"}>
                    Download Brochure
                </Button>
            </FlexBox>
        </Section>
    );
};
