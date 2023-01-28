import { Box, DevelopersCarousel, Section, Text } from "@components";

export const Developers = () => {
    return (
        <Section center direction="column">
            <Box>
                <Text>Our Proud</Text>
                <br />
                <Text>Developers</Text>
            </Box>
            <DevelopersCarousel />
        </Section>
    );
};
