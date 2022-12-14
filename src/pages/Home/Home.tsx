import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import underconstruction from "./underconstruction.json";

export const Home = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current as Element,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: underconstruction,
        });
    });

    return (
        <div className="under-construction">
            <img
                src="/images/logo.PNG"
                alt="Logo"
                className="logo"
                onClick={() => {
                    navigate("/");
                }}
            />
            <div className="lottie-container" ref={container}></div>
            <div className="content">
                <h2>This website is under construction, we will be right back shortly.</h2>
            </div>
        </div>
    );
};