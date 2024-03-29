import {
    Button,
    Contact,
    FilterContainer,
    Flex,
    Grid,
    PropertyCard,
    Section,
    Text
} from "@src/components";
import { useGetProperties } from "@src/hooks";
import { useFilterStore } from "@src/store";
import { Intro } from "./sections";

export const Properties = () => {
    const {
        location,
        developers,
        maxPrice,
        minPrice,
        configuration,
        resetStore
    } = useFilterStore( ( state ) => state );

    const { data: properties } = useGetProperties( {
        address: location,
        configuration: configuration,
        developer: developers,
        maxPrice: maxPrice,
        minPrice: minPrice
    } );

    return (
        <>
            <Section direction={"column"}>
                <Intro />
                <FilterContainer />
                <Grid
                    columns={
                        properties && properties?.length > 0
                            ? "propertiesGrid"
                            : 1
                    }
                    align={"center"}
                    justify={"center"}
                >
                    {properties && properties?.length > 0 ? (
                        properties?.map( ( property ) => (
                            <PropertyCard
                                key={property._id}
                                propertyData={property}
                            />
                        ) )
                    ) : (
                        <Flex direction="column" gap="3" align="center">
                            <Text
                                typography={{
                                    "@initial": "dtHeading3",
                                    "@bp2": "dtHeading2"
                                }}
                                align="center"
                            >
                                No properties available for provided filter
                                parameters.
                            </Text>
                            <Button
                                variant={"generalButton"}
                                css={{ maxWidth: "$mobileS" }}
                                onClick={() => resetStore()}
                            >
                                Reset Filters
                            </Button>
                        </Flex>
                    )}
                </Grid>
            </Section>
            <Contact />
        </>
    );
};
