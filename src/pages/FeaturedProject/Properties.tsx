import { Grid, PropertyCard, Section } from "@src/components";
import { useGetProperties } from "@src/hooks";

export const Properties = () => {
    const { data: properties } = useGetProperties();

    return (
        <Section direction={"column"}>
            <Grid columns={"auto"} align={"center"} justify={"center"}>
                {properties?.map( ( property ) => (
                    <PropertyCard key={property._id} propertyData={property} />
                ) )}
            </Grid>
        </Section>
    );
};
