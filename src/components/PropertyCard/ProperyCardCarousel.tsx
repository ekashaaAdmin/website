import { CSS } from "@src/styles";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";

const propertyCardCss: CSS = {
    width: "$full",
    overflow: "hidden"
};

interface PropertyCardCarouselProps {
    src: string[];
}

export const ProperyCardCarousel = ( { src }: PropertyCardCarouselProps ) => {
    return (
        <FlexBox css={propertyCardCss}>
            <Swiper
                pagination={{ dynamicBullets: true }}
                modules={[ Pagination ]}
            >
                {src.map( ( image, index ) => {
                    return (
                        <SwiperSlide key={index}>
                            <ImgContainer src={image} alt="property-image" />
                        </SwiperSlide>
                    );
                } )}
            </Swiper>
        </FlexBox>
    );
};
