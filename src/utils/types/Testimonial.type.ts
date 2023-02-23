export interface Testimonial {
    _id: string;
    name: string;
    propertyTestimonial: {
        name: string;
    };
    profilePicture: {
        url: string;
    };

    testimonialContent: string;
}
