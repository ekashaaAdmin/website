import { globalStyles } from "@styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Layout } from "./components";
import { Home } from "./pages";
import { NotFound } from "./pages/NotFound/NotFound";
import "./custom-swiper.css";

globalStyles();
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
