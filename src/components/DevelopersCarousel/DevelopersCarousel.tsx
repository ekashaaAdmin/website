import { DeveloperGPL, DeveloperHiranandani, DeveloperLodha } from "@assets";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { ImgContainer } from "../ImgContainer";

const developers: string[] = [
    DeveloperGPL,
    DeveloperLodha,
    DeveloperHiranandani,
    DeveloperGPL,
    DeveloperLodha,
    DeveloperHiranandani
];

export const DevelopersCarousel = () => {
    return (
        <FlexBox width={"half"}>
            <Swiper
                slidesPerView={"auto"}
                loop={true}
                loopedSlides={3}
                autoplay={{
                    delay: 1,
                    pauseOnMouseEnter: true
                }}
                speed={800}
                modules={[ Autoplay ]}
            >
                {developers.map( ( dev, key ) => {
                    return (
                        <SwiperSlide key={key}>
                            <ImgContainer
                                src={dev}
                                alt="developer-logo"
                                css={{
                                    width: "$14"
                                    // height: "$14"
                                }}
                            />
                        </SwiperSlide>
                    );
                } )}
            </Swiper>
        </FlexBox>
    );
};
