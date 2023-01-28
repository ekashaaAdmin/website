import { CSS } from "@src/styles";
import { FlexBox } from "../FlexBox";
import { Text } from "../Text";

const propertyContentCss: CSS = {
    p: "$2"
};

export const PropertyContent = () => {
    return (
        <FlexBox direction="column" css={propertyContentCss}>
            <Text>Property Name</Text>
            <Text>At Lower Parel by XYZ Property</Text>
            <br />
            <Text>
                Rs. 3.25Cr <Text>Onwards</Text>
            </Text>
            <Text>3BHK</Text>
        </FlexBox>
    );
};
