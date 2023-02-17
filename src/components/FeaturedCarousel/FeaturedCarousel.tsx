import { useHomePageHook } from "@src/hooks";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "../Box";
import { FlexBox } from "../FlexBox";
import { PropertyCard } from "../PropertyCard";

export const FeaturedCarousel = () => {
    const { data } = useHomePageHook();
    const featuredProperties = data?.response2;

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
                    css={{ zIndex: "$3", cursor: "pointer", opacity: "0.4" }}
                >
                    <IoIosArrowBack size={"100%"} />
                </Box>
                <Box
                    size={"4"}
                    className="featured next-btn"
                    css={{ zIndex: "$3", cursor: "pointer", opacity: "0.4" }}
                >
                    <IoIosArrowForward size={"100%"} />
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
                    {featuredProperties?.map( ( property ) => (
                        <SwiperSlide key={property._id}>
                            <PropertyCard propertyData={property} />
                        </SwiperSlide>
                    ) )}
                </Swiper>
            </FlexBox>
        </FlexBox>
    );
};
