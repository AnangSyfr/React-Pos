import { Routes, Route } from "react-router-dom";
import DetailMenu from "./pages/DetailMenu";
import Home from "./pages/Home";

const BaseRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail-menu/:id" element={<DetailMenu />} />
        </Routes>
    );
};

export default BaseRoutes;
