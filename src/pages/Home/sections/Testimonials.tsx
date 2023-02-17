import { Loader, TestimonialsCarousel } from "@components";
import { Suspense } from "react";

export const Testimonials = () => {
    return;
    <Suspense fallback={<Loader />}>
        <TestimonialsCarousel />;
    </Suspense>;
};
