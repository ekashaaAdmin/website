import { useHomePageHook } from "@src/hooks";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexBox } from "../FlexBox";
import { Section } from "../Section";
import { Text } from "../Text";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsCarousel = () => {
    const { data } = useHomePageHook();
    const testimonialData = data?.response;

    return testimonialData ? (
        <Section
            direction={"column"}
            align={"center"}
            css={{
                px: "0",
                "@bp3": { maxWidth: "$laptopS" }
            }}
        >
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
                    spaceBetween={20}
                    pagination={{
                        clickable: true
                    }}
                    modules={[ Pagination ]}
                    breakpoints={
                        ( 2 >= testimonialData?.length ?? {
                            640: {
                                slidesPerView: 2
                            }
                        },
                        3 >= testimonialData?.length ?? {
                            1024: {
                                slidesPerView: 3
                            }
                        } ) as any
                    }
                >
                    {testimonialData?.map( ( testimonial ) => (
                        <SwiperSlide key={testimonial._id}>
                            <TestimonialCard testimonialData={testimonial} />
                        </SwiperSlide>
                    ) )}
                </Swiper>
            </FlexBox>
        </Section>
    ) : null;
};
