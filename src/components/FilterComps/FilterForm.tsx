import { Separator } from "@radix-ui/react-separator";
import { CSS } from "@src/styles";
import { CheckBoxRoot } from "../CheckBox";
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

const configurations: number[] = [ 2, 3, 4, 5, 6, 7, 8, 9 ];

export const FilterForm = () => {
    return (
        <Flex direction="column" css={filterDialogCss}>
            <DialogTitle>Filters</DialogTitle>
            <Flex direction="column" gap="1">
                <Flex direction="column">
                    <Input placeholder="Search your dream property" />
                </Flex>
                <Separator />
                <Text typography={"dtHeading3"}>Configuration</Text>
                <Flex gap="1" css={{ flexWrap: "wrap" }}>
                    {configurations.map( ( config, key ) => (
                        <CheckBoxRoot
                            key={key}
                            name="configuration"
                            value={config}
                            onCheckedChange={( v ) => {}}
                        >
                            <Text>{config === 9 ? `9+` : config}</Text>
                        </CheckBoxRoot>
                    ) )}
                </Flex>
            </Flex>
        </Flex>
    );
};
