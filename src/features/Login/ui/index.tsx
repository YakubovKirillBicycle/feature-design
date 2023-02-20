import { useState } from "react";

import CustomButton from "shared/ui/Button";

import { LoginInterface } from "./LoginInterface";

export const Login = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <CustomButton buttonText="Login" buttonProps={{ onClick: toggleOpen }} />
      {open && <LoginInterface onToggle={toggleOpen} />}
    </div>
    
  );
}
 