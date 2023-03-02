import { UserModel } from "entities/User";
import { UserInterface } from "entities/User/ui/UserInterface";
import { Login } from "features";
import Register from "features/Register";
import { useAppDispatch } from "shared/model";
import Logo from "shared/ui/Logo";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { headerStyle } from "./ui/style";

export const Header = () => {
  const user = UserModel.userSelector();
  const dispatch = useAppDispatch();

  const logoutHandle = () => {
    dispatch(UserModel.clearUser())
  }

  return (
    <header className={headerStyle}>
      <WidthWrapContainer>
        <div className="flex justify-between">
          <Logo />
          {user.id.length > 0 ? 
            <UserInterface userName={user.nickname} role={user.role} onLogout={logoutHandle} />
            : <div className="flex space-x-2">
                <Login />
                <Register />
              </div>
          }
        </div>
      </WidthWrapContainer>
    </header>
   );
}
