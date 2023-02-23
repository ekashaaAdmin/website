import {
    Button,
    Flex,
    FlexBox,
    ImgContainer,
    LogoSmall,
    Section,
    Text
} from "@src/components";
import { CSS } from "@src/styles";
import { ReactNode } from "react";
import {
    Zero_Commission,
    Unmatched_Price,
    NRI,
    Geography,
    Cream_South,
    Honesty
} from "@assets";

const textContentCss: CSS = {
    maxWidth: "$mobileS",
    "@bp1": {
        maxWidth: "$tablet"
    }
};
type aboutUsType = {
    src: ReactNode;
    name: string;
    description: string;
};
const aboutUsData: aboutUsType[] = [
    {
        src: Zero_Commission,
        name: `Zero Commission`,
        description: `We are enlisted as channel partners with multiple 
        developers. This service model, which is unique to the premium 
        realty market, ensures that our clients do not pay us anything. 
        Our fees are borne by the developers.`
    },
    {
        src: Unmatched_Price,
        name: `First choice of Inventory & unmatched Price`,
        description: `We are enlisted as channel partners with multiple 
        developers. This service model, which is unique to the premium 
        realty market, ensures that our clients do not pay us anything. 
        Our fees are borne by the developers.`
    },
    {
        src: Honesty,
        name: `Ear-to-the-ground Facts`,
        description: `Years of experience and in-depth industry knowledge 
        enable us to give you a true picture of the project realities. 
        Actual sales figures, litigation issues, projected developments 
        in the neighborhood - you can rely on us for honest advice and 
        insights.`
    },
    {
        src: Geography,
        name: `Geographical niche`,
        description: `We exclusively partner on projects in the most 
        sought-after pin codes of South Mumbai. Our tight focus lets 
        you benefit from timely insights, superior comparative analyses 
        and best value for your money.`
    },
    {
        src: Cream_South,
        name: `Cream of South Mumbai`,
        description: `We’ve partnered with the biggest and best developers 
        in the luxury segment. This gives you access to the plushest 
        residences in the city, right next to celebrated artists and 
        entrepreneurs.`
    },
    {
        src: NRI,
        name: `Specialized advisory team for NRIs`,
        description: `Ekashaa has a special advisory team of financial and 
        legal experts for NRI investors.`
    }
];

export const About = () => {
    return (
        <Section
            id="about"
            direction={"column"}
            center
            gap={"4"}
            variant={"propertyInfoCss"}
        >
            <LogoSmall css={{ minWidth: "$logoMedium" }} />

            <FlexBox direction={"column"} gap={"5"}>
                {/* {aboutUsData.map( ( data ) => {
                    return (
                        <FlexBox
                            justify={"center"}
                            direction={{ "@initial": "column", "@bp2": "row" }}
                            align={"center"}
                            gap={"5"}
                        >
                            <ImgContainer
                                src={data.src}
                                alt={""}
                                css={{
                                    width: "$half"
                                }}
                            />
                            <FlexBox direction={"column"}>
                                <Text
                                    typography={{
                                        "@initial": "mbHeading2",
                                        "@bp3": "dtHeading3"
                                    }}
                                >
                                    {data.name}
                                </Text>
                                <Text
                                    typography={{
                                        "@initial": "mbPara1",
                                        "@bp3": "dtPara1"
                                    }}
                                >
                                    {data.description}
                                </Text>
                            </FlexBox>
                        </FlexBox>
                    );
                } )} */}
                <FlexBox
                    justify={"center"}
                    direction={{ "@initial": "column", "@bp2": "row" }}
                    align={"center"}
                    gap={"5"}
                >
                    <ImgContainer
                        src={Zero_Commission}
                        alt={""}
                        css={{
                            width: "$half"
                        }}
                    />
                    <FlexBox direction={"column"}>
                        <Text
                            typography={{
                                "@initial": "mbHeading2",
                                "@bp3": "dtHeading3"
                            }}
                        >
                            {aboutUsData[ 0 ].name}
                        </Text>
                        <Text
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtPara1"
                            }}
                        >
                            {aboutUsData[ 0 ].description}
                        </Text>
                    </FlexBox>
                </FlexBox>

                <FlexBox
                    direction={{ "@initial": "column", "@bp2": "rowReverse" }}
                    align={"center"}
                    gap={"5"}
                >
                    <ImgContainer
                        src={Unmatched_Price}
                        alt={""}
                        css={{
                            width: "$half"
                        }}
                    />
                    <FlexBox
                        justify={"end"}
                        direction={"column"}
                        css={{
                            display: "flex"
                        }}
                    >
                        <Text
                            typography={{
                                "@initial": "mbHeading2",
                                "@bp3": "dtHeading3"
                            }}
                        >
                            {aboutUsData[ 1 ].name}
                        </Text>
                        <Text
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtPara1"
                            }}
                        >
                            {aboutUsData[ 1 ].description}
                        </Text>
                    </FlexBox>
                </FlexBox>

                <FlexBox
                    justify={"center"}
                    direction={{ "@initial": "column", "@bp2": "row" }}
                    align={"center"}
                    gap={"5"}
                >
                    <ImgContainer
                        src={Honesty}
                        alt={""}
                        css={{
                            width: "$half"
                        }}
                    />
                    <FlexBox direction={"column"}>
                        <Text
                            typography={{
                                "@initial": "mbHeading2",
                                "@bp3": "dtHeading3"
                            }}
                        >
                            {aboutUsData[ 2 ].name}
                        </Text>
                        <Text
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtPara1"
                            }}
                        >
                            {aboutUsData[ 2 ].description}
                        </Text>
                    </FlexBox>
                </FlexBox>

                <FlexBox
                    direction={{ "@initial": "column", "@bp2": "rowReverse" }}
                    align={"center"}
                    gap={"5"}
                >
                    <ImgContainer
                        src={Geography}
                        alt={""}
                        css={{
                            width: "$half"
                        }}
                    />
                    <FlexBox
                        justify={"end"}
                        direction={"column"}
                        css={{
                            display: "flex"
                        }}
                    >
                        <Text
                            typography={{
                                "@initial": "mbHeading2",
                                "@bp3": "dtHeading3"
                            }}
                        >
                            {aboutUsData[ 3 ].name}
                        </Text>
                        <Text
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtPara1"
                            }}
                        >
                            {aboutUsData[ 3 ].description}
                        </Text>
                    </FlexBox>
                </FlexBox>

                <FlexBox
                    justify={"center"}
                    direction={{ "@initial": "column", "@bp2": "row" }}
                    align={"center"}
                    gap={"5"}
                >
                    <ImgContainer
                        src={Cream_South}
                        alt={""}
                        css={{
                            width: "$half"
                        }}
                    />
                    <FlexBox direction={"column"}>
                        <Text
                            typography={{
                                "@initial": "mbHeading2",
                                "@bp3": "dtHeading3"
                            }}
                        >
                            {aboutUsData[ 4 ].name}
                        </Text>
                        <Text
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtPara1"
                            }}
                        >
                            {aboutUsData[ 4 ].description}
                        </Text>
                    </FlexBox>
                </FlexBox>

                <FlexBox
                    direction={{ "@initial": "column", "@bp2": "rowReverse" }}
                    align={"center"}
                    gap={"5"}
                >
                    <ImgContainer
                        src={NRI}
                        alt="nri"
                        css={{ width: "12.85rem", height: "13rem" }}
                    />
                    <FlexBox
                        justify={"end"}
                        direction={"column"}
                        css={{
                            display: "flex"
                        }}
                    >
                        <Text
                            typography={{
                                "@initial": "mbHeading2",
                                "@bp3": "dtHeading3"
                            }}
                        >
                            {aboutUsData[ 5 ].name}
                        </Text>
                        <Text
                            typography={{
                                "@initial": "mbPara1",
                                "@bp3": "dtPara1"
                            }}
                        >
                            {aboutUsData[ 5 ].description}
                        </Text>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </Section>
    );
};
