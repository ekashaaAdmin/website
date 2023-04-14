import { styled } from "@src/styles";
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
    return (
        <Flex align="center" css={{ position: "relative", width: "$full" }}>
            <Input
                variant={"filterSearchbar"}
                placeholder="Search by location"
            />
            <StyledBiSearch />
        </Flex>
    );
};
