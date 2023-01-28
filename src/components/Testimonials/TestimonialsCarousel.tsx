import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { Section } from "../Section";
import { Text } from "../Text";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsCarousel = () => {
    return (
        <Section direction={"column"} align={"center"}>
            <Text>Testimonials</Text>

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
