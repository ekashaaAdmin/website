import { useGetFeaturedProperties } from "@src/hooks";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill
} from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "../Box";
import { FlexBox } from "../FlexBox";
import { PropertyCard } from "../PropertyCard";

export const FeaturedCarousel = () => {
    const { data: featuredProperties } = useGetFeaturedProperties();

    console.log( featuredProperties );

    return (
        <FlexBox width={"full"} css={{ position: "relative" }}>
            <FlexBox
                justify="spaceBetween"
                css={{
                    position: "absolute",
                    margin: "auto",
                    left: 0,
                    right: 0,
                    top: "47%",
                    bottom: "47%",
                    width: "90%"
                }}
            >
                <Box
                    size={"4"}
                    className="featured prev-btn"
                    css={{ zIndex: "$3", cursor: "pointer" }}
                >
                    <BsFillArrowLeftCircleFill size={"100%"} />
                </Box>
                <Box
                    size={"4"}
                    className="featured next-btn"
                    css={{ zIndex: "$3", cursor: "pointer" }}
                >
                    <BsFillArrowRightCircleFill size={"100%"} />
                </Box>
            </FlexBox>

            <FlexBox
                css={{
                    position: "relative",
                    maxWidth: "1200px",
                    m: "auto",
                    width: "90%"
                }}
            >
                <Swiper
                    slidesPerView={1}
                    pagination={{ dynamicBullets: true, clickable: true }}
                    navigation={{
                        enabled: true,
                        prevEl: ".featured.prev-btn",
                        nextEl: ".featured.next-btn"
                    }}
                    modules={[ Pagination, Navigation ]}
                    loop={true}
                    breakpoints={{
                        800: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 1
                        },
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
        </FlexBox>
    );
};
