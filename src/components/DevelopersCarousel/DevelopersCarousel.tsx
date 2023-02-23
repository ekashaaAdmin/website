import {
    DeveloperLodha,
    DeveloperBirlaEstates,
    DeveloperPiramal,
    DeveloperRustomjee,
    DeveloperShapoorji
} from "@assets";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";

const developers: string[] = [
    DeveloperBirlaEstates,
    DeveloperLodha,
    DeveloperPiramal,
    DeveloperRustomjee,
    DeveloperShapoorji
];

export const DevelopersCarousel = () => {
    return (
        <FlexBox width={{ "@initial": "full", "@bp3": "half" }}>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                loop={true}
                loopedSlides={2}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                modules={[ Autoplay ]}
            >
                {developers.map( ( dev, key ) => {
                    return (
                        <SwiperSlide key={key}>
                            <ImgContainer
                                src={dev}
                                alt="developer-logo"
                                css={{
                                    width: "12rem",
                                    height: "8rem",
                                    margin: "$5 auto"
                                }}
                            />
                        </SwiperSlide>
                    );
                } )}
            </Swiper>
        </FlexBox>
    );
};
