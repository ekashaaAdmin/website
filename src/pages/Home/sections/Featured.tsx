import { FeaturedCarousel, Loader, Section, Text } from "@components";
import { Suspense } from "react";

export const Featured = () => {
    return (
        <Section
            direction="column"
            center
            css={{ px: "$0", maxWidth: "$laptopL" }}
        >
            <Text
                align={"center"}
                typography={{ "@initial": "mbHeading1", "@bp3": "dtHeading1" }}
            >
                Featured <Text css={{ fontWeight: "$dtPara1" }}> Projects</Text>
            </Text>
            <Suspense fallback={<Loader />}>
                <FeaturedCarousel />
            </Suspense>
        </Section>
    );
};
