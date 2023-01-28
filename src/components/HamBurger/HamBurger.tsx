import { CSS, css } from "@src/styles";
import { Dispatch, SetStateAction } from "react";
import { Flex } from "../Flex";
import { SolidLine } from "./SolidLine";

export const hamBurgerCss: CSS = {
    cursor: "pointer",
    padding: "$1",
    size: "$5",
    "@bp2": {
        display: "none"
    }
};

interface HamBurgerProps {
    navStatus: boolean;
    setNavStatus: Dispatch<SetStateAction<boolean>>;
}

export const HamBurger = ( { navStatus, setNavStatus }: HamBurgerProps ) => {
    const handleClick = () => {
        setNavStatus( !navStatus );
    };

    return (
        <Flex
            onClick={handleClick}
            direction={"column"}
            css={hamBurgerCss}
            className={navStatus ? `active` : ""}
        >
            <SolidLine variant={"rotateClockwise"} />
            <SolidLine variant={"disappear"} />
            <SolidLine variant={"rotateAntiClockwise"} />
        </Flex>
    );
};
