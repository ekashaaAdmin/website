import { CSS } from "@src/styles";
import { FlexBox } from "../FlexBox";
import { Text } from "../Text";

const propertyContentCss: CSS = {
    p: "$2"
};

export const PropertyContent = () => {
    return (
        <FlexBox direction="column" css={propertyContentCss}>
            <Text typography={"dtPara1"} css={{ fontWeight: "$dtHeading1" }}>
                Property Name
            </Text>
            <Text typography={"dtPara1"}>At Lower Parel by XYZ Property</Text>
            <br />
            <Text typography={"dtPara1"}>
                Rs. 3.25Cr <Text typography={"dtPara3"}>Onwards</Text>
            </Text>
            <Text typography={"dtPara3"}>3BHK</Text>
        </FlexBox>
    );
};
