import { Testimonial } from "@src/utils";
import client from "@src/utils/client";
import { useQuery } from "@tanstack/react-query";

const getTestimonialsFn = async () => {
    const query = `*[_type == 'testimonial'] {
        _id, 
        name,
        'profilePicture': profilePicture.asset -> {url},
        testimonialContent
    }`;

    const response = await client.fetch( query );

    return response;
};

export const useGetTestimonials = () => {
    return useQuery<Testimonial[]>( [], () => getTestimonialsFn() );
};
