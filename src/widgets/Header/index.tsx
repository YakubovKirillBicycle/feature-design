import { useNavigate } from "react-router";

import { UserModel } from "entities/User";
import { UserInterface } from "entities/User/ui/UserInterface";
import {
  AppModel,
  CustomButton,
  GlobalConstant,
  Logo,
  WidthWrapContainer
} from "shared";

import { headerStyle } from "./ui/style";

export const Header = () => {
  const user = UserModel.userSelector();
  const dispatch = AppModel.useAppDispatch();
  const navigate = useNavigate();

  const logoutHandle = () => {
    dispatch(UserModel.clearUser())
  }

  const loginClickHandle = () => {
    navigate(GlobalConstant.APP_NAVIGATOR.LOGIN);
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
