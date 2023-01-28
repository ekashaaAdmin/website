import { CSS } from "@styles";
import { Flex } from "../Flex";
import { ProperyCardCarousel } from "./ProperyCardCarousel";

export const propertyCardCss: CSS = {
    width: "350px",
    boxShadow: "$propertyCardShadow"
};

const images: string[] = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200"
];

export const PropertyCard = () => {
    return (
        <Flex css={propertyCardCss}>
            <ProperyCardCarousel src={images} />
        </Flex>
    );
};
