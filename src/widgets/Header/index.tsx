import { useEffect, useState } from "react";

import { useAppSelector } from "app/helpers/hooks";
import { User } from "entities/User/model";
import { UserActions, useUserDispatch, useUserSelector } from "features/Login2/model";
import Logo from "shared/ui/Logo";
import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { headerStyle } from "./ui/style";
import { UserStatus } from "./ui/UserStatus";


export const Header = () => {
  // const [localUser, setLocalUser] = useState<User | undefined>(undefined)
  const user = useUserSelector((state) => state);
  // const appUser = useAppSelector((state) => state.user);
  const dispatch = useUserDispatch();

  const logoutHandle = () => {
    dispatch(UserActions.clearUser());
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
          <UserStatus user={user} onLogOut={logoutHandle} />
        </div>
      </WidthWrapContainer>
    </header>
   );
}
