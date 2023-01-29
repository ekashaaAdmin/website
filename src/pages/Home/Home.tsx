import { Box, Container } from "@src/components";
import { CSS } from "@src/styles";
import {
    About,
    Blogs,
    Developers,
    Featured,
    Intro,
    Services,
    Stats,
    Testimonials
} from "./sections";
import { HomeBg } from "@src/assets";

const homeIntroBgCss: CSS = {
    backgroundImage: `url(${HomeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    left: "$0",
    height: "80vh",
    width: "100%",
    position: "absolute"
};

export const Home = () => {
    return (
        <>
            <Box css={homeIntroBgCss}></Box>
            <Intro />
            <About />
            <Services />
            <Featured />
            <Blogs />
            <Developers />
            <Stats />
            <Testimonials />
        </>
    );
};
