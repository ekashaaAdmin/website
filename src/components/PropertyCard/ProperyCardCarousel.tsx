import { CSS } from "@src/styles";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";

const propertyCardCarouselCss: CSS = {
    width: "$full",
    overflow: "hidden",
    "@bp2": {
        width: "$half"
    }
};

interface PropertyCardCarouselProps {
    src: string[];
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
                                src={image}
                                alt="property-image"
                                css={{
                                    overflow: "hidden"
                                }}
                            />
                        </SwiperSlide>
                    );
                } )}
            </Swiper>
        </FlexBox>
    );
};
