import { useState } from "react";

import { User } from "entities/User/model";
import Register from "features/Register";
import CustomButton from "shared/ui/Button";
import { UserInterface } from "shared/ui/UserInterface";

import { LoginInterface } from "./LoginInterface";

interface IUserStatusProps {
  user: User | undefined
  onLogOut: VoidFunction
}

export const UserStatus = (props: IUserStatusProps) => {
  const { user, onLogOut: onlogout} = props;
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  }

  if (user && user.nickname?.length) return (
    <UserInterface userName={user.nickname} role={user.role} onLogout={onlogout} />
  )

  return (
    <div>
      <div className="flex space-x-2">
        <>
          <CustomButton buttonText="Login" buttonProps={{ onClick: toggleOpen }} />
          {open && <LoginInterface onToggle={toggleOpen} />}
        </>
        <Register />
      </div>
    </div>
    
  );
}
 