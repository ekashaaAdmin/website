import { CSS } from "@styles";
import { ReactNode } from "react";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";
import { Link } from "../Link";
import { Text } from "../Text";

type ServicesCardProps = {
    logo: string | ReactNode | undefined;
    name: string;
    // setActiveSlide?: React.Dispatch<React.SetStateAction<string>>;
};

const serviceCardCss: CSS = {
    boxShadow: "rgba(94, 94, 94, 0.2) 0px 7px 29px 0px",
    cursor: "default",
    margin: "$4 auto",
    textAlign: "center",
    width: "$servicesCardWidth",
    height: "$servicesCardHeight",
    padding: "$1"
};

export const ServicesCard = ( { logo, name }: ServicesCardProps ) => {
    return (
        <Link to={"/services"}>
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
                <Text typography={"dtPara2"}>{name}</Text>
            </Flex>
        </Link>
    );
};
