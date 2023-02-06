import { HomeBg } from "@src/assets";
import { Box } from "@src/components";
import { Contact } from "@src/components/Contact";
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
            <Contact />
        </>
    );
};
