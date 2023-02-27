import { useAppDispatch } from "app/helpers/hooks";
import { UserModel } from "entities/User";
import { Login } from "features";
import Register from "features/Register";
import Logo from "shared/ui/Logo";
import { UserInterface } from "shared/ui/UserInterface";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { headerStyle } from "./ui/style";

export const Header = () => {
  const user = UserModel.userSelector();
  const status = UserModel.userStatusSelector();
  const dispatch = useAppDispatch();

  const logoutHandle = () => {
    dispatch(UserModel.clearUser())
  }

  const loginSubmitHandle = (username: string, password: string) => {
    dispatch(UserModel.getUserAction({username, password}))
  }

  return (
    <header className={headerStyle}>
      <WidthWrapContainer>
        <div className="flex justify-between">
          <Logo />
        
          {status === 'isPending' && <h1>Loading</h1>}
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
