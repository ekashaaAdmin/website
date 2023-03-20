import { FlexBox, ImgContainer } from "@src/components";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface PropertyPageCarouselProps {
    imageUrls:
        | [
              {
                  url: string;
              }
          ]
        | undefined;
}

export const PropertyPageCarousel = ( {
    imageUrls
}: PropertyPageCarouselProps ) => {
    return (
        <FlexBox
            css={{ flex: 1 }}
            width={{ "@initial": "full", "@bp2": "half" }}
        >
            <Swiper
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                pagination={{ clickable: true }}
                loop
                modules={[ Navigation, Pagination, Scrollbar, A11y ]}
                scrollbar={{ draggable: true }}
            >
                {imageUrls?.map( ( img, key ) => (
                    <SwiperSlide key={key}>
                        <ImgContainer
                            src={img.url}
                            alt="property-image"
                            fullHeight
                            size={"full"}
                            css={{
                                objectFit: "cover",
                                maxHeight: "$mobileL"
                            }}
                        />
                    </SwiperSlide>
                ) )}
            </Swiper>
        </FlexBox>
    );
};
