import { CSS } from "@styles";
import { Flex } from "../Flex";
import { ProperyCardCarousel } from "./ProperyCardCarousel";
import "swiper/css";
import "swiper/css/pagination";
import { PropertyCardContainer } from "./PropertyCardContainer";
import { PropertyContent } from "./PropertyContent";

export const propertyCardCss: CSS = {
    borderRadius: "$1",
    boxShadow: "$propertyCardShadow",
    m: "$2",
    overflow: "hidden",
    width: "300px"
};

const images: string[] = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200"
];

export const PropertyCard = () => {
    return (
        <PropertyCardContainer
            variant={{
                "@initial": "verticalCard",
                "@bp1": "horizontalCard"
            }}
            css={propertyCardCss}
        >
            <ProperyCardCarousel src={images} />
            <PropertyContent />
        </PropertyCardContainer>
    );
};
