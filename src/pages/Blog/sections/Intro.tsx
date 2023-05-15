import { FlexBox, ImgContainer } from "@src/components";
import { CSS } from "@src/styles";
import { Ekashaa_Blogs } from "@src/assets";

const introSectionCss: CSS = {
    position: "relative"
};

export const Intro = () => {
    return (
        <FlexBox
            direction={"column"}
            align={"center"}
            justify={"center"}
            css={{ maxWidth: "$mobileM", mx: "auto", my: "$9" }}
        >
            <ImgContainer src={Ekashaa_Blogs} alt="Ekashaa Blogs Title" />
        </FlexBox>
    );
};
