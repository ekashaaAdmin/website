import { useFilterStore } from "@src/store";
import { CSS } from "@src/styles";
import { useState } from "react";
import { IoIosOptions } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "../Dialog";
import { Flex } from "../Flex";
import { FilterForm } from "./FilterForm";
import { SearchBar } from "./SearchBar";

const filterContainerCss: CSS = {
    backgroundColor: "White",
    boxShadow: "$inputFieldShadow",
    borderRadius: "20rem",
    maxWidth: "$tablet",
    mx: "auto",
    p: "$2",
    width: "$full",
    transform: "translateY(-7.5rem)"
};

export const FilterContainer = () => {
    const [ open, setOpen ] = useState<boolean>( false );

    return (
        <Flex align="center" css={filterContainerCss}>
            <SearchBar />
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <IoIosOptions />
                </DialogTrigger>
                <DialogContent>
                    <FilterForm setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </Flex>
    );
};
