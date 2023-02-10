import { Ekashaa_Logo } from "@src/assets";
import { FlexBox, ImgContainer, Section, Text } from "@src/components";

export const Developer = () => {
    return (
        <Section id="developer" variant={"propertyInfoCss"}>
            <FlexBox direction={"column"} gap={"3"}>
                <Text typography={"dtHeading3"}>Developer</Text>
                <FlexBox
                    direction={{ "@initial": "column", "@bp2": "row" }}
                    gap={"4"}
                    align={{ "@initial": "center", "@bp2": "flexStart" }}
                >
                    <ImgContainer
                        css={{ width: "7.5rem" }}
                        src={Ekashaa_Logo}
                        alt={"developerImage"}
                    />
                    <Text>
                        XYZ developer is one of the leading Real Estate Company
                        which aims to set new standards in the real estate by
                        being customer centricity, incorporating new
                        architectural design.
                    </Text>
                </FlexBox>
            </FlexBox>
        </Section>
    );
};
