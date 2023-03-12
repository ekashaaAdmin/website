import { useQuery } from "@tanstack/react-query";
import client from "@src/utils/client";
import { Testimonial } from "@src/utils";

const getTestimonialsFn = async () => {
    const query = `*[_type == 'testimonial'] {
        _id, 
        name,
        property,
        'profilePicture': profilePicture.asset -> {url},
        testimonialContent
    }`;

    const response = await client.fetch( query );
    return response;
};

export const useGetTestimonials = () => {
    return useQuery<Testimonial[]>( [ "testimonials" ], () => getTestimonialsFn() );
};
