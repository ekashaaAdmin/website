import { useFilterStore } from "@src/store";
import { CSS } from "@src/styles";
import { Suspense, useState } from "react";
import { IoIosOptions } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "../Dialog";
import { Flex } from "../Flex";
import { Loader } from "../Loader";
import { FilterForm } from "./FilterForm";
import { SearchBar } from "./SearchBar";

const filterContainerCss: CSS = {
    backgroundColor: "White",
    boxShadow: "$inputFieldShadow",
    borderRadius: "20rem",
    maxWidth: "$tablet",
    maxHeight: "$fullViewPortHeight",
    mx: "auto",
    overflowY: "auto",
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
                    <Suspense fallback={<Loader />}>
                        <FilterForm setOpen={setOpen} />
                    </Suspense>
                </DialogContent>
            </Dialog>
        </Flex>
    );
};
