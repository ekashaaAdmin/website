import { HomeBg } from "@src/assets";
import { Box } from "@src/components";
import { CSS } from "@src/styles";
import { Intro } from "./sections";
import { ServicesCarousel2 } from "./sections/ServicesCarousel2";

const homeIntroBgCss: CSS = {
    backgroundImage: `url(${HomeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    left: "$0",
    height: "40vh",
    width: "100%",
    position: "absolute"
};

export const Services = () => {
    return (
        <>
            <Box css={homeIntroBgCss}></Box>
            <Intro />
            <ServicesCarousel2 />
        </>
    );
};
