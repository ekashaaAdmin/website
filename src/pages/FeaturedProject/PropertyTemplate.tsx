import { Loader } from "@src/components";
import { useGetProperty } from "@src/hooks";
import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { CardDetails, MorePropertyInfo } from "./sections";

export const PropertyTemplate = () => {
    const { propertyId } = useParams();
    const { data: propertyData } = useGetProperty( propertyId ?? "" );

    return (
        <Suspense fallback={<Loader />}>
            <CardDetails />
            <MorePropertyInfo propertyData={propertyData!} />
        </Suspense>
    );
};
