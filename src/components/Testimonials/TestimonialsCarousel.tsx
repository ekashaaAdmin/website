import { useGetTestimonials } from "@src/hooks";
import { Suspense } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { Loader } from "../Loader";
import { Section } from "../Section";
import { Text } from "../Text";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsCarousel = () => {
    const { data: testimonialData } = useGetTestimonials();

    return (
        <Suspense fallback={<Loader />}>
            <Section
                direction={"column"}
                align={"center"}
                css={{
                    px: "0",
                    "@bp3": { maxWidth: "$laptopS" }
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
                        "@bp2": {
                            maxWidth: "$tablet"
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
                            768: {
                                slidesPerView: 2
                            }
                        }}
                    >
                        {testimonialData?.map( ( testimonial ) => (
                            <SwiperSlide key={testimonial._id}>
                                <TestimonialCard
                                    testimonialData={testimonial}
                                />
                            </SwiperSlide>
                        ) )}
                    </Swiper>
                </FlexBox>
            </Section>
        </Suspense>
    );
};
