import { Property } from "@src/utils";
import { VariantProps } from "@stitches/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "../Box";
import { ImgContainer } from "../ImgContainer";
import { Link } from "../Link";
import { PropertyCardContainer } from "./PropertyCardContainer";
import { PropertyContent } from "./PropertyContent";

interface PropertyCardProps extends VariantProps<typeof PropertyCardContainer> {
    propertyData: Partial<Property>;
}

export const PropertyCard = ( {
    propertyData,
    orientation
}: PropertyCardProps ) => {
    return (
        <Box css={{ size: "fit-content", m: "auto" }}>
            <Link to={`/properties/${propertyData._id}`}>
                <PropertyCardContainer orientation={orientation}>
                    <ImgContainer
                        src={propertyData?.imageUrls?.[ 0 ].url!}
                        alt="property image"
                        fullHeight
                        css={{ flex: 1 }}
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
