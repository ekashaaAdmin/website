import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "../Box";
import { ImgContainer } from "../ImgContainer";
import { Section } from "../Section";

interface BackgroundCarousel {
    height: string;
    imgSrc: string[];
}

export const BackgroundCarousel = ( { height, imgSrc }: BackgroundCarousel ) => {
    return (
        <Box
            css={{
                lineHeight: 0,
                fontSize: 0,
                padding: 0,
                maxHeight: `${height}`,
                left: "$0",
                width: "100%",
                position: "absolute",
                zIndex: "$negativeOne"
            }}
        >
            <Swiper
                autoplay={{
                    delay: 2000
                }}
                loop={true}
                modules={[ Autoplay ]}
            >
                {imgSrc.map( ( src, key ) => (
                    <SwiperSlide key={key}>
                        <ImgContainer
                            fullHeight
                            css={{ height: `${height}` }}
                            src={src}
                            alt={"imgSrc"}
                        />
                    </SwiperSlide>
                ) )}
            </Swiper>
            ;
        </Box>
    );
};
