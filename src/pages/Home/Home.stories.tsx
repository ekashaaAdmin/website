import { Box, Container } from "@src/components";
import { CSS } from "@src/styles";
import { Intro } from "./sections";
import { HomeBg } from "@src/assets";

const homeIntroBgCss: CSS = {
    backgroundImage: `url(${HomeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    left: "$0",
    height: "75vh",
    width: "100vw",
    position: "absolute"
};

export const Home = () => {
    return (
        <Container>
            <Intro />;
        </Container>
    );
};
