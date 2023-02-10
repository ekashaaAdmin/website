import { FlexBox, Section, Text } from "@src/components";
import { CSS } from "@src/styles";
import React from "react";

const introSectionCss: CSS = {
    position: "relative"
};

export const Intro = () => {
    return (
        <>
            <Section justify={"center"} css={introSectionCss}>
                <FlexBox
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                >
                    <Text
                        typography={{
                            "@initial": "mbHeading1",
                            "@bp3": "dtPageHead"
                        }}
                    >
                        ekashaa Blogs
                    </Text>
                    <Text
                        typography={{
                            "@initial": "mbSubHeading1",
                            "@bp3": "dtSubHeading1"
                        }}
                    >
                        TOP GOSSIPS ONLY FOR YOU
                    </Text>
                </FlexBox>
            </Section>
        </>
    );
};
