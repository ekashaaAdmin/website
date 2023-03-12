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
        description: `Ekashaa is the interface between buyers and developers. 
        This puts us in the best position to pass on all the deals, discounts, 
        and concessions introduced by the developers directly to our clients. 
        And it gives you the first and the widest choice of sales inventory. 
        We negotiate with the developer along with you to get you the best price.
        `
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

export const AboutServices = () => {
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
                {aboutUsData.map( ( data, index ) => {
                    return (
                        <FlexBox
                            justify={"center"}
                            direction={{
                                "@initial": "column",
                                "@bp2": `${
                                    index % 2 === 0 ? "row" : "rowReverse"
                                }`
                            }}
                            align={"center"}
                            gap={"5"}
                        >
                            {data.src && (
                                <ImgContainer
                                    src={data.src as string}
                                    alt={""}
                                    css={{
                                        flex: 1,
                                        maxWidth: "10rem"
                                    }}
                                />
                            )}
                            <FlexBox direction={"column"} css={{ flex: 6 }}>
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
                } )}
            </FlexBox>
        </Section>
    );
};
