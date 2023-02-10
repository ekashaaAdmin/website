import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { PropertyCard } from "../PropertyCard";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill
} from "react-icons/bs";
import { useRef } from "react";
import { Box } from "../Box";

export const FeaturedCarousel = () => {
    const navigationPrevRef = useRef( null );
    const navigationNextRef = useRef( null );

    return (
        <FlexBox width={"full"} css={{ position: "relative" }}>
            <FlexBox
                css={{ position: "relative", maxWidth: "$laptopM", m: "auto" }}
            >
                <Swiper
                    spaceBetween={-6}
                    pagination={{ dynamicBullets: true, clickable: true }}
                    navigation={{
                        enabled: true,
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    }}
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

            <FlexBox
                width="full"
                justify="spaceBetween"
                css={{
                    position: "absolute",
                    top: "47%",
                    bottom: "47%"
                }}
            >
                <Box
                    size={"4"}
                    ref={navigationPrevRef}
                    css={{ zIndex: "$3", cursor: "pointer" }}
                >
                    <BsFillArrowLeftCircleFill size={"100%"} />
                </Box>
                <Box
                    size={"4"}
                    ref={navigationNextRef}
                    css={{ zIndex: "$3", cursor: "pointer" }}
                >
                    <BsFillArrowRightCircleFill size={"100%"} />
                </Box>
            </FlexBox>
        </FlexBox>
    );
};
