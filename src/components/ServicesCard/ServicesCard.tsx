import { CSS } from "@styles";
import { ReactNode } from "react";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";
import { Text } from "../Text";

type ServicesCardProps = {
    logo: string | ReactNode | undefined;
    name: string;
    // setActiveSlide?: React.Dispatch<React.SetStateAction<string>>;
};

const serviceCardCss: CSS = {
    boxShadow: "$shadowtype3",
    margin: "$4 auto",
    textAlign: "center",
    width: "$servicesCardWidth",
    height: "$servicesCardHeight"
};

export const ServicesCard = ( { logo, name }: ServicesCardProps ) => {
    return (
        <Flex
            direction={"column"}
            center
            gap="1"
            css={serviceCardCss}
            className="services-card"
        >
            {typeof logo === "string" ? (
                <ImgContainer src={logo} alt="service-logo" />
            ) : (
                logo
            )}
            <Text typography={{ "@initial": "mbPara1", "@bp3": "dtPara1" }}>
                {name}
            </Text>
        </Flex>
    );
};
