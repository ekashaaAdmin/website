import { FlexBox, Grid, Section, Text } from "@src/components";
import { CSS } from "@src/styles";
import { Property } from "@src/utils";

const configCardCss: CSS = {
    textAlign: "center",
    padding: "$2 $4",
    borderRadius: "$1",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
};

interface ConfigurationProps {
    configurationData: Partial<Property>;
}

export const Configuration = ( { configurationData }: ConfigurationProps ) => {
    return (
        <>
            <Section id="configuration" variant={"propertyInfoCss"}>
                <FlexBox direction={"column"} gap={"4"} width={"full"}>
                    <Text typography={"dtHeading3"}>Configuration</Text>
                    <Grid
                        columns={{
                            "@initial": "2",
                            "@bp2": "4",
                            "@bp3": "5"
                        }}
                        gap={{ "@initial": "2", "@bp2": "4" }}
                    >
                        {configurationData.configuration?.map( ( config ) => (
                            <FlexBox
                                direction={"column"}
                                align={"center"}
                                gap={{ "@initial": "1", "@bp2": "2" }}
                                css={configCardCss}
                                key={config._key}
                            >
                                <Text
                                    typography={{
                                        "@initial": "dtPara3",
                                        "@bp2": "dtPara1"
                                    }}
                                >
                                    {config?.configurationType}
                                </Text>
                                <Text
                                    typography={{
                                        "@initial": "dtPara3",
                                        "@bp2": "dtPara1"
                                    }}
                                    css={{
                                        fontWeight: "$dtHeading2",
                                        borderBottom: "2px solid #1C99CD",
                                        paddingBottom: "$1"
                                    }}
                                >
                                    {config.rooms} BHK
                                </Text>
                                <Text typography={"dtPara3"}>Carpet Area</Text>
                                <Text
                                    typography={{
                                        "@initial": "dtPara3",
                                        "@bp2": "dtPara1"
                                    }}
                                    css={{
                                        fontWeight: "$dtHeading2",
                                        borderBottom: "2px solid #1C99CD",
                                        paddingBottom: "$1"
                                    }}
                                >
                                    {config.carpetArea} SqFt.
                                </Text>
                                <Text
                                    typography={{
                                        "@initial": "dtPara3",
                                        "@bp2": "dtPara1"
                                    }}
                                >
                                    {config?.configurationPrice}
                                </Text>
                            </FlexBox>
                        ) )}
                    </Grid>
                </FlexBox>
            </Section>
            <Section variant={"seperatorCss"}></Section>
        </>
    );
};
