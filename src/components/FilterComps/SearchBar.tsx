import { useFilterStore } from "@src/store";
import { styled } from "@src/styles";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Flex } from "../Flex";
import { Input } from "../Input";

const StyledBiSearch = styled( BiSearch, {
    cursor: "pointer",
    position: "absolute",
    right: "$1",
    zIndex: "$2"
} );

export const SearchBar = () => {
    const { setLocation } = useFilterStore( ( state ) => state );
    const [ locationInput, setLocationInput ] = useState( "" );

    const handleClick = () => {
        setLocation( [ locationInput ] );
    };

    useEffect( () => {
        const onEnter = ( e: KeyboardEvent ) => {
            if ( e.key === "Enter" ) {
                handleClick();
            }
        };
        document.addEventListener( "keydown", onEnter );

        return () => {
            document.removeEventListener( "keydown", onEnter );
        };
    } );

    return (
        <Flex align="center" css={{ position: "relative", width: "$full" }}>
            <Input
                variant={"filterSearchbar"}
                placeholder="Search by location"
                value={locationInput}
                onChange={( { target: { value } } ) => setLocationInput( value )}
            />
            <StyledBiSearch size={"1.5rem"} onClick={handleClick} />
        </Flex>
    );
};
