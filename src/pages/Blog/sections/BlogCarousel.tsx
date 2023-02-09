import { Blog2 } from "@src/assets";
import { Box, FlexBox, ImgContainer, Text } from "@src/components";
import { CSS } from "@src/styles";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import { SwiperSlide, Swiper } from "swiper/react";

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
    return (
        <Box css={blogCarouselCss}>
            <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[ Navigation, Pagination, Scrollbar, A11y ]}
                spaceBetween={1}
                slidesPerView={3}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2
                //     },
                //     1024: {
                //         slidesPerView: 3
                //     }
                // }}
            >
                <SwiperSlide>
                    <FlexBox css={blogCardCss} direction={"column"} gap={"1"}>
                        <ImgContainer
                            css={{ flex: 1 }}
                            src={Blog2}
                            alt={"blogimage"}
                        />
                        <Text typography={"dtPara1"}>
                            Properties you can't miss-out!
                        </Text>
                        <Text typography={"dtPara3"}>
                            Lorem Ipsum is simply dummy text of the printing
                            industry.
                        </Text>
                    </FlexBox>
                </SwiperSlide>

                <SwiperSlide>
                    <FlexBox css={blogCardCss} direction={"column"} gap={"1"}>
                        <ImgContainer
                            css={{ flex: 1 }}
                            src={Blog2}
                            alt={"blogimage"}
                        />
                        <Text typography={"dtPara1"}>
                            Properties you can't miss-out!
                        </Text>
                        <Text typography={"dtPara3"}>
                            Lorem Ipsum is simply dummy text of the printing
                            industry.
                        </Text>
                    </FlexBox>
                </SwiperSlide>

                <SwiperSlide>
                    <FlexBox css={blogCardCss} direction={"column"} gap={"1"}>
                        <ImgContainer
                            css={{ flex: 1 }}
                            src={Blog2}
                            alt={"blogimage"}
                        />
                        <Text typography={"dtPara1"}>
                            Properties you can't miss-out!
                        </Text>
                        <Text typography={"dtPara3"}>
                            Lorem Ipsum is simply dummy text of the printing
                            industry.
                        </Text>
                    </FlexBox>
                </SwiperSlide>

                <SwiperSlide>
                    <FlexBox css={blogCardCss} direction={"column"} gap={"1"}>
                        <ImgContainer
                            css={{ flex: 1 }}
                            src={Blog2}
                            alt={"blogimage"}
                        />
                        <Text typography={"dtPara1"}>
                            Properties you can't miss-out!
                        </Text>
                        <Text typography={"dtPara3"}>
                            Lorem Ipsum is simply dummy text of the printing
                            industry.
                        </Text>
                    </FlexBox>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};
