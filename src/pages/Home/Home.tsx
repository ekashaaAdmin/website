import { Box, Container } from "@src/components";
import { CSS } from "@src/styles";
import { About, Intro, Services } from "./sections";
import { HomeBg } from "@src/assets";
import { Featured } from "./sections/Featured";
import { Testimonials } from "@src/components/Testimonials";

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
        <Container>
            <Box css={homeIntroBgCss}></Box>
            <Intro />
            <About />
            <Services />
            <Featured />
            <Testimonials />
        </Container>
    );
};
