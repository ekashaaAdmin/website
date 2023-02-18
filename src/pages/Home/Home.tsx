import { BackgroundCarousel } from "@src/components/BackgroundCarousel";
import { Contact } from "@src/components/Contact";
import {
    Blogs,
    Developers,
    Featured,
    HomeAbout,
    Intro,
    Services,
    Stats,
    Testimonials
} from "./sections";

export const Home = () => {
    return (
        <>
            <BackgroundCarousel
                height={"75vh"}
                imgSrc={[
                    "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "https://images.pexels.com/photos/2555635/pexels-photo-2555635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                ]}
            />
            <Intro />
            <HomeAbout />
            <Services />
            <Featured />
            <Testimonials />
            <Developers />
            <Stats />
            <Blogs />
            <Contact />
        </>
    );
};
