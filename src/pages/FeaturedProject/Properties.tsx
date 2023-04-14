import { FilterContainer, Grid, PropertyCard, Section } from "@src/components";
import { useGetProperties } from "@src/hooks";
import { useState } from "react";
import { Intro } from "./sections";

export const Properties = () => {
    const [ filterProps, setFilterProps ] = useState( {
        address: "",
        configuration: 2,
        maxPrice: 50,
        minPrice: 2
    } );

    const { data: properties } = useGetProperties( {
        ...filterProps
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
