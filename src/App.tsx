import { globalStyles } from "@styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Layout } from "./components";
import { About, Home, NotFound, Services } from "./pages";
import "./custom-swiper.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

globalStyles();
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                theme={"dark"}
            />
        </div>
    );
}

export default App;
