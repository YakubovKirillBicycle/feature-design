import React, { lazy } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

const HomePage = lazy(() => import("pages/HomePage"));
const PageNotFound = lazy(() => import("pages/404"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};
