import { Button, FlexBox, Text, Grid, Section } from "@src/components";
import { CSS } from "@src/styles";
import { Property } from "@src/utils";

const downloadNowCss: CSS = {
    width: "max-content",
    "@mobileS": {
        alignItems: "center"
    },
    "@bp2": {
        alignItems: "flex-start"
    }
};

interface OverviewProps {
    overviewData: Partial<Property>;
}

export const OverView = ( { overviewData }: OverviewProps ) => {
    const { name, location, projectInfo } = overviewData;

    return (
        <>
            <Section id="overview" variant={"propertyInfoCss"}>
                <FlexBox
                    direction={"column"}
                    gap={{ "@initial": "7", "@bp2": "6" }}
                >
                    <Text typography={"dtHeading3"}>
                        {`${name}, ${location?.shortAddress}`}
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
                                {projectInfo?.projectStatus}
                            </Text>
                        </FlexBox>
                        <FlexBox direction={"column"} gap={"1"}>
                            <Text typography={"dtPara3"}>Project Type</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                {projectInfo?.projectType}
                            </Text>
                        </FlexBox>
                        <FlexBox direction={"column"} gap={"1"}>
                            <Text typography={"dtPara3"}>Total Floors</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                {projectInfo?.totalFloor}
                            </Text>
                        </FlexBox>
                        <FlexBox direction={"column"} gap={"1"}>
                            <Text typography={"dtPara3"}>Plot Area</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                {projectInfo?.plotArea} acre
                            </Text>
                        </FlexBox>
                    </Grid>

                    <Text>{projectInfo?.projectDescription}</Text>

                    <Button css={downloadNowCss} variant={"generalButton"}>
                        Download Brochure
                    </Button>
                </FlexBox>
            </Section>
            <Section variant={"seperatorCss"}></Section>
        </>
    );
};
