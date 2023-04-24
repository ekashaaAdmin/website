import { CSS } from "@src/styles";
import { Suspense, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { Dialog, DialogContent, DialogTrigger } from "../Dialog";
import { Flex } from "../Flex";
import { Loader } from "../Loader";
import { Separator } from "../Separator";
import { Text } from "../Text";
import { FilterForm } from "./FilterForm";
import { SearchBar } from "./SearchBar";

const filterContainerCss: CSS = {
    backgroundColor: "White",
    boxShadow: "$inputFieldShadow",
    borderRadius: "20rem",
    maxWidth: "$tablet",
    mx: "auto",
    overflowY: "auto",
    p: "$2",
    height: "$9",
    width: "$full",
    transform: "translateY(-7.5rem)"
};

export const FilterContainer = () => {
    const [ open, setOpen ] = useState<boolean>( false );

    return (
        <Flex align="center" css={filterContainerCss}>
            <SearchBar />

            <Separator orientation="vertical" css={{ mx: "$2" }} />

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Flex align="center" css={{ cursor: "pointer" }}>
                        <BiFilterAlt size={"1.5rem"} />
                        <Text
                            typography={"dtPara1"}
                            css={{
                                display: "none",
                                "@bp2": { display: "unset" }
                            }}
                        >
                            Filters
                        </Text>
                    </Flex>
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
