import {
    Birla_Niyara_banner,
    HomeBg,
    Marina_Bay_1,
    Marina_Bay_2,
    Racecourse,
    RustomjeeBanner
} from "@src/assets";
import { Box, Loader } from "@src/components";
import { Contact } from "@src/components/Contact";
import { CSS } from "@src/styles";
import { Suspense } from "react";
import { BackgroundCarousel } from "@src/components/BackgroundCarousel";

import {
    Blogs,
    Developers,
    Featured,
    HomeAbout,
    Intro,
    Services,
    Stats,
    Testimonials
} from "./sections";

const bgImages: string[] = [
    Marina_Bay_2,
    Marina_Bay_1,
    Racecourse,
    RustomjeeBanner,
    Birla_Niyara_banner
];

export const Home = () => {
    return (
        <>
            <BackgroundCarousel height={"75vh"} imgSrc={bgImages} />
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
