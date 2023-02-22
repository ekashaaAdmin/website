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
    PropertyHuntLogo
} from "@src/assets";
import { ImgContainer, Text } from "@src/components";

export type serviceType = {
    logo: ReactNode;
    name: string;
    description: ReactNode;
};

const Finanical = () => {
    return (
        <Text typography={"dtPara1"}>
            Our team of financial experts consists of chartered accountants,
            banking consultants and investment advisors. Whether you’re a
            domestic investor or an NRI buyer, we will help you decode the
            latest tax regulations, exemptions, loan offerings and payment
            schemes.
        </Text>
    );
};

const Legal = () => {
    return (
        <Text typography={"dtPara1"}>
            As an Ekashaa client, you don’t have to deal with daunting
            paperwork. Our legal team is well versed with the documentation and
            approval processes of property acquisition, such as XXXX. We’ll get
            everything in place for your dream space.
        </Text>
    );
};

const PropertyScoutingDesc = () => {
    return (
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
            <ImgContainer src={Buyer_Journey} alt={"Buyer_Journey"} />
            <br />
            <br />
            <Text typography={"dtHeading3"}>
                We’re not a real estate agency.
            </Text>
            <br />
            <Text typography={"dtPara1"}>
                Ekashaa is empaneled with all the reputed developers in the
                luxury realty market. We are channel partners of the developers,
                which means that our fees are borne by the developers
                themselves. That’s right – you don’t have to pay us! & Hence we
                don't deplete your property budget.
            </Text>
        </Text>
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
        name: "Legal Services",
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
