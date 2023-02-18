import { HomeBg } from "@src/assets";
import { Box } from "@src/components";
import { CSS } from "@src/styles";
import { Intro, Management } from "./sections";
import { About as AboutUs, Stats } from "../Home/sections";
import { Contact } from "@src/components/Contact";
import { BackgroundCarousel } from "@src/components/BackgroundCarousel";

const homeIntroBgCss: CSS = {
    backgroundImage: `url(${HomeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    left: "$0",
    height: "40vh",
    width: "100%",
    position: "absolute"
};

const bgImages: string[] = [
    "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2555635/pexels-photo-2555635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

export const About = () => {
    return (
        <>
            <BackgroundCarousel height={"40vh"} imgSrc={bgImages} />
            <Intro />
            <AboutUs />
            <Management />
            <Stats />
            <Contact />
        </>
    );
};
