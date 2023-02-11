import { memo } from "react";

import Logo from "entities/Logo";
import WidthWrapContainer from "entities/WidthWrapContainer";

import { headerStyle } from "./ui/style";

const Header = () => {
  return ( 
    <header className={headerStyle}>
      <WidthWrapContainer>
        <Logo />
      </WidthWrapContainer>
    </header>
   );
}
 
export default memo(Header);