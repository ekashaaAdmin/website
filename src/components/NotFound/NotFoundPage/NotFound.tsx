import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, FlexBox, ImgContainer, Text } from "@src/components";
import searchNotFound from "./searchNotFound.json";
import { Ekashaa_Footer_Logo } from "@assets";

export const NotFound = () => {
    const container = useRef<HTMLDivElement>( null );
    const navigate = useNavigate();

    useEffect( () => {
        lottie.loadAnimation( {
            container: container.current as Element,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: searchNotFound
        } );
    } );

    return (
        <FlexBox
            direction={"column"}
            className="not-found"
            css={{ margin: "$4 auto" }}
        >
            <FlexBox
                gap={"5"}
                direction={"column"}
                align={"center"}
                justify={"center"}
            >
                <ImgContainer
                    src={Ekashaa_Footer_Logo}
                    alt={"Logo"}
                    css={{ flex: 1 }}
                />

                <FlexBox
                    gap={"4"}
                    direction={{ "@initial": "column", "@bp1": "row" }}
                >
                    <Button
                        variant={"generalButton"}
                        onClick={() => {
                            navigate( -1 );
                        }}
                        css={{ width: "max-content" }}
                    >
                        Back
                    </Button>
                    <Button
                        variant={"generalButton"}
                        onClick={() => {
                            navigate( "/" );
                        }}
                        css={{ width: "max-content" }}
                    >
                        Go To Home
                    </Button>
                </FlexBox>

                <FlexBox>
                    <Box
                        css={{
                            margin: "0 auto",
                            "& svg": {
                                display: "none",
                                [ `&:nth-child(1)` ]: {
                                    display: "unset"
                                }
                            }
                        }}
                        size={"full"}
                        className="lottie-container"
                        ref={container}
                    ></Box>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
};
