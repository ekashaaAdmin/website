import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { useLocation, useNavigate } from "react-router-dom";
import buildingPage from "./buildingPage.json";
import { Box, Flex, FlexBox } from "@src/components";

export const BuildingPage = () => {
    const container = useRef<HTMLDivElement>( null );
    const navigate = useNavigate();
    const location = useLocation();

    useEffect( () => {
        lottie.loadAnimation( {
            container: container.current as Element,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: buildingPage
        } );
    } );

    return (
        <div className="loadingAnimation">
            <Box
                css={{ margin: "0 auto" }}
                size={"half"}
                className="lottie-container"
                ref={container}
            ></Box>
        </div>
    );
};
