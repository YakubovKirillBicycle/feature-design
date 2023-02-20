import React, { lazy, memo } from "react";

import { Header } from "widgets/Header";

import { mainWrapStyle } from "./style";

const Footer = lazy(() => import("widgets/Footer"));
const Content = lazy(() => import("widgets/Content"));

const HomePage = () => {
  return (
    <div className={mainWrapStyle}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
 
export default memo(HomePage);