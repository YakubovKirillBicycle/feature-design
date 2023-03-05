import { useNavigate } from "react-router";

import { UserModel } from "entities/User";
import { UserInterface } from "entities/User/ui/UserInterface";
import { useAppDispatch } from "shared/model";
import { APP_NAVIGATOR } from "shared/model/constants";
import CustomButton from "shared/ui/Button";
import Logo from "shared/ui/Logo";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { headerStyle } from "./ui/style";

export const Header = () => {
  const user = UserModel.userSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandle = () => {
    dispatch(UserModel.clearUser())
  }

  const loginClickHandle = () => {
    navigate(APP_NAVIGATOR.LOGIN);
  }

  return (
    <header className={headerStyle}>
      <WidthWrapContainer>
        <div className="flex justify-between">
          <Logo />
          {user.id.length > 0 ? 
            <UserInterface userName={user.nickname} role={user.role} onLogout={logoutHandle} />
            : <div className="flex space-x-2">
                <CustomButton buttonText="Login" buttonProps={{ onClick: loginClickHandle }} />
              </div>
          }
        </div>
      </WidthWrapContainer>
    </header>
   );
}
