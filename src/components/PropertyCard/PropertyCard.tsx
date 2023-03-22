import { Property } from "@src/utils";
import { CSS } from "@styles";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "../Box";
import { ImgContainer } from "../ImgContainer";
import { Link } from "../Link";
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
    "@bp3": {
        width: "550px",
        height: "250px"
    }
};

export const propertyImageCardCss: CSS = {
    width: "$full",
    height: "$half",
    overflow: "hidden",
    objectFit: "cover",
    "@bp3": {
        width: "50%",
        height: "$full",
        objectFit: "fill"
    }
};

interface PropertyCardProps {
    propertyData: Partial<Property>;
}

export const PropertyCard = ( { propertyData }: PropertyCardProps ) => {
    return (
        <Box css={{ size: "fit-content", m: "auto" }}>
            <Link to={`/properties/${propertyData._id}`}>
                <PropertyCardContainer
                    variant={{
                        "@initial": "verticalCard",
                        "@bp3": "horizontalCard"
                    }}
                    css={propertyCardCss}
                >
                    <ImgContainer
                        src={propertyData?.imageUrls?.[ 0 ].url!}
                        alt="property image"
                        fullHeight
                        css={propertyImageCardCss}
                    />
                    {/* <ProperyCardCarousel src={propertyData.imageUrls!} /> */}
                    <PropertyContent
                        price={propertyData.priceInfo?.price!}
                        priceUnit={propertyData.priceInfo?.priceUnit!}
                        propertyName={propertyData.name!}
                        rooms={[ propertyData?.configuration?.[ 0 ].rooms! ]}
                        multipleConfigs={
                            propertyData.configuration?.length! > 1
                        }
                        shortAddress={propertyData.location?.shortAddress!}
                    />
                </PropertyCardContainer>
            </Link>
        </Box>
    );
};
