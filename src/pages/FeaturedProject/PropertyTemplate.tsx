import { useGetProperty } from "@src/hooks";
import { useParams } from "react-router-dom";
import { CardDetails, MorePropertyInfo } from "./sections";

export const PropertyTemplate = () => {
    const { propertyId } = useParams();
    const { data: propertyData } = useGetProperty( propertyId ?? "" );

    return (
        <>
            <CardDetails overviewData={propertyData!} />
            <MorePropertyInfo propertyData={propertyData!} />
        </>
    );
};
