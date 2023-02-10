import { FlexBox, Grid, Section, Text } from "@src/components";
import { CSS } from "@src/styles";

const configCardCss: CSS = {
    boxShadow: "$shadowtype3",
    padding: "$2 $4",
    borderRadius: "$1"
};

export const Configuration = () => {
    return (
        <Section id="configuration" variant={"propertyInfoCss"}>
            <FlexBox direction={"column"} gap={"4"}>
                <Text typography={"dtHeading3"}>Configuration</Text>
                <Grid
                    columns={{ "@initial": "2", "@bp2": "3" }}
                    gap={{ "@initial": "2", "@bp2": "4" }}
                >
                    <FlexBox
                        direction={"column"}
                        align={"center"}
                        gap={{ "@initial": "1", "@bp2": "2" }}
                        css={configCardCss}
                    >
                        <Text
                            typography={"dtPara1"}
                            css={{
                                fontWeight: "$dtHeading2",
                                borderBottom: "2px solid #1C99CD",
                                paddingBottom: "$1"
                            }}
                        >
                            2 BHK
                        </Text>
                        <Text typography={"dtPara3"}>Carpet Area</Text>
                        <Text
                            typography={"dtPara1"}
                            css={{ fontWeight: "$dtHeading2" }}
                        >
                            565 SqFt.
                        </Text>
                    </FlexBox>
                    <FlexBox
                        direction={"column"}
                        align={"center"}
                        gap={{ "@initial": "1", "@bp2": "2" }}
                        css={configCardCss}
                    >
                        <Text
                            typography={"dtPara1"}
                            css={{
                                fontWeight: "$dtHeading2",
                                borderBottom: "2px solid #1C99CD",
                                paddingBottom: "$1"
                            }}
                        >
                            3 BHK
                        </Text>
                        <Text typography={"dtPara3"}>Carpet Area</Text>
                        <Text
                            typography={"dtPara1"}
                            css={{ fontWeight: "$dtHeading2" }}
                        >
                            835 SqFt.
                        </Text>
                    </FlexBox>
                    <FlexBox
                        direction={"column"}
                        align={"center"}
                        gap={{ "@initial": "1", "@bp2": "2" }}
                        css={configCardCss}
                    >
                        <Text
                            typography={"dtPara1"}
                            css={{
                                fontWeight: "$dtHeading2",
                                borderBottom: "2px solid #1C99CD",
                                paddingBottom: "$1"
                            }}
                        >
                            4 BHK
                        </Text>
                        <Text typography={"dtPara3"}>Carpet Area</Text>
                        <Text
                            typography={"dtPara1"}
                            css={{ fontWeight: "$dtHeading2" }}
                        >
                            1351 SqFt.
                        </Text>
                    </FlexBox>
                </Grid>
            </FlexBox>
        </Section>
    );
};
