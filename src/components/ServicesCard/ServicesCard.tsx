import { CSS } from "@styles";
import { ReactNode } from "react";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";
import { Text } from "../Text";

type ServicesCardProps = {
    logo: string | ReactNode | undefined;
    name: string;
};

const serviceCardCss: CSS = {
    boxShadow: "$servicesCardShadow",
    margin: "$4 auto",
    width: "$servicesCardWidth",
    height: "$servicesCardHeight"
};

export const ServicesCard = ( { logo, name }: ServicesCardProps ) => {
    return (
        <Flex direction={"column"} center gap="1" css={serviceCardCss}>
            {typeof logo === "string" ? (
                <ImgContainer src={logo} alt="service-logo" />
            ) : (
                logo
            )}
            <Text>{name}</Text>
        </Flex>
    );
};
