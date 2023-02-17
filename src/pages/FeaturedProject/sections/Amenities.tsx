import { Box, Flex, FlexBox, Grid, Section, Text } from "@src/components";
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
                    <Flex direction={"column"} gap={"2"}>
                        {amenities?.map( ( amenity ) => (
                            <Flex align={"center"} gap={"2"}>
                                <Box
                                    size={"1"}
                                    css={{
                                        backgroundColor: "$accentColor",
                                        borderRadius: "$2"
                                    }}
                                ></Box>
                                <Text typography={"dtPara1"} key={amenity._id}>
                                    {amenity.amenityName}
                                </Text>
                            </Flex>
                        ) )}
                    </Flex>
                </FlexBox>
            </Section>
            <Section variant={"seperatorCss"}></Section>
        </>
    );
};
