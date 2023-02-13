import { Box, DevelopersCarousel, Section, Text } from "@components";

export const Developers = () => {
    return (
        <>
            <Section center direction="column">
                <Box css={{ textAlign: "center" }}>
                    <Text
                        typography={{
                            "@initial": "mbHeading1",
                            "@bp3": "dtHeading1"
                        }}
                    >
                        Our Proud
                    </Text>
                    <br />
                    <Text
                        typography={{
                            "@initial": "mbHeading2",
                            "@bp3": "dtHeading2"
                        }}
                        css={{ fontWeight: "$dtPara1" }}
                    >
                        Developers
                    </Text>
                </Box>
                <DevelopersCarousel />
            </Section>
            <Section variant={"seperatorCss"}></Section>
        </>
    );
};
