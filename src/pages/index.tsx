import React, { Suspense, lazy } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

import { APP_NAVIGATOR } from "shared/model/constants";
import AppWrapper from "shared/ui/AppWrapper";
import Loader from "shared/ui/Loader";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";
import Footer from "widgets/Footer";
import { Header } from "widgets/Header";

import { contentStyle, contentWrapStyle } from "./ui/style";

const HomePage = lazy(() => import("pages/HomePage"));
const PageNotFound = lazy(() => import("pages/404"));
const LoginPage = lazy(() => import("pages/LoginPage"));

export const Routing = () => {
    return (
        <AppWrapper>
            <Header />
            <div className={contentWrapStyle}>
                <WidthWrapContainer>
                    <div className={contentStyle}>
                        <Suspense fallback={<Loader />}>
                            <Routes>
                                <Route path={APP_NAVIGATOR.HOME} element={<HomePage />} />
                                <Route path={APP_NAVIGATOR.LOGIN} element={<LoginPage />} />
                                <Route path={APP_NAVIGATOR.ANY_PAGE} element={<PageNotFound />} />
                            </Routes>
                        </Suspense>
                    </div>
                </WidthWrapContainer>
            </div>
            <Footer />
        </AppWrapper>
    );
};
