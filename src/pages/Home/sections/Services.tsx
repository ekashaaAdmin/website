import { Section, ServicesCarousel, Text } from "@components";

export const Services = () => {
    return (
        <Section
            direction={"column"}
            align={"center"}
            css={{
                maxWidth: "$mobileL",
                "@bp1": {
                    maxWidth: "$tablet"
                },
                "@bp3": {
                    maxWidth: "$laptopS"
                }
            }}
        >
            <Text
                typography={{ "@initial": "mbHeading1", "@bp3": "dtHeading1" }}
                css={{ textAlign: "center" }}
            >
                Ekaasha <Text css={{ fontWeight: "$dtPara1" }}>Exclusive</Text>
            </Text>
            <Text
                typography={{
                    "@initial": "mbSubHeading1",
                    "@bp3": "dtSubHeading1"
                }}
            >
                SERVICES
            </Text>
            <ServicesCarousel />
        </Section>
    );
};
