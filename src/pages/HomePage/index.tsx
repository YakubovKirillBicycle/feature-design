import React, { lazy, memo } from "react";

const Content = lazy(() => import("widgets/Content"));

const HomePage = () => {
  return (
      <Content />
  );
}
 
export default memo(HomePage);