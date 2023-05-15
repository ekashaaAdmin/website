import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FloatingText, Footer, Loader, Navbar } from "../";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Outlet />
                <FloatingText />
            </Suspense>
            <Footer />
        </>
    );
};
