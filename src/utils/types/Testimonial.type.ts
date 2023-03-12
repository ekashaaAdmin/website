export interface Testimonial {
    _id: string;
    name: string;
    property: string;
    profilePicture: {
        url: string;
    };

    testimonialContent: string;
}
