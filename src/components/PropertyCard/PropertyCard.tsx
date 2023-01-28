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
    mx: "auto",
    my: "$4",
    overflow: "hidden",
    width: "95%",
    height: "350px",
    "@mobileM": {
        width: "300px"
    },
    "@bp1": {
        width: "300px"
    },
    "@bp2": {
        width: "550px",
        height: "250px"
    }
};

const images: string[] = [
    "https://picsum.photos/300/400",
    "https://picsum.photos/300/400",
    "https://picsum.photos/300/400",
    "https://picsum.photos/300/400"
];

export const PropertyCard = () => {
    return (
        <PropertyCardContainer
            variant={{
                "@initial": "verticalCard",
                "@bp2": "horizontalCard"
            }}
            css={propertyCardCss}
        >
            <ProperyCardCarousel src={images} />
            <PropertyContent />
        </PropertyCardContainer>
    );
};
