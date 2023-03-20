import { Anchor, Box, Button, FlexBox, Grid, Text } from "@src/components";
import { Contact } from "@src/components/Contact";
import { CSS } from "@src/styles";
import { Property, scrollCompIntoView } from "@src/utils";
import {
    Amenities,
    Configuration,
    Developer,
    Location,
    OverView,
    PropertyPageCarousel
} from "../sections";

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
    backgroundColor: "White",
    position: "sticky",
    top: "$11",
    width: "$full",
    zIndex: "$3",
    "@mobileS": {
        display: "none"
    },
    "@bp1": {
        maxWidth: "$mobileM"
    },
    "@bp2": {
        maxWidth: "$tablet",
        display: "flex",
        padding: "$5 $5 $5 $2",
        margin: "$0 auto"
    },
    "@bp3": {
        maxWidth: "$laptopS",
        top: "$13"
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
                align={"center"}
                direction={{ "@initial": "column", "@bp2": "row" }}
                css={propertyInfoCss}
            >
                <PropertyPageCarousel imageUrls={imageUrls} />
                <FlexBox
                    direction={"column"}
                    width={"full"}
                    gap={"3"}
                    align={"normal"}
                    css={{ padding: "$3", flex: 1 }}
                >
                    <Grid columns={"1"} gap={"3"} justify={"between"}>
                        <Grid columns={"2"} gap={"7"} justify={"between"}>
                            <FlexBox direction={"column"}>
                                <Text typography={"dtPara3"}>
                                    Configurations
                                </Text>
                                <Text
                                    typography={"dtPara1"}
                                    css={{ fontWeight: "$dtHeading2" }}
                                >
                                    {configuration?.[ 0 ].rooms} BHK
                                </Text>
                            </FlexBox>
                            <FlexBox direction={"column"} align={"flexStart"}>
                                <Text typography={"dtPara3"}>
                                    Possession Date
                                </Text>
                                <Text
                                    typography={"dtPara1"}
                                    css={{ fontWeight: "$dtHeading2" }}
                                >
                                    {possessionDate}
                                </Text>
                            </FlexBox>
                        </Grid>
                        <hr />
                        <Grid columns={"2"} gap={"7"} justify={"between"}>
                            <FlexBox direction={"column"}>
                                <Text typography={"dtPara3"}>ReraID</Text>
                                {projectInfo?.reraId.map( ( id ) => (
                                    <Text
                                        typography={"dtPara1"}
                                        css={{
                                            fontWeight: "$dtHeading2",
                                            mb: "$2"
                                        }}
                                        key={id._key}
                                    >
                                        {id?.towerName}
                                        {id.towerName ? `\n` : ""}
                                        {id.towerReraId}
                                    </Text>
                                ) )}
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
                        </Grid>
                    </Grid>
                    <hr />
                    <Anchor href={"#contactUs"}>
                        <Box css={enquireNowCss} width={"half"}>
                            <Button variant={"generalButton"}>
                                Interested
                            </Button>
                        </Box>
                    </Anchor>
                </FlexBox>
            </FlexBox>

            <Box>
                <FlexBox css={propertyInfoNavbarCss} gap={5} align={"center"}>
                    <Text
                        typography={"dtPara1"}
                        onClick={() => scrollCompIntoView( "overview" )}
                        css={{ cursor: "pointer" }}
                    >
                        Overview
                    </Text>
                    <Text
                        typography={"dtPara1"}
                        onClick={() => scrollCompIntoView( "configuration" )}
                        css={{ cursor: "pointer" }}
                    >
                        Configurations
                    </Text>
                    <Text
                        typography={"dtPara1"}
                        onClick={() => scrollCompIntoView( "amenities" )}
                        css={{ cursor: "pointer" }}
                    >
                        Amenities
                    </Text>
                    <Text
                        typography={"dtPara1"}
                        onClick={() => scrollCompIntoView( "locality" )}
                        css={{ cursor: "pointer" }}
                    >
                        Localilty
                    </Text>
                    <Text
                        typography={"dtPara1"}
                        onClick={() => scrollCompIntoView( "developer" )}
                        css={{ cursor: "pointer" }}
                    >
                        Developer
                    </Text>
                </FlexBox>
                <OverView overviewData={{ name, location, projectInfo }} />
                <Configuration configurationData={{ configuration }} />
                <Amenities amenitiesData={{ amenities }} />
                <Location locationData={{ location }} />
                <Developer developerData={{ developer }} />
            </Box>
            <Contact isPropertyPage propertyName={name} />
        </>
    );
};
