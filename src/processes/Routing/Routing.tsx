import { lazy } from "react";
import { Routes, Navigate } from "react-router";
import { Route } from "react-router-dom";

const TestPage = lazy(() => import("pages/testPage"));
const PageNotFound = lazy(() => import("pages/404"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/404" element={<PageNotFound />} />
            <Navigate to="/404" />
        </Routes>
    );
};