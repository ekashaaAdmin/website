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
        <FlexBox width={"half"}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 100,
                    pauseOnMouseEnter: true
                }}
                modules={[ Autoplay ]}
                breakpoints={{
                    650: {
                        slidesPerView: 2
                    },
                    998: {
                        slidesPerView: 3
                    }
                }}
            >
                {developers.map( ( dev, key ) => {
                    return (
                        <SwiperSlide key={key}>
                            <ImgContainer
                                src={dev}
                                alt="developer-logo"
                                css={{
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
