import React, { lazy, memo } from "react";

import { mainWrapStyle } from "./style";

const Header = lazy(() => import("widgets/Header"));
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