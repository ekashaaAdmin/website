import { Blog2 } from "@src/assets";
import { useGetBlogs } from "@src/hooks";
import { Box, FlexBox, ImgContainer, Text } from "@src/components";
import { CSS } from "@src/styles";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

const blogCarouselCss: CSS = {
    margin: "$0 auto",
    "@mobileM": {
        maxWidth: "$mobileS"
    },
    "@bp1": {
        maxWidth: "$tablet"
    },
    "@bp3": {
        maxWidth: "$laptopS"
    },
    padding: "$5 0"
};

const blogCardCss: CSS = {
    maxWidth: "260px"
};

export const BlogCarousel = () => {
    const { data } = useGetBlogs();
    const blogCarouselData = data;

    return (
        <Box css={blogCarouselCss}>
            <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[ Navigation, Pagination, Scrollbar, A11y ]}
                spaceBetween={1}
                slidesPerView={1}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2
                //     },
                //     1024: {
                //         slidesPerView: 3
                //     }
                // }}
            >
                {blogCarouselData?.map( ( key ) => (
                    <SwiperSlide key={key._id}>
                        <FlexBox
                            css={blogCardCss}
                            direction={"column"}
                            gap={"1"}
                        >
                            <ImgContainer
                                fullHeight
                                css={{ flex: 1 }}
                                src={Blog2}
                                alt={"blogimage"}
                            />
                            <Text typography={"dtPara1"}>{key.title}</Text>
                            <Text typography={"dtPara3"}>{key.subTitle}</Text>
                        </FlexBox>
                    </SwiperSlide>
                ) )}
            </Swiper>
        </Box>
    );
};
