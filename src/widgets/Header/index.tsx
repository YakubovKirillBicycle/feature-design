import { memo } from "react";

import Logo from "entities/Logo";
import WidthWrapContainer from "entities/WidthWrapContainer";
import Login from "features/Login";
import Register from "features/Register";

import { headerStyle } from "./ui/style";

const Header = () => {
  return ( 
    <header className={headerStyle}>
      <WidthWrapContainer>
        <div className="flex justify-between">
          <Logo />
          <div>
            <Login />
            <Register />
          </div>
        </div>
      </WidthWrapContainer>
    </header>
   );
}
 
export default memo(Header);