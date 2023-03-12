import {
    Birla_Niyara_banner,
    Marina_Bay_1,
    Marina_Bay_2,
    Racecourse,
    RustomjeeBanner
} from "@src/assets";
import { BackgroundCarousel } from "@src/components/BackgroundCarousel";
import { Contact } from "@src/components/Contact";
import { AboutServices, Intro, Management } from "./sections";

const bgImages: string[] = [
    Marina_Bay_2,
    Marina_Bay_1,
    Racecourse,
    RustomjeeBanner,
    Birla_Niyara_banner
];

export const About = () => {
    return (
        <>
            <BackgroundCarousel height={"40vh"} imgSrc={bgImages} />
            <Intro />
            <AboutServices />
            <Management />
            {/* <Stats /> */}
            <Contact />
        </>
    );
};
