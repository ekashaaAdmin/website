import { FilterContainer, Grid, PropertyCard, Section } from "@src/components";
import { useGetProperties } from "@src/hooks";
import { useFilterStore } from "@src/store";
import { useState } from "react";
import { Intro } from "./sections";

export const Properties = () => {
    const { location, developers, maxPrice, minPrice, configuration } =
        useFilterStore( ( state ) => state );

    const { data: properties } = useGetProperties( {
        address: location,
        configuration: configuration,
        developer: developers,
        maxPrice: maxPrice,
        minPrice: minPrice
    } );

    return (
        <Section direction={"column"}>
            <Intro />
            <FilterContainer />
            <Grid
                columns={"propertiesGrid"}
                align={"center"}
                justify={"center"}
            >
                {properties?.map( ( property ) => (
                    <PropertyCard key={property._id} propertyData={property} />
                ) )}
            </Grid>
        </Section>
    );
};
