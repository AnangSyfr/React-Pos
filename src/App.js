import React from "react";
import { Outlet } from "react-router-dom";
import BaseRoutes from "./BaseRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <BaseRoutes />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
