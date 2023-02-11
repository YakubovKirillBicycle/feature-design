import { memo } from "react";

import WidthWrapContainer from "entities/WidthWrapContainer";

import { headerStyle } from "./ui/style";

const Header = () => {
  return ( 
    <header className={headerStyle}>
      <WidthWrapContainer>
        <span>Header</span>
        <span>Second header</span>
      </WidthWrapContainer>
    </header>
   );
}
 
export default memo(Header);