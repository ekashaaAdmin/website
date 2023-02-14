import { Property } from "@src/utils";
import { CSS } from "@styles";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "../Link";
import { PropertyCardContainer } from "./PropertyCardContainer";
import { PropertyContent } from "./PropertyContent";
import { ProperyCardCarousel } from "./ProperyCardCarousel";

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
    "@bp3": {
        width: "550px",
        height: "250px"
    }
};

interface PropertyCardProps {
    propertyData: Partial<Property>;
}

export const PropertyCard = ( { propertyData }: PropertyCardProps ) => {
    return (
        <Link to={`/property/${propertyData._id}`}>
            <PropertyCardContainer
                variant={{
                    "@initial": "verticalCard",
                    "@bp3": "horizontalCard"
                }}
                css={propertyCardCss}
            >
                <ProperyCardCarousel src={propertyData.imageUrls!} />
                <PropertyContent
                    price={propertyData.priceInfo?.price!}
                    priceUnit={propertyData.priceInfo?.priceUnit!}
                    propertyName={propertyData.name!}
                    rooms={propertyData.configuration![ 0 ]?.rooms}
                    shortAddress={propertyData.location?.shortAddress!}
                />
            </PropertyCardContainer>
        </Link>
    );
};
