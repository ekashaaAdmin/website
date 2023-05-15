import { styled } from "@src/styles";
import { Blog } from "@src/utils";
import { Flex, ImgContainer, Text } from "../index";

const BlogCardContainer = styled( Flex, {
    flexDirection: "column",
    width: "15rem"
} );

export const BlogCard = ( {
    mainImage,
    title,
    subTitle,
    authorName
}: Pick<Blog, "mainImage" | "title" | "subTitle" | "authorName"> ) => {
    return (
        <BlogCardContainer>
            <ImgContainer src={mainImage?.url} alt="Blog Main Image" />
            <Text typography={"dtHeading3"}>{`${title.substring(
                0,
                30
            )}...`}</Text>
            <Text typography={"dtPara2"}>{`${subTitle.substring(
                0,
                40
            )}...`}</Text>
            <Text typography={"dtPara3"}>{`~ ${authorName.name}`}</Text>
        </BlogCardContainer>
    );
};
