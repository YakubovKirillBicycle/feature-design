import { memo } from "react";

import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { footerStyle } from "./ui/style";

const Footer = () => {
  return ( 
    <footer className={footerStyle}>
      <WidthWrapContainer>
        <span>Footer</span>
      </WidthWrapContainer>
    </footer>
   );
}
 
export default memo(Footer);