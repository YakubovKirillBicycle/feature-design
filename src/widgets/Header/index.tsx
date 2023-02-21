import { useState } from "react";

import { Login } from "features";
import Register from "features/Register";
import Logo from "shared/ui/Logo";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { headerStyle } from "./ui/style";
import { UserInterface } from "./ui/UserInterface";


export const Header = () => {
  const [isUser, setIsUser] = useState(true);

  return ( 
    <header className={headerStyle}>
      <WidthWrapContainer>
        <div className="flex justify-between">
          <Logo />
          {
            isUser ?
              <UserInterface userName="User Name" role="admin" />
              :
              <div className="flex space-x-2">
                <Login />
                <Register />
              </div>
            }
        </div>
      </WidthWrapContainer>
    </header>
   );
}
