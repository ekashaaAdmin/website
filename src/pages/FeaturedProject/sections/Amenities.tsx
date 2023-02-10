import { FlexBox, Grid, Section, Text } from "@src/components";
import { CSS } from "@src/styles";

const configCardCss: CSS = {
    boxShadow: "$shadowtype1",
    padding: "$2",
    borderRadius: "$1",
    textAlign: "center"
};
export const Amenities = () => {
    return (
        <>
            <Section id="amenities" variant={"propertyInfoCss"}>
                <FlexBox direction={"column"} gap={"4"} width={"full"}>
                    <Text typography={"dtHeading3"}>Amenities</Text>
                    <Grid
                        css={{ gridTemplateAreas: "none" }}
                        columns={"auto"}
                        gap={{ "@initial": "2", "@bp3": "3" }}
                    >
                        <Text typography={"dtPara2"} css={configCardCss}>
                            Gymnasium
                        </Text>
                        <Text typography={"dtPara2"} css={configCardCss}>
                            Library
                        </Text>
                        <Text typography={"dtPara2"} css={configCardCss}>
                            Convenience Store
                        </Text>
                        <Text typography={"dtPara2"} css={configCardCss}>
                            Swimming Pool
                        </Text>
                        <Text typography={"dtPara2"} css={configCardCss}>
                            Cafeteria
                        </Text>
                        <Text typography={"dtPara2"} css={configCardCss}>
                            Banquet Hall
                        </Text>
                        <Text typography={"dtPara2"} css={configCardCss}>
                            Children's Play Area
                        </Text>
                        <Text typography={"dtPara2"} css={configCardCss}>
                            Amphitheatre
                        </Text>
                        <Text typography={"dtPara2"} css={configCardCss}>
                            Indoor Games
                        </Text>
                    </Grid>
                </FlexBox>
            </Section>
        </>
    );
};
