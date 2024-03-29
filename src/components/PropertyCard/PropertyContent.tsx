import { CSS } from "@src/styles";
import { FlexBox } from "../FlexBox";
import { Text } from "../Text";

const propertyContentCss: CSS = {
    p: "$2",
    flex: 1
};

interface PropertyContentProps {
    propertyName: string;
    shortAddress: string;
    price: number;
    priceUnit: string;
    rooms: number[];
    multipleConfigs: boolean;
}

export const PropertyContent = ( {
    price,
    priceUnit,
    propertyName,
    rooms,
    shortAddress,
    multipleConfigs
}: PropertyContentProps ) => {
    return (
        <FlexBox direction="column" css={propertyContentCss}>
            <Text typography={"dtPara1"} css={{ fontWeight: "$dtHeading1" }}>
                {propertyName}
            </Text>
            <Text typography={"dtPara1"}>{shortAddress}</Text>
            <br />
            <Text typography={"dtPara1"}>
                Rs. {price}
                {priceUnit} <Text typography={"dtPara3"}> Onwards</Text>
            </Text>
            <Text typography={"dtPara3"}>
                {rooms}BHK {multipleConfigs && <Text>and more... </Text>}
            </Text>
        </FlexBox>
    );
};
