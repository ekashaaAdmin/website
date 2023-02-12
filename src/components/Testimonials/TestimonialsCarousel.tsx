import { useGetTestimonials } from "@src/hooks";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { Section } from "../Section";
import { Text } from "../Text";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsCarousel = () => {
    const { data: testimonials } = useGetTestimonials();

    return (
        <Section direction={"column"} align={"center"} css={{ px: "0" }}>
            <Text
                typography={{ "@initial": "mbHeading1", "@bp3": "dtHeading1" }}
            >
                Testimonials
            </Text>

            <FlexBox
                css={{
                    width: "$full"
                }}
            >
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[ Pagination ]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                </Swiper>
            </FlexBox>
        </Section>
    );
};
