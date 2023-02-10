import { FlexBox, Text } from "@src/components";
import { CSS } from "@src/styles";

const cardDetailsCss: CSS = {
    "@mobileS": { maxWidth: "$mobileS", margin: "$0 auto", padding: "$3" },
    "@bp1": { maxWidth: "$mobileL" },
    "@bp2": { maxWidth: "$tablet" },
    "@bp3": { maxWidth: "$laptopS" }
};

export const CardDetails = () => {
    return (
        <>
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
                        Unity Towers
                    </Text>
                    <Text typography={"dtPara2"}>
                        by{" "}
                        <Text css={{ fontWeight: "$dtHeading1" }}>
                            Developer Name
                        </Text>
                    </Text>
                    <Text typography={"dtPara2"}>Malabar Hills, Mumbai</Text>
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
                        ₹ 2.15 Cr
                    </Text>
                    <Text typography={"dtPara2"}>Onwards</Text>
                </FlexBox>
            </FlexBox>
        </>
    );
};
