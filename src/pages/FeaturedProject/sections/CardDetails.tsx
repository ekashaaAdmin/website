import { FlexBox, Text } from "@src/components";
import { CSS } from "@src/styles";
import { Property } from "@src/utils";

const cardDetailsCss: CSS = {
    "@mobileS": { maxWidth: "$mobileS", margin: "$0 auto", padding: "$3" },
    "@bp1": { maxWidth: "$mobileL" },
    "@bp2": { maxWidth: "$tablet" },
    "@bp3": { maxWidth: "$laptopS" }
};

export interface CardDetailsProps {
    overviewData: Partial<Property>;
}

export const CardDetails = ( { overviewData }: CardDetailsProps ) => {
    const { name, developer, projectInfo, priceInfo, location } = overviewData;

    return (
        <FlexBox
            direction={{ "@initial": "column", "@bp2": "row" }}
            justify={"spaceBetween"}
            align={{ "@initial": "flexStart", "@bp2": "end" }}
            css={cardDetailsCss}
        >
            <FlexBox direction={"column"}>
                <Text
                    typography={{
                        "@initial": "mbHeading2",
                        "@bp3": "dtHeading2"
                    }}
                >
                    {name}
                </Text>
                <Text typography={"dtPara2"}>
                    by{" "}
                    <Text css={{ fontWeight: "$dtHeading1" }}>
                        {developer?.developerName}
                    </Text>
                </Text>
                <Text typography={"dtPara2"}>{location?.shortAddress}</Text>
            </FlexBox>
            <FlexBox
                direction={"column"}
                align={{ "@initial": "flexStart", "@bp2": "flexEnd" }}
            >
                <Text
                    typography={{
                        "@initial": "mbHeading2",
                        "@bp3": "dtHeading2"
                    }}
                >
                    ₹ {parseFloat( String( priceInfo?.price ) ).toFixed( 2 )}{" "}
                    {priceInfo?.priceUnit}
                </Text>
                <Text typography={"dtPara2"}>Onwards</Text>
            </FlexBox>
        </FlexBox>
    );
};
