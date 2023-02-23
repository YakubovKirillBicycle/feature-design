import { useDispatch } from "react-redux";

import { UserModel } from "entities/User";
import { Login } from "features";
import Register from "features/Register";
import Logo from "shared/ui/Logo";
import { UserInterface } from "shared/ui/UserInterface";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { headerStyle } from "./ui/style";

export const Header = () => {
  const user = UserModel.userSelector();
  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(UserModel.clearUser())
  }

  const loginSubmitHandle = (userName: string, password: string) => {
    UserModel.getUserAsync(userName, password)(dispatch);
  }

  return (
    <header className={headerStyle}>
      <WidthWrapContainer>
        <div className="flex justify-between">
          <Logo />
          {user.id.length > 0 ? 
            <UserInterface userName={user.nickname} role={user.role} onLogout={logoutHandle} />
            : <div className="flex space-x-2">
                <Login onSubmit={loginSubmitHandle} />
                <Register />
              </div>
          }
        </div>
      </WidthWrapContainer>
    </header>
   );
}
