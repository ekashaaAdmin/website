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

interface MorePropertyInfoProps {
    propertyData: Partial<Property>;
}

export const MorePropertyInfo = ( { propertyData }: MorePropertyInfoProps ) => {
    const {
        _id,
        amenities,
        configuration,
        developer,
        imageUrls,
        location,
        name,
        possessionDate,
        priceInfo,
        projectInfo,
        reraVerified
    } = propertyData;

    return (
        <>
            <FlexBox
                align={"start"}
                direction={{ "@initial": "column", "@bp2": "row" }}
                css={propertyInfoCss}
            >
                <FlexBox
                    css={{ flex: 1 }}
                    width={{ "@initial": "full", "@bp2": "half" }}
                >
                    <Swiper>
                        {imageUrls?.map( ( img, key ) => (
                            <SwiperSlide key={key}>
                                <ImgContainer
                                    src={img.url}
                                    alt="property-image"
                                    css={{
                                        maxHeight: "$mobileL"
                                    }}
                                />
                            </SwiperSlide>
                        ) )}
                    </Swiper>
                </FlexBox>
                <FlexBox
                    direction={"column"}
                    width={"full"}
                    gap={"3"}
                    align={"normal"}
                    css={{ padding: "$3", flex: 1 }}
                >
                    <FlexBox direction={"row"} justify={"spaceBetween"}>
                        <FlexBox direction={"column"}>
                            <Text typography={"dtPara3"}>Configurations</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                {configuration?.[ 0 ].rooms} BHK
                            </Text>
                        </FlexBox>
                        <FlexBox direction={"column"} align={"flexStart"}>
                            <Text typography={"dtPara3"}>Possession Date</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                {possessionDate}
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
                            <Text typography={"dtPara3"}>ReraID</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                {projectInfo?.reraId}
                            </Text>
                        </FlexBox>
                        <FlexBox direction={"column"}>
                            <Text typography={"dtPara3"}>Carpet Area</Text>
                            <Text
                                typography={"dtPara1"}
                                css={{ fontWeight: "$dtHeading2" }}
                            >
                                {configuration?.[ 0 ].carpetArea} SqFt.
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
            <OverView overviewData={{ name, location, projectInfo }} />
            <Configuration configurationData={{ configuration }} />
            <Amenities amenitiesData={{ amenities }} />
            <Location locationData={{ location }} />
            <Developer developerData={{ developer }} />
        </>
    );
};
