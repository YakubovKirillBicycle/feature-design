import { lazy } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

const TestPage = lazy(() => import("pages/testPage"));
const PageNotFound = lazy(() => import("pages/404"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};