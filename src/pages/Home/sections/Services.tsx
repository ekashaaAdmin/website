import { Section, ServicesCarousel, Text } from "@components";

export const Services = () => {
    return (
        <Section direction={"column"} align={"center"}>
            <Text>
                Ekaasha <Text>Exclusive</Text>
            </Text>
            <Text>SERVICES</Text>
            <ServicesCarousel />
        </Section>
    );
};
