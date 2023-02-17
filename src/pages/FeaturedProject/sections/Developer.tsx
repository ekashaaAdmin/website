import { FlexBox, ImgContainer, Section, Text } from "@src/components";
import { Property } from "@src/utils";

interface DeveloperProps {
    developerData: Partial<Property>;
}

export const Developer = ( { developerData }: DeveloperProps ) => {
    const { developer } = developerData;

    return (
        <Section id="developer" variant={"propertyInfoCss"}>
            <FlexBox direction={"column"} gap={"3"}>
                <Text typography={"dtHeading3"}>
                    {developer?.developerName}
                </Text>
                <FlexBox
                    direction={{ "@initial": "column", "@bp2": "row" }}
                    gap={"4"}
                    align={{ "@initial": "center", "@bp2": "flexStart" }}
                >
                    <ImgContainer
                        src={developer?.logo.url}
                        alt={"developerImage"}
                        css={{
                            width: "10rem"
                        }}
                    />
                    <Text>{developer?.description}</Text>
                </FlexBox>
            </FlexBox>
        </Section>
    );
};
