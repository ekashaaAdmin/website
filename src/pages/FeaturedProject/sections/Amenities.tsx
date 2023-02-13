import { FlexBox, Grid, Section, Text } from "@src/components";
import { CSS } from "@src/styles";
import { Property } from "@src/utils";

const configCardCss: CSS = {
    boxShadow: "$shadowtype1",
    padding: "$2",
    borderRadius: "$1",
    textAlign: "center"
};

interface AmenitiesProps {
    amenitiesData: Partial<Property>;
}

export const Amenities = ( { amenitiesData }: AmenitiesProps ) => {
    const { amenities } = amenitiesData;

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
                        {amenities?.map( ( amenity ) => (
                            <Text
                                typography={"dtPara2"}
                                css={configCardCss}
                                key={amenity._id}
                            >
                                {amenity.amenityName}
                            </Text>
                        ) )}
                    </Grid>
                </FlexBox>
            </Section>
            <Section variant={"seperatorCss"}></Section>
        </>
    );
};
