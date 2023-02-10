import { FlexBox, LocationLink, Section, Text } from "@src/components";
import { CSS } from "@src/styles";
import React from "react";

export const Location = () => {
    return (
        <>
            <Section variant={"propertyInfoCss"}>
                <FlexBox direction={"column"} gap={"3"}>
                    <Text typography={"dtHeading3"}>Location</Text>
                    <Text typography={"dtPara1"}>
                        Insights into Neighbourhood - Map View{" "}
                    </Text>
                    <LocationLink
                        src={
                            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7545.229083778799!2d72.82252183065498!3d18.992623292337942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8ecb9df2fd%3A0x4de65ba1148e563a!2sFour%20Seasons%20Hotel%20Mumbai!5e0!3m2!1sen!2sin!4v1676023811685!5m2!1sen!2sin"
                        }
                    />
                </FlexBox>
            </Section>
        </>
    );
};
