import { FlexBox, LocationLink, Section, Text } from "@src/components";
import { CSS } from "@src/styles";
import { Property } from "@src/utils";
import React from "react";

interface LocationProps {
    locationData: Partial<Property>;
}

export const Location = ( { locationData }: LocationProps ) => {
    const { location } = locationData;

    return (
        <>
            <Section
                variant={"propertyInfoCss"}
                css={{ flexDirection: "column" }}
            >
                <FlexBox direction={"column"} gap={"3"}>
                    <Text typography={"dtHeading3"}>Location</Text>
                    <Text typography={"dtPara1"}>
                        Insights into Neighbourhood - Map View{" "}
                    </Text>
                    <LocationLink src={location?.link} />
                </FlexBox>
            </Section>
            <Section variant={"seperatorCss"}></Section>
        </>
    );
};
