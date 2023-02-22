// import { useAppDispatch, useAppSelector } from "app/helpers/hooks";
import { useDispatch } from "react-redux";

import { UserModel } from "entities/User";
import Logo from "shared/ui/Logo";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { headerStyle } from "./ui/style";
import { UserStatus } from "./ui/UserStatus";

// import Login2 from "features/Login2";

export const Header = () => {
  // const [localUser, setLocalUser] = useState<User | undefined>(undefined)
  const user = UserModel.userSelector();
  // const appUser = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();
  const dispatch = useDispatch();

  const logoutHandle = () => {
    // dispatch(Login2.LoginModel.UserActions.clearUser());
    dispatch(UserModel.clearUser())
  }

  const loginSubmitHandle = (userName: string, password: string) => {
    // dispatch(Login2.LoginModel.UserActions.setUser(user))
    UserModel.getUserAsync(userName, password)(dispatch);
  }

  // useEffect(() => {
  //   // if (user.id?.length > 0) setLocalUser({ ...user })
  //   if (user.id?.length > 0) console.log({...user});
  //   // else setLocalUser(undefined)
  //   // setLocalUser(user)
  //   // console.log(user);
  // }, [user])

  return (
    <header className={headerStyle}>
      <WidthWrapContainer>
        <div className="flex justify-between">
          <Logo />
          <UserStatus
            user={user}
            onLogOut={logoutHandle}
            onSubmit={loginSubmitHandle}
          />
        </div>
      </WidthWrapContainer>
    </header>
   );
}
