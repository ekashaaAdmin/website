import {
    Birla_Niyara_banner,
    HomeBg,
    Marina_Bay_1,
    Marina_Bay_2,
    Racecourse,
    RustomjeeBanner
} from "@src/assets";
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
    Marina_Bay_2,
    Marina_Bay_1,
    Racecourse,
    RustomjeeBanner,
    Birla_Niyara_banner
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
