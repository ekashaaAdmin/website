import {
    Box,
    Button,
    FlexBox,
    ImgContainer,
    ProperyCardCarousel,
    Text
} from "@src/components";
import { CSS } from "@src/styles";
import { Property } from "@src/utils";
import { Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    OverView,
    Location,
    Developer,
    Configuration,
    Amenities
} from "../sections";

const images: string[] = [
    "https://picsum.photos/300/400",
    "https://picsum.photos/300/400",
    "https://picsum.photos/300/400",
    "https://picsum.photos/300/400"
];

const propertyInfoCss: CSS = {
    "@mobileS": {
        maxWidth: "$mobileS",
        margin: "$0 auto"
    },
    "@bp1": {
        maxWidth: "$mobileM"
    },
    "@bp2": {
        maxWidth: "$tablet",
        padding: "$3"
    },
    "@bp3": {
        maxWidth: "$laptopS"
    }
};

const enquireNowCss: CSS = {
    "@mobileS": {
        display: "none"
    },
    "@bp2": {
        display: "inherit"
    }
};

const propertyInfoNavbarCss: CSS = {
    "@mobileS": {
        display: "none"
    },
    "@bp1": {
        maxWidth: "$mobileM"
    },
    "@bp2": {
        maxWidth: "$tablet",
        display: "flex",
        padding: "$5",
        margin: "$0 auto"
    },
    "@bp3": {
        maxWidth: "$laptopS"
    }
};

export const MorePropertyInfo = () => {
    return (
        <>
            <FlexBox
                direction={{ "@initial": "column", "@bp2": "row" }}
                css={propertyInfoCss}
            >
                <ImgContainer
                    src={"https://picsum.photos/300/400"}
                    alt={"propertyImage"}
                />
                <FlexBox
                    direction={"column"}
                    width={"full"}
                    gap={"3"}
                    align={"normal"}
                    css={{ padding: "$3" }}
                >
                    <FlexBox direction={"row"} justify={"spaceBetween"}>
                        <FlexBox direction={"column"}>
                            <Text typography={"dtPara3"}>Configurations</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                3 BHK
                            </Text>
                        </FlexBox>
                        <FlexBox direction={"column"} align={"flexStart"}>
                            <Text typography={"dtPara3"}>Possession Date</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                Feb 2023
                            </Text>
                        </FlexBox>
                    </FlexBox>
                    <hr />
                    <FlexBox
                        direction={"row"}
                        justify={"spaceBetween"}
                        align={"flexStart"}
                    >
                        <FlexBox direction={"column"}>
                            <Text typography={"dtPara3"}>
                                Min. Price per Sqft.
                            </Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                ₹ 28 K per SqFt.
                            </Text>
                        </FlexBox>
                        <FlexBox direction={"column"}>
                            <Text typography={"dtPara3"}>Carpet Area</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                1200 SqFt.
                            </Text>
                        </FlexBox>
                    </FlexBox>
                    <hr />
                    <Box css={enquireNowCss} width={"half"}>
                        <Button variant={"generalButton"}>Enquire Now</Button>
                    </Box>
                </FlexBox>
            </FlexBox>

            <FlexBox css={propertyInfoNavbarCss} gap={5} align={"center"}>
                <Text typography={"dtPara1"}>Overview</Text>
                <Text typography={"dtPara1"}>Configurations</Text>
                <Text typography={"dtPara1"}>Amenities</Text>
                <Text typography={"dtPara1"}>Localilty</Text>
                <Text typography={"dtPara1"}>Developer</Text>
            </FlexBox>
            <OverView />
            <Configuration />
            <Amenities />
            <Location />
            <Developer />
        </>
    );
};
