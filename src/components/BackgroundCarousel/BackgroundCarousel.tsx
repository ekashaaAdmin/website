import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "../Box";
import { ImgContainer } from "../ImgContainer";
import { Section } from "../Section";

interface BackgroundCarousel {
    height: string;
    imgSrc: string[];
}

export const BackgroundCarousel = ( { height, imgSrc }: BackgroundCarousel ) => {
    console.log( height, imgSrc );

    return (
        <Box
            css={{
                padding: 0,
                width: "$fullViewPortWidth"
            }}
        >
            <Swiper width={100}>
                <SwiperSlide>
                    <ImgContainer src={imgSrc[ 0 ]} alt={"imgSrc"} />
                </SwiperSlide>
            </Swiper>
            ;
        </Box>
    );
};
