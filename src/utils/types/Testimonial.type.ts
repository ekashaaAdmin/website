export interface Testimonial {
    _id: string;
    name: string;
    profilePicture: {
        url: string;
    };
    testimonialContent: string;
}
