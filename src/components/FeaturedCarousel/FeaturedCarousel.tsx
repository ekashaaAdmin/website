import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { PropertyCard } from "../PropertyCard";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill
} from "react-icons/bs";
import { Link } from "react-router-dom";

export const FeaturedCarousel = () => {
    return (
        <FlexBox width={"full"}>
            <Swiper
                spaceBetween={-6}
                pagination={{ dynamicBullets: true }}
                navigation={true}
                modules={[ Pagination, Navigation ]}
                loop={true}
                breakpoints={{
                    1200: {
                        slidesPerView: 2
                    }
                }}
            >
                {[ 1, 2, 3, 4, 5, 6 ].map( ( card, i ) => {
                    return (
                        <SwiperSlide key={i}>
                            <PropertyCard />
                        </SwiperSlide>
                    );
                } )}
            </Swiper>
        </FlexBox>
    );
};
