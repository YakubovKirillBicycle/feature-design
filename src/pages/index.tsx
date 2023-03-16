import React, { Suspense, lazy } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

import {
    AppWrapper,
    Loader,
    WidthWrapContainer,
    GlobalConstant
} from "shared";
import Footer from "widgets/Footer";
import { Header } from "widgets/Header";

import { contentStyle, contentWrapStyle } from "./ui/style";

const HomePage = lazy(() => import("pages/HomePage"));
const PageNotFound = lazy(() => import("pages/404"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const AdminPage = lazy(() => import('pages/AdminPage'));
const UsersAdminPanel = lazy(() => import('pages/AdminPage/UsersAdminPanel'));

export const Routing = () => {
    return (
        <AppWrapper>
            <Header />
            <div className={contentWrapStyle}>
                <WidthWrapContainer>
                    <div className={contentStyle}>
                        <Suspense fallback={<Loader />}>
                            <Routes>
                                <Route path={GlobalConstant.APP_NAVIGATOR.HOME} element={<HomePage />} />
                                <Route path={GlobalConstant.APP_NAVIGATOR.LOGIN} element={<LoginPage />} />
                                <Route path={GlobalConstant.APP_NAVIGATOR.ADMIN.HOME} element={<AdminPage />} />
                                <Route path={GlobalConstant.APP_NAVIGATOR.ADMIN.USERS} element={<UsersAdminPanel />} />
                                <Route path={GlobalConstant.APP_NAVIGATOR.ANY_PAGE} element={<PageNotFound />} />
                            </Routes>
                        </Suspense>
                    </div>
                </WidthWrapContainer>
            </div>
            <Footer />
        </AppWrapper>
    );
};
