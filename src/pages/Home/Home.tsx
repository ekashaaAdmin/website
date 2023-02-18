import { HomeBg } from "@src/assets";
import { Box, Loader } from "@src/components";
import { Contact } from "@src/components/Contact";
import { CSS } from "@src/styles";
import { Suspense } from "react";
import {
    About,
    Blogs,
    Developers,
    Featured,
    HomeAbout,
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
            <HomeAbout />
            <Services />
            <Featured />
            <Testimonials />
            <Developers />
            <Stats />
            <Suspense fallback={<Loader />}>
                <Blogs />
            </Suspense>
            <Contact />
        </>
    );
};
