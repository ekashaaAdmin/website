import { FlexBox, Grid, Section, Text } from "@src/components";
import { CSS } from "@src/styles";
import { Property } from "@src/utils";

const configCardCss: CSS = {
    boxShadow: "$shadowtype3",
    padding: "$2 $4",
    borderRadius: "$1"
};

interface ConfigurationProps {
    configurationData: Partial<Property>;
}

export const Configuration = ( { configurationData }: ConfigurationProps ) => {
    return (
        <>
            <Section id="configuration" variant={"propertyInfoCss"}>
                <FlexBox direction={"column"} gap={"4"}>
                    <Text typography={"dtHeading3"}>Configuration</Text>
                    <Grid
                        columns={{ "@initial": "2", "@bp2": "3" }}
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
                                    typography={"dtPara1"}
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
                                    typography={"dtPara1"}
                                    css={{ fontWeight: "$dtHeading2" }}
                                >
                                    {config.carpetArea} SqFt.
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
