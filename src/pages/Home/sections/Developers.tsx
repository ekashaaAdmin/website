import { Box, DevelopersGrid, Section, Text } from "@components";

export const Developers = () => {
    return (
        <>
            <Section center direction="column" css={{ margin: "$0 auto" }}>
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
                <DevelopersGrid />
            </Section>
        </>
    );
};
