import { FeaturedCarousel, Section, Text } from "@components";

export const Featured = () => {
    return (
        <Section
            direction="column"
            center
            css={{ px: "$0", maxWidth: "$laptopL" }}
        >
            <Text
                align={"center"}
                typography={{ "@initial": "mbHeading1", "@bp3": "dtHeading2" }}
            >
                Featured Projects
            </Text>
            <FeaturedCarousel />
        </Section>
    );
};
