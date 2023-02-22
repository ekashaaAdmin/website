import { CSS } from "@src/styles";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";

const propertyCardCarouselCss: CSS = {
    width: "$full",
    height: "$full",
    overflow: "hidden",
    "@bp3": {
        width: "$half"
    },
    objectFit: "cover",
    objectPosition: "center"
};

interface PropertyCardCarouselProps {
    src: [
        {
            url: string;
        }
    ];
}

export const ProperyCardCarousel = ( { src }: PropertyCardCarouselProps ) => {
    return (
        <FlexBox css={propertyCardCarouselCss}>
            <Swiper
                pagination={{ dynamicBullets: true }}
                modules={[ Pagination ]}
            >
                {src.map( ( image, index ) => {
                    return (
                        <SwiperSlide key={index}>
                            <ImgContainer
                                src={image.url}
                                alt="property-image"
                                css={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    width: "100%",
                                    height: "100%"
                                }}
                            />
                        </SwiperSlide>
                    );
                } )}
            </Swiper>
        </FlexBox>
    );
};
