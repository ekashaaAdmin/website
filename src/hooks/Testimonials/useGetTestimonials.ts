import { Testimonial } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

const getTestimonialsFn = async () => {
    const query = `*[_type == 'testimonial'] {
        _id, 
        name,
        'propertyTestimonial': propertyTestimonial -> {name},
        'profilePicture': profilePicture.asset -> {url},
        testimonialContent
    }`;

    const response = await client.fetch( query );
    console.log( response );
    return response;
};

export const useGetTestimonials = () => {
    console.log( "here" );

    return useQuery<Testimonial[]>( [], () => getTestimonialsFn() );
};
