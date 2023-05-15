import { Blog2 } from "@src/assets";
import { useGetBlogs } from "@src/hooks";
import { Box, FlexBox, ImgContainer, Text } from "@src/components";
import { CSS } from "@src/styles";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@src/components/Link";

const blogCarouselCss: CSS = {
    margin: "$0 auto",
    width: "$full",
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
    maxWidth: "260px",
    width: "fit-content"
};

interface BlogCarouselProps {
    unwantedBlogSlug?: string;
}

export const BlogCarousel = ( { unwantedBlogSlug }: BlogCarouselProps ) => {
    const { data: blogCarouselData } = useGetBlogs( unwantedBlogSlug );

    return blogCarouselData ? (
        <Box css={blogCarouselCss}>
            <Text typography={"dtHeading3"} css={{ py: "$4" }}>
                More Blogs
            </Text>

            <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[ Navigation, Pagination, Scrollbar, A11y ]}
                watchOverflow={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                {blogCarouselData?.map( ( blog ) => (
                    <SwiperSlide key={blog._id}>
                        <FlexBox
                            css={blogCardCss}
                            direction={"column"}
                            gap={"1"}
                        >
                            <Link to={`/blog/${blog.slug}`}>
                                <ImgContainer
                                    fullHeight
                                    css={{ flex: 1 }}
                                    src={blog.mainImage.url}
                                    alt={"blogimage"}
                                />
                                <Text typography={"dtHeading3"}>
                                    {`${blog.title.substring( 0, 40 )}...`}
                                </Text>
                                <Text typography={"dtPara3"}>
                                    {`${blog.subTitle.substring( 0, 100 )}...`}
                                </Text>
                            </Link>
                        </FlexBox>
                    </SwiperSlide>
                ) )}
            </Swiper>
        </Box>
    ) : null;
};
