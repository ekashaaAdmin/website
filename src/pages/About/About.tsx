import { HomeBg } from "@src/assets";
import { Box } from "@src/components";
import { CSS } from "@src/styles";
import { Intro, Management } from "./sections";
import { About as AboutUs, Stats } from "../Home/sections";
import { Contact } from "@src/components/Contact";

const homeIntroBgCss: CSS = {
    backgroundImage: `url(${HomeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    left: "$0",
    height: "40vh",
    width: "100%",
    position: "absolute"
};

export const About = () => {
    return (
        <>
            <Box css={homeIntroBgCss}></Box>
            <Intro />
            <AboutUs />
            <Management />
            <Stats />
            <Contact />
        </>
    );
};
