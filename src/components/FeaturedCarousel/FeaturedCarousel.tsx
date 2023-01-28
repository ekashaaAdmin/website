import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { PropertyCard } from "../PropertyCard";

export const FeaturedCarousel = () => {
    return (
        <FlexBox width={"full"}>
            <Swiper
                pagination={{ dynamicBullets: true }}
                modules={[ Pagination ]}
                loop={true}
                breakpoints={{
                    1440: {
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
