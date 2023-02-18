import { HomeBg } from "@src/assets";
import { Box } from "@src/components";
import { BackgroundCarousel } from "@src/components/BackgroundCarousel";
import { Contact } from "@src/components/Contact";
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

const bgImages: string[] = [
    "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2555635/pexels-photo-2555635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

export const Services = () => {
    return (
        <>
            <BackgroundCarousel height={"40vh"} imgSrc={bgImages} />
            <Intro />
            <ServicesCarousel2 />
            <Contact />
        </>
    );
};
