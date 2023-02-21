import { useState } from "react";

import { useAppSelector } from "app/helpers/hooks";
import Register from "features/Register";
import Logo from "shared/ui/Logo";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { LoginComponent } from "./ui/Login";
import { headerStyle } from "./ui/style";
import { UserInterface } from "./ui/UserInterface";


export const Header = () => {
  const [isUser, setIsUser] = useState(false);
  const user = useAppSelector((state) => state.user);

  return ( 
    <header className={headerStyle}>
      <WidthWrapContainer>
        <div className="flex justify-between">
          <Logo />
          {
            user.nickname.length ?
              <UserInterface userName={user.nickname} role={user.role} />
              :
              <div className="flex space-x-2">
                <LoginComponent />
                <Register />
              </div>
            }
        </div>
      </WidthWrapContainer>
    </header>
   );
}
