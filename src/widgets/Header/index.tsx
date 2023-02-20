import { Login } from "features/Login";
import Register from "features/Register";
import Logo from "shared/ui/Logo";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { headerStyle } from "./ui/style";

export const Header = () => {
  return ( 
    <header className={headerStyle}>
      <WidthWrapContainer>
        <div className="flex justify-between">
          <Logo />
          <div className="flex space-x-2">
            <Login />
            <Register />
          </div>
        </div>
      </WidthWrapContainer>
    </header>
   );
}
