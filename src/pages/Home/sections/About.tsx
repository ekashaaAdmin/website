import { Button, Flex, LogoSmall, Section, Text } from "@src/components";
import { CSS } from "@src/styles";

const textContentCss: CSS = {
    maxWidth: "$mobileS",
    "@bp1": {
        maxWidth: "$tablet"
    }
};

export const About = () => {
    return (
        <Section id="about" direction={"column"} center gap={"4"}>
            <LogoSmall css={{ minWidth: "$logoMedium" }} />
            <Flex direction={"column"} center gap={"4"} css={textContentCss}>
                <Text typography={{ "@initial": "mbPara1", "@bp3": "dtPara1" }}>
                    <Text
                        typography={{
                            "@initial": "mbHeading2",
                            "@bp3": "dtHeading3"
                        }}
                    >
                        Zero Commission
                    </Text>
                    <br />
                    We are enlisted as channel partners with multiple
                    developers. This service model, which is unique to the
                    premium realty market, ensures that our clients do not pay
                    us anything. Our fees are borne by the developers.
                    <br />
                    <br />
                    <Text
                        typography={{
                            "@initial": "mbHeading2",
                            "@bp3": "dtHeading3"
                        }}
                    >
                        First choice of Inventory & unmatched Price
                    </Text>
                    <br />
                    Ekashaa is the interface between buyers and developers. This
                    puts us in the best position to pass on all the deals,
                    discounts, and concessions introduced by the developers
                    directly to our clients. And it gives you the widest choice
                    of inventory.
                    <br />
                    <br />
                    <Text
                        typography={{
                            "@initial": "mbHeading2",
                            "@bp3": "dtHeading3"
                        }}
                    >
                        Geographical niche
                    </Text>
                    <br />
                    We exclusively partner on projects in the most sought-after
                    pin codes of South Mumbai. Our tight focus lets you benefit
                    from timely insights, superior comparative analyses and best
                    value for your money.
                    <br />
                    <br />
                    <Text
                        typography={{
                            "@initial": "mbHeading2",
                            "@bp3": "dtHeading3"
                        }}
                    >
                        Cream of South Mumbai
                    </Text>
                    <br />
                    We’ve partnered with the biggest and best developers in the
                    luxury segment. This gives you access to the plushest
                    residences in the city, right next to celebrated artists and
                    entrepreneurs.
                    <br />
                    <br />
                    <Text
                        typography={{
                            "@initial": "mbHeading2",
                            "@bp3": "dtHeading3"
                        }}
                    >
                        Specialized Advisory team for NRIs
                    </Text>
                    <br />
                    Ekashaa has a special advisory team of financial and legal
                    experts for NRI investors.
                </Text>
            </Flex>
        </Section>
    );
};
