import { Testimonial, Property } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

interface HomePageHook {
    response: Testimonial[];
    response2: Partial<Property>[];
}

const homePageFn = async () => {
    const query = `*[_type == 'testimonial'] {
        _id, 
        name,
        'propertyTestimonial': propertyTestimonial -> {name},
        'profilePicture': profilePicture.asset -> {url},
        testimonialContent
    }`;
    const query2 = `*[_type == 'property' && featuredProject == true] {
        _id,
        'imageUrls': imageUrls[].asset -> {url},
        configuration,
        location,
        name,
        priceInfo,
        reraVerifiedss
    }`;

    const response = await client.fetch( query );
    const response2 = await client.fetch( query2 );

    return { response, response2 };
};

export const useHomePageHook = () => {
    return useQuery<HomePageHook>( [], () => homePageFn() );
};
