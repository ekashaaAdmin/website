import { CSS } from "@src/styles";
import { DialogTitle } from "../Dialog";
import { Flex } from "../Flex";
import { Input } from "../Input";
import { Text } from "../Text";

const filterDialogCss: CSS = {
    maxWidth: "$mobileL",
    width: "$mobileS",
    "@bp1": {
        width: "$mobileL"
    }
};

export const FilterForm = () => {
    return (
        <Flex direction="column" css={filterDialogCss}>
            <DialogTitle>Filters</DialogTitle>
            <Flex>
                <Flex direction="column">
                    <Input placeholder="Search your dream property" />
                </Flex>
            </Flex>
        </Flex>
    );
};
