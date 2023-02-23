import { ReactNode } from "react";
import {
    Buyer_Journey,
    FinanceLogo,
    Legal_Services,
    Finance,
    LeasingLogo,
    LegalServicesLogo,
    LoansLogo,
    Mobile_Buyer_Journey,
    PropertyHuntLogo,
    services2,
    services4,
    services5,
    services6,
    services3,
    services1
} from "@src/assets";
import { FlexBox, ImgContainer, Text } from "@src/components";
import { CSS } from "@src/styles";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";

export type serviceType = {
    logo: ReactNode;
    name: string;
    description: ReactNode;
};

const imgCss: CSS = {
    width: "$full",
    "@bp1": {
        width: "$half"
    }
};

const Finanical = () => {
    return (
        <FlexBox
            justify={"center"}
            align={"center"}
            direction={"column"}
            gap={"4"}
            css={{ margin: "$1 0" }}
        >
            <Text typography={"dtPara1"}>
                Our team of financial experts will help you decode the latest
                tax regulations, exemptions, loan offerings and payment schemes.
            </Text>
            <Text align={"center"} typography={"dtHeading3"}>
                Sevices we offer
            </Text>
            <FlexBox
                align={"center"}
                justify={"center"}
                direction={{ "@initial": "column", "@bp1": "row" }}
            >
                <ImgContainer src={services1} alt={""} css={imgCss} />
                <ImgContainer src={services2} alt={""} css={imgCss} />
                <ImgContainer src={services3} alt={""} css={imgCss} />
            </FlexBox>
        </FlexBox>
    );
};

const Legal = () => {
    return (
        <FlexBox
            justify={"center"}
            align={"center"}
            direction={"column"}
            gap={"4"}
            css={{ margin: "$1 0" }}
        >
            <Text typography={"dtPara1"}>
                As an Ekashaa client, you don’t have to deal with daunting
                paperwork. Or worry about due diligence checks on the
                developers. Our legal team is well versed with the documentation
                and approval processes for property acquisition. We’ll get
                everything in place for your dream space.
            </Text>
            <Text align={"center"} typography={"dtHeading3"}>
                Sevices we offer
            </Text>
            <FlexBox
                gap={"4"}
                align={"center"}
                justify={"center"}
                direction={{ "@initial": "column", "@bp1": "row" }}
            >
                <ImgContainer src={services4} alt={""} css={imgCss} />
                <ImgContainer src={services5} alt={""} css={imgCss} />
                <ImgContainer src={services6} alt={""} css={imgCss} />
            </FlexBox>
        </FlexBox>
    );
};

const PropertyScoutingDesc = () => {
    return (
        <FlexBox
            justify={"center"}
            align={"center"}
            direction={"column"}
            gap={"4"}
            css={{ margin: "$1 0" }}
        >
            <Text typography={"dtPara1"}>
                Ekashaa brings you the best of luxury real estate offerings from
                South Mumbai—from stunning sea views to landscaped expanses and
                world-class privileges in the heart of the city. We specifically
                focus on projects in Bandra, Worli, Prabhadevi, Lower Parel and
                Mahalaxmi as the geography brings together the perfect blend of
                scenic beauty, sophisticated infrastructure, and unmatched
                connectivity. Whether you’re looking for homes or offices, with
                Ekashaa, your dream space is just a click away.
                <br />
                <br />
                <MediaQuery query="(min-width: 1024px)">
                    <ImgContainer src={Buyer_Journey} alt={"Buyer_Journey"} />
                </MediaQuery>
                <MediaQuery query="(max-width: 1024px)">
                    <ImgContainer
                        src={Mobile_Buyer_Journey}
                        alt={"Buyer_Journey"}
                    />
                </MediaQuery>
                <br />
                <br />
                <Text typography={"dtHeading3"}>
                    We’re not a real estate agency.
                </Text>
                <br />
                <Text typography={"dtPara1"}>
                    Ekashaa is empaneled with all the reputed developers in the
                    luxury realty market. We are channel partners of the
                    developers, which means that our fees are borne by the
                    developers themselves. That’s right – you don’t have to pay
                    us! & Hence we don't deplete your property budget.
                </Text>
            </Text>
        </FlexBox>
    );
};

export const servicesData: serviceType[] = [
    {
        logo: <PropertyHuntLogo />,
        name: "Property Scouting",
        description: <PropertyScoutingDesc />
    },
    // {
    //     logo: <LoansLogo />,
    //     name: "Loans",
    //     description: "Loop Desc"
    // },
    {
        logo: <Legal_Services />,
        name: `Legal Services`,
        description: <Legal />
    },
    {
        logo: <Finance />,
        name: "Finance",
        description: <Finanical />
    }
    // {
    //     logo: <LeasingLogo />,
    //     name: "Leasing",
    //     description: "Leasing Desc"
    // }
];
