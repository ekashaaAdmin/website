import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Loader } from "../Loader";
import { Navbar } from "../Navbar";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};
