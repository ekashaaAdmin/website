import React from "react";
import { Button } from "../Button";
import { FlexBox } from "../FlexBox";
import { Input } from "../Input";
import { Text } from "../Text";

export const ContactFields = () => {
    return (
        <FlexBox>
            <Input></Input>
            <FlexBox>
                <Text>Radio Button</Text>
            </FlexBox>
            <Button variant={"submitButton"}>Submit</Button>
        </FlexBox>
    );
};
