import { useGetTestimonials } from "@src/hooks";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { Section } from "../Section";
import { Text } from "../Text";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsCarousel = () => {
    const { data: testimonialData } = useGetTestimonials();

    return (
        <Section
            direction={"column"}
            align={"center"}
            css={{
                px: "0",
                "@bp3": { maxWidth: "$laptopL" }
            }}
        >
            <Text
                typography={{
                    "@initial": "mbHeading1",
                    "@bp3": "dtHeading1"
                }}
            >
                Testimonials
            </Text>

            <FlexBox
                css={{
                    maxWidth: "$full",
                    "@bp3": {
                        maxWidth: "$laptopS"
                    }
                }}
            >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true
                    }}
                    modules={[ Pagination ]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {testimonialData?.map( ( testimonial ) => (
                        <SwiperSlide key={testimonial._id}>
                            <TestimonialCard testimonialData={testimonial} />
                        </SwiperSlide>
                    ) )}
                </Swiper>
            </FlexBox>
        </Section>
    );
};
